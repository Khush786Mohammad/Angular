import { Component } from '@angular/core';
import { ShoeService } from '../../service/shoe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-logo',
  imports: [RouterLink],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.css'
})
export class HeaderLogoComponent {
  constructor(private service: ShoeService){}

  homePage(){
    this.service.isShoesItem.set(true);
  }
}
