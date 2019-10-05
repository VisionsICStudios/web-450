/*
============================================
; Title:  employee.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

  employeeId: String,
  firstName: String,
  lastName: String
}, {collection: 'employees'});

let Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;
