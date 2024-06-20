import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { SystemManagerRoutingModule } from './system-manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { SecuritySettingsComponent } from './components/security-settings/security-settings.component';
import { RolesComponent } from './components/roles/roles.component';
import { PickListModule } from 'primeng/picklist';
import { DragDropModule } from 'primeng/dragdrop';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import { NewRoleComponent } from './components/new-role/new-role.component';
import { UsersComponent } from './components/users/users.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegLoginPasswordComponent } from './reg-login-password/reg-login-password.component';
import { UserActivationComponent } from './components/user-activation/user-activation.component';
import { UserStatusChangeComponent } from './components/user-status-change/user-status-change.component';


@NgModule({
  declarations: [
  
    SecuritySettingsComponent,
       RolesComponent,
       NewRoleComponent,
       UsersComponent,
       DepartmentsComponent,
       RegLoginPasswordComponent,
       UserActivationComponent,
       UserStatusChangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SystemManagerRoutingModule,
    FormsModule,
    ToastModule,
    CalendarModule,
    TableModule,
    SidebarModule,
    DropdownModule,
    PickListModule ,
    DragDropModule, 
    TooltipModule,
    SidebarModule,
    PaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,

  ]
})
export class SystemManagerModule { }
