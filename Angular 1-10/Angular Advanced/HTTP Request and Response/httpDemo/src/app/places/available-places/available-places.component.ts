import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent,CommonModule],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void{
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:3000/places').pipe(
      map((data) => data.places),
      catchError(() => throwError(() => new Error("Internal Server Error")))
    ).subscribe({
      next: (data) => this.places.set(data),
      error: (err: Error) => this.error.set(err.message),
      complete: ()=> this.isFetching.set(false)
    })

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }
  onSelectPlace(data: Place){
    this.httpClient.put('http://localhost:3000/user-places', {
      placeId: data.id}).subscribe();
  }

}
