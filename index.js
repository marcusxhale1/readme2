// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }

         {
        type: 'checkbox',
        name: 'toc',
        message: 'Would You like To Add A Table of Contents? (Check all that apply)',
        choices: ['Project Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'Contributiors', 'Tests', 'Questions']
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();