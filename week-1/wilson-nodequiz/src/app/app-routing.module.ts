/*
============================================
; Title:  app-routing.module.ts (Week 1)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 15 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './shared';
import { AuthLayoutComponent } from './shared';

const routes: Routes = [

  { path: '', component: BaseLayoutComponent,
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
    ]
  },
  { path: 'session', component: AuthLayoutComponent,
    children: [
      { path: '', loadChildren: './session/session.module#SessionModule' }
    ]
  },
  { path: '**', redirectTo: 'session/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
