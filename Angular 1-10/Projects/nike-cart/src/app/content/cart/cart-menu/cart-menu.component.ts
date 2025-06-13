import { Component } from '@angular/core';
import { CartMenuItemsComponent } from "./cart-menu-items/cart-menu-items.component";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cart-menu',
  imports: [CartMenuItemsComponent, NgStyle],
  templateUrl: './cart-menu.component.html',
  styleUrl: './cart-menu.component.css'
})
export class CartMenuComponent {

}
