const inquirer = require('inquirer');
// const db = require('./db');
const connection = require('./connection');
const userPrompts = require('./userPrompts');
const addDepartment = require('./Add Entry files/addDepartment');

const employeeInformation = [];

// Function to load prompts in NPM
const callPrompts = async () => {
    console.log('Welcome to the Employee Tracker')
    const userInput = await inquirer.prompt(userPrompts);

// Calls function chosen by user 
switch (userInput.inputSelection) {
    case 'addEntry':
            addEntry();
            break;
    case 'viewEntry':
            viewEntry(); 
            break;
    case 'updateEntry':
            updateEntry(); 
            break;      
}
console.log('You have chosen ', userInput.inputSelection);
};

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
        case 'viewRole':
                viewRole(); 
                break;
        case 'updateEmployee':
                updateEmployee(); 
                break;      
    }
    console.log('You have chosen ', addEntryInput.entryInputSelection);
};




callPrompts()
