

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Selection } from 'server/models/Selection';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor() { }
}
