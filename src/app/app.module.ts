import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//header and footer component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header1Component } from './header/header1/header1.component';
import { Header2Component } from './header/header2/header2.component';

import { MatRadioModule, MatIconModule} from '@angular/material'
import {MultiSelectAllModule} from '@syncfusion/ej2-angular-dropdowns'


//pages components
import {SignupComponent} from './pages/signup/signup.component';
import { PortalComponent } from './pages/portal/portal.component';
import { VcvtutoComponent } from './pages/vcvtuto/vcvtuto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { DropdownlistComponent } from './widgets/dropdownlist/dropdownlist.component';

// Module for language translate 
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PagerComponent } from './widgets/pager/pager.component';
import { LinechartComponent } from './widgets/linechart/linechart.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Header1Component,
    Header2Component,
    PortalComponent,
    DropdownlistComponent,
    SignupComponent,
    VcvtutoComponent,
    DashboardComponent,
    PagerComponent,
    LinechartComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,     
    MatRadioModule,
    MatIconModule,
    MultiSelectAllModule,
    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
