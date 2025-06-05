import { Component, Input, input,  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: 'dashboard-item'
  }
})
export class DashboardItemComponent {
  @Input({required: true}) imageSource !: {src: string, alt: string};
  title = input.required<string>();
}
