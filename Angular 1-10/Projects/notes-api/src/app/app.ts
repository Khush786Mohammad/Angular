import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { NotesComponent } from './components/notes-component/notes-component';
import { Pagination } from './components/pagination/pagination';

@Component({
  imports: [Navbar, NotesComponent, Pagination],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('notes-api');
}
