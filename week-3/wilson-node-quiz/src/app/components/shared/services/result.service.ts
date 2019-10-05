

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Result } from 'server/models/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }
}
