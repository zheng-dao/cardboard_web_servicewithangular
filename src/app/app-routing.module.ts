import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './pages/portal/portal.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ItemsComponent } from './pages/items/items.component';
import { ShareditemsComponent } from './pages/shareditems/shareditems.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VcvtutoComponent } from './pages/vcvtuto/vcvtuto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsbyroleComponent } from './pages/find-jobs-by-role/find-jobs-by-role.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { EmailconfirmComponent } from './pages/emailconfirm/emailconfirm.component';
import { FindJobsBySectorComponent } from './pages/find-jobs-by-sector/find-jobs-by-sector.component';
import { FindJobsByLocationComponent } from './pages/find-jobs-by-location/find-jobs-by-location.component';
import { FindJobsByCompanyComponent } from './pages/find-jobs-by-company/find-jobs-by-company.component';
import { AdvancedJobSearchComponent } from './pages/advanced-job-search/advanced-job-search.component';
import { JobOfferComponent } from './pages/job-offer/job-offer.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { MyApplicationComponent } from './pages/my-application/my-application.component';
import { MyvcvComponent } from './pages/myvcv/myvcv.component';
import { CreateVcvPlatformComponent } from './pages/create-vcv-platform/create-vcv-platform.component';
import { CreateVcvProfessionComponent } from './pages/create-vcv-profession/create-vcv-profession.component';
import { CreateVcvThemeComponent } from './pages/create-vcv-theme/create-vcv-theme.component';
import { ProfileAnalyticsComponent } from './pages/profile-analytics/profile-analytics.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermComponent } from './pages/term/term.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { Teleprompter1Component } from './teleprompter/teleprompter1/teleprompter1.component';
import { Teleprompter2Component } from './teleprompter/teleprompter2/teleprompter2.component';
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
import { AuthenticationService } from './service/authenticationService';


const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'items', component: ItemsComponent, canActivate: [AuthenticationService] },
  { path: 'items/:id', component: ShareditemsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService] },
  { path: 'vcvtutorial', component: VcvtutoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobsbyrole', component: JobsbyroleComponent },
  { path: 'searchresult', component: SearchresultComponent },
  { path: 'emailconfirm', component: EmailconfirmComponent },
  { path: 'findJobsBySector', component: FindJobsBySectorComponent },
  { path: 'findJobsByLocation', component: FindJobsByLocationComponent },
  { path: 'findJobsByCompany', component: FindJobsByCompanyComponent },
  { path: 'advancedJobSearch', component: AdvancedJobSearchComponent },
  { path: 'jobOffer', component: JobOfferComponent },
  { path: 'companyProfile', component: CompanyProfileComponent },
  { path: 'myApplications', component: MyApplicationComponent },
  { path: 'myVCV', component: MyvcvComponent },
  { path: 'createVCVPlatform', component: CreateVcvPlatformComponent, canActivate: [AuthenticationService] },
  { path: 'createVCVProfession', component: CreateVcvProfessionComponent, canActivate: [AuthenticationService] },
  { path: 'createVCVTheme', component: CreateVcvThemeComponent, canActivate: [AuthenticationService] },
  { path: 'profileAnalytics', component: ProfileAnalyticsComponent, canActivate: [AuthenticationService] },
  { path: 'chat', component: ChatComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'term', component: TermComponent },
  { path: 'contactUs', component: ContactUsComponent },
  {
    path: 'teleprompter',
    children: [
      { path: 'teleprompter1', component: Teleprompter1Component },
      { path: 'teleprompter2', component: Teleprompter2Component },
      { path: 'teleprompter3', component: Teleprompter3Component },
      { path: 'teleprompter4', component: Teleprompter4Component },
      { path: 'teleprompter5', component: Teleprompter5Component },
      { path: 'teleprompter6', component: Teleprompter6Component },
      { path: 'teleprompter7', component: Teleprompter7Component }
    ]
  },
  {
    path: 'VCVMake',
    children: [
      { path: 'VCVVideoEdit', component: VcvVideoEditComponent },
      { path: 'VCVVideoFx1', component: VcvVideoFx1Component },
      { path: 'VCVVideoFx2', component: VcvVideoFx2Component },
      { path: 'VCVVideoFx3', component: VcvVideoFx3Component },
      { path: 'VCVVideoFx4', component: VcvVideoFx4Component },
      { path: 'VCVVideoFx5', component: VcvVideoFx5Component },
      { path: 'VCVVideoFx6', component: VcvVideoFx6Component }

    ]

  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
