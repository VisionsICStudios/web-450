/*
============================================
; Title:  material.module.ts (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule,
         MatBadgeModule, MatSidenavModule, MatListModule, MatGridListModule, MatFormFieldModule, MatInputModule,
         MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatTooltipModule,
         MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
imports: [ CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatBadgeModule, MatListModule,
           MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule,
           MatNativeDateModule, MatChipsModule, MatTooltipModule, MatTableModule, MatPaginatorModule
],

exports: [ MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatBadgeModule, MatListModule, MatGridListModule,
           MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatDatepickerModule, MatChipsModule, MatTooltipModule,
           MatTableModule, MatPaginatorModule
],
providers: [ MatDatepickerModule]
})
export class AngularMaterialModule { }
