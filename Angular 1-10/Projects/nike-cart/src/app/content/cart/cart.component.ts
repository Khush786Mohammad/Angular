import { Component, signal } from '@angular/core';
import { CartMenuComponent } from "./cart-menu/cart-menu.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { ShoeService } from '../../service/shoe.service';

@Component({
  selector: 'app-cart',
  imports: [CartMenuComponent, CartSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
