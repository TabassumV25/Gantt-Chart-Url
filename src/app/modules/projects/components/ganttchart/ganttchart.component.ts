import { Component, ElementRef, ViewChild } from '@angular/core';
import { gantt } from 'dhtmlx-gantt';
import { TaskService } from 'src/app/services/task.service';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-ganttchart',
  template: `<div #gantt_here class='gantt-chart'></div>`,
  styleUrls: ['./ganttchart.component.scss'],
  providers: [TaskService, LinkService]
})
export class GanttchartComponent {
    @ViewChild('gantt_here', { static: true }) ganttContainer!: ElementRef;
 
    constructor(private taskService: TaskService, private linkService: LinkService) { }
    ngOnInit(){
      gantt.config.date_format = '%Y-%m %H:%i';


      gantt.init(this.ganttContainer.nativeElement);


      Promise.all([this.taskService.get(), this.linkService.get()])
          .then(([data, links]) => {
              gantt.parse({ data, links });
          });
  }
}
