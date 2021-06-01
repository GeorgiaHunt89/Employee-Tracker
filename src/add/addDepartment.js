const queryDB = require("../utils");
const inquirer = require("inquirer");

// Function to post new department
const addDepartment = async () => {
  // Prompt for title of department being stored
    const answer = await inquirer.prompt ([
        {
            name: 'department',
            type: 'input',
            message: 'Please enter the name of the department you would like to add:'
        }
    ])
    // Insert new department into DB
    await queryDB('INSERT INTO department SET department_name = ?', [ answer.department ]);
    console.log('Successfully created department')
    console.log('-------------------------------------------------' );
};

module.exports = addDepartment;