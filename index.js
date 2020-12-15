const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');



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

    fs.writeFileSync(fileName, data, function(err) {
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

