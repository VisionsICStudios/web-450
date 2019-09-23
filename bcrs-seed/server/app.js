/**
 * Dependency libraries
 * @type {createApplication}
 */
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors');
const fs = require('fs');
const rfs = require('rotating-file-stream');
const config = require('./shared/config');
const logger = require('./shared/logger');


/**
 * Logger: Writes Http request methods to a file in the applications root directory
 */
let logDirectory = path.join(__dirname, '../log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

let accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
});

/**
 * MongoDB setup
 */
mongoose.connect('mongodb://' + config.database.username + ':'
  + config.database.password + '@'
  + config.database.url + ':'
  + config.database.port + '/'
  + config.database.name, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
  .then(() => console.debug('Connection to the MongoDB instance was successful'))
  .catch((err) => console.debug('MongoDB Error: ' + err.message));

let app = express();

/**
 * Express using statements
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(morgan('combined', {stream: accessLogStream}));
app.use(cors());

/**
 * Configure Express to serve the Angular application as static HTML/JavaScript
 */
app.use(express.static(path.join(__dirname, '../dist/bcrs-seed')));
app.use('/', express.static(path.join(__dirname, '../dist/bcrs-seed')));


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

http.createServer(app).listen(config.web.port, function() {
  // Logs a messages to the log/access.log file
  logger.debug('Application started and listening on port ' + config.web.port + '!');

  // logs a message to console debugger window
  console.log('Application started and listening on port ' + config.web.port + '!');
});
