import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit{
  userId = input.required<string>();
  message = input.required<string>();
  userName = input.required<string>();
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // constructor(private userService: UsersService){}

  // userName = computed(()=>{
  //   return this.userService.users.find((user)=>user.id === this.userId())?.name
  // })

  ngOnInit(): void{
    // console.log(this.message());
    // console.log(this.activatedRoute);
    // const subscription = this.activatedRoute.paramMap.subscribe({
    //   next: (paramMap) => this.userName = this.userService.users.find((u)=>u.id === paramMap.get('userId'))?.name || ''
    // })

  //   this.destroyRef.onDestroy(()=>subscription.unsubscribe());
  }
}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find((u)=>u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
}

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot)=>{
  return resolveUserName(activatedRoute,routerState) + '\s Tasks';
}