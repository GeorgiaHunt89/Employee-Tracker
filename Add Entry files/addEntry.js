// Creates database records
// Add Entry function 
const addEntry = async () => {
    const addEntryInput = await inquirer.prompt({
                    type: 'list',
                    name: 'selectEntryType',
                    message: 'What type of entry to you wish to add?',
                    choices: ['Add Department', 'Add Role', 'Add Employee'],
            });
// Calls function chosen by user 
switch (addEntryInput.entryInputSelection) {
    case 'addDepartment':
            addDepartment();
            break;
    case 'addRole':
            addRole(); 
            break;
    case 'addEmployee':
            addEmployee(); 
            break;      
}
console.log('You have chosen ', addEntryInput.entryInputSelection);
};

