
const { prompt } = require('inquirer');

const userPrompts = async () => {

    const answer = await prompt(
        {
            type: 'list',
            name: 'inputChoices',
            message: 'What action would you like to complete today?',
            choices: [
                {
                    name: 'Add an Entry',
                    value: 'addEntry',
                },
                {
                    name: 'View an Entry',
                    value: 'viewEntry',
                },
                {
                    name: 'Update an Entry',
                    value: 'updateEntry',
                },
                {
                    name: 'Delete an Entry',
                    value: 'deleteEntry',
                },
            ]
        });

    return answer.inputChoices;

};

module.exports = userPrompts;