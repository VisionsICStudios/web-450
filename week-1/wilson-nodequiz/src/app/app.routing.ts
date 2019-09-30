/*
============================================
; Title:  app.routing.ts (Week 1)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 15 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared';
import { AuthLayoutComponent } from './shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
    ]
  },
  { path: 'session', component: AuthLayoutComponent, children: [
      { path: '', loadChildren: './session/session.module#SessionModule' }
    ]
  },
  { path: '**', redirectTo: 'session/404' }
];
