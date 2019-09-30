/*
============================================
; Title:  presentation.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
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

