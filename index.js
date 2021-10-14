const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, location, github, email, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Profile Page</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3><span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">LinkedIn URL: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const questions =[
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    
  },
  {
    type: 'input',
    message: 'Where are you from?',
    name: 'location',
    
  },
  {
    type: 'input',
    message: 'Enter your GitHub Username:',
    name: 'github',

  },
  {
    type: 'input',
    message: 'Enter your Email address:',
    name: 'email',

  },
  {
    type: 'input',
    message: 'Enter your LinkedIn URL:',
    name: 'linkedin',
    
  },
]

inquirer
  .prompt(questions)
  .then((response) => {
    const htmlContent = generateHTML(response);

    fs.writeFile('index.html', htmlContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
  
  // Use writeFileSync method to use promises instead of a callback function
  
  // const init = () => {
  //   promptUser()
  //     .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
  //     .then(() => console.log('Successfully created index.html'))
  //     .catch((err) => console.error(err));
  // };