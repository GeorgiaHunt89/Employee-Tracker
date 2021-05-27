const inquirer = require("inquirer");
const db = require('./db');
const queryDB = require("./utils");

// Function to post new role
const addRole = async () => {
    // Prompt for title of role being stored
    const answer = await inquirer.prompt ([
        {
            name: 'role',
            type: 'input',
            message: 'Please enter the name of the role you would like to add:'
        }
    ])
    // Insert new role into DB
    await queryDB('INSERT INTO role SET role_name = ?',[ answer.role ])
    console.log('You have successfully created a new role!')
    addEntry();
};

module.exports = addRole;