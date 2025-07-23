import { Component, Input } from '@angular/core';
import { StopEventDirective } from '../stop-event.directive';
import { ShoeService } from '../../service/shoe.service';
import { NgClass, NgStyle } from '@angular/common';
import { HeartSvgComponent } from "../../shared/heart-svg/heart-svg.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-action',
  imports: [StopEventDirective, NgStyle, HeartSvgComponent, RouterLink],
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.css','../../../styles/shared-styles.css']
})
export class HeaderActionComponent {
  totalLikeShoes :number = 0;
  flag :boolean = true;

  constructor(private service: ShoeService){}
  
  onDisplayCart(){
    this.service.isShoesItem.set(false);
  }

  displayTotalLikeShoes(){
    this.totalLikeShoes = this.service.likeShoes();
    this.flag = false;
  }

  changeClass(){
    this.flag = true;
  }
}
