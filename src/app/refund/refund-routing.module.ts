import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RefundComponent} from "./refund.component";

const routes: Routes = [
  {
    path: '',
    component: RefundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RefundRoutingModule { }
