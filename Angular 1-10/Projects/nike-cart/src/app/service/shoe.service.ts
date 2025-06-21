import { computed, Injectable, signal } from "@angular/core";
import { CartType } from "../shoes.modals";
import { CurrencyPipe } from "@angular/common";
const shoesDetails = [
  {
    id: 1,
    name: "Nike Air Force 1",
    shoeType: "Casual",
    price: 7999,
    sizeAvailability: [7, 8, 9, 10],
    keywords: ["air force 1", "nike", "casual", "airforce"],
    imagePath: "1.png"
    ,like: false
    ,addedToCart: false
  },
  {
    id: 2,
    name: "Nike Court Vision Low",
    shoeType: "Casual",
    price: 13999,
    sizeAvailability: [7, 10],
    keywords: ["court", "vision", "low", "nike"],
    imagePath: "2.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 3,
    name: "Nike Revolution 6",
    shoeType: "Running",
    price: 4999,
    sizeAvailability: [7],
    keywords: ["revolution", "nike", "running"],
    imagePath: "3.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 4,
    name: "Nike ZoomX Vaporfly",
    shoeType: "Running",
    price: 21695,
    sizeAvailability: [10],
    keywords: ["zoomx", "vaporfly", "nike", "running"],
    imagePath: "4.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 5,
    name: "Nike Air Max",
    shoeType: "Casual",
    price: 8999,
    sizeAvailability: [7, 8, 9],
    keywords: ["air", "max", "nike", "casual"],
    imagePath: "5.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 6,
    name: "Nike Air Max 90",
    shoeType: "Casual",
    price: 9999,
    sizeAvailability: [8, 10],
    keywords: ["air max", "nike", "max 90", "casual"],
    imagePath: "6.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 7,
    name: "Nike Downshifter 12",
    shoeType: "Running",
    price: 3999,
    sizeAvailability: [7, 8, 10],
    keywords: ["downshifter", "nike", "running"],
    imagePath: "7.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 8,
    name: "Nike Pegasus Trail 4",
    shoeType: "Running",
    price: 10499,
    sizeAvailability: [7, 8, 9, 10],
    keywords: ["pegasus", "trail", "nike", "running"],
    imagePath: "8.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 9,
    name: "Nike Court Vision Low",
    shoeType: "Casual",
    price: 6499,
    sizeAvailability: [10],
    keywords: ["court" , "vision", "nike", "casual"],
    imagePath: "9.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 10,
    name: "Nike Air Max",
    shoeType: "Sports",
    price: 7095,
    sizeAvailability: [7, 9, 10],
    keywords: ["air", "max", "casual", "training", "nike", "gym"],
    imagePath: "10.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 11,
    name: "Nike Precision 6 FlyEase",
    shoeType: "Sports",
    price: 5695,
    sizeAvailability: [9, 10],
    keywords: ["precision", "fly", "ease", "nike", "basketball"],
    imagePath: "11.png"
    ,like: false
    ,addedToCart: false

  },
  {
    id: 12,
    name: "Nike Court Vision Low",
    shoeType: "Casual",
    price: 13499,
    sizeAvailability: [7, 10],
    keywords: ["court","low","vision", "nike"],
    imagePath: "12.png"
    ,like: false
    ,addedToCart: false

  },
];

@Injectable({
  providedIn: 'root'
})

export class ShoeService{
  
  shoesData = signal(shoesDetails);

  isShoesItem = signal<boolean>(true);

  cartItems = signal<CartType[]>([]);

  discountSignal = signal<number>(0);

  likeShoes(){
    let count = this.shoesData().filter((shoes)=>
      shoes.like === true
    ).length
    return count;
  }

  sortByPrice(value: string){
    if(value === 'ASC'){
        this.shoesData.update((shoes) => 
        shoes.sort((a, b) => a.price - b.price));
    }
    else{
        this.shoesData.update((shoes) => 
        shoes.sort((a, b) => b.price - a.price))
    }
  }

  resetShoeData(){
    const newData = [...shoesDetails];
    console.log(newData);
    this.shoesData.set(newData);
  }

  filterShoe(sizeValue: number[], shoeType: string[]){
    //first filter the shoes by size
    const filteredData = shoesDetails.filter((shoes) => 
      shoes.sizeAvailability.some((size) => sizeValue.includes(size))
    )
    //check whether the filtered data contains item or not
    //in case the any size is not selected na then the filteredData will contain no values
    //and in that case if we apply filter for shoeType on the filteredData even if shoeType is selected
    //then no data will be present
    if(filteredData.length){
      const filtered = filteredData.filter((shoes)=>
        shoeType.includes(shoes.shoeType.toUpperCase())
      )
      if(filtered.length)
      this.shoesData.set(filtered);
      else
      this.shoesData.set(filteredData);
    }
    else{
      const filtered = shoesDetails.filter((shoes)=>
        shoeType.includes(shoes.shoeType.toUpperCase())
      )
      this.shoesData.set(filtered);
    }
    //if both the shoe size and shoe type is not selected then the overall result will
    //be empty only then in that case return the orignal shoe array
    if(!this.shoesData().length)
        this.shoesData.set(shoesDetails);
  }

  searchShoes(searchValue: string){
    if(this.shoesData().length == 0){
      this.shoesData.set(shoesDetails);
    }

    const tokens = searchValue.split(' ');

    const filtered = this.shoesData().filter((shoes)=>
      shoes.keywords.some((keyword)=>
        tokens.some((token)=>
          keyword.toLowerCase().includes(token.toLowerCase())))
    )

    this.shoesData.set(filtered);
    if(searchValue === ''){
      this.shoesData.set(shoesDetails);
    }
  }

  cart(id: number){
    const shoe = shoesDetails.find((shoes)=>
      shoes.id === id
      );

      shoe!.addedToCart = true;

      if(!shoe)
        return ;
      const newShoe = {
        id: shoe?.id,
        name: shoe?.name,
        price: shoe?.price,
        size: 9,
        imagePath: shoe?.imagePath,
        count: 1
      }
      
      if(newShoe){
        let sh = this.cartItems().map((shoes)=>{
          return shoes;
        }
        )
        sh = [...sh, newShoe];
        this.cartItems.set(sh);
      }
  }

  removeShoeId(id: number){
    this.toggleAddedToCart(id);
    const filtered = this.cartItems().filter((shoe)=>
      shoe.id !== id
    );

    this.cartItems.set(filtered);
  }

  toggleAddedToCart(id: number){
    const shoe = shoesDetails.find((shoes) => 
      shoes.id === id
    )

    shoe!.addedToCart = false;
  }
// code this functionality
  decrementShoeId(id: number){
    // const shoes = this.cartItems().flatMap((shoe)=>{
    //   if(shoe.id === id){
    //     if(shoe.count === 1){
    //       return [];
    //     }
    //     else{
    //       return [{...shoe, count: shoe.count-1}];
    //     }
    //   }
    //   return [shoe];
    // })

    const shoes = this.cartItems().map((shoe) =>{
      if(shoe.id === id){
        if(shoe.count === 1){
          this.toggleAddedToCart(id)
          return null;
        }
        else{
          return {...shoe, count: shoe.count-1};
        }
      }
      return shoe;
    }).filter((shoe)=>
      shoe !== null
    )

    this.cartItems.set(shoes);

  }

  incrementShoeId(id: number){
    const shoes = this.cartItems().filter((shoe)=>{
      if(shoe.id === id){
        shoe.count += 1;
      }
      return shoe;
    }
    )
    this.cartItems.set(shoes);
  }

  totalCartValue = computed(()=>{
    return this.cartItems().reduce((acc, curr) =>
      acc + (curr!.price * curr!.count),0)
  })

  discountTotal = computed(()=>{
    const total = this.totalCartValue();
    const discount = this.discountSignal();

    if(discount)
      return total - (total * (discount / 100));
    return total;

  })

  discount(coupon: string){
    if(this.cartItems().length == 0)
    {
      console.log("cart is empty");
    }

    else if(coupon == 'COUPON20'){
      this.discountSignal.set(20);
    }
    else if(coupon == 'COUPON30'){
      this.discountSignal.set(30);
    }
    else
      this.discountSignal.set(0);
  }

}
