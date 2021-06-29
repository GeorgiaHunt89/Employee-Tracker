const queryDB = require("../utils");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Function to view all roles
const viewAllRoles = async () => {
  // Prompt for role list
  console.log("Loading all roles...\n");
  // View role listing stored into DB
  await queryDB("SELECT * FROM role", function (err, res) {
    if (err) {
      console.error(err);
    } else {
      // Log all results of the SELECT statement
      console.table(res);
      console.log("Successfully loaded all roles");
      console.log("-------------------------------------------------");
    }
  });
};

module.exports = viewAllRoles;
