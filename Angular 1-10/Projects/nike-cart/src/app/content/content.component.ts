import { Component } from '@angular/core';
import { ShoeService } from '../service/shoe.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [ RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  constructor(private service: ShoeService){}

  get display(){
    return this.service.isShoesItem();
  }
}
