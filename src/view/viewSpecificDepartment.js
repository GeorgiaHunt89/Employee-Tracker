const queryDB = require('../utils');
const inquirer = require("inquirer");
const consoleTable = require('console.table');



// Function to view specific departments
const viewSpecificDepartment = async () => {
    // Prompt for department search list
      const answer = await inquirer.prompt ([
          {
              name: 'department',
              type: 'input',
              message: 'Please enter the name of the department you would like to view:'
          }
      ])
      // View department listing stored into DB
      await queryDB(('SELECT department SET department_name =?', [ answer.name ]));
        // Log all results of the SELECT statement
        console.table(`Department: ${answer.name}`);
        console.log('-------------------------------------------------' ); 
      };  
  
module.exports = viewSpecificDepartment;
