// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    license = license.split(" ").join("%20")
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
  return ""
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License 
    
    This project is licensed under ${license} license.`
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Contributors](#contributors)
* [Questions](#questions)

## Installation
To install run the following command: ${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Tests
To run test run the following command: ${data.test}

## Contributors
These people helped complete this project: ${data.contributing}

## Questions
For any questions reach out to me via the following methods: 
* Github: [${data.github}](https://github.com/${data.github})
* Email: [${data.email}](mailto:${data.email})
* LinkedIn: [${data.linkedin}](https://www.linkedin.com/in/${data.linkedin}/)

`;
}

module.exports = generateMarkdown;
