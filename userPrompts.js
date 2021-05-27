const userPrompts = [
{
    type: 'list',
    name: 'inputChoices',
    message: 'What action would you like to complete today?',
    choices: [
        {
            name: 'Add an Entry',
            value: 'addEntry'
        },
        {
            name: 'View an Entry',
            value: 'viewEntry'
        },
        {
            name: 'Delete an Entry',
            value: 'deleteEntry'
        },
    ]
}

];

module.exports = userPrompts;