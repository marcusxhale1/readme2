const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./readMe-Template');

//this is asking the user certain questions 

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a title');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your description');
          return false;
        }
      }
    },
    


    //
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter installation instructions');
          return false;
        }
      }
    },

    //

    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter usage information');
          return false;
        }
      }
    },


    //
    {
      type: 'input',
      name: 'contributors',
      message: 'Please enter contributors of project',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter contributors');
          return false;
        }
      }
    },
    //
    {
      type: 'input',
      name: 'tests',
      message: 'Any Tests?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter any tests');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your Github Username? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please provide me with your github user name!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your email adress? (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('You need to enter an email address!');
          return false;
        }
      }
    },
  ]);
};

const promptProject = portfolioData => {
};


//this asks the questions in order 

promptUser()
  .then(promptUser)
  .then(portfolioData => {
    console.log(portfolioData);
    const pageHTML = generatePage(portfolioData);
    fs.writeFile('./README.md', pageHTML, err => {
    if (err) throw new Error(err);
      console.log('Page created! Check out your directory to see it!');
     });
  });
