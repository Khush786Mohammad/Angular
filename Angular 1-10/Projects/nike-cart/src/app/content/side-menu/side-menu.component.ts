import { Component } from '@angular/core';
import { StopEventDirective } from '../../header/stop-event.directive';

@Component({
  selector: 'app-side-menu',
  imports: [StopEventDirective],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

}
