/*
============================================
; Title:  app.routing.ts (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN Node Quiz.
;===========================================
*/


import { Routes } from '@angular/router';
import { IndexRoutes } from './components/pages/index/index.routing';
import { HomeRoutes } from './components/pages/home/home.routing';
import { NotFoundRoutes } from './components/pages/not-found/not-found.routing';


export const routes: Routes = [ ...HomeRoutes, ...IndexRoutes,  ...NotFoundRoutes ];
