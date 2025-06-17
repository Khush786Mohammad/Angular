export type ShoeType={
    id: number;
    name: string;
    shoeType: string;
    price: number
    sizeAvailability: number[];
    keywords: string[];
    imagePath: string;
}

export type ShoeWearType = 'RUNNING' | 'CASUAL' | 'SPORTS'