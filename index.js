const inquirer = requirer('inquirer');
const fs = require('fs');
const util = require('utill');

const writeFileAsync = util.promisfy(fs.writeFile);

// function that crats the array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your Project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions fos this project. Write NONE if no instructions.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How would you like your application to be used?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who contributed on this project?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'What are the Test Instructions??',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'Please select a license.',
            choices: [
                'Apache',
                'MIT',
                'ISC',
                'GNU GPLv3'
            ],
            name: 'license'
        }
    ])
}
