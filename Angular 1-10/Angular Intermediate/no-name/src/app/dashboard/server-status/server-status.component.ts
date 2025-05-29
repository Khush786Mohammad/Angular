import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  @Input({required: true}) currentStatus !: string;

  get serverStatus() {
    return this.currentStatus;
  }
}
