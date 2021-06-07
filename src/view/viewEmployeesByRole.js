const queryDB = require('../utils');
const inquirer = require("inquirer");

// Function to view all employees by role
const viewAllEmployeesByRole = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
          {
              name: 'role_title',
              type: 'input',
              message: 'Please enter the role id you would like to view employees by:'
          }
      ])
      // View role listing stored into DB
      await queryDB('SELECT role_title FROM employee',[ answer.name  ])
      console.table(`Role_id: ${answer.name}`)
  };
  
  
module.exports = viewAllEmployeesByRole;
  
  