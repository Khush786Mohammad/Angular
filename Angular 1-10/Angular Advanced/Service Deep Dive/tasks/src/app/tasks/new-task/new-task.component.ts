import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private taskService: TasksService){
  }
  
  onAddTask(title: string, description: string) {
    this.taskService.addTask({title, description});
    this.formEl()?.nativeElement.reset();
  }
}
