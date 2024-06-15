import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { RolesComponent } from '../system-manager/components/roles/roles.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ProjectScheduleComponent } from './components/project-schedule/project-schedule.component';
import { ProjectRegFlowComponent } from './project-reg-flow/project-reg-flow.component';
import { GanttchartComponent } from './components/ganttchart/ganttchart.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuard] },
  { path: 'project-schedule', component: ProjectScheduleComponent, canActivate: [AuthGuard] },
  { path: 'projectRegFlow', component: ProjectRegFlowComponent, canActivate: [AuthGuard] },
  {path:'gantt-chart',component:GanttchartComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
