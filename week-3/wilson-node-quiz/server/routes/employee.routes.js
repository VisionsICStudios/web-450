const express = require('express');
const app = express();
const employeeRoute = express.Router();

// Employee model
let Employee = require('./models/Employee');

// *************** CRUD FUNCTIONALITY ********************** //

// Create Employee
employeeRoute.route('/create-employee').post((req, res, next) => {
  Employee.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Employee successfully created!');
    }
  })
});


// Read all employees - GET METHOD
employeeRoute.route('/read-employees').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log('All employees successfully read!');
    }
  })
});

// Read single employee - GET METHOD
employeeRoute.route('/read-employee/:id').get((req, res) => {
  Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log('Single employee successfully read!');
    }
  })
});

// Update employee
employeeRoute.route('/update-employee/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log('Employee successfully updated!');
    }
  })
});

// Delete employee
employeeRoute.route('/delete-employee/:id').delete((req, res, next) => {
  Employee.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
      console.log('Employee successfully deleted!');
    }
  });
});


















module.exports = employeeRoute;
