import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './pages/portal/portal.component';
import { SignupComponent } from './pages/signup/signup.component';
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

const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'vcvtutorial', component: VcvtutoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobsbyrole', component: JobsbyroleComponent },
  { path: 'searchresult', component: SearchresultComponent },
  { path: 'emailconfirm', component: EmailconfirmComponent },
  { path: 'findJobsBySector', component: FindJobsBySectorComponent },
  { path: 'findJobsByLocation', component: FindJobsByLocationComponent},
  { path: 'findJobsByCompany', component : FindJobsByCompanyComponent},
  { path: 'advancedJobSearch', component : AdvancedJobSearchComponent},
  {path: 'jobOffer', component:JobOfferComponent},
  {path: 'companyProfile', component:CompanyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
