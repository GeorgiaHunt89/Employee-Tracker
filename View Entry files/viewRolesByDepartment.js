const queryDB = require('./utils');
const inquirer = require("inquirer");

// Function to view all roles by department
const viewAllRolesByDepartment = async () => {
    // Prompt for role search list
      const answer = await inquirer.prompt ([
          {
              name: 'department_id',
              type: 'input',
              message: 'Please enter the department id you would like to view roles:'
          }
      ])
      // View role listing stored into DB
      await queryDB('SELECT department_id FROM role',[ answer.department_id ])
      console.table(`Department_id: ${department_id}`)
  };
  viewAllRolesByDepartment();