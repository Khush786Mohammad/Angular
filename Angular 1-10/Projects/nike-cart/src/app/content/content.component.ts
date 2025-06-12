import { Component, ViewEncapsulation } from '@angular/core';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-content',
  imports: [SideMenuComponent,MainContentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {

}
