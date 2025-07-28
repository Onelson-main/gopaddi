import { parseFlightData } from "@/lib/functions/flight"
import { FlightDetails } from "@/lib/types/flights_types"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { search_airline_mockdata } from "@/mockdata/airline_data";

export type FlightSearchInput = {
    from: string;
    to: string;
    type: 'oneway' | 'round';
    departure: string;
    return?: string;
};

export async function searchFlights(input: FlightSearchInput): Promise<{ status: boolean, data: FlightDetails[] }> {
    const { from, to, type, departure, return: returnDate } = input;

    const departDate = departure.split('T')[0];
    const returnQuery = type === 'round' && returnDate
        ? `&returnDate=${returnDate.split('T')[0]}`
        : '';

    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${from}.AIRPORT&toId=${to}.AIRPORT&departDate=${departDate}${returnQuery}&stops=none&adults=1&sort=BEST&currency_code=NGN`;

    const headers = {
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY ?? '',
    };

    try {
        const res = await fetch(url, { method: 'GET', headers });
        // const res = { status: 200, json: () => (search_airline_mockdata) }
        if (res.status == 200) {
            const data = await res.json();
            console.log(data.data.flightOffers);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const flightOffers = (data.data.flightOffers) as any;
            return { status: true, data: parseFlightData(flightOffers, type, from) };
        } else {
            return { status: false, data: [] };
        }
    } catch (error) {
        console.error('Flight search failed:', error);
        throw error;
    }
}
