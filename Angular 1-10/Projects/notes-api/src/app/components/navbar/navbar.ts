import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [],
})
export class Navbar {
  currentTheme: 'light' | 'dark' = 'light';
  setTheme(theme: 'light' | 'dark'): void {
    //documentElement is a reference to the root HTML element. It represents the <html> tag.
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    this.currentTheme = theme;
  }
}
