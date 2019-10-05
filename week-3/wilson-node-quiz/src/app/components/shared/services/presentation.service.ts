
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Presentation } from 'server/models/Presentation';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor() { }
}
