import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningPageRoutingModule } from './opening-page-routing.module';
import { OpeningPageComponent } from './opening-page.component';
import { StandardFormModule } from 'src/app/components/standard-form/standard-form.module';
import { CustomFormModule } from 'src/app/components/custom-form/custom-form.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [OpeningPageComponent],
  imports: [
    CommonModule,
    OpeningPageRoutingModule,
    StandardFormModule,
    CustomFormModule,
    FormsModule
  ]
})
export class OpeningPageModule { }
