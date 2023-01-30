// a high-quality, professional README.md is generated with the title of my project and 
// sections.....
  //Title
  // Description, 
  // Table of Contents, 
  // Installation, 
  // Usage, 
  // Contributing, 
  // Tests, 
  // License, 
  // Questions(Link to github and email for additional questions)


import inquirer from 'inquirer';
import fs from 'fs';
const {generateMarkdown} = ('../utils/generateMarkdown.js');

const questions = [
  {
  type: 'input',
  message: 'Project Title: ',
  name: 'title'
  },
  {
  type: 'input',
  message: 'Description of the Project: ',
  name: 'descript',
  },
  {
  type: 'input',
  message: 'Installation Instructions: ',
  name: 'install',
  },
  {
  type: 'input',
  message: 'How to Use Application: ',
  name: 'use',

  },
  {
  type: 'input',
  message: 'Contributions: ',
  name: 'contri',
  },
  {
  type: 'input',
  message: 'Tests: ',
  name: 'tests',
  },
  {
    type: 'list',
    message: 'Liscense on Repo: ',
    name: 'liscense',
    choices: ["The MIT License", "GNU License" , "Apache License" , "N/A"]

  },
  {
  type: 'input',
  message: 'What is your github username: ',
  name: 'user',
  },
  {
  type: 'input',
  message: 'What is your email address project related questions: ',
  name: 'email',

  }
];


questions()
// TODO: Create a function to write README file
// function writeToFile(fileName, data) 
function writeToFiler(response) {
    fs.writeFile('./generatedREADME.md', response, err =>
    err ? console.error(err) : console.log('Wrote File!')
);
}

// TODO: Create a function to initialize app
function init(questions) {
  inquirer.prompt(
    [
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'descript',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'install',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'use',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contri',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'tests',
    },
    {
      type: 'list',
      message: questions[6],
      name: 'liscense',
      choices: ["The MIT License", "GNU License" , "Apache License" , "N/A"]
    },
    {
      type: 'input',
      message: questions[7],
      name: 'user',
    },
    {
      type: 'input',
      message: questions[8],
      name: 'email',
    },
  ])
  .then((response) =>
      console.log(response)
  );
}

// Function call to initialize app
init();
module.exports()
