import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CalendarDateFilterService } from './calendar-date-filter.service';
import { CalendarDialogComponent } from './calendar-dialog.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { NgbCalendar } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar-date-filter',
  templateUrl: './calendar-date-filter.component.html',
  styleUrls: ['./calendar-date-filter.component.css'],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },CalendarDateFilterService]
})
export class CalendarDateFilterComponent implements OnInit {
  
  @ViewChild('calendar') calendarRef: ElementRef;
  @Output() dateChange = new EventEmitter();
  _fromDate: any;
  _toDate: any;
  dialogFromDate: any;
  dialogToDate: any;
  randomID = Math.floor((Math.random() * 100) + 1);
  tempToDateObj: Object;
  tempToDate: string;

  constructor(
    private calendarDateFilterService: CalendarDateFilterService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    private overlay: Overlay,
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
    this.calendarDateFilterService.fromDateObservable.subscribe(fromDate => {
      this.dialogFromDate = fromDate;
      this._fromDate = fromDate.month+'/'+fromDate.day+'/'+fromDate.year;
      // If user click only from date
      this.tempToDateObj = this.calendar.getNext(fromDate, 'd', 50);
      let year = this.tempToDateObj[Object.keys(this.tempToDateObj)[0]];
      let month = this.tempToDateObj[Object.keys(this.tempToDateObj)[1]];
      let day = this.tempToDateObj[Object.keys(this.tempToDateObj)[2]];
      this.tempToDate = month+'/'+day+'/'+year;
      this.dateChange.emit({
        fromDate: this._fromDate,
        toDate: this._toDate
      });
    });
    this.calendarDateFilterService.toDateObservable.subscribe(toDate => {
      if(toDate != null){
        this.dialogToDate = toDate;
        this._toDate = toDate.month+'/'+toDate.day+'/'+toDate.year;
        this.dateChange.emit({
          fromDate: this._fromDate,
          toDate: this._toDate
        });
      }else{
        // console.log(`toDate : ${JSON.stringify(toDate)}`);
        this.dialogToDate = this.dialogFromDate;
        this._toDate = this.dialogToDate.month+'/'+this.dialogToDate.day+'/'+this.dialogToDate.year;
        this.dateChange.emit({
          fromDate: this._fromDate,
          toDate: this.tempToDate
          // toDate: this._toDate
        });
      }
    });
  }
  // Calendar Dialog Function
  openCalendar(){
    const offsetValues = this.calendarRef.nativeElement.getBoundingClientRect();
    const offsetLeft = ((offsetValues.right - 522) > 0) ? (offsetValues.right - 522) : 0 ;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '522px';
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = false;
    dialogConfig.id = this.randomID + 'calendarRange';
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    dialogConfig.data = {
      fromDate: this.dialogFromDate,
      toDate: this.dialogToDate
    };
    dialogConfig.position = {
      top: offsetValues.top + 'px',
      left: offsetLeft + 'px',
    }
    this.dialogRef = this.dialog.open(CalendarDialogComponent, dialogConfig);
    this.dialogRef.componentInstance.dialogId = this.randomID + 'calendarRange';
    this.dialogRef.componentInstance.componentService = this.calendarDateFilterService;
  }
}
