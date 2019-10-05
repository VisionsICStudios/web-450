/*
============================================
; Title:  presentation.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presentationSchema = new Schema({

  presentationId: String,
  slides: Array,
}, {collection: 'presentations'});

let Presentation = mongoose.model('presentation', presentationSchema);

module.exports = Presentation;

