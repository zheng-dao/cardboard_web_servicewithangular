import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  state_list:any[]
  constructor() { 
    this.state_list=[false,false,false,false,false,false,false,false,false,false];
  }

}
