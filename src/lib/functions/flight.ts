/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlightDetails } from "../types/flights_types";

interface Airport {
    type: string;
    code: string;
    name: string;
    city: string;
    cityName: string;
    country: string;
    countryName: string;
}

interface CarrierInfo {
    operatingCarrier: string;
    marketingCarrier: string;
    operatingCarrierDisclosureText: string;
}

interface FlightInfo {
    facilities: string[];
    flightNumber: number;
    planeType: string;
    carrierInfo: CarrierInfo;
}

interface CarrierData {
    name: string;
    code: string;
    logo: string;
}

interface FlightLeg {
    departureTime: string;
    arrivalTime: string;
    departureAirport: Airport;
    arrivalAirport: Airport;
    cabinClass: string;
    flightInfo: FlightInfo;
    carriers: string[];
    carriersData: CarrierData[];
    totalTime: number;
    flightStops: any[];
    amenities: any[];
    departureTerminal?: string;
    arrivalTerminal?: string;
}

interface Currency {
    currencyCode: string;
    units: number;
    nanos: number;
}

interface PriceBreakdown {
    total: Currency;
    baseFare: Currency;
    fee: Currency;
    tax: Currency;
    totalRounded?: Currency;
    discount: Currency;
    totalWithoutDiscount: Currency;
    totalWithoutDiscountRounded?: Currency;
    showPriceStrikethrough: boolean;
}

interface LuggageAllowance {
    luggageType: string;
    ruleType?: string;
    maxPiece: number;
    maxWeightPerPiece: number;
    massUnit: string;
    sizeRestrictions?: {
        maxLength: number;
        maxWidth: number;
        maxHeight: number;
        sizeUnit: string;
    };
}

interface TravellerLuggage {
    travellerReference: string;
    luggageAllowance: LuggageAllowance;
    personalItem?: boolean;
}

interface FlightSegment {
    departureAirport: Airport;
    arrivalAirport: Airport;
    departureTime: string;
    arrivalTime: string;
    legs: FlightLeg[];
    totalTime: number;
    travellerCheckedLuggage: TravellerLuggage[];
    travellerCabinLuggage: TravellerLuggage[];
    isAtolProtected: boolean;
    showWarningDestinationAirport: boolean;
    showWarningOriginAirport: boolean;
}

interface FlightData {
    token: string;
    segments: FlightSegment[];
    priceBreakdown: PriceBreakdown;
    travellerPrices: any[];
    priceDisplayRequirements: any[];
    pointOfSale: string;
    tripType: string;
}

// Updated extracted flight information interface
interface ExtractedFlightInfo {
    airline: string;
    flightNumber: string;
    cabinClass: string;
    departureTime: string;
    departureDate: string;
    duration: string;
    route: {
        start: string;
        end: string;
        stops: string[];
    };
    arrivalTime: string;
    arrivalDate: string;
    price: string;
    facilities: {
        baggage: string;
        cabinBaggage: string;
        inFlightEntertainment: boolean;
        inFlightMeal: boolean;
        usbPort: boolean;
    };
}

// Helper functions
function formatTime(isoString: string): string {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

function formatDate(isoString: string): string {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    });
}

function formatDuration(totalTimeInSeconds: number): string {
    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}

function formatPrice(currency: Currency): string {
    const total = currency.units + (currency.nanos / 1000000000);
    return `₦ ${total.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatRoute(segment: FlightSegment): { start: string; end: string; stops: string[] } {
    const start = segment.departureAirport.code;
    const end = segment.arrivalAirport.code;
    const stops: string[] = [];

    // If there are multiple legs, the intermediate airports are stops
    if (segment.legs.length > 1) {
        for (let i = 0; i < segment.legs.length - 1; i++) {
            stops.push(segment.legs[i].arrivalAirport.code);
        }
    }

    return { start, end, stops };
}

function formatBaggage(luggage: TravellerLuggage[]): { baggage: string; cabinBaggage: string } {
    const checkedBaggage = luggage.find(l => l.luggageAllowance.luggageType === 'CHECKED_IN');
    const cabinBaggage = luggage.find(l => l.luggageAllowance.luggageType === 'HAND');

    const baggage = checkedBaggage
        ? `${Math.round(checkedBaggage.luggageAllowance.maxWeightPerPiece * 0.453592)}kg` // Convert lbs to kg
        : 'No checked baggage';

    const cabin = cabinBaggage
        ? `${Math.round(cabinBaggage.luggageAllowance.maxWeightPerPiece * 0.453592)}kg` // Convert lbs to kg
        : 'No cabin baggage';

    return { baggage, cabinBaggage: cabin };
}

// Updated main extraction function to handle segments properly
function extractFlightData(flightData: FlightData): ExtractedFlightInfo[] {
    const extractedFlights: ExtractedFlightInfo[] = [];

    flightData.segments.forEach((segment) => {
        const baggageInfo = formatBaggage([
            ...segment.travellerCheckedLuggage,
            ...segment.travellerCabinLuggage
        ]);

        const routeInfo = formatRoute(segment);

        // Get the primary carrier from the first leg
        const primaryCarrier = segment.legs[0].carriersData[0];

        // Create a combined flight number for multi-leg segments
        const flightNumbers = segment.legs.map(leg =>
            `${leg.flightInfo.carrierInfo.marketingCarrier}-${leg.flightInfo.flightNumber}`
        ).join(', ');

        const extractedFlight: ExtractedFlightInfo = {
            airline: primaryCarrier.name,
            flightNumber: flightNumbers,
            cabinClass: segment.legs[0].cabinClass.charAt(0).toUpperCase() + segment.legs[0].cabinClass.slice(1).toLowerCase(),
            departureTime: formatTime(segment.departureTime),
            departureDate: formatDate(segment.departureTime),
            duration: formatDuration(segment.totalTime),
            route: routeInfo,
            arrivalTime: formatTime(segment.arrivalTime),
            arrivalDate: formatDate(segment.arrivalTime),
            price: formatPrice(flightData.priceBreakdown.total),
            facilities: {
                baggage: baggageInfo.baggage,
                cabinBaggage: baggageInfo.cabinBaggage,
                inFlightEntertainment: segment.legs.some(leg =>
                    leg.flightInfo.facilities.includes('entertainment') ||
                    leg.amenities.some(a => a.type === 'entertainment')
                ),
                inFlightMeal: segment.legs.some(leg =>
                    leg.flightInfo.facilities.includes('meal') ||
                    leg.amenities.some(a => a.type === 'meal')
                ),
                usbPort: segment.legs.some(leg =>
                    leg.flightInfo.facilities.includes('usb') ||
                    leg.amenities.some(a => a.type === 'usb')
                )
            }
        };

        extractedFlights.push(extractedFlight);
    });

    return extractedFlights;
}

// todo
function displayFlightInfo(flights: ExtractedFlightInfo[]): object[] {
    return flights.map((flight, index) => {
        // const facilities = [];
        // facilities.push(`Baggage: ${flight.facilities.baggage}, Cabin Baggage: ${flight.facilities.cabinBaggage}`);

        // if (flight.facilities.inFlightEntertainment) {
        //     facilities.push('In flight entertainment');
        // }
        // if (flight.facilities.inFlightMeal) {
        //     facilities.push('In flight meal');
        // }
        // if (flight.facilities.usbPort) {
        //     facilities.push('USB Port');
        // }

        return {
            flightIndex: index + 1,
            airline: flight.airline,
            flightNumber: flight.flightNumber,
            cabinClass: flight.cabinClass,
            departure: {
                time: flight.departureTime,
                date: flight.departureDate
            },
            duration: flight.duration,
            route: flight.route,
            arrival: {
                time: flight.arrivalTime,
                date: flight.arrivalDate
            },
            price: flight.price,
            facilities: flight.facilities
        };
    });
}


function parseFlightData(flightOffers: FlightData[], type: "oneway" | "round", source: string): FlightDetails[] {
    const allFlights: ExtractedFlightInfo[] = [];

    flightOffers.forEach(flightData => {
        const extractedFlights = extractFlightData(flightData);
        allFlights.push(...extractedFlights);
    });

    const flightInfo = displayFlightInfo(allFlights);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return flightInfo.filter((val) => (val.route?.start == source))
        .map((val) => ({ type, ...val }))

}

export {
    parseFlightData,
    formatTime,
    formatDate,
    formatDuration,
    formatPrice,
    formatRoute,
    formatBaggage
};
export type { FlightData };