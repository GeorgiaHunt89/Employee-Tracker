const inquirer = require("inquirer")

    const addDepartment = async () => {
        const departmentInput = await inquirer.prompt ([
            {
                name: 'department',
                type: 'input',
                message: 'Please enter the name of the department you would like to add:'
            }
        ]);
        const {department} = departmentInput;
        const departmentName = new departmentName (department);
        employeeInformation.push(departmentInput);
        console.log(departmentName); 
        callPrompts();
    }

module.exports = addDepartment;