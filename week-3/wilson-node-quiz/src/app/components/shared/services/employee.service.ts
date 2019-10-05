

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Employee } from 'server/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { };

  // Create employee
  CreateEmployee(data: Employee): Observable<any> {
    let API_URL = `${this.endpoint}/create-employee`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt))
  };

  // Read all employees
  ReadEmployees() {
    return this.http.get(`${this.endpoint}`);
  };

  // Read one employee by id
  ReadEmployee(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-employee/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  };

  // Update Employee
  UpdateEmployee(id, data: Employee): Observable<any> {
    let API_URL = `${this.endpoint}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  };

  // Delete Employee
  DeleteEmployee(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-student/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    )
  };

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
