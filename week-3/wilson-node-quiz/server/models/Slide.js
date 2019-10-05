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

const slideSchema = new Schema({

  slideId: String,
  slideCount: Number,
  slide: String
}, {collection: 'slides'});

let Slide = mongoose.model('slide', slideSchema);

module.exports = Slide;
