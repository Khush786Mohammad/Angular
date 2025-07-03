import { Injectable, signal, inject } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { pipe,map, catchError, throwError, tap } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService);
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:8080/places', 'Could not fetch places.');
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:8080/user-places','Internal Server Error').pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces)
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if(!prevPlaces.some((p) => p.id === place.id)){
      this.userPlaces.set([...prevPlaces,place]);    
    }

    return this.httpClient.post('http://localhost:8080/user-places', {
      placeId: place.id}).pipe(
        catchError( () => {
          this.errorService.showError('Failed to store selected places.')
          this.userPlaces.set(prevPlaces)
          return throwError( () => new Error('Failed to store selected places.'))
        })
      )
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if(prevPlaces.some((p) => p.id === place.id)){
      this.userPlaces.set(prevPlaces.filter((p) => p.id !== place.id));
    }
    return this.httpClient.delete('http://localhost:8080/user-places/'+place.id).pipe(
      catchError( ()=> {
        this.errorService.showError('Failed to remove selected places.')
        this.userPlaces.set(prevPlaces)
        return throwError( () => new Error('Failed to remove selected places.'))
      })
    )
  }

  private fetchPlaces(url: string, errorMessage: string){
    return this.httpClient.get<{places: Place[]}>(url).pipe(
      map((data) => data.places),
      catchError( () => throwError( () => new Error(errorMessage)))
    )
  }
}
