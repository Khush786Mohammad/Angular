import { Component, input, output, signal } from '@angular/core';
import { TicketType } from '../ticket.modal';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<TicketType>();
  collapse = signal(false);
  closeTicket = output();

  onToggleCollapse(){
    this.collapse.update((value)=>!value);
  }

  onCloseTicket(){
    this.closeTicket.emit();
  }
}
