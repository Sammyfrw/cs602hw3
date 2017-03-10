//Model and schema setup
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

//Exporting module
module.exports = {
  getModel: (connection) => {
    return connection.model("EmployeeModel",
      employeeSchema);
  }
}
