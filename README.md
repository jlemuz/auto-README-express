# auto-README-express

## Description
This application utilizes NodeJS and the Inquirer npm package to take user input and generate a professional README file.
In addition to Inquirer, the fs.writeFile command is also used to create the file.

## Logic Implemented
In the index.js file, the challenging part was generating the License badge.
In order to accomplish that, I created an array with the License name and corresponding URL image.
Then, I used the filter and map array functions to generate the appropriate URL to the README template.
Additionally, the table of contents directs users to the correct index location and the github link provides a URL link to the user's github profile.

## Demo

<img src="./src/Demo.gif" alt="README demo">