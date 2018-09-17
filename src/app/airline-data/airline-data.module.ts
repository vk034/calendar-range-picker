import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineDataComponent } from './airline-data.component';
import { MatCardModule } from '@angular/material';
import { CalendarDateFilterModule } from '../calendar-date-filter/calendar-date-filter.module';

@NgModule({
  declarations: [
    AirlineDataComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CalendarDateFilterModule
  ]
})
export class AirlineDataModule { }
