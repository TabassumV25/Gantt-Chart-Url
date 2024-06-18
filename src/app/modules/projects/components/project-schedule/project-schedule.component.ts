import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-schedule',
  templateUrl: './project-schedule.component.html',
  styleUrls: ['./project-schedule.component.scss']
})
export class ProjectScheduleComponent {
  projectScheduledForm!: FormGroup;
  selectedtaskDetails:any="Analyticals";
  dynamicArray:any[]= [];
  public baseLineForms!:FormGroup;
  details!:FormArray;

  constructor(private fb:FormBuilder, private router: Router,private cdr: ChangeDetectorRef){

  }
 
  ngOnInit():void{
    this.projectScheduledForm = this.fb.group({
      projectScheduleName: ['', Validators.required],
      projectScheduleCode: ['', Validators.required],
      projectDate: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: ['', Validators.required],
    });
  this.dynamicArray.push({objective: '', plannedStartDate: '',plannedEndDate:'',durationDays:'',delete:'X'})
  }
  
  submitProjectSchdule(){

  }
  taskSource = [
    { label: 'Analyticals', value: 'Analyticals' },
    { label: 'Research and Development', value: 'Research and Development' }
  
  ];
  addRows(){
    this.dynamicArray.push({objective: '', plannedStartDate: '',plannedEndDate:'',durationDays:'',delete:'X'});
    this.cdr.detectChanges();
  }

  deleteRows(index:any){
    this.dynamicArray.splice(index, 1);
  }
  
  selectTask(value: any) {
    this.selectedtaskDetails= value;
    console.log(value);
    this.cdr.detectChanges();
  }
  backToProjects(){
    this.router.navigateByUrl('/projects');
  }
}
