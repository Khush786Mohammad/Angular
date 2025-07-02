import { Component, OnInit, signal, inject, DestroyRef } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { pipe,map, catchError, throwError } from 'rxjs';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent, CommonModule],
})
export class UserPlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:8080/user-places').pipe(
      map((data) => data.places),
      catchError( () => throwError( () => new Error('Internal Server Error')))
    ).subscribe({
      next: (data) => {this.places.set(data)},
      error: (err: Error) => this.error.set(err.message),
      complete: () => this.isFetching.set(false)
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
