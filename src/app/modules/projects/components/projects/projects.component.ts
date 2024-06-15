import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { RegNewProject } from 'src/app/models/projectReg.model';
import { ProjectsService } from '../../projects.service';
interface PageEvent {
  first?: any;
  rows?: any;
  page?: any;
  pageCount?: any;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [MessageService]
})
export class ProjectsComponent {
  regProjectForm!:FormGroup;
  projectDatasource: any[]=[];
  dataresp: any = [];
  first: number = 0;
  rows: number = 10;
  isOpen: boolean = false;
  selectedIndex: any;
 
  constructor(private router: Router,private fb: FormBuilder,protected messageService:MessageService,
    private projectsService: ProjectsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.regProjectForm = this.fb.group({
      projectName: ['', Validators.required],
      projectCode: ['', Validators.required],
      description: ['', Validators.required]
      
    
    });
    this.projectsService.getData().subscribe((data: any) => {
      this.projectDatasource = data;
      this.projectDatasource.forEach(dataSource=>dataSource.date = new Date(dataSource.date))
    });
     
  }
  regProjects() {
    if (this.regProjectForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Form is invalid!', detail: 'Message Content' });
      return; // Prevent form submission
    } else {


      const regNewProject: RegNewProject = {
    projectName: this.regProjectForm.value.projectName,
        projectCode: this.regProjectForm.value.projectCode,
        description: this.regProjectForm.value.description
        
      };

      
      console.log('Form submitted!', regNewProject);
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
    this.router.navigate(['/projectRegFlow'], { queryParams: { id: id } })
  }
  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
