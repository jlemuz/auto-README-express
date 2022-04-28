const generateRead = (answers) => {
    return `
# ${answers.title}
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}


## Contributing
${answers.contributing}


## Tests

${answers.tests}


## License
${answers.license}


## Questions
${answers.name}
${answers.email}


`;
  };
  
module.exports = generateRead;