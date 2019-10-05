

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuizRoutes } from './quiz.routing';

import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [ QuizComponent ],
  exports: [ QuizComponent ],
  imports: [ RouterModule.forChild( QuizRoutes ), CommonModule, ]
})

export class QuizModule { }
