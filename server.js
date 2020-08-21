const generateMarkdown = (data) => {
    return `

# Table of Content

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

module.exports = generateMarkdown;