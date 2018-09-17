import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatListModule, MatBadgeModule } from '@angular/material';

import { InMemoryDataService } from './shared/in-memory-data.service';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { FilterDateCalendarModule } from './filter-date-calendar/filter-date-calendar.module';
import { CalendarDateFilterModule } from './calendar-date-filter/calendar-date-filter.module';
import { AirlineDataModule } from './airline-data/airline-data.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    RoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    FilterDateCalendarModule,
    CalendarDateFilterModule,
    AirlineDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
