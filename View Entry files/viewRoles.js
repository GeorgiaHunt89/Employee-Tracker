const queryDB = require('./utils');
const inquirer = require("inquirer");

// Function to view all roles
const viewAllRoles = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
          {
              name: 'role',
              type: 'input',
              message: 'Please enter the name of the role you would like to view:'
          }
      ])
      // View role listing stored into DB
      await queryDB('SELECT * FROM role',[ answer.role ])
      console.table(`Role: ${role}`)
  };
  viewAllRoles();