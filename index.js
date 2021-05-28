const inquirer = require('inquirer');
// const db = require('./db');
const connection = require('./connection');
const addEntry = require('./Add Entry files/addEntry');
const userPrompts = require('./userPrompts');


// Function to load prompts in NPM
const callPrompts = async () => {
        console.log('Welcome to the Employee Tracker')
        const userInput = await inquirer.prompt(userPrompts);

        // Calls function chosen by user 
        switch (userInput.inputSelection) {
        case 'addEntry':
                return addEntry();
        case 'viewEntry':
                return viewEntry(); 
        case 'updateEntry':
                return updateEntry(); 
        default:
                return connection.end();         
        }
};

callPrompts();


