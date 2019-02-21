import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentFactory,
  ComponentRef
} from '@angular/core';

import { CommonService } from '../../httpService/common.service';
import { ItembuttonComponent, myinterface } from '../itembutton/itembutton.component';


@Component({
  selector: 'app-locations-select',
  templateUrl: './locations-select.component.html',
  styleUrls: ['./locations-select.component.scss']
})
export class LocationsSelectComponent implements OnInit {


  @ViewChild('itemButtonContainer', { read: ViewContainerRef }) itemButtonContainer: ViewContainerRef;
  index: number = 0;
  itemButttonsRefs: ComponentRef<ItembuttonComponent>[] = [];

  constructor(private httpService: CommonService,
    private CFR: ComponentFactoryResolver) {
    this.getCountries();
  }

  ngOnInit() {
  }
  // get countries from database.
  allCountries: any[];
  getCountries() {
    this.httpService.getCountries().subscribe(data => {
      this.allCountries = data;
    });
  }

  // creat new child 
  onChange(value: string) {
    this.addNewItemButton(value);
  }

  addNewItemButton(value: string) {
    if (value != "") {
      const factory: ComponentFactory<ItembuttonComponent> = this.CFR.resolveComponentFactory(ItembuttonComponent);
      const componentRef: ComponentRef<ItembuttonComponent> = this.itemButtonContainer.createComponent(factory);
      componentRef.instance.name = value;

      componentRef.instance.index = ++this.index;

      // prividing parent Component reference to get access to parent class methods
      componentRef.instance.compInteraction = this;

      this.itemButttonsRefs.push(componentRef);

    }
  }

  remove(index: number) {
    if (this.itemButtonContainer.length < 1)
      return;
    // get child for removing 
    let componentRef = this.itemButttonsRefs.filter(x => x.instance.index == index)[0];
    let component: ItembuttonComponent = <ItembuttonComponent>componentRef.instance;

    let containerIndex: number = this.itemButttonsRefs.indexOf(componentRef);

    // removing component from container
    this.itemButtonContainer.remove(containerIndex);

    this.itemButttonsRefs = this.itemButttonsRefs.filter(x => x.instance.index !== index);

  }

  allDelete() {

    this.itemButtonContainer.clear();
    this.itemButttonsRefs = [];
  }

}
