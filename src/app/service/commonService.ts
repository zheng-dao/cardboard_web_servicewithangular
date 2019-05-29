import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppGlobals } from 'src/app/Global'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient,
              private appGlobals: AppGlobals) { }
  
  // get functions
  getRoles(): Observable<any> {
    return this.http.get<any>(this.appGlobals.baseAPIUrl +"/common/employmentrole");
  }


  // get job industries
  getIndustries(): Observable<any> {
    return this.http.get<any>(this.appGlobals.baseAPIUrl +"/common/industry");
  }


}
