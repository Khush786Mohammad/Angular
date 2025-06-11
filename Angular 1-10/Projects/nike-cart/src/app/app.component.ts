import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { ContentComponent } from "./content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nike-cart';
}
