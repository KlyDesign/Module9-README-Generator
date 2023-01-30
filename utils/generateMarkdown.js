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
  if(license == 'The MIT License'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)'
  }else if(license == 'GNU License'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license == 'Apache License'){
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else{
    badge = '';
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if(license == 'The MIT License'){
    link = 'https://www.mit.edu/~amini/LICENSE.md'
  }else if(license == 'GNU License'){
    link = 'https://www.gnu.org/licenses/';
  }else if(license == 'Apache License'){
    link = 'https://www.apache.org/licenses/LICENSE-2.0';
  }
  else {
    link = 'No license pick one: https://choosealicense.com/licenses/';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
  if(license == 'N/A'){
    section = "";
  }else{
    section = ('License: ', license)
  }
  return section;
}

// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
  return `# **${data.title}** ${renderLicenseBadge(data.license)} 

  ## Description
  ####  ${data.descript}


  ## Table of Contents: 
  ### [Description](#description)
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributions](#contributions)
  ### [Tests](#tests)
  ### [License](#license)
  ### [Questions](#questions)

  ## Installation
  ### ${data.install}

  ## Usage
  ### ${data.use}

  ## Contributions
  ### ${data.contri}

  ## Tests
  ### ${data.tests}

  ## License
  ### ${renderLicenseSection(data.license)}  ${renderLicenseBadge(data.license)} 
  #### ${renderLicenseLink(data.license)}
  

  ## Questions
  #### Github Profile: https://github.com/${data.user}
  #### Contact Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
