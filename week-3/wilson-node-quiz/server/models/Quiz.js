/*
============================================
; Title:  employee.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 15 September 2019
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
  answers: [ answerSchema ]
}, { collection: 'questions' });

const quizSchema = new Schema({
  function(title) {
    return { title: {
      quizId: String,
      name: String,
      questions: [ questionSchema ]
      }
    }
  }

}, {collection: 'quizzes'});

let Quiz = mongoose.model('quiz', quizSchema, answerSchema, questionSchema);

module.exports = Quiz;
