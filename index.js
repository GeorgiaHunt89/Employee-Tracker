const inquirer = require('inquirer');
const {prompt} = require('inquirer');
const { prompt } = require('inquirer');
const db = require('./db');
const userPrompts = require(.'/userPrompts');

// Function to load prompts in NPM
const loadPrompts = async () => {
const userInput = await prompts ([userPrompts]);


// Calls function chosen by user 
switch (userInput) {
    case 'View_Departments':
        return viewAllDepartments();
            break;
    case 'View_Roles':
        return viewAllRoles(); 
            break;
    case 'View_Employees':
        return viewAllEmployees(); 
            break;      
    case 'Add_Department':
        return addADepartment(); 
            break; 
    case 'Add_Role':
         return addARole(); 
             break;
    case 'Add_Employee':
        return addAnEmployee(); 
            break; 
    case 'Update_Employees':
        return updateEmployee(); 
            break; 
    default:
        return quite(); 
}
}

