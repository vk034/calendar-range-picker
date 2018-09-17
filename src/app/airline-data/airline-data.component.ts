import { Component, OnInit } from '@angular/core';
import { AirLines } from '../shared/iAirLines';
import { AirlineService } from '../shared/airline.service';
import { CalendarDateFilterService } from '../calendar-date-filter/calendar-date-filter.service';

@Component({
  selector: 'app-airline-data',
  templateUrl: './airline-data.component.html',
  styleUrls: ['./airline-data.component.css']
})
export class AirlineDataComponent implements OnInit {

  airLines_1: AirLines[];
  airLines_2: AirLines[];
  _fromDate: any;
  _toDate: any;

  constructor(
    private airlineService: AirlineService,
    private calendarDateFilterService: CalendarDateFilterService

  ) { }

  ngOnInit() {
  }
  //First Filter Changed
  firstFilterChanged(event: any){
    this.airlineService.getAirLines().subscribe(airLineData =>{
      this.airLines_1 = airLineData.filter(air =>{
        if(new Date(air.travel_date).getTime() >= new Date(event.fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(event.toDate).getTime()){
          return true;
        }else{
          return false;
        }
      })
    })
  }
  //Second Filter Changed
  secondFilterChanged(event: any){
    this.airlineService.getAirLines().subscribe(airLineData =>{
      this.airLines_2 = airLineData.filter(air =>{
        if(new Date(air.travel_date).getTime() >= new Date(event.fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(event.toDate).getTime()){
          return true;
        }else{
          return false;
        }
      })
    })
  }
}
