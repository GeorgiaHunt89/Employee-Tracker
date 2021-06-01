const queryDB = require('../utils');
const inquirer = require("inquirer");
const userPrompts = require('../userPrompts').default;

// Function to view all employees by role
const viewAllEmployeesByRole = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
          {
              name: 'role_id',
              type: 'input',
              message: 'Please enter the role id you would like to view employees by:'
          }
      ])
      // View role listing stored into DB
      await queryDB('SELECT role_id FROM employee',[ answer.role_id ])
      console.table(`Role_id: ${role_id}`)
  };
  viewAllEmployeesByRole();
  
  