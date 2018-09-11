import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { 
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class NotificationModule { }
