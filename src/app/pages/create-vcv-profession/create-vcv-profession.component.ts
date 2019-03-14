import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-vcv-profession',
  templateUrl: './create-vcv-profession.component.html',
  styleUrls: ['./create-vcv-profession.component.scss']
})
export class CreateVcvProfessionComponent implements OnInit {

  @ViewChild('listContainer') listContainer:ElementRef;  
  @ViewChild('list') list:ElementRef;

  currentPage:number=0;
  selectedIndex:number=0;
 
  public professions=[
    {name:"Designer", junior:false, senior:false, executive:false},
    {name:"Developer", junior:false, senior:false, executive:false},
    {name:"Physician", junior:false, senior:false, executive:false},
    {name:"Teacher", junior:false, senior:false, executive:false},
    {name:"Technician", junior:false, senior:false, executive:false},
    {name:"Accountant", junior:false, senior:false, executive:false},
    {name:"Pharmacist", junior:false, senior:false, executive:false},
    {name:"Laborer", junior:false, senior:false, executive:false},
    {name:"Lawyer", junior:false, senior:false, executive:false},
    {name:"Engineer", junior:false, senior:false, executive:false},
    {name:"Dietitian", junior:false, senior:false, executive:false},
    {name:"Psychologist", junior:false, senior:false, executive:false},
    {name:"Pharmacist", junior:false, senior:false, executive:false},
    {name:"Laborer", junior:false, senior:false, executive:false},
    {name:"Lawyer", junior:false, senior:false, executive:false},
    {name:"Engineer", junior:false, senior:false, executive:false},
    {name:"Physician", junior:false, senior:false, executive:false},
    {name:"Teacher", junior:false, senior:false, executive:false},
    {name:"Technician", junior:false, senior:false, executive:false},
    {name:"Accountant", junior:false, senior:false, executive:false},
    {name:"Pharmacist", junior:false, senior:false, executive:false},
    {name:"Laborer", junior:false, senior:false, executive:false},
    {name:"Lawyer", junior:false, senior:false, executive:false},
    {name:"Lawyer", junior:false, senior:false, executive:false},
    {name:"Engineer", junior:false, senior:false, executive:false},
    {name:"Dietitian", junior:false, senior:false, executive:false},
    {name:"Psychologist", junior:false, senior:false, executive:false},
    {name:"Pharmacist", junior:false, senior:false, executive:false},
    {name:"Laborer", junior:false, senior:false, executive:false},
    {name:"Lawyer", junior:false, senior:false, executive:false},
    {name:"Engineer", junior:false, senior:false, executive:false},
    {name:"Physician", junior:false, senior:false, executive:false},
    {name:"Teacher", junior:false, senior:false, executive:false},
    {name:"Technician", junior:false, senior:false, executive:false},
    {name:"Accountant", junior:false, senior:false, executive:false},
    {name:"Pharmacist", junior:false, senior:false, executive:false},
    {name:"Laborer", junior:false, senior:false, executive:false},
    {name:"Lawyer", junior:false, senior:false, executive:false}
  ];

  public sliceProfessions:any[];
  constructor() { }

  ngOnInit() {
    this.sliceProfessions=this.professions.slice(0, 11);
  }

  onDisplaySet(event){ 
    if(event.srcElement.className=="fa  fa-angle-up ctrl"){
      event.srcElement.className="fa  fa-angle-down ctrl";  
      this.listContainer.nativeElement.style.height='15px';  
    }       
    else{
      event.srcElement.className="fa  fa-angle-up ctrl";
      this.listContainer.nativeElement.style.height='660px';
    }
  }

  onMouseEnter(target){
     target.style.backgroundColor="#F5F8FF"; 
     target.firstChild.firstChild.style.opacity=1.0;  // show icon
     target.firstChild.lastChild.style.color="#306DFF"; // profession color
     for(let i=0; i<target.lastChild.children.length;i++){  //checkbox label color
      target.lastChild.children[i].lastChild.style.color="#19203A";
     }    
  }
  onMouseLeave(target){
    target.style.backgroundColor=""; 
    target.firstChild.firstChild.style.opacity=0.0;  // show icon
    target.firstChild.lastChild.style.color=""; // profession color
    for(let i=0; i<target.lastChild.children.length;i++){  //checkbox label color      
     target.lastChild.children[i].lastChild.style.color="";
    }    
  }

  onClick( target){  
    let value=target.value;
    let items=target.parentElement.parentElement.children;
     for(let i=0; i<items.length;i++){       
       if(items[i].firstChild.value!=value)        
             items[i].firstChild.checked=false;      
     }     
  }

  setPagination(index:number){
    // let current=this.currentSelectedIndex.nativeElement.value;
    // let clientHeightforContainer=this.listContainer.nativeElement.clientHeight;
    // let ClientHeightforList=this.list.nativeElement.clientHeight;
    // let ClientTopforList=this.list.nativeElement.clientTop;
    // let currentValuableHeight=ClientHeightforList+ClientTopforList;
   
  }

}
