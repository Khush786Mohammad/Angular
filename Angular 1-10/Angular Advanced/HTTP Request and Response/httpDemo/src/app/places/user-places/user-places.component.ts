import { Component, OnInit, signal, inject, DestroyRef } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { CommonModule } from '@angular/common';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent, CommonModule],
})
export class UserPlacesComponent implements OnInit{
  isFetching = signal(false);
  error = signal('');

  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
      error: (err: Error) => this.error.set(err.message),
      complete: () => this.isFetching.set(false)
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })

  }
  onRemovePlace(place: Place){
    console.log("Deleting it");
    const subscription = this.placesService.removeUserPlace(place).subscribe();
    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }
}
