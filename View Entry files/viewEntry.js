// Reads database records
const inquirer = require("inquirer");
const connection = require("../connection");
const viewAllDepartments = require('./viewDepartment');
const viewAllRoles = require('./viewRoles');

// View Entry function 
const viewEntry = async () => {
    const viewEntryInput = await inquirer.prompt({
                    type: 'list',
                    name: 'viewEntryType',
                    message: 'What type of entry do you wish to view?',
                    choices: [
                        'View all departments',
                        'View all roles', 
                        'View all employees', 
                        'View all roles by department', 
                        'View all employees by role',
                        'Return',
                    ],
            });
// Calls function chosen by user 
switch (viewEntryInput.action) {
    case 'viewAllDepartments':
            viewAllDepartments();
            break;
    case 'viewAllRoles':
            viewAllRoles(); 
            break;
    case 'viewAllEmployees':
            viewAllEmployees(); 
            break; 
    case 'viewAllRolesByDepartment':
            viewAllRolesByDepartment(); 
            break;
    case 'viewAllEmployeesByRole':
            viewAllEmployeesByRole(); 
            break; 
    case 'Return':
        connection.end();
        break; 
    default:
        console.log(`Invalid action: ${viewEntryInput.action}`)
        break;      
}
};

viewEntry();