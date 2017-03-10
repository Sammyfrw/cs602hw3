const DB = require('./dbConnection.js');
const Employee = DB.getModel();

//Controller function definition
//Show employee
module.exports.showEmployees = (req, res, next) => {
  Employee.find({}, (err, employees) => {
    if(err) console.log("Error encountered: %s", err);

    let results = employees.map( (employee) => {
      return {
        id: employee._id,
        employeeFirstName: employee.firstName,
        employeeLastName: employee.lastName
      }
    });

    res.render('showEmployeesView', {title: 'List of employees', data: results});
  });
};

//Add employee
module.exports.addEmployee = (req, res, next) => {
  res.render('addEmployeeView', {title: 'Add employee'});
};

//Create employee
module.exports.createEmployee = (req, res, next) => {
  let employee = new Employee({
    employeeFirstName: req.body.fname;
    employeeLastName: req.body.lname;
  });

  employee.save((err) => {
    if(err) console.log("Error encountered: %s", err);
    res.redirect('/employees');
  });
};

//Edit employee
module.exports.editEmployee = (req, res, next) => {
  let id = req.params.id;

  Employee.findById(id, (err, employee) => {
    if(err) console.log("Cannot find employee: %s ", err);
    if(!employee) return res.render('404');

    res.render('editEmployeeView', {title:"Edit Employee",
      data: {id: employee._id,
              employeeFirstName: employee.firstName,
              employeeLastName: employee.lastName}
            });
  });
};

//Update employee
module.exports.updateEmployee = (req, res, next) => {
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
module.exports.deleteEmployee = (req, res, next) => {
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
