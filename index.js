const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown")
const employees = []

const questions = [
    {
        type: "input",
        message: "Please input your name.",
        name: "name"
    },
    {
        type: "input",
        message: "Please input your ID.",
        name: "id"
    },
    {
        type: "input",
        message: "Please input your Email address.",
        name: "email"
    },
    {
        type: "list",
        message: "Select a role for your user.",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    
];

function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data, function(err) {
        if (err){
            return console.log(err);
        } else
       return console.log ("SUCCESS")
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("index.html", generateMarkdown(data));
    })
 }

 init();