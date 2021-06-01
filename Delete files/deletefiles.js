const inquirer = require("inquirer");
const deleteRole = require('./deleteRole');
const deleteEmployee = require('./deleteEmployee');
const deleteDepartment = require('./deleteDepartment');

// Calls database records
// Delete Entry function 
deleteEntry = async () => {
    const deleteEntry = await inquirer.prompt({
                    type: 'list',
                    name: 'deleteEntryType',
                    message: 'What type of entry would you like to delete?',
                    choices: ['Delete Department', 'Delete Role', 'Delete Employee'],
            });
// Calls function chosen by user 
switch (deleteEntry.deleteInputSelection) {
    case 'deleteDepartment':
            return deleteDepartment();

    case 'deleteRole':
            return deleteRole(); 
            
    case 'deleteEmployee':
            return deleteEmployee(); 
    
}
};
deleteEntry();
