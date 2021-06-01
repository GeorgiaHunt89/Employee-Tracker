const inquirer = require('inquirer');
const connection = require('./connection');
const addEntry = require('./src/add/addEntry');
const viewEntry = require('./src/view/viewEntry');
const updateEntry = require('./src/update/updateEntry');
const deleteEntry = require('./src/delete/deleteEntires');
const userPrompts = require('./src/userPrompts');


// Function to load prompts in NPM
const callPrompts = async () => {
        console.log('Welcome to the Employee Tracker')
        const userInput = await inquirer.prompt ({userPrompts});

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
        case 'deleteEntry':
                deleteEntry();
                break;
        default:
                return connection.end();         
        }

};

callPrompts();

