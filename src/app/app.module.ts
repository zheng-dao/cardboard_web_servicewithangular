import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
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
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
// import { DoughnutChartComponent } from 'angular-d3-charts';
import { NgScrollbarModule } from 'ngx-scrollbar';

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
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagerComponent } from './widgets/pager/pager.component';
import { LinechartComponent } from './widgets/linechart/linechart.component';
import { ItembuttonComponent } from './widgets/itembutton/itembutton.component';

import { GenderSelectComponent } from './widgets/gender-select/gender-select.component';
import { LanguageSelectComponent } from './widgets/language-select/language-select.component';
import { CompanyTypeSelectComponent } from './widgets/company-type-select/company-type-select.component';
import { SalarySliderComponent } from './widgets/salary-slider/salary-slider.component';
import { CareerComponent } from './widgets/career/career.component';
import { EmploymentTypeComponent } from './widgets/employment-type/employment-type.component';
import { SpecialtyComponent } from './widgets/specialty/specialty.component';
import { IndustryComponent } from './widgets/industry/industry.component';
import { DateModifiedComponent } from './widgets/date-modified/date-modified.component';
import { AreaBrowseComponent } from './widgets/area-browse/area-browse.component';
import { CustomSelectComponent } from './widgets/custom-select/custom-select.component';
import { CheckboxGroupComponent } from './widgets/checkbox-group/checkbox-group.component';
import { CustomDonutChartComponent } from './widgets/custom-donut-chart/custom-donut-chart.component';
import { SemiCircleChartComponent } from './widgets/semi-circle-chart/semi-circle-chart.component';
import { CircleChartComponent } from './widgets/circle-chart/circle-chart.component';
import { ProfileAnalyticsComponent } from './pages/profile-analytics/profile-analytics.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermComponent } from './pages/term/term.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { StatusBarComponent } from './widgets/status-bar/status-bar.component';
import { RecordLoadingComponent } from './widgets/record-loading/record-loading.component';
import { LoginComponent } from './pages/login/login.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppGlobals } from './Global';
import {
  DynamiSocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'ng-dynami-social-login';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ItemsComponent } from './pages/items/items.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { environment } from 'src/environments/environment';
import { ShareditemsComponent } from './pages/shareditems/shareditems.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

//  import { NgxLinkedinModule } from 'ngx-linkedin';

let appGlobals = new AppGlobals()

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(appGlobals.GOOGLE_CLIENT_ID)
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider(appGlobals.LINKEDIN_API_KEY)
  }
])

export function provideConfig() {
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Header1Component,
    Header2Component,
    PortalComponent,
    SignupComponent,
    DashboardComponent,
    PagerComponent,
    LinechartComponent,
    ItembuttonComponent,
    GenderSelectComponent,
    LanguageSelectComponent,
    CompanyTypeSelectComponent,
    SalarySliderComponent,
    CareerComponent,
    EmploymentTypeComponent,
    SpecialtyComponent,
    IndustryComponent,
    DateModifiedComponent,
    AreaBrowseComponent,
    CustomSelectComponent,
    CheckboxGroupComponent,
    CustomDonutChartComponent,
    SemiCircleChartComponent,
    CircleChartComponent,
    ProfileAnalyticsComponent,
    AboutUsComponent,
    TermComponent,
    ContactUsComponent,
    StatusBarComponent,
    RecordLoadingComponent,
    LoginComponent,
    ItemsComponent,
    ProfileComponent,
    ShareditemsComponent,
    PrivacyComponent,

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
    NgScrollbarModule,
    InternationalPhoneNumberModule,
    // NgxLinkedinModule.forRoot({
    //   clientId: '818r3reabdri08'
    //  }),
    // configure the imports
    HttpClientModule,
    DynamiSocialLoginModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    //google-map
    AgmCoreModule.forRoot({ apiKey: '' }),
    NgxSpinnerModule,

  ],
  providers: [
    GoogleMapsAPIWrapper,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents: [ItembuttonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
