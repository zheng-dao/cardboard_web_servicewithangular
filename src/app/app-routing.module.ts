import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './pages/portal/portal.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ItemsComponent } from './pages/items/items.component';
import { ShareditemsComponent } from './pages/shareditems/shareditems.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileAnalyticsComponent } from './pages/profile-analytics/profile-analytics.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermComponent } from './pages/term/term.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationService } from './service/authenticationService';


const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'items', component: ItemsComponent, canActivate: [AuthenticationService] },
  { path: 'items/:id', component: ShareditemsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profileAnalytics', component: ProfileAnalyticsComponent, canActivate: [AuthenticationService] },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'term', component: TermComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'contactUs', component: ContactUsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
