import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dummyNotes } from '../../dummyNotes';

@Component({
  imports: [CommonModule],
  selector: 'app-notes-component',
  styleUrl: './notes-component.css',
  templateUrl: './notes-component.html',
})
export class NotesComponent implements OnInit {
  notes = dummyNotes;
  displayedNotes = [...this.notes];
  sortedByTitle = false;
  filterLastUpdated = false;

  ngOnInit() {
    this.displayedNotes = [...this.notes];
  }

  addNewNote() {
    const newId = Math.max(...this.notes.map((n) => n.id)) + 1;
    const newNote = {
      id: newId,
      title: `Note ${newId}`,
      content: 'Click to edit content...',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.notes.unshift(newNote);
    this.applyFiltersAndSort();
  }

  sortByTitle() {
    this.sortedByTitle = !this.sortedByTitle;
    this.applyFiltersAndSort();
  }

  private applyFiltersAndSort() {
    let result = [...this.notes];

    if (this.filterLastUpdated) {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      result = result.filter(
        (note) => new Date(note.updatedAt) >= sevenDaysAgo,
      );
    }

    if (this.sortedByTitle) {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    this.displayedNotes = result;
  }

  deleteNote(id: number) {
    const index = this.notes.findIndex((n) => n.id === id);
    if (index > -1) {
      this.notes.splice(index, 1);
      this.applyFiltersAndSort();
    }
  }
}
