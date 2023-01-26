// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
        'What is you title',
        'What is your github Profile Link'
];

inquirer.prompt(
    [
    {
      type: 'input',
      message: questions[0],
      name: 'Title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'password',
    },
    {
      type: 'input',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    // response.confirm === response.password
      console.log(response)
  );
// TODO: Create a function to write README file
// function writeToFile(fileName, data) 
function writeToFiler(response) {
    fs.writeFile('log.txt', `Title = ${Title}\n`, (err) =>
    err ? console.error(err) : console.log('Wrote File!')
);
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
