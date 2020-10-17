//Declared Variables
const fs = require("fs"); 
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
async function genrateReadMe(){
    const questions= [
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
        message: "How would you use this project?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contribution",
    },
    {
        type: "input",
        message: "How would you test this project?",
        name: "Tests",
    },
    {
        type: "list",
        message: "Select License",
        name: "License",
        choices: [
            "Apache-2.0",
            "MIT",
            "BSD-3-Clause",
            "none",
        ]
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
    ];

    // function to write README file
const answers = await inquirer.prompt(questions);
//console.log(answers)

const README = `
# ${answers.Title}

#Table of Contents

-[Description]
-[Installation]
-[Usage]
-[Contribution]
-[Test]
-[License]
-[Questions]

##Description:
${answers.Description}

##Installation:
${answers.Installation}

##Usage:
${answers.Usage}

##Contribution:
${answers.Contribution}

##Test:
${answers.Tests}

##License:
${answers.License}

##Questions:
Any questions, Please visit addtional pages:
##Github Username:
(https://github.com/${answers.Username})

##Email:
${answers.Email}

`;
//console.log(README)

// function to initialize program
await writeFileAsync("README2.md",README);
}
// function to call
genrateReadMe();
