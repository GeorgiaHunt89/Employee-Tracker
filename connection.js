// Create connection to MYSQL

const mysql = require("mysql2");
const consoleTable = require("console.table");
require("dotenv").config();
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_trackerDB",
});

connection.connect((error) => {
  if (error) throw error;
});

module.exports = connection;
