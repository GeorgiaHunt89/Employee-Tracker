const queryDB = require("../utils");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Function to view all employees
const viewAllEmployees = async () => {
  // Prompt for role search list
  console.log("Loading all employees...\n");
  // View role listing stored into DB
  await queryDB("SELECT * FROM employee", function (err, res) {
    if (err) {
      console.error(err);
    } else {
      // Log all results of the SELECT statement
      console.table(res);
      console.log("Successfully loaded all employees");
      console.log("-------------------------------------------------");
    }
  });
};

module.exports = viewAllEmployees;
