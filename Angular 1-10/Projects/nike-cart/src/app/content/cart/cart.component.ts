import { Component } from '@angular/core';
import { CartMenuComponent } from "./cart-menu/cart-menu.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { NgClass } from '@angular/common';
import { ShoeService } from '../../service/shoe.service';

@Component({
  selector: 'app-cart',
  imports: [CartMenuComponent, CartSummaryComponent, NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private service: ShoeService){}
  get isActive(){
    return this.service.isCart();
  }
  
}
