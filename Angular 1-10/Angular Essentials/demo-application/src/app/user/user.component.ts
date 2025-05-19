import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  constructor(){}
  selectedUser = DUMMY_USERS[randomIndex];

  ngOnInit(): void {
    console.log(this.selectedUser);
  }
}
