import { Component, Input } from '@angular/core';
import { StopEventDirective } from '../stop-event.directive';

@Component({
  selector: 'app-header-action',
  imports: [StopEventDirective],
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.css','../../../styles/shared-styles.css']
})
export class HeaderActionComponent {
  @Input({required: true}) heartlogo!: string;
}
