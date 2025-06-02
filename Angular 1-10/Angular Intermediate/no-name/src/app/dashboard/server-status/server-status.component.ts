import { NgClass } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [NgClass],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnChanges{
  @Input({required: true}) currentStatus !: string;

  get serverStatus() {
    return this.currentStatus;
  }

  ngOnChanges(): void {
    console.log("Message from OnChange hook");
  }
}
