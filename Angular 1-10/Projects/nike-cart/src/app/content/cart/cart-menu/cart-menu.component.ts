import { Component } from '@angular/core';
import { CartMenuItemsComponent } from "./cart-menu-items/cart-menu-items.component";
import { ShoeService } from '../../../service/shoe.service';

@Component({
  selector: 'app-cart-menu',
  imports: [CartMenuItemsComponent],
  templateUrl: './cart-menu.component.html',
  styleUrl: './cart-menu.component.css'
})
export class CartMenuComponent {
  constructor(private service: ShoeService){}
  closeCart(){
    this.service.isShoesItem.set(true);
  }
}
