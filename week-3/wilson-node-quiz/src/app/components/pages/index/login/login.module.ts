

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routing';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [ LoginComponent ],
  exports:[ LoginComponent ],
  imports: [ RouterModule.forChild( LoginRoutes ), CommonModule, FormsModule ]
})
export class LoginModule { }
