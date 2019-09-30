/*
============================================
; Title:  employee.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
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

let Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
