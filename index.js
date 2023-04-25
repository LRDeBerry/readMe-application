const inquirer = require(`inquirer`);
const fs = require(`fs`);

const generateHTML = ({ name, descritpion, usage, github, credits, communication }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>ProReadMe</title>
</head>
<body>
<header class="p-5 mb-4 header bg-light">
    <div class="container">
        <h1 class="display-4">Hello there, my name is ${name}</h1>
        <h2>Description</h2>
        <p>${descritpion}.</p>
        <h2>Table Of Contents</h2>
        <ul>
        <li>
        <a href="#github">Github</a>
        </li>
        <li>
        <a href=>"#usage">Usage</a>
        </li>
        <li>
        <a href="credits">Credits</a>
        </li>
        <li>
        <a href="communication">Communication</a>
        </li>
        </ul>
        <h2 id="github">Github</h2>
        <p>My Github Link to all my repositories is ${github}</p>
        <h2 id="usage">Usage</h2>
        <p>${usage}</p>
        <h2 id="credits">Credits</h2>
        <p>${credits}</p>
        <h2 id="communication">Communication</h2>
        <p>You can reach me ${communication}</p>
    
</body>
</html>`;


inquirer
    .prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is Your Name?`
        },
        {
            type: `input`,
            name: `descritpion`,
            message: `What kind of project are you building?`
        },
        {
            type: `input`,
            name: `usage`,
            message: `How do you use this project?`
        },
        {
            type: `input`,
            name: `github`,
            message: `What is your GitHub repository URL?`
        },
        {
            type: `input`,
            name: `credits`,
            message: `Who all worked on this project?`
        },
        {
            type: `checkbox`,
            name: `communication`,
            message: `What is your preferred method of communication?`,
            choices: [`Email`, `Text`, `Call`]
        },

    ])
    .then((answers) => {
        console.log(answers);
        fs.writeFile(`readMePro.md`, generateHTML(answers), (err) => {
        if (err) return (err)
        console.log(`File Created Success..`);
        });
    });