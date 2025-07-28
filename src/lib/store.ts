import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer';
import { FlightDetails } from '@/lib/types/flights_types'
import { HotelDetail } from '@/lib/types/hotel_types';
import { ActivityDetail } from '@/lib/types/activity_types'

type storeState = {
    flights: FlightDetails[],
    activities: ActivityDetail[]
    hotels: HotelDetail[]
}
type storeActions = {
    addFlight: (flight: FlightDetails) => void,
    removeFlight: (index: number) => void,
    addHotel: (hotel: HotelDetail) => void,
    removeHotel: (index: number) => void,
    addActivity: (activity: ActivityDetail) => void,
    removeActivity: (index: number) => void
}

type storeType = storeState & storeActions;

export const useStore = create(immer<storeType>((set) => ({
    activities: [],
    flights: [],
    hotels: [],
    addFlight: (flight: FlightDetails) => {
        set((state) => {
            state.flights.push(flight);
        })
    },
    removeFlight: (index: number) => {
        set(state => {
            state.flights.splice(index, 1);
        })
    },

    addActivity: (activity: ActivityDetail) => {
        set((state) => {
            state.activities.push(activity);
        })
    },
    removeActivity: (index: number) => {
        set(state => {
            state.activities.splice(index, 1);
        })
    },

    addHotel: (hotel: HotelDetail) => {
        set((state) => {
            state.hotels.push(hotel);
        })
    },
    removeHotel: (index: number) => {
        set(state => {
            state.hotels.splice(index, 1);
        })
    }
})))
