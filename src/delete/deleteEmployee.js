const queryDB = require("../utils");
const inquirer = require("inquirer");
 

// Function to delete employee
const deleteEmployee = async () => {
  // Prompt for name of employee being deleted
    const answer = await inquirer.prompt ([
        {
            name: 'firstName',
            type: 'input',
            message: 'Please enter the first name of the employee you would like to delete:'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Please enter the last name of the employee you would like to delete:'
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
    // Delete employee from DB
    await queryDB('DELETE FROM employee SET ?',
    {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.roleId,
        manager_id: answer.managerId
    })
};

module.exports = deleteEmployee;