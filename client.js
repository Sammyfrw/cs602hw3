const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const dbURL = 'mongodb://' + credentials.host + ':27017' + credentials.database;
const connection = mongoose.createConnection(dbUrl);

const employeeDb = require('./employeeDb.js');
const Employee = employeeDb.getModel(connection);

connection.on ("open", () => {
  let employee;

  employee = new Employee({
    firstName: '',
    lastName: ''
  });
  employee.save();
});
