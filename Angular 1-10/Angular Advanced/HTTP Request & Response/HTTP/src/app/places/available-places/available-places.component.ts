import { Component, signal, inject, OnInit, DestroyRef, AfterViewChecked, AfterViewInit } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';

interface User{
  id: number,
  name: string,
  email: string,
}
@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})

export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  users: User[] = [];

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void{
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(data=>{
      this.users = data;
      console.log(data);
    }
    );

    console.log(this.users);
  }

}
