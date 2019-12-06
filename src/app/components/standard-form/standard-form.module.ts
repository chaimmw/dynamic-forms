import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StandardFormComponent } from './standard-form.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [StandardFormComponent],
  declarations: [StandardFormComponent],
  providers: [],
})
export class StandardFormModule { }
