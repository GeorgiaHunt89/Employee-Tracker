// Reads database records
const inquirer = require("inquirer");
const connection = require("../../connection");
const viewAllDepartments = require('./viewDepartment');
const viewAllRoles = require('./viewRoles');
const viewAllEmployees = require('./viewEmployees');
const viewAllRolesByDepartment = require('./viewRolesByDepartment');
const viewAllEmployeesByRole = require('./viewEmployeesByRole');

const VIEW_ALL_DEPARTMENTS = 'VIEW_ALL_DEPARTMENTS';
const VIEW_ALL_ROLES = 'VIEW_ALL_ROLES';
const VIEW_ALL_EMPLOYEES = 'ADD_EMPLOYEES';
const VIEW_ALL_ROLES_BY_DEPARTMENT = 'VIEW_ALL_ROLES_BY_DEPARTMENT';
const VIEW_ALL_EMPLOYEES_BY_ROLE = 'VIEW_ALL_EMPLOYEES_BY_ROLE';

// View Entry function 
const viewEntry = async () => {
    const viewEntryInput = await inquirer.prompt({
                    type: 'list',
                    name: 'viewEntryType',
                    message: 'What type of entry do you wish to view?',
                    choices: [
                        {name:'View all departments', value: VIEW_ALL_DEPARTMENTS}, 
                        {name:'View all roles', value: VIEW_ALL_ROLES},
                        {name:'View all employees', value: VIEW_ALL_EMPLOYEES},
                        {name:'View all roles by department', value: VIEW_ALL_ROLES_BY_DEPARTMENT},
                        {name:'View all employees by role', value: VIEW_ALL_EMPLOYEES_BY_ROLE},
                        'Return',
                    ],
            });
console.log(viewEntry.viewEntryType);
// Calls function chosen by user 
switch (viewEntryInput.viewEntryType) {
    case VIEW_ALL_DEPARTMENTS:
           return await viewAllDepartments();
            
    case VIEW_ALL_ROLES:
            return await viewAllRoles(); 
            
    case VIEW_ALL_EMPLOYEES:
            return await viewAllEmployees(); 
            
    case VIEW_ALL_ROLES_BY_DEPARTMENT:
            return await viewAllRolesByDepartment(); 
            
    case VIEW_ALL_EMPLOYEES_BY_ROLE:
            return await viewAllEmployeesByRole(); 
             
    default: 
    return connection.end();
    
}
};

module.exports = viewEntry;