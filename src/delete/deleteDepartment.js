const queryDB = require('../utils');
const inquirer = require("inquirer");


// Function to view all departments
const deleteDepartment = async () => {
    // Prompt for department search list
      const answer = await inquirer.prompt ([
          {
              name: 'department',
              type: 'input',
              message: 'Please enter the name of the department you would like to delete:'
          }
      ])
      // Delete department listing stored into DB
      await queryDB('DELETE FROM department WHERE department_name = ?',[ answer.department ]);
    console.log('Successfully deleted department')
    console.log('-------------------------------------------------' );
  };
  
  module.exports = deleteDepartment;