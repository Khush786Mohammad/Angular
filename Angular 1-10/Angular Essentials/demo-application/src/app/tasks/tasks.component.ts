import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type TaskModel, type NewTask } from './task/task.model';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  @Input({required: true}) id !: string;
  @Input({required: true}) Username : string | undefined;
  
  num :number = 8;
  renderTask:boolean = false;
  obj !: TaskModel;


  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.id);
  }
  onCompleteTask(id: string){
  }

  addTaskButton(){
    this.renderTask = true;
  }
  cancelDialog(){
    this.renderTask = false;
  }
}
