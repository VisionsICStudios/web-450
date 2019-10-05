/*
============================================
; Title:  result.js (Week 3)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({

  resultId: String,
  resultQuestion: Object,
  resultAnswerChoice: Object,
  resultCorrectAnswer: Object,
  resultIsCorrect: Boolean,

}, {collection: 'results'});

let Result = mongoose.model('result', resultSchema);

module.exports = Result;
