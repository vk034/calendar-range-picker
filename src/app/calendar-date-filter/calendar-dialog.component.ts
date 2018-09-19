import { Component, OnInit, Inject } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
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
  todayDate: NgbDate;
  fromDateDisplay: string;
  toDateDisplay: string;
  componentService: any;
  dialogId: string;
  fromDateValidate: NgbDate;
  toDateValidate: NgbDate;
  dateError: string = '';

  constructor(
    // private calendarDateFilterService: CalendarDateFilterService, 
    private calendar: NgbCalendar,
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private defaultValue: any
  ) {
    this.fromDate = this.defaultValue.fromDate;
    this.toDate = this.defaultValue.toDate;

    this.fromDateValidate = new NgbDate(this.fromDate.year, this.fromDate.month, this.fromDate.day);
    this.toDateValidate = new NgbDate(this.toDate.year, this.toDate.month, this.toDate.day);

    this.fromDateDisplay = this.fromDate.month+'/'+this.fromDate.day+'/'+this.fromDate.year;
    this.toDateDisplay = this.toDate.month+'/'+this.toDate.day+'/'+this.toDate.year;

    this.dateForm.controls.fromDateCtrl.setValue(this.fromDateDisplay);
    this.dateForm.controls.toDateCtrl.setValue(this.toDateDisplay);

    // console.log(`${JSON.stringify(this.calendar.getToday())}`)
    let todayObj = this.calendar.getToday();
    this.todayDate = new NgbDate(todayObj.year, todayObj.month, todayObj.day);
    // console.log(`${typeof this.todayDate}`);
  }

  ngOnInit() {
    this.componentService.changeFromDate(this.fromDate);
    this.componentService.changeToDate(this.toDate);
  }

  
  dateForm = new FormGroup({
    fromDateCtrl: new FormControl('',[Validators.required, Validators.pattern('^([1-9]|1[0-2])[/]([1-9]|[12][0-9]|3[01])[/](20)\\d\\d$')]),
    toDateCtrl: new FormControl('',[Validators.required, Validators.pattern('^([1-9]|1[0-2])[/]([1-9]|[12][0-9]|3[01])[/](20)\\d\\d$')])
  })

  get dateInputs() {
    return this.dateForm.controls;
  }
  // Select Dates in Calendar
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.fromDateDisplay = date.month+'/'+date.day+'/'+date.year;
      this.dateForm.controls.fromDateCtrl.setValue(this.fromDateDisplay);
      console.log(`if hit`)
      console.log(`${this.fromDateDisplay}`)
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.toDateDisplay = date.month+'/'+date.day+'/'+date.year;
      this.dateForm.controls.toDateCtrl.setValue(this.toDateDisplay);
      console.log(`elseif hit`)
      console.log(`To : ${this.toDateDisplay}`)
    } else {
      this.toDate = null;
      this.toDateDisplay = date.month+'/'+date.day+'/'+date.year;
      this.fromDate = date;
      this.fromDateDisplay = date.month+'/'+date.day+'/'+date.year;

      this.dateForm.controls.fromDateCtrl.setValue(this.fromDateDisplay);
      console.log(`else hit`)
      console.log(`From : ${this.fromDateDisplay} To : ${this.toDateDisplay}`)
    }
    console.log(`Get From : ${this.dateForm.controls.fromDateCtrl.value}`);
    // this.componentService.changeFromDate()
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
  // Done or Close Button
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

  onOutsideClick(event) {
    const element: Element = document.getElementById(this.dialogId);
    if (!element.contains(event.relatedTarget)) {
      this.dialogClose();
    }
  }

  changeFromDateDialog(value: any){
    let obj = value.split('/');
    this.fromDateValidate = new NgbDate(parseInt(obj[2]), parseInt(obj[0]), parseInt(obj[1]));
    if(this.fromDateValidate.before(this.toDateValidate)){
      console.log(`from date hit------> true`)
      this.dateError = '';
      if(obj[0] != '' && obj[1] != '' && obj[2] != ''){
        this.onDateSelection(this.fromDateValidate);
      }else{
        this.onDateSelection(this.todayDate);
      }
    }else{
      console.log(`from date hit------> false`)
      this.dateError = 'Pick correct dates';
    }
  }

  changeToDateDialog(value: any){
    let obj = value.split('/');
    this.toDateValidate = new NgbDate(parseInt(obj[2]), parseInt(obj[0]), parseInt(obj[1]));
    if(this.toDateValidate.after(this.fromDateValidate)){
      console.log(`to date hit------> true`)
      this.dateError = '';
      if(obj[0] != '' && obj[1] != '' && obj[2] != ''){
        this.onDateSelection(this.toDateValidate);
      }else{
        this.onDateSelection(this.todayDate);
      }
    }else{
      console.log(`to date hit------> false`)
      this.dateError = 'Pick correct dates';
    }
    
  }
}
