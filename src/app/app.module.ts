import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
