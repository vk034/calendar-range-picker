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
    // let tempFromDate: any;
    // this.calendarDateFilterService.fromDateObservable.subscribe(fromDate => {
    //   tempFromDate = fromDate;
    //   this._fromDate = fromDate.month+'/'+fromDate.day+'/'+fromDate.year;
    //   this.getFilterDate();
    // });
    // this.calendarDateFilterService.toDateObservable.subscribe(toDate => {
    //   if(toDate != null){
    //     this._toDate = toDate.month+'/'+toDate.day+'/'+toDate.year;
    //   }else{
    //     this._toDate = tempFromDate.month+'/'+tempFromDate.day+'/'+tempFromDate.year;
    //   }
    //   this.getFilterDate();
    // });
  }
  //First Filter Changed
  firstFilterChanged(event: any){
    // console.log(`First filter changed : ${JSON.stringify(event)}`);
    this.airlineService.getAirLines().subscribe(airLineData =>{
      this.airLines_1 = airLineData.filter(air =>{
        if(new Date(air.travel_date).getTime() >= new Date(event.fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(event.toDate).getTime()){
          return true;
        }else{
          return false;
        }
      })
    })
    // console.log(`First Filter Data : ${JSON.stringify(this.airLines_2)}`);
  }
  //Second Filter Changed
  secondFilterChanged(event: any){
    // console.log(`Second filter changed : ${JSON.stringify(event)}`);
    this.airlineService.getAirLines().subscribe(airLineData =>{
      this.airLines_2 = airLineData.filter(air =>{
        if(new Date(air.travel_date).getTime() >= new Date(event.fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(event.toDate).getTime()){
          return true;
        }else{
          return false;
        }
      })
    })
    // console.log(`Second Filter Data : ${JSON.stringify(this.airLines_2)}`);
  }
  // Getting data and Filter
  // getFilterDate(){
  //   this.airlineService.getAirLines().subscribe(airLineData =>{
  //     this.airLines = airLineData.filter(air =>{
  //       if(new Date(air.travel_date).getTime() >= new Date(this._fromDate).getTime() && new Date(air.travel_date).getTime() <= new Date(this._toDate).getTime()){
  //         return true;
  //       }else{
  //         return false;
  //       }
  //     })
  //   })
  // }
}
