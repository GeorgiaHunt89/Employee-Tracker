const queryDB = require('../utils');
const inquirer = require("inquirer");
const consoleTable = require('console.table');

// Function to view specific role
const viewSpecificRole = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
          {
              name: 'role',
              type: 'input',
              message: 'Please enter the name of the role you would like to view:'
          }
      ])
      // View role listing stored into DB
      await queryDB('SELECT * FROM role WHERE title =?',[ answer.name ])
      console.table(`
                    Role: ${answer.name}
                    Id: ${answer.id}
                    First Name: ${answer.first_name}
                    Last Name: ${answer.last_name}`)
  };
  
  module.exports = viewSpecificRole;