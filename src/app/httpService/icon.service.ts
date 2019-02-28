import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor( private matIconRegistry: MatIconRegistry,
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

      this.matIconRegistry.addSvgIcon(
        'flag',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_flag.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'house',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_house.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'business',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_business.svg')
      );          
      this.matIconRegistry.addSvgIcon(
        'money',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_money.svg')
      );    
      ///////////////
      this.matIconRegistry.addSvgIcon(
        'title',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_title.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'location',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_location.svg')
      );

      this.matIconRegistry.addSvgIcon(
        'gender',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_gender.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'lang',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_lang.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'com_type',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_com_type.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'salary',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_salary.svg')
      ); 
      //////////////////////
      this.matIconRegistry.addSvgIcon(
        'export',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_export.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'heart',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_heart.svg')
      ); 
    }
}
