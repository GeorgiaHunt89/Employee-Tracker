const inquirer = require("inquirer");
const updateRole = require('./updateRole');
const updateEmployee = require('./updateEmployee');
const updateDepartment = require('./updateDepartment');

const UPDATE_DEPARTMENT = 'UPDATE_DEPARTMENT';
const UPDATE_ROLE = 'UPDATE_ROLE';
const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

// Creates database records
// Update Entry function 
const updateEntry = async () => {
    const updateEntry = await inquirer.prompt({
                    type: 'list',
                    name: 'updateEntryType',
                    message: 'What type of entry would you like to update?',
                    choices: [
                        { name: 'Update Department', value: UPDATE_DEPARTMENT },
                        { name: 'Update Role', value: UPDATE_ROLE },
                        { name: 'Update Employee', value: UPDATE_EMPLOYEE },
                        'Return',
                ],
            });
// Calls function chosen by user 
switch (updateEntry.updateEntryType) {
        case UPDATE_DEPARTMENT:
                return await updateDepartment();

        case UPDATE_ROLE:
                return await updateRole();

        case UPDATE_EMPLOYEE:
                return await updateEmployee();
        
        default:
                return connection.end();  

}
};

module.exports = updateEntry;
