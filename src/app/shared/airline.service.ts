import { Injectable } from '@angular/core';
import { AirLines } from './iAirLines';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  airLinesApi:string = 'api/airLinesData';

  constructor(private http: HttpClient) { }

  getAirLines(): Observable<AirLines[]> {
    return this.http.get<AirLines[]>(this.airLinesApi).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `Error occured: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
