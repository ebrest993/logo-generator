
const inquirer = require('inquirer');
const fs = require('fs');

const generateSVG = ({ text, textcolor, shape, shapecolor }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${shapecolor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
</svg>
   ${shape}
</body>
</html>`;

const questions = () => inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter a maximum of three characters',
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'Enter a color (or a hexidecimal code) for the text',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'What shape would you like?',
      choices: [
      'Triangle',
      'Circle',
      'Square',
      ]
    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'Enter a background color (or a hexidecimal code) for the shape',
    },
  ])
  questions()
    .then((answers) => {
      const svgLogoContent = generateSVG(answers);
      fs.writeFileSync('./lib/logo.svg', svgLogoContent)
    })
  .then(() => 
    console.log('Generated logo.svg!')
  )
  .catch(err => console.log(err));