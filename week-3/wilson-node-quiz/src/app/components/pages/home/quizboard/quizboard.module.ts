

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuizboardRoutes } from './quizboard.routing';

import { QuizboardComponent } from './quizboard.component';

@NgModule({
  declarations: [ QuizboardComponent ],
  exports: [ QuizboardComponent ],
  imports: [ RouterModule.forChild( QuizboardRoutes ), CommonModule, ]
})

export class QuizboardModule { }
