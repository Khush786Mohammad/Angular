import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Navbar } from '../navbar/navbar';
import { Pagination } from '../pagination/pagination';
import { Notes } from './notes';
import { NotesCard } from './notes-card/notes-card';
import { NotesEditor } from './notes-editor/notes-editor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notes-component',
  styleUrl: './notes-component.css',
  templateUrl: './notes-component.html',
  imports: [Navbar, Pagination, CommonModule, NotesCard, NotesEditor],
})
export class NotesComponent implements OnInit {
  notesData = signal<Notes[]>([]);
  sortedByTitle = false;
  filterLastUpdated = false;
  isEditorOpen = signal(false);
  editorHeader = '';
  editorMode: 'new' | 'update' = 'new';

  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 1;

  note: { title: string; content: string } = {
    title: '',
    content: '',
  };

  constructor(
    private notesService: NotesService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.fetchNotesData(0, 8);
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
    this.notesService.deleteNoteById(id)?.subscribe({
      next: (response) => {
        this.toastr.success(response);
        this.fetchNotesData(0, 8);
      },
      error: (err) => {
        this.toastr.error(err?.error || 'Failed to delete note');
      },
    });
  }

  fetchNotesData(pageNo?: number, size?: number) {
    this.notesService.fetchAllNotes(pageNo, size).subscribe({
      next: (response: any) => {
        this.notesData.set(response.content);
        this.currentPage = response?.pageable?.pageNumber;
        this.pageSize = response?.pageable?.pageSize;
        this.totalPages = response?.totalPages;
      },
      error: () => {
        this.toastr.error('Failed to fetch notes.');
      },
    });
  }
  onPageSizeChange(result: number) {
    this.fetchNotesData(0, result);
  }
  onPageToPage(data: any) {
    this.fetchNotesData(data?.pageNo - 1, data?.pageSize);
  }
}
