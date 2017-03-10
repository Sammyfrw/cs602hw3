//Module definitions
const mongoose = require('mongoose');
const credentials = require("./credentials.js");

//DB connection
const dbURL = 'mongodb://' + credentials.host + ':27017' + credentials.database;
const connection = mongoose.createConnection(dbUrl);

//Clientside model setup
const employeeDb = require('./employeeDb.js');
const Employee = employeeDb.getModel(connection);

connection.on ("open", () => {
  let employee;

  employee = new Employee({
    firstName: 'John',
    lastName: 'Smith'
  });
  employee.save();

  employee = new Employee({
    firstName: 'Jane',
    lastName: 'Smith'
  });
  employee.save();

  employee = new Employee({
    firstName: 'John',
    lastName: 'Doe'
  });
  employee.save((err) => {
    connection.close();
    if (err) throw err;
    console.log("Successfully added employees!");
  });
});
