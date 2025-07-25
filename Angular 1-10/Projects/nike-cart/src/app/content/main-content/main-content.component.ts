import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoeService } from '../../service/shoe.service';
import { type ShoeType } from '../../shoes.modals';
import { CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { HeartSvgComponent } from "../../shared/heart-svg/heart-svg.component";

@Component({
  selector: 'app-main-content',
  imports: [NgStyle, CurrencyPipe, NgClass, HeartSvgComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit, OnDestroy{
  shoesDetails !: ShoeType[];
  isLiked : boolean = false;
  constructor(private service: ShoeService){}
  isActive: boolean = true;

  ngOnInit(): void{
  }

  get getShoesDetails(){
    return this.service.shoesData();
  }

  toggleHeart(id: number){
    const likeShoe = this.getShoesDetails.find(shoe => shoe.id === id);
    if(likeShoe){
      likeShoe.like = !likeShoe.like;
    }
  }

  addToCart(id: number){
    this.service.cart(id);
  }

  ngOnDestroy(): void {
    console.log('Main Content component destroyed');
  }
}
