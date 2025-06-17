import { Component, Input } from '@angular/core';
import { StopEventDirective } from '../stop-event.directive';
import { ShoeService } from '../../service/shoe.service';

@Component({
  selector: 'app-header-action',
  imports: [StopEventDirective],
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.css','../../../styles/shared-styles.css']
})
export class HeaderActionComponent {
  constructor(private service: ShoeService){}
  @Input({required: true}) heartlogo!: string;
  onDisplayCart(){
    this.service.isCart.set(true);
  }
}
