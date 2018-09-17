import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterDateCalendarComponent } from './filter-date-calendar/filter-date-calendar.component';
import { AirlineDataComponent } from './airline-data/airline-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/newcalendar', pathMatch: 'full' },
  { path: 'calendar', component: FilterDateCalendarComponent },
  {path: 'newcalendar', component: AirlineDataComponent },
  { path: '**', redirectTo: '/newcalendar', pathMatch: 'full' }
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
