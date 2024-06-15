import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { RegGrpProject } from 'src/app/models/projectReg.model';
import { ProjectsService } from '../../projects.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  providers: [MessageService]
})
export class GroupsComponent {
  regGrpForm!:FormGroup;
  groupDatasource: any[]=[];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
 
  constructor(private router: Router,private fb: FormBuilder,protected messageService:MessageService,
    private projectsService: ProjectsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.regGrpForm = this.fb.group({
      groupName: ['', Validators.required],
      groupCode: ['', Validators.required],
      description: ['', Validators.required]
      
    
    });
    this.projectsService.getGrpData().subscribe((data: any) => {
      this.groupDatasource = data;
      this.groupDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    });
     
  }
  regProjects() {
    if (this.regGrpForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const regGrpProject: RegGrpProject = {
    groupName: this.regGrpForm.value.projectName,
        groupCode: this.regGrpForm.value.projectCode,
        description: this.regGrpForm.value.description
        
      };

      
      console.log('Form submitted!', regGrpProject);
      this.messageService.add({ severity: 'success', summary: ' New Project Registered Successfully', detail: 'Message Content' });
    }
  }


 
  newRegistration() {
    this.router.navigateByUrl('/new-project-registered');
  }

  clear(table: Table) {
    table.clear();
  }
  @ViewChild('dt') dt: Table | undefined;
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  visibleSidebar: any;
  closeNavBar() {
    this.visibleSidebar = false;
  }
  NavToProjWorkflow(id: any){

  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
