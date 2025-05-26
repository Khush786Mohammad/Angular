import { Component, Input, OnInit } from '@angular/core';
import { type TaskModel } from './task/task.model';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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
