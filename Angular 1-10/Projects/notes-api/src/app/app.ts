import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { NotesComponent } from './components/notes-component/notes-component';

@Component({
  imports: [RouterOutlet, Navbar, NotesComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('notes-api');
}
