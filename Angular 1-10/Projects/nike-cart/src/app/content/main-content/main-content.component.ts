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
  constructor(private shoeService: ShoeService){}

  ngOnInit(): void{
    this.shoesDetails = this.shoeService.shoesDetails;
    console.log(this.shoesDetails);
  }

  get getShoesDetails(){
    return this.shoesDetails
  }

  get heartlogo(){
    return "heart.svg"
  }

}
