import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './navbar/aboutus/aboutus.component';
import { AllSportsComponent } from './navbar/all-sports/all-sports.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { EmployeesComponent } from './navbar/employees/employees.component';
import { FeedbackComponent } from './navbar/feedback/feedback.component';
import { LoginComponent } from './navbar/login/login.component';
import { SportsComponent } from './navbar/sports/sports.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:LoginComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'sports',component:SportsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'allsports',component:AllSportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AllSportsComponent,DashboardComponent,LoginComponent,EmployeesComponent,SportsComponent,AboutusComponent,FeedbackComponent]
