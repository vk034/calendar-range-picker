import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { NotificationComponent } from './notification.component';

const notificationRoutes: Routes = [
  { path: 'notification', component: NotificationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(notificationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotificationRoutingModule { }
