import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterDateComponent } from './filter-date/filter-date.component';
import { FilterDateCalendarComponent } from './filter-date-calendar/filter-date-calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/task2', pathMatch: 'full' },
  { path: 'task1', component: FilterDateComponent },
  { path: 'task2', component: FilterDateCalendarComponent},
  { path: '**', redirectTo: '/task2', pathMatch: 'full' }
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
