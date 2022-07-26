const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Include packages needed for this application
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information: '
    },
    {
        type: 'list',
        name: 'license',
        message: "Project License: ",
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Contribution Guidlines: '
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can a user test your software?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your Github Username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your Email Address: '
    },

];
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
