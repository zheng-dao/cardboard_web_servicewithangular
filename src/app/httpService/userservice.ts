import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private _http: HttpClient) {
    }

    getAPIUsers(apiUrl, body, options):Observable<any> {
        return this._http.post<any>(apiUrl, body, options)
    }   
}