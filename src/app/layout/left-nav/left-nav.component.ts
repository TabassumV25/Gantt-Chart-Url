import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
export interface NavItem {
  label: string;
  path: string;
  isOpen: boolean;
  isActive: boolean;
  iconClass: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  isLeftNavCollapsed = false;
  selectedNavitem: any = null;
  label: string = '';

  navItems: NavItem[] = [
    {
      label: 'Home',
      path: '/home',
      isOpen: false,
      isActive: false,
      iconClass: 'bi bi-house-door',
      children: [{
        label: 'Home',
        path: '/home',
        isOpen: false,
        isActive: false,
        iconClass: 'bi bi-house-door',
      },
      {
        label: 'Projects',
        path: 'projects',
        isOpen: false,
        isActive: false,
        iconClass: 'bi bi-palette2',
  
      },
      {
        label: 'Gantt Chart',
        path: '/gantt-chart',
        isOpen: false,
        isActive: false,
        iconClass: 'bi bi-palette2',
  
      }
    ],
    },

   
    {
      label: 'System Manager',
      path: '/docRepo',
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

        // {
        //   label: 'Set Functional Profile',
        //   path: '/functional-profile',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-house-door',
        // },

        // {
        //   label: 'Manage Users',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-person-fill-gear',
        // },
        // {
        //   label: 'Plant Assignments',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'fa fa-industry',
        // },
     
        // {
        //   label: 'User Status Settings',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-person-heart',
        // },
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
    }
  ];

  toggleLeftNav() {
    this.isLeftNavCollapsed = !this.isLeftNavCollapsed;
  }

  constructor(private router: Router) {
    // Subscribe to router events to update active state on route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveState(event.urlAfterRedirects, this.navItems);
      }
    });
  }

  toggleNavItem(item: any): void {
    if (item.path) this.router.navigate([item.path]);
    else if (!item.path && item.children) {
      item.isOpen = !item.isOpen; // Toggle the open state of the item
    }
  }

  updateActiveState(route: string, items: any[]): void {
    for (const item of items) {
      if (item.path && item.path === route) {
        item.isActive = true; // Set the current item as active if its route matches the current route
        item.isOpen = true;
        this.openParentItems(item);
      } else {
        item.isActive = false; // Set other items as inactive
      }
      // Recursively check children for active state
      if (item.children && item.children.length > 0) {
        this.updateActiveState(route, item.children);
      }
    }
  }

  openParentItems(item: any): void {
    if (item && item.parent) {
      item.isOpen = true; // Open the current item
      this.openParentItems(item.parent); // Recursively open the parent item
    }
  }


  toggleMenu(item: NavItem) {
    item.isOpen = !item.isOpen;
  }

  toggleSubMenu(parentItem: NavItem, childItem: NavItem) {
    // Close all other submenus of the parent item
    parentItem.children?.forEach(child => child.isOpen = false);
    childItem.isOpen = !childItem.isOpen;
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
