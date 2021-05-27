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



callPrompts()
