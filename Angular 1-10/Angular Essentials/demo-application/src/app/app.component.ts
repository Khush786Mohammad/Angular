import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-application';
  users:{id: string; name: string; avatar: string}[] = DUMMY_USERS;
  renderAddTask = false;
  // selectedUserName!: string;
  selectedUserId !: string;
  newUser = {
    id: 'u7',
    name: 'Khush Mohammad',
    avatar: 'user-2.jpg',
  }

  onSelectUser(id: string){
    console.log("Selected User with Id "+id);
    this.selectedUserId = id;
  }

   get selectedUserName(){
    return this.users.find((user)=>
      user.id === this.selectedUserId
    )
  }

  addUser(){
    this.users = [...this.users, this.newUser];
  }

  // onSelectedUserName(name: string){
  //   console.log("Selected User name is: "+name);
  //   this.selectedUserName = name;
  // }
}
