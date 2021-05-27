const userPrompts = [
{
    type: 'list',
    name: 'inputChoices',
    message: 'What would you like to choose?',
    choices: [
        {
            name: 'View all departments'
            value: 'View_Departments'
        },
        {
            name: 'View all roles'
            value: 'View_Roles'
        },
        {
            name: 'View all employees'
            value: 'View_Employees'
        },
        {
            name: 'Add a department'
            value: 'Add_Department'
        },
        {
            name: 'Add a role'
            value: 'Add_Role'
        },
        {
            name: 'Add an employee'
            value: 'Add_Employee'
        },
        {
            name: 'Update employees'
            value: 'Update_Employees'
        },
        {
            name: 'Quit'
            value: 'Quit'
        },
    ]
}

];

module.exports = userPrompts;