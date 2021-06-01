const queryDB = require("../utils");
const inquirer = require("inquirer");
 

// Function to update employee
const updateEmployee = async () => {
  // Prompt for name of employee being updated
    const answer = await inquirer.prompt ([
        {
            name: 'firstName',
            type: 'input',
            message: 'Please enter the first name of the employee you would like to update:'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Please enter the last name of the employee:'
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'Please enter the employee id:',
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'Please enter the ID of the employee manager [if none, enter null]:'
        }

    ])
    // Insert updated employee into DB
    await queryDB('INSERT INTO role SET ?',
    {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.roleId,
        manager_id: answer.managerId
    })
};

module.exports = updateEmployee;