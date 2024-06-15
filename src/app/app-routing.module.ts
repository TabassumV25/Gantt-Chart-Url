import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { SystemManagerModule } from './modules/system-manager/system-manager.module';
import { HomePageComponent } from './modules/home-page/home-page/home-page.component';
import { ProjectsModule } from './modules/projects/projects.module';

const routes: Routes = [
  { path: '', component: AuthenticationModule },
  { path: 'home', component: HomePageComponent },
  { path: 'SM', component: SystemManagerModule },
  {path:'PRO',component:ProjectsModule}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
