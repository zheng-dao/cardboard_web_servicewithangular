import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import {MessageModel} from '../models/message';
import {NotificationModel} from '../models/notification'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<MessageModel[]> {
    return this.http.get<MessageModel[]>('/assets/JsonData/header/message.json');
  }
  getNotifications(): Observable<NotificationModel[]> {
    return this.http.get<NotificationModel[]>('/assets/JsonData/header/notification.json');
  }

}
