import { Component, EventEmitter, Input, Output, OnInit, Pipe } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  imports: [NgClass, NgFor, CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit{

  @Input() rooms: RoomList[] = [];
  @Output() roomSelected = new EventEmitter<RoomList>();
  constructor(){}
  ngOnInit(): void{

  }
}
