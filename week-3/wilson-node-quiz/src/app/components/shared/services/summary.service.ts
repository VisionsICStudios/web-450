

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Summary } from 'server/models/Summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor() { }
}
