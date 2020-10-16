const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user

inquirer.prompt([
    {
        type: "input",
        message: "Name of title?",
        name: "Title",
    },
    {
        type: "input",
        message: "What is your project about?",
        name: "Description",
    },
    {
        type: "input",
        message: "What do you have to install for this project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "",
        name: "Usage",
    },
    {
        type: "input",
        message: "",
        name: "Contributing",
    },
    {
        type: "input",
        message: "",
        name: "Tests",
    },
    {
        type: "input",
        message: "",
        name: "",
    },
    {
        type: "input",
        message: "What is your Github?",
        name: "Username",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email",
    },
])
    .then(function (answers) {
        console.log(answers);
    })


// function to write README file
function generateReadMe(answers) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
