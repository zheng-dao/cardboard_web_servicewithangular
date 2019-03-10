import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ JobApplicationModal} from '../models/my-application';

@Injectable({
  providedIn: 'root'
})
export class MyApplicationService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<JobApplicationModal> {
    return this.http.get<JobApplicationModal>('/assets/JsonData/my_application.json');
  }
 
}
