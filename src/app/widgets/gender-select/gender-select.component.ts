import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.scss']
})
export class GenderSelectComponent implements OnInit {

  gender_select: number = 1; // value=1:all_gender selected, 2:male, 3:female
  is_show_wrapper: boolean = true;

  @ViewChild('showControl') showControl: ElementRef;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'all_gender',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/all_gender.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'male_gender',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/male_gender.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'female_gender',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/female_gender.svg')
    );
  }

  ngOnInit() {
  }

  self_select(index: number) {
    this.gender_select = index;
  }
  toggleShow() {
    this.is_show_wrapper = !this.is_show_wrapper;
    let nativeElement = this.showControl.nativeElement;
    if (this.is_show_wrapper == true)
      nativeElement.innerHTML = "-";
    else
      nativeElement.innerHTML = "+";
  }

}
