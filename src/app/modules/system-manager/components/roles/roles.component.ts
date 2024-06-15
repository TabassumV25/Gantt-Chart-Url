import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NewRole } from 'src/app/models/newRole.model';
import { NewRoleService } from '../../services/new-role.service';
import { Table } from 'primeng/table';
import { RegNewRole } from 'src/app/models/newRole.model';

interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [MessageService]
})
export class RolesComponent {
  newRoleForm!: FormGroup;
  newRoleDataSource: NewRole[] = [];

  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;

  constructor(private fb: FormBuilder, private router: Router, protected messageService: MessageService,
    private newRoleService: NewRoleService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.newRoleForm = this.fb.group({
      newRole: ['', Validators.required],
      description: ['', Validators.required]


    });
    this.newRoleService.getnewRoleData().subscribe((data: any) => {
      this.newRoleDataSource = data;
      this.newRoleDataSource.forEach(dataSource => (dataSource.date = new Date(dataSource.date)))
    });

  }

  newRoleClick(){
    this.router.navigateByUrl('/new-role');
  }
  regNewRole() {
    if (this.newRoleForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const RegNewRole: RegNewRole = {
        newRole: this.newRoleForm.value.newRole,
        description: this.newRoleForm.value.description

      };


      console.log('Form submitted!', RegNewRole);
      this.messageService.add({ severity: 'success', summary: ' New Role Registered Successfully', detail: 'Message Content' });
    }
  }


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
  visibleSidebar: any;
  closeNavBar() {
    this.visibleSidebar = false;
  }
  goToSetFunctionalProfile() {

  }
}
