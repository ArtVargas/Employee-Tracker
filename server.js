const inquirer = require("inquirer");
const mysql = require("mysql2")

// This will create a MYSQL connection //

const connection = mysql.createConnection({
    host: "local host",
    port: "",
    user: "root",
    password: "",
    database: "employeeTracker_db",
    });

    // Connect to the database //
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
    
    // Start the Application //
    start ();
    });
    
    // This will be the function to start the employee tracker application //

    function start() {
        inquirer
        .prompt({
        type:"list",
        name:"action",
        message:"What would you like to do?",
        choices: [
        "View all departments",
        "View all the roles",
        "View all the employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Add a manager",
        "Update an employee role",
        "View Employee Department",
        "Exit",
        ],
        })
        .then((answer) => {
            switch (answer.action) {
            case "View all departments":
            viewAlldepartments();
            break;
            case "View all roles":
                viewAllRoles();
                break;
                case "View all employees":
                viewAllEmployees();
                break;
                case "Add a department":
                addDepartment();
                break;
                case "Add a role":
                addRole();
                break;
                case "Add an employee":
                addEmployee();
                break;
                case "Add a manager":
                addManager();
                break;
                case "Update an employee role":
                uodateEmployeeRole();
                break;
                case "View employees by department":
                viewEmployeesByDepartment();
                break;
                case "Exit":
                connection.end();
                break;
                
                }
                });
                }
          
                
// This Will be a function to view all the departments //

function viewAllDepartments() {
    const query = "SELECT * FROM departments";
    connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    // Restart the application //
    start();
    });
    
    }
    
//Function will allow you to view all the roles //
function ViewAllRoles () {
    const query= "SELECT roles.title,roles.id, departments.department_name,"; //Can change and update departments id later//
    connection.query(query, (err,res) => {
    if (err)throw err;
    console.table(res);
    //restart the application
    start();
    });
    }

    // Function to view all the employees //
function viewAllEmployees(){
    const query= `
    SELECT e.id, e.first_name,e.last_name, r.title, d.department_name, CONCAT(m.first_name, ' ', m.lastname) AS manager_name
    FROM employee e
    LEFT JOIN roles r ON e.role_id =r.id
    LEFT JOIN departments d on r.department_id= d.id
    LEFT JOIN employee m on e.manager_id =m.id;
    `;
    connection.query(query, (err,res) => {
    if (err) throw err;
    console.table(res);
    
    // Restart the application //
    start();
    });
    }


// Function to add a department //
function addDepartment () {
    inquirer
    .prompt ({
    type:"input",
    name: "name",
    message: "Enter the name of the new department:",
    })
    .then((answer) => {
    console.log (answer.name);
    const query= `INSERT INTO departments (department_name) VALUES ("${answer.name}")`;
    connection.query(query, (err, res) => {
    if (err) throw err;
    console.log (`Added department ${answer.name} to the database!`);
    
    // Restart the application //
    start();
    console.log(answer.name);
    });
        });
    
    }


// Close the connection when the application exists //
process.on("exit",() => {
	connection.end();
});