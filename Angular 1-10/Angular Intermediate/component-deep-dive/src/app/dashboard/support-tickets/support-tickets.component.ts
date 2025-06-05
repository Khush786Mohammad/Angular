import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketType } from './ticket.modal';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  imports: [NewTicketComponent,TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets :TicketType[] = [];
  onAdd(ticketData: {title: string; text: string}){
    const ticket: TicketType = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets = [...this.tickets, ticket];
  }

  onCloseTicket(id: string){
    this.tickets = this.tickets.map((ticket)=>{
      if(ticket.id === id){
        return {...ticket, status: 'closed'}
      }else{
        return ticket;
      }
    })
  }

}
