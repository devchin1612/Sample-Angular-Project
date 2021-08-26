
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './navbar/login/login.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { AllSportsComponent } from './navbar/all-sports/all-sports.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    DashboardComponent,
    AllSportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    

  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
