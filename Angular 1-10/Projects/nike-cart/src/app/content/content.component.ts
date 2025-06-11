import { Component, ViewEncapsulation } from '@angular/core';
import { SideMenuComponent } from "./side-menu/side-menu.component";

@Component({
  selector: 'app-content',
  imports: [SideMenuComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {

}
