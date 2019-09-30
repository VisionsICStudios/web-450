/*
============================================
; Title:  auth-guards.service.spec.ts (Week 2)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 29 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guards.service';

describe('AuthGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
