// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateRead = require('./src/read-template.js');

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
      type: 'checkbox',
      name: 'license',
      message: 'What licenses did you use for this project? (Check all that apply)',
      choices: ['apache-2.0', 'mit', 'lppl-1.3c', 'gpl', 'cc-by-4.0', 'artistic-2.0']
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


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {
  promptUser()
  //.then(answers => console.log(answers))
  .then(answers => {
    const READ = generateRead(answers);
    fs.writeFile('READ-inq.md', READ, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out index.html in this directory to see it!');
      });
});

}

// Function call to initialize app
init();
