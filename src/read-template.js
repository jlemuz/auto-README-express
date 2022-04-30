//List of badges and corresponding URLs
let badges = [{name: "apache-2.0", url:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
           {name: "mit", url:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
           {name: "isc", url:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"},
           {name: "gpl", url:" [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"},
           {name: "cc-by-4.0", url:" [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"}
          ]


//Generates the required URL for the license selected
function renderLicenseBadge(license) {
   return badges.filter(a=> a.name==license).map(b=> {return b.url});
}

//Generates the README based on values passed by the user
const generateRead = (answers) => {
    return `
# ${answers.title} ${renderLicenseBadge(answers.license)} 
    
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
This application is licensed under ${answers.license}

## Questions
Please reach me through github: https://github.com/${answers.name}


Or contact me by email at: ${answers.email}

`; 
 };
  
module.exports = generateRead;