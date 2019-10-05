

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Quiz } from 'server/models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
}
