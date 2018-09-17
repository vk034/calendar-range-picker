import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterDateCalendarComponent } from './filter-date-calendar.component';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { CalendarDateFilterModule } from '../calendar-date-filter/calendar-date-filter.module';

@NgModule({
  declarations: [
    FilterDateCalendarComponent,
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    CalendarDateFilterModule
  ],
  exports: [
    NgbDatepickerModule,
    FilterDateCalendarComponent,
    DateRangePickerComponent
  ],
  entryComponents: [
    DateRangePickerComponent
  ]
})
export class FilterDateCalendarModule { }
