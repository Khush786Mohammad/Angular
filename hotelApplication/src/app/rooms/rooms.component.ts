import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room,RoomList } from './rooms';
import { CommonModule, DatePipe, NgClass, NgFor, NgIf, NgStyle, SlicePipe } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  imports: [NgIf, NgFor, NgClass, NgStyle, DatePipe, CommonModule, SlicePipe, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
  hotelName : string = 'Milton Hotel';
  totalRooms = 20;
  hideRooms = false;
  selectedRooming !: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    roomBooked: 5
  }

  roomList: RoomList[] = []
  title: string = "Hotel Application";

  constructor() {}
  ngDoCheck(): void {
    console.log("Do Check in Called");
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent !: QueryList<HeaderComponent>;

  ngOnInit(): void{
    // console.log(this.headerComponent);
    this.roomList = [
      {
        roomId: 101,
        roomType: 'Single',
        price: 2500,
        checkIn: new Date('04/20/2025'),
        checkOut: new Date('04/25/2025')
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
        checkIn: new Date('09/05/2025'),
        checkOut: new Date('09/09/2025')
      }
    ]
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title == "Hotel Application" ? this.title = "Motel Application" : this.title = "Hotel Application"
  }

  selectRoom(room: RoomList){
    this.selectedRooming = room;
  }
  
  addRoom(){
    const room: RoomList = {
      roomId: 2002,
      roomType: 'Suite',
      price: 10000,
      checkIn: new Date('09/28/2025'),
      checkOut: new Date('09/31/2025')
  };
  // this.roomList.push(room);
  this.roomList = [...this.roomList, room]; 
  }

  ngAfterViewInit() {
    console.log(this.headerComponent);
    this.headerComponent.title="Rooms View";
    console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.last.title="Last Ride";
    this.headerChildrenComponent.forEach((child) => {
      setTimeout(() => {
        child.title = "Last Rites"
      }, 1000)
    })
  }

  ngAfterViewChecked(): void {
    
  }
}
