import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpeningPageComponent } from './opening-page.component';

const routes: Routes = [{ path: '', component: OpeningPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpeningPageRoutingModule { }
