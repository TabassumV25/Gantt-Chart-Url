import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-schedule',
  templateUrl: './project-schedule.component.html',
  styleUrls: ['./project-schedule.component.scss']
})
export class ProjectScheduleComponent {
  projectScheduledForm!: FormGroup;
  selectedtaskDetails:any="Analyticals";
 

  constructor(private fb:FormBuilder, private cdr: ChangeDetectorRef){

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
  }
  submitProjectSchdule(){

  }
  taskSource = [
    { label: 'Analyticals', value: 'Analyticals' },
    { label: 'Research and Development', value: 'Research and Development' }
  
  ];
  selectTask(value: any) {
    this.selectedtaskDetails= value;
    console.log(value);
    this.cdr.detectChanges();
  }
}
