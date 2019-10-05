

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PresentationRoutes } from './presentation.routing';

import { PresentationComponent } from './presentation.component';

@NgModule({
  declarations: [ PresentationComponent ],
  exports: [ PresentationComponent ],
  imports: [ RouterModule.forChild( PresentationRoutes ), CommonModule, ]
})

export class PresentationModule { }
