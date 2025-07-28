/* eslint-disable @typescript-eslint/no-explicit-any */

import { FlightDetails } from "../types/flights_types";

interface Airport {
    code: string;
    name: string;
    city: string;
    country: string;
}

interface Currency {
    currencyCode: string;
    units: number;
    nanos: number;
}

interface LuggageAllowance {
    luggageType: string;
    maxWeightPerPiece: number;
    massUnit: string;
}

interface FlightLeg {
    departureTime: string;
    arrivalTime: string;
    departureAirport: Airport;
    arrivalAirport: Airport;
    cabinClass: string;
    flightInfo: {
        flightNumber: number;
        facilities: string[];
        carrierInfo: {
            marketingCarrier: string;
        };
    };
    carriersData: Array<{ name: string; code: string }>;
    amenities: any[];
}

interface FlightSegment {
    departureAirport: Airport;
    arrivalAirport: Airport;
    departureTime: string;
    arrivalTime: string;
    legs: FlightLeg[];
    totalTime: number;
    travellerCheckedLuggage: Array<{ luggageAllowance: LuggageAllowance }>;
    travellerCabinLuggage: Array<{ luggageAllowance: LuggageAllowance }>;
}

interface FlightData {
    segments: FlightSegment[];
    priceBreakdown: { total: Currency };
}


const formatTime = (isoString: string): string => 
    new Date(isoString).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

const formatDate = (isoString: string): string => 
    new Date(isoString).toLocaleDateString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    });

const formatDuration = (totalTimeInSeconds: number): string => {
    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
};

const formatPrice = (currency: Currency): string => {
    const total = currency.units + (currency.nanos / 1000000000);
    return `₦ ${total.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const getStops = (legs: FlightLeg[]): string[] => 
    legs.slice(0, -1).map(leg => leg.arrivalAirport.code);

const getBaggageInfo = (checkedLuggage: any[], cabinLuggage: any[]) => {
    const checked = checkedLuggage.find(l => l.luggageAllowance.luggageType === 'CHECKED_IN');
    const cabin = cabinLuggage.find(l => l.luggageAllowance.luggageType === 'HAND');
    
    return {
        baggage: checked 
            ? `${Math.round(checked.luggageAllowance.maxWeightPerPiece * 0.453592)}kg`
            : 'No checked baggage',
        cabinBaggage: cabin 
            ? `${Math.round(cabin.luggageAllowance.maxWeightPerPiece * 0.453592)}kg`
            : 'No cabin baggage'
    };
};

const hasFacility = (legs: FlightLeg[], facilityType: string): boolean =>
    legs.some(leg => 
        leg.flightInfo.facilities.includes(facilityType) ||
        leg.amenities.some(a => a.type === facilityType)
    );


const parseFlightData = (flightOffers: FlightData[], type: "oneway" | "round", source: string): FlightDetails[] => {
    const flights: FlightDetails[] = [];

    flightOffers.forEach(flightData => {
        flightData.segments.forEach((segment, index) => {
            // Skip segments that don't start from the source
            if (segment.departureAirport.code !== source) return;

            const primaryCarrier = segment.legs[0].carriersData[0];
            const flightNumbers = segment.legs
                .map(leg => `${leg.flightInfo.carrierInfo.marketingCarrier}-${leg.flightInfo.flightNumber}`)
                .join(', ');
            
            const baggageInfo = getBaggageInfo(
                segment.travellerCheckedLuggage,
                segment.travellerCabinLuggage
            );

            const flight: FlightDetails = {
                type,
                flightIndex: index + 1,
                airline: primaryCarrier.name,
                flightNumber: flightNumbers,
                cabinClass: segment.legs[0].cabinClass.charAt(0).toUpperCase() + 
                           segment.legs[0].cabinClass.slice(1).toLowerCase(),
                departure: {
                    time: formatTime(segment.departureTime),
                    date: formatDate(segment.departureTime)
                },
                duration: formatDuration(segment.totalTime),
                route: {
                    start: segment.departureAirport.code,
                    end: segment.arrivalAirport.code,
                    stops: getStops(segment.legs)
                },
                arrival: {
                    time: formatTime(segment.arrivalTime),
                    date: formatDate(segment.arrivalTime)
                },
                price: formatPrice(flightData.priceBreakdown.total),
                facilities: {
                    baggage: baggageInfo.baggage,
                    cabinBaggage: baggageInfo.cabinBaggage,
                    inFlightEntertainment: hasFacility(segment.legs, 'entertainment'),
                    inFlightMeal: hasFacility(segment.legs, 'meal'),
                    usbPort: hasFacility(segment.legs, 'usb')
                }
            };

            flights.push(flight);
        });
    });

    return flights;
};

export { parseFlightData };
export type { FlightData };