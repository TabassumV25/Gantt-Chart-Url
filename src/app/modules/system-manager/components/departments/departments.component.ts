import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Departments, RegNewdepartment } from 'src/app/models/departments.model';
import { DepartmentsService } from '../../departments.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers: [MessageService]
})
export class DepartmentsComponent {
  regDepartmentsForm!:FormGroup;
  departmentsDataSource: Departments[]=[];
  
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
  
  constructor(private fb: FormBuilder,private router: Router,protected messageService:MessageService,
    private departmentsService: DepartmentsService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.regDepartmentsForm = this.fb.group({
      departmentName: ['', Validators.required],
      departmentCode: ['', Validators.required]
      
    
    });
    this.departmentsService .getDepartmentsData().subscribe((data: any) => {
      this.departmentsDataSource = data;
      this.departmentsDataSource.forEach(dataSource=>(dataSource.date = new Date(dataSource.date)))
    });
     
  }
  regDepartments() {
    if (this.regDepartmentsForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const regNewdepartment: RegNewdepartment = {
    departmentName: this.regDepartmentsForm.value.departmentName,
        departmentCode: this.regDepartmentsForm.value.departmentCode
        
      };

      
      console.log('Form submitted!', regNewdepartment);
      this.messageService.add({ severity: 'success', summary: ' New department Registered Successfully', detail: 'Message Content' });
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
  goToSetFunctionalProfile(){
    
  }
}
