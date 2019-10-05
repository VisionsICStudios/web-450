

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RefusedRoutes } from './refused.routing';

import { RefusedComponent } from './refused.component';

@NgModule({
  declarations: [ RefusedComponent ],
  exports:[ RefusedComponent ],
  imports: [ RouterModule.forChild( RefusedRoutes ), CommonModule, FormsModule ]
})

export class RefusedModule { }
