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
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { DoughnutChartComponent } from 'angular-d3-charts';
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
import { MyvcvComponent } from './pages/myvcv/myvcv.component';
import { CircleChartComponent } from './widgets/circle-chart/circle-chart.component';
import { CreateVcvPlatformComponent } from './pages/create-vcv-platform/create-vcv-platform.component';
import { CreateVcvProfessionComponent } from './pages/create-vcv-profession/create-vcv-profession.component';
import { CreateVcvThemeComponent } from './pages/create-vcv-theme/create-vcv-theme.component';
import { ProfileAnalyticsComponent } from './pages/profile-analytics/profile-analytics.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermComponent } from './pages/term/term.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { Teleprompter1Component } from './teleprompter/teleprompter1/teleprompter1.component'
import { StatusBarComponent } from './widgets/status-bar/status-bar.component';
import { Teleprompter2Component } from './teleprompter/teleprompter2/teleprompter2.component';
import { RecordLoadingComponent } from './widgets/record-loading/record-loading.component';
import { Teleprompter3Component } from './teleprompter/teleprompter3/teleprompter3.component';
import { Teleprompter4Component } from './teleprompter/teleprompter4/teleprompter4.component';
import { Teleprompter5Component } from './teleprompter/teleprompter5/teleprompter5.component';
import { Teleprompter6Component } from './teleprompter/teleprompter6/teleprompter6.component';
import { Teleprompter7Component } from './teleprompter/teleprompter7/teleprompter7.component';
import { VcvVideoEditComponent } from './vcv/vcv-video-edit/vcv-video-edit.component';
import { VcvVideoFx1Component } from './vcv/vcv-video-fx1/vcv-video-fx1.component';
import { VcvVideoFx2Component } from './vcv/vcv-video-fx2/vcv-video-fx2.component';
import { VcvVideoFx3Component } from './vcv/vcv-video-fx3/vcv-video-fx3.component';
import { VcvVideoFx4Component } from './vcv/vcv-video-fx4/vcv-video-fx4.component';
import { VcvVideoFx5Component } from './vcv/vcv-video-fx5/vcv-video-fx5.component';
import { VcvVideoFx6Component } from './vcv/vcv-video-fx6/vcv-video-fx6.component';
import { LoginComponent } from './pages/login/login.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider,
  LoginOpt
} from 'angularx-social-login';

const googleloginOptions: LoginOpt = {
  scope: 'profile email'
};

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1004140827153-pkalgkfiii5vqhh43ln9n88a92bc9mp9.apps.googleusercontent.com",
                          googleloginOptions   )
  }
  
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider("Facebook-App-Id")
  // }
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
    MyvcvComponent,
    CircleChartComponent,
    CreateVcvPlatformComponent,
    CreateVcvProfessionComponent,
    CreateVcvThemeComponent,
    ProfileAnalyticsComponent,
    ChatComponent,
    AboutUsComponent,
    TermComponent,
    ContactUsComponent,
    Teleprompter1Component,
    StatusBarComponent,
    Teleprompter2Component,
    RecordLoadingComponent,
    Teleprompter3Component,
    Teleprompter4Component,
    Teleprompter5Component,
    Teleprompter6Component,
    Teleprompter7Component,
    VcvVideoEditComponent,
    VcvVideoFx1Component,
    VcvVideoFx2Component,
    VcvVideoFx3Component,
    VcvVideoFx4Component,
    VcvVideoFx5Component,
    VcvVideoFx6Component,
    LoginComponent
    
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
    // configure the imports
    HttpClientModule,
    SocialLoginModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    //google-map
    AgmCoreModule.forRoot({ apiKey: '' }),

  ],
  providers: [
    GoogleMapsAPIWrapper,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  entryComponents: [ItembuttonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
