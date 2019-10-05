
/*
============================================
; Title: app.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN Node Quiz.
;===========================================
*/

/**
 * Dependency libraries
 * @type { createApplication }
 */

const employeeRoute = require('./routes/employee.routes');
const presentationRoute = require('./routes/presentation.routes');
const quizRoute = require('./routes/quiz.routes');
const resultRoute = require('./routes/result.routes');
const selectionRoute = require('./routes/selection.routes');
const summaryRoute = require('./routes/summary.routes');
const totalRoute = require('./routes/total.routes');

const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors');
const config = require('./config/db-config');
const favicon = require('serve-favicon');
const header = require('./config/header');

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
app.use(express.static(path.join(__dirname, '../dist/wilson-node-quiz')));
app.use('/', express.static(path.join(__dirname, '../dist/wilson-node-quiz')));
app.use(favicon(path.join(__dirname, '../src', 'favicon.ico')));

/**
 * Use all developed routes.
 */
app.use('/api', employeeRoute);
app.use('/api', presentationRoute);
app.use('/api', quizRoute);
app.use('/api', resultRoute);
app.use('/api', selectionRoute);
app.use('/api', summaryRoute);
app.use('/api', totalRoute);

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

console.log(`${header.display("Aaron", "Wilson", "Week Three")}\n`);

http.createServer(app).listen(config.web.port, function() {
  console.log('Application started and listening on port ' + config.web.port + '!');
});

app.get('../src/favicon.ico', (req, res) => res.status(204));

/**
 *
 * API Routes
 *
 */




