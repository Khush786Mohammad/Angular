import { Component, inject, computed } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent, LearningResourcesComponent, CommonModule, AuthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(()=>{
    return this.authService.activePermission() === 'admin';
  })
}
