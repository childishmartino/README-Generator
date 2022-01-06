// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How can people use this?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What is this project licensed under?',
        name: 'license',
        choices: [
            "ISC",
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None",
        ]
    },
    {
        type:'input',
        message: "Who contributed to this?",
        name: 'contributing'
    },
    {
        type:'input',
        message: "Github Username?",
        name: 'github'
    },
    {
        type:'input',
        message: "Email address?",
        name: 'email'
    },
    {
    type:'input',
    message: "What is your LinkedIn Username",
    name: 'linkedin'
    },
    {
        type:'input',
        message: "How do you run tests?",
        name: 'test'
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log('Generating README')
        writeToFile('README.md', generateMarkdown({ ...response }))
    })
}

// Function call to initialize app
init();
