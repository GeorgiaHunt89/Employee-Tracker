const queryDB = require('../utils');
const inquirer = require("inquirer");
const consoleTable = require('console.table');

// Function to view specific employees
const viewSpecificEmployee = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
          {
              name: 'employee',
              type: 'input',
              message: 'Please enter the name of the employee you would like to view:'
          }
      ])
      // View specific employee listing stored into DB
      await queryDB('SELECT * FROM employee',[ answer.name ])
      console.table(`
      Role: ${answer.name}
      Id: ${answer.id}
      First Name: ${answer.first_name}
      Last Name: ${answer.last_name}`)
  };
  
module.exports = viewSpecificEmployee;

  