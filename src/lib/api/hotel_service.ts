import { HotelDetail } from "../types/hotel_types";
import { parseHotelOffers } from "../functions/hotel";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { hotel_mock_data } from "@/mockdata/hotel_data";

export async function searchHotels(input: {
    selectedCity: {
        name: string;
        latitude: number;
        longitude: number;
    };
    checkInDate: string;
    checkOutDate: string;
}): Promise<{ status: boolean, data: HotelDetail[] }> {
    const { selectedCity, checkInDate, checkOutDate } = input;

    const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&units=metric&temperature_unit=c&languagecode=en-us&currency_code=USD&arrival_date=${checkInDate}&departure_date=${checkOutDate}`;

    const headers = {
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY ?? '',
    };

    try {
        const res = await fetch(url, { method: 'GET', headers });
        // const res = { status: 200, json: () => (hotel_mock_data) }

        if (res.status == 200) {
            const data = await res.json();
            console.log(data);
            console.log(data.data);
            return { status: true, data: parseHotelOffers(data.data.result, { checkInDate, checkOutDate, rooms: 1 }) };
        } else {
            return { status: false, data: [] };
        }
    } catch (error) {
        console.error('Hotel search failed:', error);
        throw error;
    }
}