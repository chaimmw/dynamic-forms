import { NgModule } from '@angular/core';

import { CustomFormComponent } from './custom-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [CustomFormComponent],
  declarations: [CustomFormComponent],
  providers: [],
})
export class CustomFormModule { }
