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


const inquirer = require('inquirer');
const fs =require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
//debating trying to use import and a newer verson of inquirer but issues with generated markdown as a common js and not module gives issues
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
  name: 'license',
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log('Wrote File!')
);
};

function init() {
  inquirer.prompt(questions)
  .then(function(respo){
      console.log(respo)
      writeToFile("./generated/README.md", generateMarkdown(respo))
  });
};

init();