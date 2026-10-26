import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { NotesPageResponse } from '../components/notes-component/notes';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  baseUrl: string = '';
  contextPath: string = '';
  constructor(private http: HttpClient) {
    this.baseUrl = env.baseUrl;
    this.contextPath = env.contextPath;
  }

  fetchAllNotes(): Observable<NotesPageResponse> {
    return this.http.get<NotesPageResponse>(
      `${this.baseUrl + this.contextPath}/user/notes`,
    );
  }
}
