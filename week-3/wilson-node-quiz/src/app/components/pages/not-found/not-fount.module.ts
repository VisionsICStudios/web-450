

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ NotFoundComponent ],
  exports: [ NotFoundComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NotFoundModule {}
