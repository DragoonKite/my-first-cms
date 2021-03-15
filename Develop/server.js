const express = require('express');
const connection = require('./db/database');
const fetch = require('node-fetch');
const inquirer = require('inquirer')

const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');

//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


//Listener
connection.on('connect', () =>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        startApp();
    });
});

const startApp = function() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?',
            choices: [ new inquirer.Separator(), "View all departments.", "View all roles.", "View all employees.", "Add a department.", "Add a role.", "Add an employee.", "Update an employee's role.", "Exit.", new inquirer.Separator()
            ],
            default:0
        }
    ).then(({selection}) => {
        if(selection === "View all departments."){
            connection.query(`SELECT * FROM department`, function (err, res){
                if (err) throw err;
                console.table(res)
            });
        }
        else if(selection === "View all roles."){
            connection.query(`SELECT * FROM companyRole`, function (err, res){
                if (err) throw err;
                console.table(res)
            });
        }
        else if(selection === "View all employees."){
            connection.query(`SELECT * FROM employee`, function (err, res){
                if (err) throw err;
                console.table(res)
            });
        }
        else if(selection === "Add a department."){
            addDepartment();
        }
        else if(selection === "Add a role."){
            addRole();
        }
        else if(selection === "Add an employee."){
            addEmployee();
        }
        else{
            throw "Exit"       
        }
    }).catch (error => {
        if (error === "Exit"){
            console.log("Goodbye")
        }
    })
};

const addDepartment = function(){
    inquirer.prompt({
        type: 'text',
        name: 'depName',
        message: "Please enter the name of the new department.",
        validate: depNameInput => {
            if(depNameInput){
                return true;
            }
            else{
                console.log('Please enter a name for the new department')
                return false;
            }
        }  
    }).then(({depName}) =>{
        const sql = `INSERT INTO department (name) Values (?);`
        const params = [depName]
        connection.query(sql, params, function(err, res){
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            
            res.json({
                message: 'New department created.',
            });
        });
    }).then(() => {
        startApp();
    })
};

const addRole = function(){}

const addEmployee = function(){}
