// Reads database records
const inquirer = require("inquirer");
const connection = require("../../connection");
const consoleTable = require("console.table");
const viewAllDepartments = require("./viewDepartment");
const viewAllRoles = require("./viewRoles");
const viewAllEmployees = require("./viewEmployees");

const VIEW_ALL_DEPARTMENTS = "VIEW_ALL_DEPARTMENTS";
const VIEW_ALL_ROLES = "VIEW_ALL_ROLES";
const VIEW_ALL_EMPLOYEES = "VIEW_EMPLOYEES";

// View Entry function
const viewEntry = async () => {
  const viewEntryInput = await inquirer.prompt({
    type: "list",
    name: "viewEntryType",
    message: "What type of entry do you wish to view?",
    choices: [
      { name: "View all departments", value: VIEW_ALL_DEPARTMENTS },
      { name: "View all roles", value: VIEW_ALL_ROLES },
      { name: "View all employees", value: VIEW_ALL_EMPLOYEES },
      "Return",
    ],
  });
  console.log(viewEntry.viewEntryType);
  // Calls function chosen by user
  switch (viewEntryInput.viewEntryType) {
    case VIEW_ALL_DEPARTMENTS:
      return await viewAllDepartments();

    case VIEW_ALL_ROLES:
      return await viewAllRoles();

    case VIEW_ALL_EMPLOYEES:
      return await viewAllEmployees();

    default:
      return connection.end();
  }
};

module.exports = viewEntry;
