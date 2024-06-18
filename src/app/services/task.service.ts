import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  get(): Promise<Task[]>{
    return Promise.resolve([
        { id: 1, text: 'Analyticals', start_date: '2023-04-15 00:00', end_date:'2023-04-15 00:00',duration: 3, progress: 0.6, parent: 0,color: "green" },
        { id: 2, text: 'Research and Development', start_date: '2023-04-18 00:00', end_date:'2023-04-15 00:00',duration: 3, progress: 0.4, parent:1,color: "orange" }
        
    ]);

}
}
