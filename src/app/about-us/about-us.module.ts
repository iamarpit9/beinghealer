import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./about-us.component";

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
