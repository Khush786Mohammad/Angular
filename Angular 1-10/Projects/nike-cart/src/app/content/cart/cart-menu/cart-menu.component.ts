import { Component } from '@angular/core';
import { CartMenuItemsComponent } from "./cart-menu-items/cart-menu-items.component";
import { ShoeService } from '../../../service/shoe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-menu',
  imports: [CartMenuItemsComponent, RouterLink],
  templateUrl: './cart-menu.component.html',
  styleUrl: './cart-menu.component.css'
})
export class CartMenuComponent {
  constructor(private service: ShoeService){}

  //close cart function to be removed as it is now controlled by routing
  closeCart(){
    this.service.isShoesItem.set(true);
  }
  get onSize(){
    return this.service.cartItems().length;
  }
}
