const queryDB = require('./utlis');
const inquirer = require("inquirer");

// Function to view all employees
const viewAllEmployees = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
          {
              name: 'employee',
              type: 'input',
              message: 'Please enter the name of the employee you would like to view:'
          }
      ])
      // View role listing stored into DB
      await queryDB('SELECT * FROM employee',[ answer.employee ])
      console.table(`Employee: ${employee}`)
  };
  viewAllEmployees();