import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import {} from '../components/notes-component/notes';

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

  fetchAllNotes(pageNo: number = 0, pageSize: number = 8): Observable<any> {
    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);
    return this.http.get<any>(`${this.baseUrl + this.contextPath}/user/notes`, {
      params,
    });
  }
}
