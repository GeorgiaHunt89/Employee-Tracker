const queryDB = require('./utils');
const inquirer = require("inquirer");


// Function to view all roles
const deleteRole = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
        {
            name: 'firstName',
            type: 'input',
            message: 'Please enter the first name of the employee you would like to delete:'
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'Please enter the employee id:',
        },
    ])
    // Delete employee from DB
    await queryDB('DELETE FROM role SET ?',
    {
        first_name: answer.firstName,
        role_id: answer.roleId,
    })
};

module.exports = deleteRole;