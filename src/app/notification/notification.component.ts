import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { NotificationService } from './notification.service';
import { Notification } from './iNotification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificaitonsData: any[] = [];
  displayedColumns: string[] = ['ID', 'Title'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {

    this.notificationService.getNotifications().subscribe(noticeData =>{
      this.notificaitonsData = noticeData;
      this.dataSource = new MatTableDataSource<Notification>(noticeData);
      this.dataSource.paginator = this.paginator;
    })
  }

}