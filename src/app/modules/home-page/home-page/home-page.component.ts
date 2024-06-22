import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface NavItem {
  label: string;
  path: string;
  isOpen: boolean;
  isActive: boolean;
  iconClass: string;
  children?: NavItem[];
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  selectedSection = 'home';
  currentItems: NavItem[] = [];
  navItems: NavItem[] = [

    {
      label: 'Projects',
      path: '/projects',
      isOpen: false,
      isActive: false,
      iconClass: 'fa-solid fa-diagram-project'
    },
    {
      label: 'Gantt Chart',
      path: '/gantt-chart',
      isOpen: false,
      isActive: false,
      iconClass: 'fa-solid fa-chart-gantt'
    },
    {
      label: 'System Manager',
      path: '',
      isOpen: false,
      isActive: false,
      iconClass: 'bi bi-database-up',
      children: [
        {
          label: 'Roles',
          path: '/roles',
          isOpen: false,
          isActive: false,
          iconClass: 'fa fa-cogs',
        },
        {
          label: 'Users',
          path: '/users',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-person',
        },

       

        
        
       
         {
           label: 'User Status Settings',
          path: '/userStatusChange',
          isOpen: false,
         isActive: false,
         iconClass: 'fa-solid fa-user-clockt',
         },
         {
          label: 'New User Account Activation',
         path: '/newUserActivation',
         isOpen: false,
        isActive: false,
        iconClass: 'fa-solid fa-user-check',
        },
        // {
        //   label: 'Reset Passwords',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-house-door',
        // },
        {
          label: 'Departments',
          path: '/departments',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-buildings',
        },
       
       
       
        
       
        {
          label: 'Security Settings',
          path: '/security-settings',
          isOpen: false,
          isActive: false,
          iconClass: 'fa fa-shield',
        },
       
      ]
    },
  ];

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.currentItems = this.navItems;
  }

  selectSection(section: any) {
    this.selectedSection = section;
  }

  navItemClick(item: NavItem) {
    if (item.children && item.children.length > 0) {
      this.currentItems = item.children
    }
    else {
      this.router.navigate([item.path]);
    }
  }
}