const inquirer = require("inquirer")
const fs = require("fs")
const manager = require("./public/manager")
const engineer = require("./public/engineer")
const intern = require("./public/intern")
const employees = []

function init() {
    generateMarkdownBegin();
    addPerson();
}

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
                .then(function ({moreInfo, anotherOne}) {
                    let newPerson;
                    if (role === "Manager") {
                        newPerson = new manager(name, id, email, moreInfo);
                    } else if (role === "Engineer") {
                        newPerson = new engineer(name, id, email, moreInfo);
                    } else {
                        newPerson = new intern(name, id, email, moreInfo);
                    }
                    employees.push(newPerson);
                    generateMarkdownMid(newPerson)
                        .then(function () {
                            if (anotherOne === "yes") {
                                addPerson();
                            } else {
                                generateMarkdownEnd();
                            }
                        })

                })
        })
};

function generateMarkdownBegin() {
    const html = `
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
    fs.writeFile("index.html", html, function (error) {
        if (error) {
            console.log(error)
        }
    });

}

function generateMarkdownMid(data) {
    return new Promise(function (resolve, reject) {
        const name = data.getName();
        const id = data.getId();
        const email = data.getEmail();
        const role = data.getRole();
        let stuff = "";
        if (role === "manager") {
            const officeNumber = data.getOfficeNumber();
            stuff = `<div class = "col-6">
       <div class="card" style="width: 18rem;">
       <div class="card-body card text-white bg-success mb-3">
         <h5 class="card-title">${name}<br />Manager</h5>
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">ID: ${id}</li>
         <li class="list-group-item">Email: <a href = "mailto: ${email}"> ${email}</a></li>
         <li class="list-group-item">Office number: ${officeNumber}</li>
       </ul>
     </div>
     </div>`;
        } else if (role === "engineer") {
            const github = data.getGithub();
            stuff = `<div class = "col-6">
    <div class="card" style="width: 18rem;">
    <div class="card-body card text-white bg-success mb-3">
      <h5 class="card-title">${name}<br />Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href = "mailto: ${email}"> ${email}</a></li>
      <li class="list-group-item">Github:<a href="http://www.github.com/${github}"> github.com/${github}</a></li>
    </ul>
  </div>
  </div>`;
        } else {
            const school = data.getSchool();
            stuff = `<div class = "col-6">
    <div class="card" style="width: 18rem;">
    <div class="card-body card text-white bg-success mb-3">
      <h5 class="card-title">${name}<br />Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: <a href = "mailto: ${email}"> ${email}</a></li>
      <li class="list-group-item">School: ${school}</li>
    </ul>
  </div>
  </div>`
        }
        console.log("Team member added.");
        fs.appendFile("index.html", stuff, function (error) {
            if (error) {
                return reject(error);
            }
            return resolve();
        });
    });
}



function generateMarkdownEnd() {
    const html = `</div>
    </div>
    </body>
    </html>`;

    fs.appendFile("index.html", html, function (error) {
        if (error) {
            console.log(error);
        };
    });
}


init();
