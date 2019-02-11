import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  is_log:boolean;
  constructor() { 
    this.is_log = true;
  }

  
  getUserInfo(){
    return this.is_log;
  }
  
  setUserInfo(setting:boolean){
    this.is_log=setting;
  }
  toggle(){
    this.is_log=!this.is_log;
  
  }
}
