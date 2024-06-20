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
      path: '',
      isOpen: false,
      isActive: false,
      iconClass: 'fa-solid fa-chart-gantt'
    },
    {
      label: 'System Manager',
      path: '/',
      isOpen: false,
      isActive: false,
      iconClass: 'bi bi-database-up'
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
   this.router.navigate(['/projects']);
  }
}