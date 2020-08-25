const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');

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




// function to initialize program
const init = () => {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        axios
          .get('https://api.github.com/users/' + answers.username)
          .then(response => {
            console.log(response);
            var imageURL = response.data.avatar_url;
            answers.image = imageURL;
            console.log(imageURL);
            fs.writeFile('README.md', generateMarkdown(answers), (err) => {
              if (err) {
                throw err;
              }
            });
          });
      });
}
// function call to initialize program
init();
