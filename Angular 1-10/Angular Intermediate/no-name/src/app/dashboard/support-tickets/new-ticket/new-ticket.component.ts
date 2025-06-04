import { Component, ViewChild, ElementRef,viewChild, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // @ViewChild('form') form ?: ElementRef<HTMLFormElement>;
  // viewChild as a signal
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() add = new EventEmitter<{title: string; text: string}>();
  onSubmit(title: string, request: string){
    console.log(title, request);
    this.add.emit({title: title, text: request});
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
