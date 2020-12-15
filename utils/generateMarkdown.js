let createBadge = (license) => {
   if (license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
   } else if (license === "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
   } else if (license === "GNU") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
   } else if (license === "BSD") {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
   } else if (license === "Mozilla") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
   } else {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
   }
};

function generateMarkdown(data) {
   return `
  
## ${data.projectTitle}
    
## Table of Content
    *[description](#description)
    *[installation](#installation)
    *[usage](#usage)
    *[licenses](#licenses)
    *[contribution](#contribution)
    *[test](#test)
    *[username](#username)
    *[profile](#profile)


## Username:
        ${data.username}
  
## Description:
        ${data.description}
## Technology
        ${data.technology}
   
## Installation:
        ${data.installation}
   
## Usage:
        ${data.usage}
 
## Licenses:
        ${createBadge(data.license)}
  
## Contribution:
        ${data.contribution}
   
## Test:
        ${data.test}
   
## Email:
        ${data.email}
    
## Profile:
        ${data.questions}
   
    `;
}



module.exports = generateMarkdown;