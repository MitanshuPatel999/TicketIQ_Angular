import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"", component:UserComponent},
  {path:"user", component:UserComponent},
  {path:"register", component:RegisterComponent},
  {path:"nav", component:NavComponent},
  {path:"viewtickets", component:AdmindashboardComponent},
  {path:"nav/dashboard", component:DashboardComponent},
  {path:"testchart", component:LineChartComponent},
  {path:"nav/table", component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
