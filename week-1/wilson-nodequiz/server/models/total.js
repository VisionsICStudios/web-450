/*
============================================
; Title:  total.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const totalSchema = new Schema({

  totalId: String,
  totalsEmployee: Object,
  totalQuestionsCorrect: String,
  totalPercentageCorrect: String,
  IsPassed: Boolean,

}, {collection: 'totals'});

let Total = mongoose.model('total', totalSchema);

module.exports = Total;
