const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

const generateRead = (name, github)=>{
    return `The name is: ${name}
    plus gh ${github}`
}

const generatePage = (name, github) => {
    return `# ${name}
# ${github}
    `;
  };
  


fs.writeFile('README-gen.md', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
