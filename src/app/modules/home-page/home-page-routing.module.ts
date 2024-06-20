import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { GanttchartComponent } from '../projects/components/ganttchart/ganttchart.component';


const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent,canActivate: [AuthGuard] },
  {path:'gantt-chart',component:GanttchartComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
