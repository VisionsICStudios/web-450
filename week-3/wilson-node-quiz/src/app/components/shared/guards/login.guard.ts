/*
============================================
; Title:  login.guard.ts (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = this.cookieService.get('isAuthenticated');

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
