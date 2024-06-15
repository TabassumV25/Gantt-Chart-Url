import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { newUserActivation } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.scss']
})
export class UserActivationComponent {
  newUserDataSource: newUserActivation[]=[];
  selectedCCInitiatedDataSource: any = [];
  selectedUserStatus: any = "User Group1";
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
 
  constructor(private router: Router,
    private userService: UsersService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.userService.getUserActData().subscribe((data: any) => {
      this.newUserDataSource = data;
     
    });
     
  }


 
  statusDetails = [
    { name: 'Activate', code: 'Activate' },
    { name: 'Drop', code: 'Drop' }
  ]

  clear(table: Table) {
    table.clear();
  }
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  toggleMenu(index: any) {
    this.selectedIndex = index;
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
  }

 
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  selectUserStatus(event:any){
    this.selectedUserStatus = event.target.value;
    this.cdr.detectChanges();
   }
}
