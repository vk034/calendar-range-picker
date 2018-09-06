import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogConfig, MatDialog } from '@angular/material';

import { AirLines } from '../shared/iAirLines';
import { AirlineService } from '../shared/airline.service';
import { FilterDateCalendarService } from '../filter-date-calendar/filter-date-calendar.service';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-filter-date-calendar',
  templateUrl: './filter-date-calendar.component.html',
  styleUrls: ['./filter-date-calendar.component.css']
})
export class FilterDateCalendarComponent implements OnInit {

  @ViewChild('calendar') calendarRef: ElementRef;
  airLines: AirLines[];
  _fromDate: any;
  _toDate: any;
  dialogFromDate: any;
  dialogToDate: any;

  constructor(
    private airlineService: AirlineService, 
    private filterDateCalendar: FilterDateCalendarService, 
    private calendar: NgbCalendar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    // let tempFromDate = this.calendar.getToday();
    let tempToDate = this.calendar.getNext(this.calendar.getToday(), 'd', 3);
    // this._fromDate = tempFromDate.month+'/'+tempFromDate.day+'/'+tempFromDate.year;
    // this._toDate = tempToDate.month+'/'+tempToDate.day+'/'+tempToDate.year;

    this.filterDateCalendar.fromDateObservable.subscribe(fromDate => {
      this.dialogFromDate = fromDate;
      this._fromDate = fromDate.month+'/'+fromDate.day+'/'+fromDate.year;
      this.getFilterDate();
      // console.log('From Date: '+this._fromDate);
    });
    this.filterDateCalendar.toDateObservable.subscribe(toDate => {
      if(toDate != null){
        this.dialogToDate = toDate;
        this._toDate = toDate.month+'/'+toDate.day+'/'+toDate.year;
      }else{
        // this.dialogToDate = tempToDate;
        this.dialogToDate = this.dialogFromDate;
        this._toDate = this.dialogToDate.month+'/'+this.dialogToDate.day+'/'+this.dialogToDate.year;
        // this._toDate = tempToDate.month+'/'+tempToDate.day+'/'+tempToDate.year;
      }
      this.getFilterDate();
      // console.log('To Date :'+this._toDate);
    });
  }

  getFilterDate(){
    this.airlineService.getAirLines().subscribe(airLineData =>{
      // console.log(`From : ${this._fromDate} and To : ${this._toDate}`);
      this.airLines = airLineData.filter(air =>{
        if(new Date(air.travel_date).getTime() >= new Date(this._fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(this._toDate).getTime()){
          return true;
        }else{
          return false;
        }
      })
    })
  }

  openCalendar(){
    const offsetValues = this.calendarRef.nativeElement.getBoundingClientRect();
    const offsetLeft = ((offsetValues.right - 522) > 0) ? (offsetValues.right - 522) : 0 ;
    const dialogCongfig = new MatDialogConfig();
    dialogCongfig.width = '522px';
    dialogCongfig.data = {
      fromDate: this.dialogFromDate,
      toDate: this.dialogToDate
    };
    dialogCongfig.hasBackdrop = false;
    dialogCongfig.position = {
      // top: offsetValues.top + this.calendarRef.nativeElement.clientHeight + 'px',
      top: offsetValues.top + 'px',
      left: offsetLeft + 'px',
    }
    const dialogRef = this.dialog.open(DateRangePickerComponent, dialogCongfig);
  }
}
