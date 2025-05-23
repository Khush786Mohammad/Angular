import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type TaskModel as TaskType} from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task : TaskType | undefined;
  @Output() completed = new EventEmitter<string>();
  
  onCompleteTask(){
    this.completed.emit(this.task?.id);
  }

  get getTask(){
    return this.task;
  }
}
