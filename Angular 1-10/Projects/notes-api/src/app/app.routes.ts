import { Routes } from '@angular/router';
import { authRoutes } from './components/auth/auth.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () => import('./components/auth/auth').then((c) => c.Auth),
    children: authRoutes,
  },
  {
    path: 'notes',
    title: 'Notes',
    loadComponent: () =>
      import('./components/notes-component/notes-component').then(
        (c) => c.NotesComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then((c) => c.NotFound),
  },
];
