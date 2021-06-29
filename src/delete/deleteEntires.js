const inquirer = require("inquirer");
const deleteDepartment = require("./deleteDepartment");

const DELETE_DEPARTMENT = "DELETE_DEPARTMENT";

// Calls database records
// Delete Entry function
deleteEntry = async () => {
  const deleteEntry = await inquirer.prompt({
    type: "list",
    name: "deleteEntryType",
    message: "What type of entry would you like to delete?",
    choices: [
      { name: "Delete Department", value: DELETE_DEPARTMENT },
      "Return",
    ],
  });
  console.log(deleteEntry.deleteEntryType);
  // Calls function chosen by user
  switch (deleteEntry.deleteEntryType) {
    case DELETE_DEPARTMENT:
      return await deleteDepartment();

    default:
      return connection.end();
  }
};

module.exports = deleteEntry;
