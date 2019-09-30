/*
============================================
; Title:  app.module.ts (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 Sept 2019
; Description: MEAN Node Quiz.
;===========================================
*/

// Modules.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'
import { MaterialModule } from './modules/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Components.
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './shared/main/main.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    EmployeeDetailComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MDBBootstrapModule
  ],
  providers: [ CookieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
