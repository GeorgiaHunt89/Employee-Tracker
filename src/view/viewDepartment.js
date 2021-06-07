const queryDB = require('../utils');
const inquirer = require("inquirer");



// Function to view all departments
const viewAllDepartments = async () => {
    // Prompt for department search list
      const answer = await inquirer.prompt ([
          {
              name: 'department',
              type: 'input',
              message: 'Please enter the name of the department you would like to view:'
          }
      ])
      // View department listing stored into DB
      await queryDB('SELECT * FROM department',[ answer.department ])
        console.table(res);
  };
  
module.exports = viewAllDepartments;
