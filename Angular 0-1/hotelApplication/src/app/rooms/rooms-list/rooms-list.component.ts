import { Component, EventEmitter, Input, Output, OnInit, Pipe, ChangeDetectionStrategy, OnChanges, DoCheck } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  imports: [NgClass, NgFor, CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, DoCheck{

  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor(){}
  ngOnInit(): void{
    // console.log(this.rooms);
  }

  ngOnChanges(changes: any): void{
    console.log(changes);
    if(changes.title){
      this.title = changes.title.currentValue.toUpperCase();
    }
  }

  ngDoCheck(): void{
    console.log("Do Check is Called for Room-list component");
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
