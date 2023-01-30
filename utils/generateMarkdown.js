// sections i need.....
  //Title
  // Description, 
  // Table of Contents, 
  // Installation, 
  // Usage, 
  // Contributing, 
  // Tests, 
  // License, 
  // Questions(Link to github and email for additional questions)

//Badging Function
const index = require('../index.js')
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'The MIT License'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if(license === 'GNU License'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else {
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if(license === 'The MIT License'){
    link = 'https://choosealicense.com/licenses/mit/'
  }else if(license === 'GNU License'){
    link = 'https://choosealicense.com/licenses/mit/';
  }
  else {
    link = 'https://choosealicense.com/licenses/mit/';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
  return `# ${data.title}

  ##${renderLicenseLink(data.license)} ${renderLicenseBadge(data.license)}
  ##${renderLicenseLink(data.license)}

  ## Table of Contents: 
  - [Description](#descript)
  
  ## Description:
  ${data.description}
`;
}

module.exports = generateMarkdown;
