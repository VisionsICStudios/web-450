

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SummaryRoutes } from './summary.routes';

import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [ SummaryComponent ],
  exports: [ SummaryComponent ],
  imports: [ RouterModule.forChild( SummaryRoutes ), CommonModule, ]
})

export class SummaryModule { }
