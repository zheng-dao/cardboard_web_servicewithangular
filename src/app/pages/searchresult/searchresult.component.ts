import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  is_show:boolean=true;// true:search tab, false:browse tab
  constructor() { }

  ngOnInit() {
    this.is_show=true;
  }

  setShow(index:boolean){
     this.is_show=index;
  }
}
