/*
============================================
; Title:  session.routing.ts (Week 1)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 15 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

// Angular imports
import { Routes } from '@angular/router';

// Session component imports
import { NotFoundComponent } from './not-found/not-found.component';

export const SessionRoutes: Routes = [
  
  { path: '', children: [
      { path: '404', component: NotFoundComponent }
    ] }
];
