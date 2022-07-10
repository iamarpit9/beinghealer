import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [CalenderComponent],
  imports: [CommonModule, CalenderRoutingModule, SharedModule],
})
export class CalenderModule {}
