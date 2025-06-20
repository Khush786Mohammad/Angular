import { Component } from '@angular/core';
import { ShoeService } from '../../../../service/shoe.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-menu-items',
  imports: [CurrencyPipe],
  templateUrl: './cart-menu-items.component.html',
  styleUrl: './cart-menu-items.component.css'
})
export class CartMenuItemsComponent {
  constructor(private service: ShoeService){}

  get shoesItems(){
    return this.service.cartItems();
  }

  removeShoe(id: number){
    this.service.removeShoeId(id);
  }

  decrementCount(id: number){
    this.service.decrementShoeId(id);
  }

  incrementCount(id: number){
    this.service.incrementShoeId(id);
  }
}
