import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxRangeSliderModule, DxNumberBoxModule } from 'devextreme-angular';
import {
  MatRadioModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule
} from '@angular/material'
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { DoughnutChartComponent} from 'angular-d3-charts';
// Module for language translate 
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//header and footer component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header1Component } from './header/header1/header1.component';
import { Header2Component } from './header/header2/header2.component';


//pages components
import { SignupComponent } from './pages/signup/signup.component';
import { PortalComponent } from './pages/portal/portal.component';
import { VcvtutoComponent } from './pages/vcvtuto/vcvtuto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagerComponent } from './widgets/pager/pager.component';
import { LinechartComponent } from './widgets/linechart/linechart.component';
import { CountrySelectComponent } from './widgets/country-select/country-select.component';
import { JobsbyroleComponent } from './pages/find-jobs-by-role/find-jobs-by-role.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { ItembuttonComponent } from './widgets/itembutton/itembutton.component';

import { JobTitlesSelectComponent } from './widgets/job-titles-select/job-titles-select.component';
import { LocationsSelectComponent } from './widgets/locations-select/locations-select.component';
import { GenderSelectComponent } from './widgets/gender-select/gender-select.component';
import { LanguageSelectComponent } from './widgets/language-select/language-select.component';
import { CompanyTypeSelectComponent } from './widgets/company-type-select/company-type-select.component';
import { SalarySliderComponent } from './widgets/salary-slider/salary-slider.component';
import { CareerComponent } from './widgets/career/career.component';
import { EmploymentTypeComponent } from './widgets/employment-type/employment-type.component';
import { SpecialtyComponent } from './widgets/specialty/specialty.component';
import { IndustryComponent } from './widgets/industry/industry.component';
import { DateModifiedComponent } from './widgets/date-modified/date-modified.component';
import { JobRoleBrowseComponent } from './widgets/job-role-browse/job-role-browse.component';
import { JobIndustryBrowseComponent } from './widgets/job-industry-browse/job-industry-browse.component';
import { AreaBrowseComponent } from './widgets/area-browse/area-browse.component';
import { EmailconfirmComponent } from './pages/emailconfirm/emailconfirm.component';
import { FindJobsBySectorComponent } from './pages/find-jobs-by-sector/find-jobs-by-sector.component';
import { CustomSelectComponent } from './widgets/custom-select/custom-select.component';
import { FindJobsByLocationComponent } from './pages/find-jobs-by-location/find-jobs-by-location.component';
import { FindJobsByCompanyComponent } from './pages/find-jobs-by-company/find-jobs-by-company.component';
import { AdvancedJobSearchComponent } from './pages/advanced-job-search/advanced-job-search.component';
import { CheckboxGroupComponent } from './widgets/checkbox-group/checkbox-group.component';
import { JobOfferComponent } from './pages/job-offer/job-offer.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { CustomDonutChartComponent } from './widgets/custom-donut-chart/custom-donut-chart.component';
import { MyApplicationComponent } from './pages/my-application/my-application.component';
import { SemiCircleChartComponent } from './widgets/semi-circle-chart/semi-circle-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Header1Component,
    Header2Component,
    PortalComponent,
    SignupComponent,
    VcvtutoComponent,
    DashboardComponent,
    PagerComponent,
    LinechartComponent,
    CountrySelectComponent,
    JobsbyroleComponent,
    SearchresultComponent,
    ItembuttonComponent,
    JobTitlesSelectComponent,
    LocationsSelectComponent,
    GenderSelectComponent,
    LanguageSelectComponent,
    CompanyTypeSelectComponent,
    SalarySliderComponent,
    CareerComponent,
    EmploymentTypeComponent,
    SpecialtyComponent,
    IndustryComponent,
    DateModifiedComponent,
    JobRoleBrowseComponent,
    JobIndustryBrowseComponent,
    AreaBrowseComponent,
    EmailconfirmComponent,
    FindJobsBySectorComponent,
    CustomSelectComponent,
    FindJobsByLocationComponent,
    FindJobsByCompanyComponent,
    AdvancedJobSearchComponent,
    CheckboxGroupComponent,
    JobOfferComponent,
    CompanyProfileComponent,
    DoughnutChartComponent,
    CustomDonutChartComponent,
    MyApplicationComponent,
    SemiCircleChartComponent,


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MultiSelectAllModule,
    DxRangeSliderModule,
    DxNumberBoxModule,
    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    //google-map
   AgmCoreModule.forRoot({apiKey:''}),

  ],
  providers: [
     GoogleMapsAPIWrapper
  ],
  entryComponents: [ItembuttonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
