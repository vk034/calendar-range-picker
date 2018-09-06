import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { AirLines } from '../shared/iAirLines';
import { AirlineService } from '../shared/airline.service';

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.css']
})
export class FilterDateComponent implements OnInit {

  airLines: AirLines[];
  filterAirLines : AirLines[];
  _fromDate: any = new DatePipe('en-IN').transform(Date.now(),'M/dd/yyyy');
  _toDate: any = new DatePipe('en-IN').transform(Date.now() + (5 * 24 * 60 * 60 * 1000),'M/dd/yyyy');
  minDate = new Date(this._fromDate);

  fromDateCtrl = new FormControl(new Date(this._fromDate));
  toDateCtrl = new FormControl(new Date(this._toDate));

  constructor(private airlineService: AirlineService) {  }

  ngOnInit() {
    this.getFilterDate();
  }

  getFilterDate() {
    this.airlineService.getAirLines().subscribe(airLineData =>{
      this.filterAirLines = airLineData.filter(air =>{
        if(new Date(air.travel_date).getTime() >= new Date(this._fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(this._toDate).getTime()){
          return true;
        }else{
          return false;
        }
      })
    })
  }
  getFromDate(event: MatDatepickerInputEvent <Date>){
    this._fromDate = new DatePipe('en-IN').transform(event.value,'M/dd/yyyy');
    this.minDate = new Date(this._fromDate);
    this.getFilterDate();
    
    // console.log(`fromDate : ${this._fromDate}`);
  }

  getToDate(event: MatDatepickerInputEvent <Date>){
    this._toDate = new DatePipe('en-IN').transform(event.value,'M/dd/yyyy');
    this.getFilterDate();
    // console.log(`toDate : ${this._toDate}`);
  }
}
