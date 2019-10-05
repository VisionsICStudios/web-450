/*
============================================
; Title:  question.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({

  answerId: String, // Match questionId
  text: String,
  isCorrect: Boolean

}, { collection: 'answers' });

const questionSchema = new Schema({

  questionId: String, // Match AnswerId
  questionCount: Number,
  sentence: String,
  answers: []
}, { collection: 'questions' });

let Question = mongoose.model('question', questionSchema);

module.exports = Question;
