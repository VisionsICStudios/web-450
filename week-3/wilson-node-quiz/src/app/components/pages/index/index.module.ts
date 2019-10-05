import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
import { ResetComponent } from './reset/reset.component';
import { RefusedComponent } from './refused/refused.component';
import { RegisterComponent } from './register/register.component';

@NgModule({

  imports: [ CommonModule, RouterModule, FormsModule ],
  declarations: [ IndexComponent, ResetComponent, RefusedComponent, RegisterComponent ],
  exports: [ IndexComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class IndexModule {}
