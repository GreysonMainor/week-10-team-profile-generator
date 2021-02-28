const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown")
const { ENGINE_METHOD_RAND } = require("constants")
const employees = []

function addPerson() {
    inquirer.prompt([
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

    ])
        .then(function ({ name, id, email, role }) {
            let moreInfo = "";
            if (role === "Manager") {
                moreInfo = "Office number";
            } else if (role === "Engineer") {
                moreInfo = "Github Username";
            } else {
                moreInfo = "school name"
            }
            inquirer.prompt([{
                type: "input",
                message: `Please enter ${moreInfo}`,
                name: "moreInfo"
            },
            {
                type: "list",
                message: "Add another Member?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "anotherOne"
            }])
            .then(function({moreInfo, anotherOne}){
                let newPerson;
                if (role === "Manager") {
                    newPerson = new Manager(name, id, email, moreInfo);
                } else if (role === "Engineer"){
                    newPerson = new Engineer(name, id, email, moreInfo);
                } else {
                    newPerson = new Intern(name, id, email, moreInfo);
                }
                   employees.push(newPerson);

                
            })
        })
};



function init() {
        addPerson();
}

init();