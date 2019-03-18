import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMember} from '../models/chat';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) {    
   }

   getChatMembers(): Observable<ChatMember[]>{
    return this.http.get<ChatMember[]>("/assets/JsonData/chat/member.json");
   }
}
