const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateProfiles = require('./assets/generateProfiles');
const outputDir
const outputPath

const teamMembers = []; 

const createManager = () => {
  resolve(inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
      validate: inputName => {
        if (inputName) {
          return true;
        } else {
          console.log('Please enter a name!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'What is your ID?',
      name: 'id',
      validate: inputId => {
        if (inputId) {
          return true;
        } else {
          console.log('Please enter a ID!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
      validate: inputEmail => {
        if (inputEmail) {
          return true;
        } else {
          console.log('Please enter a email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'What is your office number?',
      name: 'officeNumber',
      validate: inputOfficeNumber => {
        if (inputOfficeNumber) {
          return true;
        } else {
          console.log('Please enter a office number!')
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
  })
  );
};

const promptMenu = () => {
  resolve(inquirer.prompt([
    {
      type: 'list',
      message: 'Who would you like to add to your team?',
      name: 'menu',
      choices: ['Add engineer', 'Add intern', 'Complete building team']
    }])
    .then(userChoice => {
      switch (userChoice.menu) {
        case 'Add engineer':
          promptEngineer();
          break;
          case 'Add intern':
            promptIntern()
            break;
            default:
              bulidTeam();
      }
    })
  )
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the engineer's name?",
      name: 'name',
      validate: inputName => {
        if (inputName) {
          return true;
        } else {
          console.log('Please enter a name!')
          return false;
        }
      }    
    },
    {
      type: 'input',
      message: "What is the engineer's ID?",
      name: 'id',
      validate: inputId => {
        if (inputId) {
          return true;
        } else {
          console.log('Please enter a ID!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What is the engineer's email?",
      name: 'email',
      validate: inputEmail => {
        if (inputEmail) {
          return true;
        } else {
          console.log('Please enter a email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What is engineer's GitHub username?",
      name: 'gitHub',
      validate: inputGitHub => {
        if (inputGitHub) {
          return true;
        } else {
          console.log('Please enter a GitHub username!')
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub);
    teamMembers.push(engineer);
    promptMenu();
  })
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the intern's name?",
      name: 'name',
      validate: inputName => {
        if (inputName) {
          return true;
        } else {
          console.log('Please enter a name!')
          return false;
        }
      }    
    },
    {
      type: 'input',
      message: "What is the intern's ID?",
      name: 'id',
      validate: inputId => {
        if (inputId) {
          return true;
        } else {
          console.log('Please enter a ID!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What is the intern's email?",
      name: 'email',
      validate: inputEmail => {
        if (inputEmail) {
          return true;
        } else {
          console.log('Please enter a email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "What is intern's school?",
      name: 'school',
      validate: inputSchool => {
        if (inputSchool) {
          return true;
        } else {
          console.log('Please enter a school name!')
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    promptMenu();
  })
};

const buildTeam = () => {
  if (!fs.existsSync(OUTOUT_DIR)) {
    fs.mkdirSync(OUTOUT_DIR)
  }
  fs.writeFileSync(outputPath, generateProfiles(teamMembers), 'utf-8');
};

createManager();



  