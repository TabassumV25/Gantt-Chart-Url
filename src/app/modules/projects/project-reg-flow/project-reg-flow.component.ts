import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-project-reg-flow',
  templateUrl: './project-reg-flow.component.html',
  styleUrls: ['./project-reg-flow.component.scss']
})
export class ProjectRegFlowComponent implements OnInit{
  usergroupFlag:boolean=true;
  userFlag:boolean=false;
  id:any;
  tab=1;
  items: MenuItem[] = [];
  constructor(private primeConfig:PrimeNGConfig,private cdr: ChangeDetectorRef,private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
   
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.items = [
      {
          label: 'Personal',
          routerLink: '/groups'
      },
      {
          label: 'Seat',
          routerLink: '/project-schedule'
      },
      {
          label: 'Payment',
          routerLink: 'payment'
      }
     
  ];
  }
  navToProjects(){
    this.router.navigateByUrl('/projects');
  }
  changePages(value:any,tagValue:any){
    this.tab = tagValue;
    if(value ==='Groups'){
      this.usergroupFlag = true;
      this.userFlag =false;
   }else{
    this.userFlag =true;
    this.usergroupFlag = false;
   }
  }
}
