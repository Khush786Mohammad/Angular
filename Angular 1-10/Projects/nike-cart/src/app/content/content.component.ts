import { Component } from '@angular/core';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MainContentComponent } from './main-content/main-content.component';
import { CartComponent } from './cart/cart.component';
import { NgClass } from '@angular/common';
import { ShoeService } from '../service/shoe.service';

@Component({
  selector: 'app-content',
  imports: [SideMenuComponent,MainContentComponent,CartComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  constructor(private service: ShoeService){}

  get display(){
    return this.service.isShoesItem();
  }
}
