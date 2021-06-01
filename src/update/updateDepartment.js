const queryDB = require("../utils");
const inquirer = require("inquirer");
const addDepartment = require("../add/addDepartment");
const addRole = require("../add/addRole");

// Function to update department
const updateDepartment = async () => {
    // Prompt for title of department or role id to be updated
    const employee = await addDepartment();
    const role = await addRole(); 
    const choiceAddDepartment = employee.map(({department: name, id: value})=> ({name, value}));
    const choiceAddRole = role.map(({title:name, id: value}) => ({name, value}));
    inquirer.prompt([
        {
            name: "departmentRoleUpdate",
            type: "list",
            message: "Please select the name of the department you would like to update:",
            choices: choiceAddDepartment
        },
        { 
            name: "roleUpdate",
            type: "list",
            message: "Please select the role id for the department you would like to update:",
            choices: choiceAddRole
        }

    ])
    
    // Insert new role into DB
    await queryDB('UPDATE department, role SET department_id = ?, department_name = ? WHERE id = ?, title= ?',
    {
        departmentRoleUpdate: employee.departmentRoleUpdate,
        roleUpdate: role.roleUpdate,
    });
    console.log('Successfully updated department')
    console.log('-------------------------------------------------' );
};

module.exports = updateDepartment;