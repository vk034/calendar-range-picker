import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterDateCalendarComponent } from './filter-date-calendar/filter-date-calendar.component';
import { NotificationComponent } from './notification/notification.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: FilterDateCalendarComponent},
  { path: 'notification', component: NotificationComponent },
  { path: 'nagen1', component: RegisterComponent},
  { path: '**', redirectTo: '/calendar', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
