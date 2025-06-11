import { Component } from '@angular/core';
import { StopEventDirective } from '../stop-event.directive';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [StopEventDirective],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css', '../../../styles/shared-styles.css']
})
export class HeaderNavComponent {

}
