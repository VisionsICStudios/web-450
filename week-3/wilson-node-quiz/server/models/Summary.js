/*
============================================
; Title:  summary.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const summarySchema = new Schema({

  summaryId: String,
  summaryEmployee: Object,
  summaryQuestionOne: Object,
  summaryQuestionTwo: Object,
  summaryQuestionThree: Object,
  summaryQuestionFour: Object,
  summaryQuestionFive: Object,
  summaryQuestionSix: Object,
  summaryQuestionSeven: Object,
  summaryQuestionEight: Object,
  summaryQuestionNine: Object,
  summaryQuestionTen: Object,
  summaryResultTotal: Object

}, {collection: 'summaries'});

let summary = mongoose.model('summary', summarySchema);

module.exports = summary;
