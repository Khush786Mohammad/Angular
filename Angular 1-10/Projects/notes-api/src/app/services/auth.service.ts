import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { User } from '../components/auth/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private readonly tokenKey = 'token';
  private readonly expireKey = 'expireIn';
  baseUrl: string = '';
  contextPath: string = '';
  sessionTimeout!: number;
  intervalId?: ReturnType<typeof setInterval>;
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.baseUrl = env.baseUrl;
    this.contextPath = env.contextPath;
    this.sessionTimeout = env.expireDuration;
  }

  onApplicationStartup(): void {
    if (this.isAuthenticated()) {
      this.restoreSessionTimer();
      this.router.navigate(['/user/notes'], {
        replaceUrl: true,
      });
    }
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
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expireKey);

    this.currentUserSubject.next(null);

    this.router.navigate(['/auth/login'], {
      replaceUrl: true,
    });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  initiateSessionTimeout(): void {
    // store the session expiry time in milliseconds.
    const expiryTime = Date.now() + this.sessionTimeout * 60 * 1000;
    localStorage.setItem(this.expireKey, String(expiryTime));

    this.startSessionTimer();
  }

  startSessionTimer(): void {
    //clearing previous interval before creating another one.
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    // check the expiry timestamp every second
    this.intervalId = setInterval(() => {
      const expiryTime = Number(localStorage.getItem(this.expireKey));
      if (!expiryTime || Date.now() >= expiryTime) {
        this.logout();
      }
    }, 1000);
  }

  restoreSessionTimer(): void {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return;
    }
    // restoring the existing expiry time;
    const expiryTime = Number(localStorage.getItem(this.expireKey));
    if (!expiryTime || Date.now() >= expiryTime) {
      this.logout();
      return;
    }
    this.startSessionTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
