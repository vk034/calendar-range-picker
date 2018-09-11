import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

export class Date{
  year: number;
  month: number;
  day: number;
  constructor(year:number, month:number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

@Injectable({
  providedIn: 'root'
})

export class FilterDateCalendarService {

  private fromDate: any;
  fromDateObservable: any;
  private toDate: any;
  toDateObservable: any;

  constructor(private calendar: NgbCalendar) {
    let tempFromDate = this.calendar.getToday();
    let tempToDate = this.calendar.getNext(this.calendar.getToday(), 'd', 7);

    this.fromDate = new BehaviorSubject<Date>(new Date(tempFromDate.year, tempFromDate.month, tempFromDate.day));
    this.fromDateObservable = this.fromDate.asObservable();
    this.toDate = new BehaviorSubject<Date>(new Date(tempToDate.year, tempToDate.month, tempToDate.day));
    this.toDateObservable = this.toDate.asObservable();
  }

  changeFromDate(fromDate: Date){
    this.fromDate.next(fromDate);
  }

  changeToDate(toDate: Date){
    this.toDate.next(toDate);
  }
}
