import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, RoomsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass],
  // template: `<h1>hellow World!</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hotelApplication';
  role = 'Admin';
}
