/*
============================================
; Title: employee-login.component.ts (Week 2)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 29 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {

  errorFlag: string;
  employeeLogin: string;
  form: FormGroup;

  constructor(private cookie: CookieService, private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([ Validators.required, Validators.pattern('^[0-9]*$') ])],
    });
  }

  onSubmit() {
    const apiAddress = 'http://localhost:3000/api/employee/';
    // tslint:disable-next-line: no-string-literal
    const employeeId = this.form.controls['employeeId'].value;

    this.http.get(apiAddress + employeeId).subscribe(res => {
      console.log(res);
      if (res) {
        this.cookie.set('isAuthenticated', 'true', 1);
        this.router.navigate(['/employee-detail']);
      } else {
        this.errorFlag = 'Invalid Employee ID';
      }
    });
  }
}
