import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../../service/shoe.service';
import { type ShoeType } from '../../shoes.modals';
import { CurrencyPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [NgStyle, CurrencyPipe],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit{
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

    console.log(this.service.shoesData());
  }

  addToCart(id: number){
    this.service.cart(id);
  }
}
