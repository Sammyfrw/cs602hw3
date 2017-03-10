const DB = require('./dbConnection.js');
const Employee = DB.getModel();

//Controller function definition
//Show employee
var listEmployees = (req, res, next) => {
  Employee.find({}, (err, employees) => {
    if(err) console.log("Error encountered: %s", err);

    let results = employees.map( (employee) => {
      return {
        id: employee._id,
        firstName: employee.firstName,
        lastName: employee.lastName
      }
    });

    res.render('listEmployeesView', {data: results});
  });
};

//Add employee
var addEmployee = (req, res, next) => {
  res.render('addEmployeeView', {});
};

//Create employee
var createEmployee = (req, res, next) => {
  let employee = new Employee({
    firstName: req.body.fname,
    lastName: req.body.lname
  });

  employee.save((err) => {
    if(err) console.log("Error encountered: %s", err);
    res.redirect('/employees');
  });
};

//Edit employee
var editEmployee = (req, res, next) => {
  let id = req.params.id;

  Employee.findById(id, (err, employee) => {
    if(err) console.log("Cannot find employee: %s ", err);
    if(!employee) return res.render('404');

    res.render('editEmployeeView', {data: {id: employee._id,
              firstName: employee.firstName,
              lastName: employee.lastName}
            });
  });
};

//Update employee
var updateEmployee = (req, res, next) => {
  let id = req.params.id;

  Employee.findById(id, (err, employee) => {
    if(err) console.log("Cannot find employee: %s ", err);
    if(!employee) return res.sender('404');
    employee.firstName = req.body.fname;
    employee.lastName = req.body.lname;

    employee.save((err) => {
      if(err) console.log("Error updating employee: %s ", err);
      res.redirect('/employees');
    });
  });
};

//Delete employee
var deleteEmployee = (req, res, next) => {
  let id = req.params.id;

  Employee.findById(id, (err, employee) => {
    if(err) console.log("Cannot find employee: %s", err);
    if(!employee) return res.render('404');

    employee.remove( (err) => {
      if(err) console.log("Error deleting employee: %s", err);
      res.redirect('/employees');
    });
  });
};

module.exports = {
  listEmployees,
  addEmployee,
  createEmployee,
  editEmployee,
  updateEmployee,
  deleteEmployee
}
