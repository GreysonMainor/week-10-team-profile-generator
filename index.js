const inquirer = require("inquirer")
const fs = require("fs")
const manager = require("./public/manager")
const engineer = require("./public/engineer")
const intern = require("./public/intern")
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
                .then(function ({ moreInfo, anotherOne }) {
                    let newPerson;
                    if (role === "Manager") {
                        newPerson = new Manager(name, id, email, moreInfo);
                    } else if (role === "Engineer") {
                        newPerson = new Engineer(name, id, email, moreInfo);
                    } else {
                        newPerson = new Intern(name, id, email, moreInfo);
                    }
                    employees.push(newPerson);
                    generateMarkdownMid(newPerson)
                    .then(function(){
                        if (anotherOne === "yes") {
                            addPerson();
                        } else {

                        }
                    })

                })
        })
};

function generateMarkdownBegin() {
    const html = `< !DOCTYPE html >
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <title>Team Profile Generator</title>
  </head>
   <body>
   <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
  <span class="navbar-brand mb-0 h1">
  <h1>My Team</h1>
  </span>
  </nav>
  <div class = "container">
  <div class="row">`;
  fs.writeFile("index.html", html, function(error){
      if (err) {
          console.log(error)
      }
  });
  console.log("Begin");
}

function generateMarkdownMid(data) {
return new Promise(function(resolve, reject){
   
})
}

function generateMarkdownEnd(){
    const html = `</div>
    </div>
    </body>
    </html>`;
}
function init() {
    addPerson();
    generateMarkdownEnd();
}

init();