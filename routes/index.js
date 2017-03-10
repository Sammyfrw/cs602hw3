const express = require('express');
const router = express.Router();

//Set up controller routes
const employeeModule = require("./employeeModule");
const showEmployees = employeeModule.showEmployees;
const addEmployee = employeeModule.addEmployee;
const saveEmployee = employeeModule.saveEmployee;
const editEmployee = employeeModule.editEmployee;
const updateEmployee = employeeModule.updateEmployee;
const deleteEmployee = employeeModule.deleteEmployee;

//Route specifications
router.get('.' (req, res, next) => {
  res.redirect('/employees');
});

router.get('/employees', showEmployees);
router.get('/employees/add', addEmployee);
router.post('/employees/add'), saveEmployee);
router.get('/employees/edit/:id', editEmployee);
router.post('/employees/edit/:id', updateEmployee);
router.get('/employees/delete/:id', deleteEmployee);

module.exports = router;
