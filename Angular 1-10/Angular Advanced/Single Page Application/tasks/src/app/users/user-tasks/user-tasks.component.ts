import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit{
  userId = input.required<string>();
  userName = '';
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  constructor(private userService: UsersService){}

  // userName = computed(()=>{
  //   return this.userService.users.find((user)=>user.id === this.userId())?.name
  // })

  ngOnInit(): void{
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => this.userName = this.userService.users.find((u)=>u.id === paramMap.get('userId'))?.name || ''
    })

    this.destroyRef.onDestroy(()=>subscription.unsubscribe());
  }
}
