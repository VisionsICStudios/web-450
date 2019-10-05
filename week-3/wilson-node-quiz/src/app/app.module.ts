

// Core
import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

// Layout
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Layout Plugins
import { AngularMaterialModule } from './middleware/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Services
import { CookieService } from '../../node_modules/ngx-cookie-service';
import { PresentationService } from './components/shared/services/presentation.service';
import { QuizService } from './components/shared/services/quiz.service';


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/index/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { QuizboardComponent } from './components/pages/home/quizboard/quizboard.component';
import { SummaryComponent } from './components/pages/home/summary/summary.component';
import { PresentationComponent } from './components/pages/home/presentation/presentation.component';
import { QuizComponent } from './components/pages/home/quiz/quiz.component';
import { AuthComponent } from './components/shared/layouts/auth/auth.component';
import { GlobalComponent } from './components/shared/layouts/global/global.component';
import { HomeComponent } from './components/pages/home/home.component';
import { IndexComponent } from './components/pages/index/index.component';
import { EmployeeComponent } from './components/pages/home/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    QuizboardComponent,
    SummaryComponent,
    PresentationComponent,
    QuizComponent,
    AuthComponent,
    GlobalComponent,
    HomeComponent,
    IndexComponent,
    EmployeeComponent
  ],
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true } ),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CookieService, PresentationService, QuizService, ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
