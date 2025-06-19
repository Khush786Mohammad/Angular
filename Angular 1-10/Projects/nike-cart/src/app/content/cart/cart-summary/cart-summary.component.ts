import { Component, computed, signal } from '@angular/core';
import { ShoeService } from '../../../service/shoe.service';
import { CurrencyPipe } from '@angular/common';
import { StopEventDirective } from '../../../header/stop-event.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-summary',
  imports: [CurrencyPipe, StopEventDirective, FormsModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {

  couponCode :string = ''
  totalCartValue = signal<number>(0);
  finalCartValue :number = 0;
  constructor(public service: ShoeService){}

  get onSize(){
    return this.service.cartItems().length;
  }

  applyCoupon(){
    this.service.discount(this.couponCode);
  }

  reloadPage(){
    window.location.reload();
  }
}
