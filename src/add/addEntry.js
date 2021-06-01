const inquirer = require("inquirer");
const addRole = require('./addRole');
const addEmployee = require('./addEmployee');
const addDepartment = require('./addDepartment');

// Creates database records
// Add Entry function 
const addEntry = async () => {
        const addEntry = await inquirer.prompt({
                type: 'list',
                name: 'selectEntryType',
                message: 'What type of entry do you wish to add?',
                choices: ['Add Department', 'Add Role', 'Add Employee'],
        });
        // Calls function chosen by user 
        switch (addEntry.entryInputSelection) {
                case 'addDepartment':
                        return addDepartment();

                case 'addRole':
                        return addRole();

                case 'addEmployee':
                        return addEmployee();

        }
};

module.exports = addEntry;
