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
          console.log('Please enter your description');
          return false;
        }
      }
    },
    //
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'toc',
        message: 'Would You like To Add A Table of Contents? (Check all that apply)',
        choices: ['Project Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'Contributiors', 'Tests', 'Questions']
      },
      {
        type: 'input',
        name: 'How to Install',
        message: 'Provide a description of how to install project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
  
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};


//this asks the questions in order 

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
    // will be uncommented in lesson 4
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });
