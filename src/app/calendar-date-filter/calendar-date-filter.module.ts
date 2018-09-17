import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDateFilterComponent } from './calendar-date-filter.component';
import { CalendarDialogComponent } from './calendar-dialog.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    CalendarDateFilterComponent, 
    CalendarDialogComponent
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    CalendarDateFilterComponent,
    CalendarDialogComponent,
    NgbDatepickerModule
  ],
  entryComponents: [
    CalendarDialogComponent
  ]
})
export class CalendarDateFilterModule { }
