import { Component, input, inject, computed, OnInit, DestroyRef, signal} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit{
  userId = input.required<string>();
  order = signal<'asc' | 'desc'>('desc');

  private tasksService = inject(TasksService);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  userTasks = computed(()=>{
    return this.tasksService.allTasks().filter((task)=> task.userId === this.userId()).sort((a,b) => {
      if(this.order() === 'desc')
        return a.id > b.id ? -1 : 1;
      else
        return a.id > b.id ? 1 : -1;
    })
  })

  ngOnInit(): void{
    const subscription = this.route.queryParams.subscribe({
      next: params => this.order.set(params['order'])
    })

    this.destroyRef.onDestroy(()=>
    subscription.unsubscribe());
  }
}