const queryDB = require("../utils");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Function to view all departments
const viewAllDepartments = async () => {
  // Prompt for department list
  console.log("Loading all departments...\n");
  // View department listing stored into DB
  await queryDB("SELECT * FROM department", function (err, res) {
    if (err) {
      console.error(err);
    } else {
      // Log all results of the SELECT statement
      console.table(res);
      console.log("Successfully loaded all departments");
      console.log("-------------------------------------------------");
    }
  });
};

module.exports = viewAllDepartments;
