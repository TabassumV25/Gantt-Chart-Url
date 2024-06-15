import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { User, RegUser } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MessageService]
})
export class UsersComponent {
  modifyUserForm!: FormGroup;
  userDatasource: User[]=[];
  selectRoleOption: any = "Administrator";
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  selectedStatusFlag:boolean=true;
  selectedStatusValue:any;
  selectedStatusIndex:any;
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private userService: UsersService, private cdr: ChangeDetectorRef) { }

  ngOnInit() :void {
    this.modifyUserForm = this.fb.group({
      userId: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required],
      employeeId: ['', Validators.required],
      email: ['', Validators.required]
    
    });
    this.userService.getUserData().subscribe((data: any) => {
      this.userDatasource = data;
      this.userDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    });
     
  }
  roleDetails=[
    { name: 'Administrator', code: 'Administrator' },
    { name: 'Reviewer ', code: 'Reviewer' }
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
  selectRole(event:any){
    this.selectRoleOption = event.target.value;
    this.cdr.detectChanges();
   }


  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  visibleSidebar: any;
  visibleSidebar2:any;
  visibleSidebar3:any;
  closeNavBar() {
    this.visibleSidebar = false;
    this.visibleSidebar2 = false;
    this.visibleSidebar2 = false;
  }
  regModifyUser() {
    if (this.modifyUserForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const regUser: RegUser = {
        userId: this.modifyUserForm.value.userId,
        role: this.modifyUserForm.value.role,
        department: this.modifyUserForm.value.department,
        employeeId: this.modifyUserForm.value.employeeId,
        email: this.modifyUserForm.value.email
      };

      
      console.log('Form submitted!', regUser);
      this.messageService.add({ severity: 'success', summary: ' User Modified Successfully', detail: 'Message Content' });
    }
  }
  selectStatusType(event:any){
    this.selectedStatusValue = event.target.value;
    if(event.target.value ==="Active"){
     this.selectedStatusFlag = true;
    }else{
     this.selectedStatusFlag = false;
    }
   }
   
   status = [
     { label:'Active', value:'Active'},
     { label:'In Active', value:'In Active' }
     ];
     openFlyout(index:any){
       this.selectedIndex = index;
        this.selectedStatusFlag = !this.selectedStatusFlag;
     }


}
