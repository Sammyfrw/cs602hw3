//DB and schema setup
const mongoose = require('mongoose');
const credentials = require("../credentials.js");
const dbUrl = 'mongodb://' + credentials.host + ':27017/' + credentials.database;
const Schema = mongoose.Schema;

let connection = null;
let model = null;

mongoose.Promise = global.Promise;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

//Exporting getModel:
module.exports = {
  getModel: (connection) => {
    if (connection == null) {
      console.log("Creating connection and model");
      connection = mongoose.createConnection(dbUrl);
      model = connection.model("EmployeeModel", employeeSchema);
    };
    return model;
  }
}
