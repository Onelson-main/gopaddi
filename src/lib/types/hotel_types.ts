export interface HotelDetail {
    hotelIndex: number;
    name: string;
    address: string;
    showInMap: boolean;
    rating: string;
    ratingWord: string;
    roomType: string;
    price: string;
    totalPrice: string;
    stayDetails: string;
    facilities: {
        hasBar: boolean,
        hasSwimming_pool: boolean,
        otherfacilities: string[]
    };
    checkIn: string;
    checkOut: string;
    imageUrl: string;
}
