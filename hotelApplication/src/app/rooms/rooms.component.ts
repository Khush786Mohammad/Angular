import { Component, OnInit } from '@angular/core';
import { Room,RoomList } from './rooms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  imports: [NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  hotelName : string = 'Milton Hotel';
  totalRooms = 20;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    roomBooked: 5
  }

  roomList: RoomList[] = [
    {
      roomId: 101,
      roomType: 'Single',
      price: 2500,
      checkIn: new Date('25/04/2025'),
      checkOut: new Date('29/04/2025')
    },
    {
      roomId: 201,
      roomType: 'Delux',
      price: 5500,
      checkIn: new Date('02/06/2025'),
      checkOut: new Date('06/06/2025')
    },
    {
      roomId: 303,
      roomType: 'Double',
      price: 4000,
      checkIn: new Date('12/05/2025'),
      checkOut: new Date('15/05/2025')
    }
]

  constructor() {}
  ngOnInit(): void{

  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
