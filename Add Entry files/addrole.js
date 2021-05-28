const queryDB = require("./utils");

// Function to post new role
const addRole = async () => {
    // Prompt for title of role being stored
    const answer = await inquirer.prompt ([
        {
            name: 'title',
            type: 'input',
            message: 'Please enter the name of the role you would like to add:'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Please enter the salary for this role:'
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'Please enter the department id for this role:',
        }
    ])
    // Insert new role into DB
    await queryDB('INSERT INTO role SET ?',
    {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.departmentId
    })
};

module.exports = addRole;
