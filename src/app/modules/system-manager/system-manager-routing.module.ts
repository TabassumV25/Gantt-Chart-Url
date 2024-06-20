import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { SecuritySettingsComponent } from './components/security-settings/security-settings.component';
import { RolesComponent } from './components/roles/roles.component';
import { NewRoleComponent } from './components/new-role/new-role.component';
import { UsersComponent } from './components/users/users.component';
import { RegLoginPasswordComponent } from './reg-login-password/reg-login-password.component';
import { UserActivationComponent } from './components/user-activation/user-activation.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { UserStatusChangeComponent } from './components/user-status-change/user-status-change.component';


const routes: Routes = [
  { path: 'system-manager', redirectTo: 'security-settings', pathMatch: 'full' },
  { path: 'security-settings', component: SecuritySettingsComponent, canActivate: [AuthGuard] },
  { path: 'roles', component: RolesComponent, canActivate: [AuthGuard] },
  {path:'new-role',component:NewRoleComponent,canActivate: [AuthGuard] },
  {path:'users',component:UsersComponent,canActivate: [AuthGuard] },
  {path:'reset-pwd',component:RegLoginPasswordComponent,canActivate: [AuthGuard]},
  {path:'newUserActivation',component:UserActivationComponent,canActivate: [AuthGuard]},
  {path:'departments',component:DepartmentsComponent,canActivate: [AuthGuard]},
  {path:'userStatusChange',component:UserStatusChangeComponent,canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManagerRoutingModule { }
