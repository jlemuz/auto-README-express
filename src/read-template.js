let badges = [{name: "apache-2.0", url:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`},
           {name: "mit", url:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
           {name: "lppl-1.3c", url:"https://licensebuttons.net/l/zero/1.0/80x15.png"},
           {name: "gpl", url:"https://img.shields.io/badge/License-GPLv3-blue.svg"},
           {name: "cc-by-4.0", url:"https://licensebuttons.net/l/by/4.0/80x15.png"}
          ]


function renderLicenseBadge(license) {
  badges.filter(a=> a.name==license).map(i=> {return i.url})

}

const generateRead = (answers) => {
    return `
# ${answers.title} ${renderLicenseBadge(answers.license)} [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

${answers.license}
    
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
Please reach me through github: ${answers.name}
Or contact me by email at: ${answers.email}


`;
console.log(badges);
  };
  
module.exports = generateRead;