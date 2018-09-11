import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

import { AirLines } from '../shared/iAirLines';
import { AirlineService } from '../shared/airline.service';
import { FilterDateCalendarService } from '../filter-date-calendar/filter-date-calendar.service';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-filter-date-calendar',
  templateUrl: './filter-date-calendar.component.html',
  styleUrls: ['./filter-date-calendar.component.css'],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }]
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
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DateRangePickerComponent>,
    private overlay: Overlay
  ) { }

  ngOnInit() {
    this.filterDateCalendar.fromDateObservable.subscribe(fromDate => {
      this.dialogFromDate = fromDate;
      this._fromDate = fromDate.month+'/'+fromDate.day+'/'+fromDate.year;
      this.getFilterDate();
    });
    this.filterDateCalendar.toDateObservable.subscribe(toDate => {
      if(toDate != null){
        this.dialogToDate = toDate;
        this._toDate = toDate.month+'/'+toDate.day+'/'+toDate.year;
      }else{
        this.dialogToDate = this.dialogFromDate;
        this._toDate = this.dialogToDate.month+'/'+this.dialogToDate.day+'/'+this.dialogToDate.year;
      }
      this.getFilterDate();
    });
  }
// Getting data and Filter
  getFilterDate(){
    this.airlineService.getAirLines().subscribe(airLineData =>{
      this.airLines = airLineData.filter(air =>{
        if(new Date(air.travel_date).getTime() >= new Date(this._fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(this._toDate).getTime()){
          return true;
        }else{
          return false;
        }
      })
    })
  }
// Calendar Dialog Function
  openCalendar(){
    const offsetValues = this.calendarRef.nativeElement.getBoundingClientRect();
    const offsetLeft = ((offsetValues.right - 522) > 0) ? (offsetValues.right - 522) : 0 ;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '522px';
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = false;
    dialogConfig.id = "calendarRange";
    dialogConfig.panelClass= 'cdk-overlay-container-modified';
    dialogConfig.data = {
      fromDate: this.dialogFromDate,
      toDate: this.dialogToDate
    };
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
    dialogConfig.position = {
      top: offsetValues.top + 'px',
      left: offsetLeft + 'px',
    }
    this.dialogRef = this.dialog.open(DateRangePickerComponent, dialogConfig);
  }
}
