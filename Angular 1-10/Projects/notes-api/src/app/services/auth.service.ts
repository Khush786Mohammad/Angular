import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { User } from '../components/auth/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'token';
  baseUrl: string = '';
  contextPath: string = '';

  constructor(private http: HttpClient) {
    console.log(env);
    this.baseUrl = env.baseUrl;
    this.contextPath = env.contextPath;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  register(data: any): Observable<User> {
    return this.http.post<User>(
      `${this.baseUrl + this.contextPath}/auth/register`,
      data,
    );
  }

  login(data: any): Observable<Object> {
    return this.http.post(
      `${this.baseUrl + this.contextPath}/auth/login`,
      data,
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
