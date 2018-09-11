import { Injectable } from '@angular/core';
import { Notification } from './iNotification';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationDataApi: string = 'api/notificationDate';

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.notificationDataApi).pipe(
      // tap(data => console.log(JSON.stringify(data)))
    )
  }
}
