const inquirer = require("inquirer");
const db = require('./db');
const queryDB = require("./utils");

// Function to add new employee
const addEmployee = async () => {
  // Prompt for name of new employee being stored
    const answer = await inquirer.prompt ([
        {
            name: 'employee',
            type: 'input',
            message: 'Please enter the name of the employee you would like to add:'
        }
    ])
    // Insert new employee into DB
    await queryDB('INSERT INTO employee SET employee_name = ?',[ answer.employee ])
    console.log('You have successfully added a new employee!')
    addEntry();
};

module.exports = addEmployee;