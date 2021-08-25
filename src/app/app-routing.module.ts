import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './navbar/aboutus/aboutus.component';
import { EmployeesComponent } from './navbar/employees/employees.component';
import { FeedbackComponent } from './navbar/feedback/feedback.component';
import { SportsComponent } from './navbar/sports/sports.component';

const routes: Routes = [
  {path:'employees',component:EmployeesComponent},
  {path:'sports',component:SportsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeesComponent,SportsComponent,AboutusComponent,FeedbackComponent]
