import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName :{name: string} = {name: 'khush mohammad'};
  changeName(){
    this.userName.name = this.userName.name === 'khush mohammad' ? 'imran khan' : 'khush mohammad'
  }
}
