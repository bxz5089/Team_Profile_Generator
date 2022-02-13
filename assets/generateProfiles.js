const generateManagerProfile = function (manager) {
    return `
        <div class="card" style="width: 18rem;">
        <img src="https://www.visitphilly.com/wp-content/uploads/2020/12/WilliamPenn_ElevatedAngles19_straight_2200x1237-2200x1237.jpg" class="card-img-top" alt="Philadelphia">
        <div class="card-body">
            <h3>${manager.name}</h3>
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
        </div>
    `;
};

const generateEngineerProfile = function (engineer) {
    return `
        <div class="card" style="width: 18rem;">
        <img src="https://www.visitphilly.com/wp-content/uploads/2020/12/WilliamPenn_ElevatedAngles19_straight_2200x1237-2200x1237.jpg" class="card-img-top" alt="Philadelphia">
        <div class="card-body">
            <h3>${engineer.name}</h3>
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
        </div>
        </div>
    `
};

const generateInternProfile = function (intern) {
    return `
        <div class="card" style="width: 18rem;">
        <img src="https://www.visitphilly.com/wp-content/uploads/2020/12/WilliamPenn_ElevatedAngles19_straight_2200x1237-2200x1237.jpg" class="card-img-top" alt="Philadelphia">
        <div class="card-body">
            <h3>${intern.name}</h3>
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
        </div>
    `
};

generateProfileCards = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManagerProfile(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineerProfile(employee);

            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateInternProfile(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="./style.css">
      
  </head>
  <body>

    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center text-primary" id="teamText">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                <div class="card-group">
                    ${employeeCards}
                </div>
            </div>
        </div>
    </main>
  
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script type="text/javascript" src="script.js"></script>
  
  </body>
  </html> 
  </html> 
`;
}

module.exports = generateProfileCards; 