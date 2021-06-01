const inquirer = require("inquirer");
const addRole = require('./addRole');
const addEmployee = require('./addEmployee');
const addDepartment = require('./addDepartment');

const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
const ADD_ROLE = 'ADD_ROLE';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';


// Creates database records
// Add Entry function 
const addEntry = async () => {
        const addEntry = await inquirer.prompt({
                type: 'list',
                name: 'selectEntryType',
                message: 'What type of entry do you wish to add?',
                choices: [
                        { name: 'Add Department', value: ADD_DEPARTMENT },
                        { name: 'Add Role', value: ADD_ROLE },
                        { name: 'Add Employee', value: ADD_EMPLOYEE },
                        'Return',
                ],
        });
        console.log(addEntry.selectEntryType);
        // Calls function chosen by user 
        switch (addEntry.selectEntryType) {
                case ADD_DEPARTMENT:
                        return await addDepartment();

                case ADD_ROLE:
                        return await addRole();

                case ADD_EMPLOYEE:
                        return await addEmployee();
                
                default:
                        return connection.end();  

        }
};

module.exports = addEntry;
