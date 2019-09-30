/*
============================================
; Title:  app.component.ts (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wilson-nodequiz';

  constructor(private router: Router, private cookie: CookieService) {}

  ngOnIt() {
    const cookieValue: string = this.cookie.get('isAuthenticated');
    if (cookieValue) {
      this.router.navigate(['/employee-detail']);
    } else {
      this.router.navigate(['/employee-login']);
    }
  }
}
