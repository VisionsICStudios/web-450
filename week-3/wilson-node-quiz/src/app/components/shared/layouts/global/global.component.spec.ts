/*
============================================
; Title:  global.component.spec.ts (Week 3)
; Author: Professor Krasso
; Modified by: Aaron Wilson
; Date: 2 Oct 2019
; Description: MEAN Node Quiz.
;===========================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalComponent } from './global.component';

describe('GlobalComponent', () => {
  let component: GlobalComponent;
  let fixture: ComponentFixture<GlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
