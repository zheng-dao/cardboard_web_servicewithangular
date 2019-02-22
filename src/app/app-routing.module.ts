import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './pages/portal/portal.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VcvtutoComponent } from './pages/vcvtuto/vcvtuto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsbyroleComponent } from './pages/jobsbyrole/jobsbyrole.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { EmailconfirmComponent } from './pages/emailconfirm/emailconfirm.component';
import { FindJobsBySectorComponent } from './pages/find-jobs-by-sector/find-jobs-by-sector.component';
import { FindJobsByLocationComponent } from './pages/find-jobs-by-location/find-jobs-by-location.component';
const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'vcvtutorial', component: VcvtutoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobsbyrole', component: JobsbyroleComponent },
  { path: 'searchresult', component: SearchresultComponent },
  { path: 'emailconfirm', component: EmailconfirmComponent },
  { path: 'findJobsBySector', component: FindJobsBySectorComponent },
  { path: 'findJobsByLocation', component: FindJobsByLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
