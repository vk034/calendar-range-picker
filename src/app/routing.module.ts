import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterDateCalendarComponent } from './filter-date-calendar/filter-date-calendar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/nagen1', pathMatch: 'full' },
  { path: 'task1', component: FilterDateCalendarComponent},
  { path: 'nagen1', component: RegisterComponent},
  { path: '**', redirectTo: '/nagen1', pathMatch: 'full' }
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
