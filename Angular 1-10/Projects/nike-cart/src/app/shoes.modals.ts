export type ShoeType={
    id: number;
    name: string;
    shoeType: string;
    price: number
    sizeAvailability: number[];
    keywords: string[];
    imagePath: string;
}

export interface CartType{
    id: number;
    name: string;
    price: number;
    size ?: number;
    imagePath: string;
    count: number;
}
