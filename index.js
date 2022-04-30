// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateRead = require('./src/read-template.js');

//Promts users a list of questions
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    },

    {
      type: 'input',
      name: 'description',
      message: 'What is the description?'
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions'
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information'
    },

    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contributing guidelines'
    },
      {
    type: 'input',
    name: 'tests',
    message: 'Please provide any testing instructions'
  },

  {
      type: 'list',
      name: 'license',
      message: 'What licenses did you use for this project? (Check all that apply)',
      choices: ['apache-2.0', 'mit', 'isc', 'gpl', 'cc-by-4.0']
    },

    {
      type: 'input',
      name: 'name',
      message: 'What is tyour GitHub username?'
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    }]
  );
};



// TODO: Create a function to initialize app
function init() {
  promptUser()
  .then(answers => {
    const README = generateRead(answers);
    fs.writeFile('auto-README.md', README, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out auto-README.md in this directory to see it!');
      });
});

}

// Function call to initialize app
init();
