import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortalComponent} from './pages/portal/portal.component';
import {SignupComponent} from './pages/signup/signup.component';
import {VcvtutoComponent} from './pages/vcvtuto/vcvtuto.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { JobsbyroleComponent } from './pages/jobsbyrole/jobsbyrole.component';
import {SearchresultComponent} from './pages/searchresult/searchresult.component';

const routes: Routes = [
  {path:'', component:PortalComponent},
  {path:'signup', component:SignupComponent},
  {path:'vcvtutorial' ,component:VcvtutoComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'jobsbyrole', component:JobsbyroleComponent},
  {path:'searchresult', component:SearchresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
