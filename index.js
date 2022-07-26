const inquirer = require("inquirer");
//const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache'];

// TODO: Include packages needed for this application
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the information on how to use this project:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "./display/README.md";
    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log("success!");
    });
}

// TODO: Create a function to initialize app
function generator() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}
generator();