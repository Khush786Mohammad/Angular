// Signal and computer ts file example

import { Component, computed, OnInit, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })

@Component({
  template: ''
})
export class UserComponent implements OnInit{
  constructor(){}
  selectedUser = signal(DUMMY_USERS[randomIndex] );
  imagePath = computed(()=>{
    return '../../assets/users/'+this.selectedUser().avatar;
  })
  
  ngOnInit(): void {
    console.log(this.selectedUser());
  }
  //getter in Angular
  
  // get imagePath(){
  //   return '../../assets/users/'+this.selectedUser().avatar;
  // }
  
  onSelectUser(): void{
    console.log("clicked");
    const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex])
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }

}
