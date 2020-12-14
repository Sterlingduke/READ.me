const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

let generateMarkdown = require('./generateMarkdown');


const questions = [
    
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {   
            type: "checkbox",
            name: "technology",
            message: "Chose the technology used for this project: ",
            choices: [
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "NODE.js",
                "PYTHON",
                "RUBY",
                "Open"
            ]
        },

        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Chose the license for this project: ",
            choices: [
                "MIT",
                "Apache",
                "GNU",
                "BSD",
                "Mozilla",
                "Open"
            ]
        },
        
        {
            type: "input",
            name: "contribution",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "test",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ];


// readme file function

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Wow! you kinda did a README.md")
        }
    })

}

// function to start program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            
            console.log(data)

        })

}

init();

// 
    // const Badge = (licenses) => {
    //     if (license === "MIT") {
    //       return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    //     } else if (license === "Apache") {
    //       return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    //     } else if (license === "GNU") {
    //       return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
    //     }else if (license === "BSD") {return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    //     }else if (license === "Mozilla") {return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    //     }else {
    //       return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    //     }
    //   };