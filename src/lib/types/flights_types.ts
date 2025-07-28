interface FlightSegment {
    time: string;
    date: string;
}

interface Route {
    start: string;
    end: string;
    stops: string[];
}

interface Facilities {
    baggage: string;
    cabinBaggage: string;
    inFlightEntertainment: boolean;
    inFlightMeal: boolean;
    usbPort: boolean;
}

export interface FlightDetails {
    type: "oneway" | "round";
    flightIndex: number;
    airline: string;
    flightNumber: string;
    cabinClass: string;
    departure: FlightSegment;
    duration: string;
    route: Route;
    arrival: FlightSegment;
    price: string;
    facilities: Facilities;
}
