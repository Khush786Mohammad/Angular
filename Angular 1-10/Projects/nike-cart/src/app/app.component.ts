import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nike-cart';
}
