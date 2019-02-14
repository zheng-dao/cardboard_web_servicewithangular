import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortalComponent} from './pages/portal/portal.component'
import {SignupComponent} from './pages/signup/signup.component'
import {VcvtutoComponent} from './pages/vcvtuto/vcvtuto.component'
import {DashboardComponent} from './pages/dashboard/dashboard.component'
const routes: Routes = [
  {path:'', component:PortalComponent},
  {path:'signup', component:SignupComponent},
  {path:'vcvtutorial' ,component:VcvtutoComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
