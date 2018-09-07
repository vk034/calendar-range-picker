import { Component, OnInit, Inject } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilterDateCalendarService } from '../filter-date-calendar.service';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {

  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  fromDateDisplay: string;
  toDateDisplay: string;

  constructor(
    private filterDateCalendar: FilterDateCalendarService, 
    calendar: NgbCalendar,
    public dialogRef: MatDialogRef<DateRangePickerComponent>,
    @Inject(MAT_DIALOG_DATA) private defaultValue: any
  ) {
    // this.fromDate = calendar.getToday();
    // this.toDate = calendar.getNext(calendar.getToday(), 'd', 3);
    // console.log('Dialog : '+JSON.stringify(this.defaultValue));
    this.fromDate = this.defaultValue.fromDate;
    this.toDate = this.defaultValue.toDate;
    this.fromDateDisplay = this.fromDate.month+'/'+this.fromDate.day+'/'+this.fromDate.year;
    this.toDateDisplay = this.toDate.month+'/'+this.toDate.day+'/'+this.toDate.year;
  }

  ngOnInit() {
    this.filterDateCalendar.changeFromDate(this.fromDate);
    this.filterDateCalendar.changeToDate(this.toDate);
  }

  onDateSelection(date: NgbDate) {
    // console.log(date);
    if (!this.fromDate && !this.toDate) {
      // console.log(`FromD: ${JSON.stringify(date)}`);
      console.log('if hit');
      this.fromDate = date;
      this.fromDateDisplay = date.month+'/'+date.day+'/'+date.year;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      console.log('else if hit');
      this.toDate = date;
      this.toDateDisplay = date.month+'/'+date.day+'/'+date.year;
    } else {
      console.log('else hit');
      this.toDate = null;
      // this.toDateDisplay = "To Date?";
      this.toDateDisplay = date.month+'/'+date.day+'/'+date.year;
      this.fromDate = date;
      this.fromDateDisplay = date.month+'/'+date.day+'/'+date.year;
    }
    this.filterDateCalendar.changeFromDate(this.fromDate);
    this.filterDateCalendar.changeToDate(this.toDate);
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

  dialogClose(): void {
    this.dialogRef.close();
  }

  resetCalendar() {
    this.fromDate = null;
    this.toDate = null;
    this.fromDateDisplay = 'From?';
    this.toDateDisplay = 'To?';
  }
}
