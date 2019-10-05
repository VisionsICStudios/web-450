

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeRoutes } from './employee.routing';

import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [ EmployeeComponent ],
  exports: [ EmployeeComponent ],
  imports: [ RouterModule.forChild( EmployeeRoutes ), CommonModule, ]
})

export class EmployeeModule { }
