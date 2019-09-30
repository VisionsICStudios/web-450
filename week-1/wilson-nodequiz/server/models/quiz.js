/*
============================================
; Title:  quiz.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({

  quizId: String,
  quizArray: Array,
  quizGroupOne: Object,
  quizGroupTwo: Object,
  quizGroupThree: Object,
  quizGroupFour: Object,
  quizGroupFive: Object,
  quizGroupSix: Object,
  quizGroupSeven: Object,
  quizGroupEight: Object,
  quizGroupNine: Object,
  quizGroupTen: Object,
}, {collection: 'quizzes'});

let Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz;
