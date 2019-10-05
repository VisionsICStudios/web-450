

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Total } from 'server/models/Total';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor() { }
}
