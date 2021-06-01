const connection = require('./connection');
const addEntry = require('./src/add/addEntry');
const viewEntry = require('./src/view/viewEntry');
const updateEntry = require('./src/update/updateEntry');
const deleteEntry = require('./src/delete/deleteEntires');
const userPrompts = require('./src/userPrompts');


// Function to load prompts in NPM
const callPrompts = async () => {
        console.log('Welcome to the Employee Tracker');
        const userInput = await userPrompts();
        console.log({userInput});
        // Calls function chosen by user 
        switch (userInput) {
        case 'addEntry':
                await addEntry();
                break;
        case 'viewEntry':
                await viewEntry(); 
                break;
        case 'updateEntry':
                await updateEntry();
                break; 
        case 'deleteEntry':
                await deleteEntry();
                break;
        default:
                return connection.end();         
        }

        callPrompts();
};

callPrompts();

