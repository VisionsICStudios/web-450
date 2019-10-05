/*
============================================
; Title:  total.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
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
