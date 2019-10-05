/*
============================================
; Title:  config.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

let config = {};

// web configs
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.encryption_key = '53cr3T';

// database configs - dev
config.database = {};
config.database.username = 'admin';
config.database.password = 'admin';
config.database.port = '27017';
config.database.url = 'cluster0-zmmub.mongodb.net/test?retryWrites=true&w=majority';
config.database.name = 'wilsonnodequiz';


module.exports = config;

