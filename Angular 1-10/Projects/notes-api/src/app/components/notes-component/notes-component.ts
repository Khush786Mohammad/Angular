import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { dummyNotes } from '../../dummyNotes';
import { Notes } from './notes';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-notes-component',
  styleUrl: './notes-component.css',
  templateUrl: './notes-component.html',
})
export class NotesComponent implements OnInit {
  notes: Notes[] = dummyNotes;
  displayedNotes = [...this.notes];
  sortedByTitle = false;
  filterLastUpdated = false;
  isEditorOpen = signal(false);
  editorHeader = '';
  editorMode: 'new' | 'update' = 'new';

  note = {
    title: '',
    content: '',
  };

  ngOnInit() {
    this.displayedNotes = [...this.notes];
  }

  onSubmit(note: NgForm): void {
    console.log(note?.value?.title);
  }

  onSelectedNote(note: Notes): void {
    this.editorHeader = 'Edit Note';
    this.editorMode = 'update';
    this.isEditorOpen.set(true);
    this.note.title = note.title;
    this.note.content = note.content;
    console.log(note);
  }

  addNewNote() {
    this.editorHeader = 'New Note';
    this.note.title = '';
    this.note.content = '';
    this.isEditorOpen.set(true);
    this.editorMode = 'new';
  }

  sortByTitle() {}

  private applyFiltersAndSort() {}

  onCloseEditor(): void {
    this.isEditorOpen.set(false);
  }

  deleteNote(id: number) {
    console.log(id);
  }
}
