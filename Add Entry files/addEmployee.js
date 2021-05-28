const inquirer = require("inquirer");
const queryDB = require("./utils");

    

// Function to add new employee
const addEmployee = async () => {
  // Prompt for name of new employee being stored
    const answer = await inquirer.prompt ([
        {
            name: 'firstName',
            type: 'input',
            message: 'Please enter the first name of the employee you would like to add:'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Please enter the employees last name:'
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'Please enter the employees id:',
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'Please enter the ID of the employee manager [if none, enter null]:'
        }

    ])
    // Insert new employee into DB
    await queryDB('INSERT INTO role SET ?',
    {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.roleId,
        manager_id: answer.managerId
    })
};

module.exports = addEmployee;