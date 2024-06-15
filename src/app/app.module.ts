import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { SystemManagerModule } from './modules/system-manager/system-manager.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';
import { SystemManagerRoutingModule } from './modules/system-manager/system-manager-routing.module';
import { AuthenticationRoutingModule } from './modules/authentication/authentication-routing.module';
import { HomePageRoutingModule } from './modules/home-page/home-page-routing.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { ProjectsRoutingModule } from './modules/projects/projects-routing.module';
import { ProjectsModule } from './modules/projects/projects.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    AppRoutingModule,
    HttpClientModule,
    HomePageModule,
    HomePageRoutingModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
    SystemManagerModule,
    SystemManagerRoutingModule,
    HttpClientModule,
    PickListModule,
    DragDropModule,
    ScrollPanelModule,
    TooltipModule,
    FontAwesomeModule,
    PaginatorModule,
    ReactiveFormsModule,
    MultiSelectModule,
    ToastModule,
    SidebarModule,
    ProjectsModule,
    ProjectsRoutingModule,
    
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
