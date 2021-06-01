const inquirer = require('inquirer');
const connection = require('./connection');
const addEntry = require('./Add Entry files/addEntry');
const viewEntry = require('./View Entry files/viewEntry');
const updateEntry = require('./Update Entry files/updateEntry');
const userPrompts = require('./userPrompts');


// Function to load prompts in NPM
const callPrompts = async () => {
        console.log('Welcome to the Employee Tracker')
        const userPrompts = await inquirer.prompt();

        // Calls function chosen by user 
        switch (userPrompts.inputSelection) {
        case 'addEntry':
                addEntry();
                break;
        case 'viewEntry':
                viewEntry(); 
                break;
        case 'updateEntry':
                updateEntry();
                break; 
        default:
                return connection.end();         
        }

};

callPrompts();

