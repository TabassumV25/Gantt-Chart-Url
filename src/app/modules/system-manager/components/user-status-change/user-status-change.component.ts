import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Table } from 'primeng/table';
import { User } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-status-change',
  templateUrl: './user-status-change.component.html',
  styleUrls: ['./user-status-change.component.scss']
})
export class UserStatusChangeComponent {
  visibleSidebar2:any;
  selectedStatusFlag:boolean=true;
  selectedStatusValue:any;
  selectedStatusIndex:any;
  userDatasource: User[]=[];
  constructor(private fb: FormBuilder,private router: Router,
    private userService: UsersService, private cdr: ChangeDetectorRef) { }
  selectedIndex: any;
  ngOnInit() :void {  this.userService.getUserStatData().subscribe((data: any) => {
    this.userDatasource = data;
    this.userDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
  });}

  selectStatusType(event:any){
    this.selectedStatusValue = event.target.value;
    if(event.target.value ==="Active"){
     this.selectedStatusFlag = true;
    }else{
     this.selectedStatusFlag = false;
    }
   }
   clear(table: Table) {
    table.clear();
  }
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

   status = [
     { label:'Active', value:'Active'},
     { label:'In Active', value:'In Active' }
     ];
     openFlyout(index:any){
       this.selectedIndex = index;
        this.selectedStatusFlag = !this.selectedStatusFlag;
     }
  closeNavBar() {
   
   
    this.visibleSidebar2 = false;
  }
}
