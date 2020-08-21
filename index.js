const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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
        },
        {
            type: 'inpute',
            message: ' Whose Credits is this work?',
            name: 'credit'
        },
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email Address',
            name: 'email'
        },
    ]);
}

function generateMarkdown(response) {
    return `
# ${response.title}

# Table of Contense

    - [Description](#description)
    - [Installation](#installation)
    - [usage](#usage)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)

    ## Description:
    ![License](https://img.sheilds.io/bagde/License-${response.licnese}-blue.svg lLicense Bagde)

        ${response.description}
    ## Installation:
        ${response.installation}
    ## Usage:
        ${response.usage}
    ## Contributing:
        ${response.contribution}
    ## Test:
        ${response.test}
    ## Credits:
        ${response.credit}  
    ## License:
        For more infomation about the license, click on the link below.
        
    - [License](https://opensource.org/licenses/${response.license})  
    
    ## Questions:
        For questions about the Generator you can go to my GitHub page at the following Link:

    - [GitHub Profile](https://github.com/${response.username})
    
    For additional questions please reach out to my email at: ${response.email}.
    `;

}

//Function to intialize program
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync('README.md', readMe);
        console.log('Success');
    } catch (err) {
        console.log(err);
    }
}

//function call to intialize program
init();
