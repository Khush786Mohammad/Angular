export interface Room{
    totalRooms : number;
    availableRooms: number;
    roomBooked: number;
    hasRooms ?: number;
}

export interface RoomList{
    roomId: number;
    roomType: string;
    price: number;
    checkIn: Date;
    checkOut: Date;
}