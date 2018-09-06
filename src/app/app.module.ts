import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatToolbarModule } from '@angular/material';

import { InMemoryDataService } from './shared/in-memory-data.service';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { FilterDateModule } from './filter-date/filter-date.module';
import { FilterDateCalendarModule } from './filter-date-calendar/filter-date-calendar.module';

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
    FilterDateModule,
    FilterDateCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
