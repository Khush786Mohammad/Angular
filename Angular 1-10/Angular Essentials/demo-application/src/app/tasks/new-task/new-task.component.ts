import { Component, Input, Output, EventEmitter, NgModule, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private taskService: TasksService) {}

  renderTask: boolean = true;
  @Output() closeDialog = new EventEmitter<void>();
  @Input({required: true}) userId !: string;

  enteredTitle: string = '';
  enteredSummary :string = '';
  enteredDate :string = '';

  onCloseDialog(){
    this.closeDialog.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },this.userId)
    this.closeDialog.emit();
  };
}
