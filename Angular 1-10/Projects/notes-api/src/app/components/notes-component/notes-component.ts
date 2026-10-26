import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { dummyNotes } from '../../dummyNotes';
import { Notes, NotesPageResponse } from './notes';
import { NotesCard } from './notes-card/notes-card';
import { NotesEditor } from './notes-editor/notes-editor';
import { Navbar } from '../navbar/navbar';
import { Pagination } from '../pagination/pagination';
import { NotesService } from '../../services/notes.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-notes-component',
  styleUrl: './notes-component.css',
  templateUrl: './notes-component.html',
  imports: [Navbar, Pagination, CommonModule, NotesCard, NotesEditor],
})
export class NotesComponent implements OnInit {
  notes: Notes[] = [];
  displayedNotes = [...this.notes];
  sortedByTitle = false;
  filterLastUpdated = false;
  isEditorOpen = signal(false);
  editorHeader = '';
  editorMode: 'new' | 'update' = 'new';

  note: { title: string; content: string } = {
    title: '',
    content: '',
  };

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.fetchAllNotes().subscribe({
      next: (response: NotesPageResponse) => {
        this.notes = response.content;
        this.displayedNotes = [...response.content];
      },
      error: (err) => {
        console.error('Failed to fetch notes', err);
      },
    });
  }

  onSubmit(note: { title: string; content: string }): void {
    console.log(note.title);
  }

  onSelectedNote(note: Notes): void {
    this.editorHeader = 'Edit Note';
    this.editorMode = 'update';
    this.isEditorOpen.set(true);
    this.note = { title: note.title, content: note.content };
  }

  addNewNote() {
    this.editorHeader = 'New Note';
    this.note = { title: '', content: '' };
    this.isEditorOpen.set(true);
    this.editorMode = 'new';
  }

  sortByTitle() {}

  private applyFiltersAndSort() {}

  onCloseEditor(): void {
    this.isEditorOpen.set(false);
  }

  deleteNote(id: number): void {
    console.log(id);
  }
}
