const inquirer = require("inquirer");
const updateRole = require('./updateRole');
const updateEmployee = require('./updateEmployee');
const updateDepartment = require('./updateDepartment');

// Creates database records
// Update Entry function 
updateEntry = async () => {
    const updateEntry = await inquirer.prompt({
                    type: 'list',
                    name: 'updateEntryType',
                    message: 'What type of entry would you like to update?',
                    choices: ['Update Department', 'Update Role', 'Update Employee'],
            });
// Calls function chosen by user 
switch (updateEntry.updateInputSelection) {
    case 'updateDepartment':
            return updateDepartment();

    case 'updateRole':
            return updateRole(); 
            
    case 'updateEmployee':
            return updateEmployee(); 
    
}
};
updateEntry();
