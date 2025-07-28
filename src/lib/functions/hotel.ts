import { HotelDetail } from "../types/hotel_types";

interface Currency {
    value: number;
    currency: string;
}

interface CheckTime {
    from: string;
    until: string;
}

interface CompositePrice {
    gross_amount: Currency;
    net_amount: Currency;
    strikethrough_amount?: Currency;
    gross_amount_hotel_currency: Currency;
    charges_details?: {
        translated_copy: string;
        amount: Currency;
    };
    items?: Array<{
        name: string;
        kind: string;
        item_amount: Currency;
        details?: string;
    }>;
}

interface Badge {
    id: string;
    text: string;
    badge_variant: string;
}

interface HotelData {
    hotel_name: string;
    hotel_name_trans: string;
    city: string;
    city_in_trans: string;
    review_score: number;
    review_nr: number;
    review_score_word: string;
    unit_configuration_label: string;
    composite_price_breakdown: CompositePrice;
    min_total_price: number;
    currencycode: string;
    checkin: CheckTime;
    checkout: CheckTime;
    has_swimming_pool: number;
    has_free_parking: number;
    hotel_include_breakfast: number;
    main_photo_url: string;
    latitude: number;
    longitude: number;
    badges: Badge[];
    countrycode: string;
    accommodation_type: number;
}

// Parsed hotel information interface
interface ParsedHotelInfo {
    name: string;
    address: string;
    showInMap: boolean;
    rating: {
        score: number;
        reviews: number;
        word: string;
    };
    roomType: string;
    price: string;
    totalPrice: string;
    stayDetails: string;
    facilities: {
        hasBar: boolean
        hasSwimming_pool: boolean,
        otherfacilities: string[]
    };
    checkIn: string;
    checkOut: string;
    imageUrl: string;
}

// Helper functions
function formatPrice(amount: number, currency: string): string {
    if (currency === 'INR') {
        return `₦ ${amount.toLocaleString('en-NG')}`;
    }
    return `${currency} ${amount.toLocaleString()}`;
}

function formatDate(dateString: string): string {
    // If no date provided, return placeholder
    if (!dateString) return 'DD-MM-YYYY';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

const extractRoomTypeWRegex = (str: string) => str.match(/<b>(.*?)<\/b>/)?.[1] || null;

function extractRoomType(unitLabel: string): string {
    // Extract room type from unit configuration label
    const lines = unitLabel.split('\n');
    if (lines[0].includes("<b>")) {
        return (extractRoomTypeWRegex(lines[0])) || 'Standard Room';
    }
    return lines[0] || 'Standard Room';
}

function extractAddress(hotel: HotelData): string {
    // Create address from available location data
    let address = '';

    if (hotel.city) {
        address += hotel.city;
    }

    if (hotel.city_in_trans && hotel.city_in_trans !== hotel.city) {
        address += address ? `, ${hotel.city_in_trans}` : hotel.city_in_trans;
    }

    // Add country code if available
    if (hotel.countrycode) {
        address += address ? `, ${hotel.countrycode.toUpperCase()}` : hotel.countrycode.toUpperCase();
    }

    return address || 'Address not available';
}

function extractFacilities(hotel: HotelData) {
    const facilities = {
        hasBar: false,
        hasSwimming_pool: false,
        otherfacilities: [] as string[]
    }

    if (hotel.has_swimming_pool === 1) {
        facilities.hasSwimming_pool = true
    }

    if (hotel.has_free_parking === 1) {
        facilities.otherfacilities.push('Free Parking');
    }

    if (hotel.hotel_include_breakfast === 1) {
        facilities.otherfacilities.push('Breakfast');
    }

    return facilities;
}

function calculateStayDetails(hotel: HotelData, nights: number = 1, rooms: number = 1): string {
    return `${rooms} room${rooms > 1 ? 's' : ''} x ${nights} night${nights > 1 ? 's' : ''} incl. taxes`;
}

function calculateTotalPrice(hotel: HotelData, nights: number = 1, rooms: number = 1): string {
    const totalPrice = hotel.min_total_price * nights * rooms;
    return `Total Price: ${hotel.currencycode} ${totalPrice.toLocaleString()}`;
}

function calculateNights(checkIn: string, checkOut: string): number {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Calculate the difference in milliseconds
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

    // Convert milliseconds to days
    const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return nights;
}
// Main parsing function
function parseHotelData(hotelsData: HotelData[], nights: number = 1, rooms: number = 1): ParsedHotelInfo[] {
    return hotelsData.map(hotel => {
        return {
            name: hotel.hotel_name_trans || hotel.hotel_name,
            address: extractAddress(hotel),
            showInMap: !!(hotel.latitude && hotel.longitude),
            rating: {
                score: hotel.review_score,
                reviews: hotel.review_nr,
                word: hotel.review_score_word
            },
            roomType: extractRoomType(hotel.unit_configuration_label),
            price: formatPrice(hotel.min_total_price, hotel.currencycode),
            totalPrice: calculateTotalPrice(hotel, nights, rooms),
            stayDetails: calculateStayDetails(hotel, nights, rooms),
            facilities: extractFacilities(hotel),
            checkIn: formatDate(''),
            checkOut: formatDate(''),
            imageUrl: hotel.main_photo_url
        };
    });
}

// Function to display hotel information in your desired format
function displayHotelInfo(hotels: ParsedHotelInfo[]): HotelDetail[] {
    return hotels.map((hotel, index) => ({
        hotelIndex: index + 1,
        name: hotel.name,
        address: hotel.address,
        showInMap: hotel.showInMap,
        rating: `${hotel.rating.score} (${hotel.rating.reviews})`,
        ratingWord: hotel.rating.word,
        roomType: hotel.roomType,
        price: hotel.price,
        totalPrice: hotel.totalPrice,
        stayDetails: hotel.stayDetails,
        facilities: hotel.facilities,
        checkIn: hotel.checkIn,
        checkOut: hotel.checkOut,
        imageUrl: hotel.imageUrl
    }));
}


function parseHotelOffers(hotelOffers: HotelData[], options: {
    nights?: number;
    rooms?: number;
    checkInDate: string;
    checkOutDate: string;
}): HotelDetail[] {
    const { rooms = 1, checkInDate, checkOutDate } = options;

    const parsedHotels = parseHotelData(hotelOffers, calculateNights(checkInDate, checkOutDate), rooms);

    // Update check-in/out dates if provided
    if (checkInDate || checkOutDate) {
        parsedHotels.forEach(hotel => {
            if (checkInDate) hotel.checkIn = formatDate(checkInDate);
            if (checkOutDate) hotel.checkOut = formatDate(checkOutDate);
        });
    }

    return displayHotelInfo(parsedHotels);
}

export {
    parseHotelOffers,
    formatPrice,
    formatDate,
    extractRoomType,
    extractAddress,
    extractFacilities
};

export type { HotelData, ParsedHotelInfo };