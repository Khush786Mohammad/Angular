import { Component, EventEmitter, Input, Output, OnInit, Pipe, ChangeDetectionStrategy } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  imports: [NgClass, NgFor, CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{

  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor(){}
  ngOnInit(): void{
    // console.log(this.rooms);
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
