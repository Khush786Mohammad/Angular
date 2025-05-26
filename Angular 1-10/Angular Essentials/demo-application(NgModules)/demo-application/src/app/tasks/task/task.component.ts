import { Component, Input} from '@angular/core';
import { type TaskModel as TaskType} from './task.model';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task : TaskType | undefined;
  //  this obj will be local to only the task component and hence we can't share the data which is use by this obj of TasksService.
  private obj = new TasksService();

  constructor(private taskService: TasksService){}
  
  onCompleteTask(){
    this.taskService.onCompleteTask(this.task?.id);
  }

  get getTask(){
    return this.task;
  }
}
