import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { GroupsComponent } from './components/groups/groups.component';
import { ProjectScheduleComponent } from './components/project-schedule/project-schedule.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PickListModule } from 'primeng/picklist';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ProjectRegFlowComponent } from './project-reg-flow/project-reg-flow.component';
import { StepsModule } from 'primeng/steps';
import { TagModule } from 'primeng/tag';
import { GanttchartComponent } from './components/ganttchart/ganttchart.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    GroupsComponent,
    ProjectScheduleComponent,
    ProjectsComponent,
    ProjectRegFlowComponent,
    GanttchartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProjectsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    StepsModule,
    FormsModule,
    ToastModule,
    CalendarModule,
    TableModule,
    SidebarModule,
    DropdownModule,
    PickListModule ,
    DragDropModule, 
    TooltipModule,
    TagModule,
    MultiSelectModule,
    
  ]
})
export class ProjectsModule { }
