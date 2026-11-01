import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConfirmDialog } from '../../dialogs/confirm-dialog/confirm-dialog';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [ConfirmDialog],
})
export class Navbar {
  currentTheme: 'light' | 'dark' = 'light';
  pendingLogout = signal<boolean>(false);
  constructor(public authService: AuthService) {}

  setTheme(theme: 'light' | 'dark'): void {
    //documentElement is a reference to the root HTML element. It represents the <html> tag.
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    this.currentTheme = theme;
  }

  requestLogout(): void {
    this.pendingLogout.set(true);
  }

  confirmLogout(): void {
    this.pendingLogout.set(false);
    this.authService.logout();
  }
}
