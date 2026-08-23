import { Component, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';
  counter = 0;
  constructor(private zone: NgZone) {
    // Every second triggers change detection
    this.zone.runOutsideAngular(()=>setInterval(() => {
      console.log('Interval fired');
      this.counter++; // triggers Angular change detection due to Zone.js
    }, 100))
  }
}
