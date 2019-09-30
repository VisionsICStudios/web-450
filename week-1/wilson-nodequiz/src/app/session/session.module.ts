/*
============================================
; Title:  session.module.ts (Week 1)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 15 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SessionRoutes } from './session.routing';

@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes)
  ]
})
export class SessionModule { }
