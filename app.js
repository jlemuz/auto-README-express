const fs = require('fs');
const generateRead = require('./src/read-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;




fs.writeFile('README-gen.md', generateRead(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
