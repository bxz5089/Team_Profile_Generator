const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = []; 

const createManager = new Promise(function (resolve, reject) {
  resolve(inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where is your ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Where is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your office number?',
      name: 'officeNumber',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'LinkedIn',
    }, 
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'GitHub',
    },
  ])
)});


profile.then(function(data){
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>HTMLProfiles</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="./style.css">
      
  </head>
  <body>
      
    <div class="row">
        <div class="d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
            <img src="https://www.visitphilly.com/wp-content/uploads/2020/12/WilliamPenn_ElevatedAngles19_straight_2200x1237-2200x1237.jpg" class="card-img-top" alt="Philadelphia">
                <div class="card-body">
                <div class="profileName">${data.name}</div>
                <div class="profileLocation">${data.location}</div>
                <div class="profileBio">${data.bio}</div>
                <div class="profileLinkedIn">${data.LinkedIn}</div>
                <div class="profileGitHub">${data.GitHub}</div>
                </div>
            </div>
        </div>
    </div>
  
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script type="text/javascript" src="script.js"></script>
  
  </body>
  </html> 
  `;

  fs.writeFile('index.html', html, function (err) {
      if (err) {
          return console.log(err);
      }

      console.log('Success!');
  });
})

//fs for writing to the file system

fs.appendFile('newProfiles.txt', 'New Profile', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  