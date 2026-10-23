import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  baseUrl: string = '';
  contextPath: string = '';
  constructor() {
    console.log(env);
    this.baseUrl = env.baseUrl;
    this.contextPath = env.contextPath;
  }

  ngOnInit(): void {
    console.log(`Base Url is: ${this.baseUrl}`);
  }

  ngOnDestroy(): void {
    console.log('AuthService destroyed');
  }

  registerUser(data: any): Observable<User> {
    return this.http.post<User>(
      `${this.baseUrl + this.contextPath}/auth/register`,
      data,
    );
  }
}
