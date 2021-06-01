const queryDB = require("../utils");
const inquirer = require("inquirer");
const addEmployee = require("../add/addEmployee");
const addRole = require("../add/addRole");

// Function to update role
const updateRole = async () => {
    // Prompt for title of role or name of employee being updated
    const employee = await addEmployee();
    const role = await addRole(); 
    const choiceAddEmployee = employee.map(({first_name: name, id: value})=> ({name, value}));
    const choiceAddRole = role.map(({title:name, id: value}) => ({name, value}));
    inquirer.prompt([
        {
            name: "employeeRoleUpdate",
            type: "list",
            message: "Please select the name of the employee whose role you would like to update:",
            choices: choiceAddEmployee
        },
        { 
            name: "roleUpdate",
            type: "list",
            message: "Please select the new role for the employee:",
            choices: choiceAddRole
        }

    ])
    
    // Insert new role into DB
    await queryDB('UPDATE employee SET role_id = ? WHERE id = ?',
    {
        employeeRoleUpdate,
        roleUpdate,
    });
    console.log('Successfully updated role')
    console.log('-------------------------------------------------' );
};

module.exports = updateRole;
