import { Component, OnInit, Inject } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { CalendarDateFilterService } from './calendar-date-filter.service';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.css']
})
export class CalendarDialogComponent implements OnInit {

  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  fromDateDisplay: string;
  toDateDisplay: string;
  componentService: any;
  dialogId: string;

  constructor(
    // private calendarDateFilterService: CalendarDateFilterService, 
    calendar: NgbCalendar,
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private defaultValue: any
  ) {
    this.fromDate = this.defaultValue.fromDate;
    this.toDate = this.defaultValue.toDate;
    this.fromDateDisplay = this.fromDate.month+'/'+this.fromDate.day+'/'+this.fromDate.year;
    this.toDateDisplay = this.toDate.month+'/'+this.toDate.day+'/'+this.toDate.year;
  }

  ngOnInit() {
    this.componentService.changeFromDate(this.fromDate);
    this.componentService.changeToDate(this.toDate);
  }

  // Select Dates in Calendar
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.fromDateDisplay = date.month+'/'+date.day+'/'+date.year;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.toDateDisplay = date.month+'/'+date.day+'/'+date.year;
    } else {
      this.toDate = null;
      this.toDateDisplay = date.month+'/'+date.day+'/'+date.year;
      this.fromDate = date;
      this.fromDateDisplay = date.month+'/'+date.day+'/'+date.year;
    }
    this.componentService.changeFromDate(this.fromDate);
    this.componentService.changeToDate(this.toDate);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
  // Done Button
  dialogClose(): void {
    this.dialogRef.close();
  }
  // Reset Button
  resetCalendar() {
    this.fromDate = null;
    this.toDate = null;
    this.fromDateDisplay = 'From';
    this.toDateDisplay = 'To';
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onOutsideClick(event) {
    const element: Element = document.getElementById(this.dialogId);
    if (!element.contains(event.relatedTarget)) {
      this.closeDialog();
    }
  }
}
