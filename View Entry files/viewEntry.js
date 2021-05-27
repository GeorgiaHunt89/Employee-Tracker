// Reads database records
// View Entry function 
const viewEntry = async () => {
    const viewEntryInput = await inquirer.prompt({
                    type: 'list',
                    name: 'viewEntryType',
                    message: 'What type of entry do you wish to view?',
                    choices: ['View all departments', 'View all roles', 'View all employees', 'View all roles by department', 'View all employees by role'],
            });
// Calls function chosen by user 
switch (viewEntryInput.entryInputSelection) {
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
}
console.log('You have chosen ', viewEntryInput.entryInputSelection);
};
