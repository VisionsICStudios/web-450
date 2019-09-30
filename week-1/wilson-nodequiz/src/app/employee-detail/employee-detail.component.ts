/*
============================================
; Title: employee-detail.component.ts (Week 2)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 29 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employeeId: string;
  employee: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) {
    this.employeeId = this.route.snapshot.paramMap.get('id');

    this.http.get('/api/employees/' + this.employeeId).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    }, err => {
      console.log(err);
    });
  }
  ngOnInit() {
  }
}
