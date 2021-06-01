const inquirer = require("inquirer");
const deleteRole = require('./deleteRole');
const deleteEmployee = require('./deleteEmployee');
const deleteDepartment = require('./deleteDepartment');

const DELETE_DEPARTMENT = 'DELETE_DEPARTMENT';
const DELETE_ROLE = 'DELETE_ROLE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

// Calls database records
// Delete Entry function 
deleteEntry = async () => {
    const deleteEntry = await inquirer.prompt({
                    type: 'list',
                    name: 'deleteEntryType',
                    message: 'What type of entry would you like to delete?',
                    choices: [
                        { name: 'Delete Department', value: DELETE_DEPARTMENT },
                        { name: 'Delete Role', value: DELETE_ROLE },
                        { name: 'Delete Employee', value: DELETE_EMPLOYEE },
                        'Return',
                ],
            });
console.log(deleteEntry.deleteEntryType);
// Calls function chosen by user 
switch (deleteEntry.deleteEntryType) {
        case DELETE_DEPARTMENT:
                return await deleteDepartment();

        case DELETE_ROLE:
                return await deleteRole();

        case DELETE_EMPLOYEE:
                return await deleteEmployee();
        
        default:
                return connection.end();
        }
};

module.exports = deleteEntry;
