const express = require('express');
const router = express.Router();

const employeeController = require("./employeeController");

//Set up controller routes
const showEmployees = employeeController.showEmployees;
const addEmployee = employeeController.addEmployee;
const saveEmployee = employeeController.saveEmployee;
const editEmployee = employeeController.editEmployee;
const updateEmployee = employeeController.updateEmployee;
const deleteEmployee = employeeController.deleteEmployee;

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
