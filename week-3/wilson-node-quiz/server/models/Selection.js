/*
============================================
; Title:  selection.js (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selectionSchema = new Schema({

  selectionId: String,
  button: String,
  isSelected: Boolean
}, {collection: 'selections'});

let Selection = mongoose.model('selection', selectionSchema);

module.exports = Selection;
