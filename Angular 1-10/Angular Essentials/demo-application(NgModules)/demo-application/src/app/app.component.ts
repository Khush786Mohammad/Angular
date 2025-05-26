import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
 
@Component({
  selector: 'app-root',
  standalone: false,
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
