import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Navbar } from '../navbar/navbar';
import { Pagination } from '../pagination/pagination';
import { Notes } from '../../model/notes';
import { NotesCard } from './notes-card/notes-card';
import { NotesEditor } from './notes-editor/notes-editor';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialog } from '../../dialogs/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-notes-component',
  styleUrl: './notes-component.css',
  templateUrl: './notes-component.html',
  imports: [
    Navbar,
    Pagination,
    CommonModule,
    NotesCard,
    NotesEditor,
    ConfirmDialog,
  ],
})
export class NotesComponent implements OnInit {
  notesData = signal<Notes[]>([]);
  sortedByTitle = false;
  filterLastUpdated = false;
  isEditorOpen = signal(false);
  pendingDelete = signal<Notes | null>(null);
  editorHeader = '';
  editorMode: 'new' | 'update' = 'new';

  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 1;

  note: { id?: number; title: string; content: string } = {
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

  saveNote(note: { id?: number; title: string; content: string }): void {
    const noteId = note.id;
    const isUpdate = noteId !== undefined;
    const request =
      noteId !== undefined
        ? this.notesService.updateNoteById({
            id: note.id,
            title: note.title,
            content: note.content,
          })
        : this.notesService.addNewNote({
            title: note.title,
            content: note.content,
          });

    request.subscribe({
      next: () => {
        this.toastr.success(
          isUpdate ? 'Note updated successfully' : 'Note added successfully',
        );
        this.onCloseEditor();
        this.fetchNotesData(this.currentPage, this.pageSize);
      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(
          err?.error?.error ||
            (isUpdate ? 'Failed to update note' : 'Failed to add note'),
        );
      },
    });
  }

  onSelectedNote(note: Notes): void {
    this.editorHeader = 'Edit Note';
    this.editorMode = 'update';
    this.isEditorOpen.set(true);
    this.note = { id: note.id, title: note.title, content: note.content };
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
      next: (response: any) => {
        console.log(response);
        this.toastr.success(response?.message);
        this.fetchNotesData(0, 8);
      },
      error: (err) => {
        this.toastr.error(err?.error || 'Failed to delete note');
      },
    });
  }

  requestDelete(id: number): void {
    const note = this.notesData().find((item) => item.id === id);
    if (note) {
      this.pendingDelete.set(note);
    }
  }

  confirmDelete(): void {
    const note = this.pendingDelete();
    this.pendingDelete.set(null);
    if (note) {
      this.deleteNote(note.id);
    }
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
