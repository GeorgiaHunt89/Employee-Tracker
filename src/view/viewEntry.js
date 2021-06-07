// Reads database records
const inquirer = require("inquirer");
const connection = require("../../connection");
const consoleTable = require('console.table');
const viewAllDepartments = require('./viewDepartment');
const viewSpecificDepartment = require('./viewSpecificDepartment');
const viewAllRoles = require('./viewRoles');
const viewSpecificRole = require('./viewSpecificRole');
const viewAllEmployees = require('./viewEmployees');
const viewSpecificEmployee = require('./viewSpecificEmployee');
const viewAllRolesByDepartment = require('./viewRolesByDepartment');
const viewAllEmployeesByRole = require('./viewEmployeesByRole');


const VIEW_ALL_DEPARTMENTS = 'VIEW_ALL_DEPARTMENTS';
const VIEW_SPECIFIC_DEPARTMENT ='VIEW_SPECIFIC_DEPARTMENT';
const VIEW_ALL_ROLES = 'VIEW_ALL_ROLES';
const VIEW_SPECIFIC_ROLE ='VIEW_SPECIFIC_ROLE';
const VIEW_ALL_EMPLOYEES = 'VIEW_EMPLOYEES';
const VIEW_SPECIFIC_EMPLOYEE = 'VIEW_SPECIFIC_EMPLOYEE';
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
                        {name:'View specific department', value: VIEW_SPECIFIC_DEPARTMENT},
                        {name:'View all roles', value: VIEW_ALL_ROLES},
                        {name:'View specific role', value: VIEW_SPECIFIC_ROLE},
                        {name:'View all employees', value: VIEW_ALL_EMPLOYEES},
                        {name:'View specific employee', value: VIEW_SPECIFIC_EMPLOYEE},
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

case VIEW_SPECIFIC_DEPARTMENT:
        return await viewSpecificDepartment();
            
    case VIEW_ALL_ROLES:
            return await viewAllRoles(); 

case VIEW_SPECIFIC_ROLE:
        return await viewSpecificRole(); 
            
    case VIEW_ALL_EMPLOYEES:
            return await viewAllEmployees(); 

case VIEW_SPECIFIC_EMPLOYEE:
        return await viewSpecificEmployee(); 
            
    case VIEW_ALL_ROLES_BY_DEPARTMENT:
            return await viewAllRolesByDepartment(); 
            
    case VIEW_ALL_EMPLOYEES_BY_ROLE:
            return await viewAllEmployeesByRole(); 
             
    default: 
    return connection.end();
    
}
};

module.exports = viewEntry;