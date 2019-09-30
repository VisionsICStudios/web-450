/*
============================================
; Title:  app.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

/**
 * Dependency libraries
 * @type { createApplication }
 */

const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors');
const config = require('./config');
const favicon = require('serve-favicon');
const header = require('./header');
/**
 * MongoDB setup
 */
mongoose.connect('mongodb+srv://' + config.database.username + ':'
  + config.database.password + '@'
  + config.database.url + ':'
  + config.database.port + '/'
  + config.database.name, {promiseLibrary: require('bluebird'), useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.debug('Connection to the MongoDB instance was successful'))
  .catch((err) => console.debug('MongoDB Error: ' + err.message));

let app = express();

/**
 * Express using statements
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(morgan('dev'));
app.use(cors());

/**
 * Configure Express to serve the Angular application as static HTML/JavaScript
 */
app.use(express.static(path.join(__dirname, '../dist/wilson-nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/wilson-nodequiz')));
app.use(favicon(path.join(__dirname, '../src', 'favicon.ico')));


/**
 * Invalid API calls request handler
 */
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res){
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

console.log(`${header.display("Aaron", "Wilson", "Week Two")}\n`);

http.createServer(app).listen(config.web.port, function() {
  console.log('Application started and listening on port ' + config.web.port + '!');
});

app.get('../src/favicon.ico', (req, res) => res.status(204));

/**
 *
 * API Routes
 *
 */

app.get('../src/favicon.ico', (req, res) => res.status(204));

// Employee Routes (Find all * employees).
app.get('/api/employees', function(req, res, next) {
  Composer.find(function(err, employees) {
    if (err) return next(err);
    return res.json(employees);
  });
});

// Employee Routes (Find a specific employee).
app.get('/api/employees/:id', function(req, res, next) {
  console.log(req.params.id);
  Employee.findOne({ _id: req.params.id}, function(err, employee) {
    if (err) return next(err);
    return res.json(employee);
  });
});

// Employee Routes (Create an employee)
app.post('/api/employee', function(req, res, next) {
  console.log(req.body);
  let employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  console.log(employee);
  
  // Create method builds out a new employee object.
  Employee.create(employee, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  })
});
