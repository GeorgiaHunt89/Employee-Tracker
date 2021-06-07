const queryDB = require('../utils');
const inquirer = require("inquirer");


// Function to view all roles
const deleteRole = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
        {
            name: 'Title',
            type: 'input',
            message: 'Please enter the name of the role you would like to delete:'
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'Please enter the roles id number:',
        },
    ])
    // Delete employee from DB
    await queryDB('DELETE FROM role WHERE role_id = ?',
    {
        title: answer.title,
        department_id: answer.departmentId
    });
    console.log('Successfully deleted role')
    console.log('-------------------------------------------------' );
};

module.exports = deleteRole;