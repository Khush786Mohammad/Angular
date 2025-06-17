import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ShoeService{
   shoesDetails = [
    {
      id: 1,
      name: "Nike Air Force 1",
      shoeType: "Casual",
      price: 7999,
      sizeAvailability: [7, 8, 9, 10],
      keywords: ["air force 1", "nike", "casual", "airforce"],
      imagePath: "1.png"
    },
    {
      id: 2,
      name: "Nike Court Vision Low",
      shoeType: "Casual",
      price: 13999,
      sizeAvailability: [7, 8, 10],
      keywords: ["court", "vision", "low", "nike"],
      imagePath: "2.png"
    },
    {
      id: 3,
      name: "Nike Revolution 6",
      shoeType: "Running",
      price: 4999,
      sizeAvailability: [7],
      keywords: ["revolution", "nike", "running"],
      imagePath: "3.png"
    },
    {
      id: 4,
      name: "Nike ZoomX Vaporfly",
      shoeType: "Running",
      price: 21695,
      sizeAvailability: [7, 8, 9, 10],
      keywords: ["zoomx", "vaporfly", "nike", "running"],
      imagePath: "4.png"
    },
    {
      id: 5,
      name: "Nike Air Max",
      shoeType: "Casual",
      price: 8999,
      sizeAvailability: [7, 8, 9],
      keywords: ["air", "max", "nike", "casual"],
      imagePath: "5.png"
    },
    {
      id: 6,
      name: "Nike Air Max 90",
      shoeType: "Casual",
      price: 9999,
      sizeAvailability: [8, 9, 10],
      keywords: ["air max", "nike", "max 90", "casual"],
      imagePath: "6.png"
    },
    {
      id: 7,
      name: "Nike Downshifter 12",
      shoeType: "Running",
      price: 3999,
      sizeAvailability: [7, 8, 10],
      keywords: ["downshifter", "nike", "running"],
      imagePath: "7.png"
    },
    {
      id: 8,
      name: "Nike Pegasus Trail 4",
      shoeType: "Trail Running",
      price: 10499,
      sizeAvailability: [7, 8, 9, 10],
      keywords: ["pegasus", "trail", "nike", "running"],
      imagePath: "8.png"
    },
    {
      id: 9,
      name: "Nike Court Vision Low",
      shoeType: "Casual",
      price: 6499,
      sizeAvailability: [10],
      keywords: ["court" , "vision", "nike", "casual"],
      imagePath: "9.png"
    },
    {
      id: 10,
      name: "Nike Air Max",
      shoeType: "Training",
      price: 7095,
      sizeAvailability: [7, 9, 10],
      keywords: ["air", "max", "casual", "training", "nike", "gym"],
      imagePath: "10.png"
    },
    {
      id: 11,
      name: "Nike Precision 6 FlyEase",
      shoeType: "Basketball",
      price: 5695,
      sizeAvailability: [7, 9, 10],
      keywords: ["precision", "fly", "ease", "nike", "basketball"],
      imagePath: "11.png"
    },
    {
      id: 12,
      name: "Nike Court Vision Low",
      shoeType: "Casual",
      price: 13499,
      sizeAvailability: [7, 10],
      keywords: ["court","low","vision", "nike"],
      imagePath: "12.png"
    },
  ];

  isShoesItem = signal<boolean>(true);
  isCart = signal<boolean>(false);
}