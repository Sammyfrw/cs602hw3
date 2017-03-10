//DB and schema setup
const mongoose = require('mongoose');
const credentials = require("../credentials.js");
const dbUrl = 'mongodb://' + credentials.host + ':27017/' + credentials.database;
const Schema = mongoose.Schema;

let connection = null;

mongoose.Promise = global.Promise;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

//Exporting getModel:
module.exports = {
  getModel: (connection) => {
    if (connection == null) {
      console.log("Creating connection");
      connection = mongoose.createConnection(dbUrl);
    };
    return connection.model("EmployeeModel", employeeSchema);
  }
}
