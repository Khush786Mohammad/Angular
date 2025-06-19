import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderLogoComponent } from "./header-logo/header-logo.component";
import { HeaderActionComponent } from "./header-action/header-action.component";
import { HeaderNavComponent } from "./header-nav/header-nav.component";

@Component({
  selector: 'app-header',
  imports: [HeaderLogoComponent, HeaderActionComponent, HeaderActionComponent, HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  
}
