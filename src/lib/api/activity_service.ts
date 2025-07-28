import { ActivityDetail } from "../types/activity_types";
import { toast } from "react-toastify";
import { processAttractions } from "../functions/activity";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { activity_location_mockdata, activity_mockdata } from "@/mockdata/activity_data";

export async function searchActivity(city: string, startDate: string): Promise<{ status: boolean, data: ActivityDetail[] }> {
    const url_1 = `https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=${city}&languagecode=en-us`

    const headers = {
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY ?? '',
    };

    try {
        const locations = await fetch(url_1, { method: 'GET', headers });
        // const locations = { status: 200, json: () => (activity_location_mockdata) }

        if (locations.status != 200) {
            toast("No activities in that area")
            return { status: true, data: [] };
        }
        const searchId = (await locations.json()).data.products[0].id
        const url_2 = `https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions?id=${searchId}&startDate=${startDate}&sortBy=trending&currency_code=USD&languagecode=en-us`
        const res = await fetch(url_2, { method: 'GET', headers });
        // const res = { status: 200, json: () => (activity_mockdata) }

        if (res.status == 200) {
            const data = await res.json();
            console.log(data);
            console.log(data.data);
            return { status: true, data: processAttractions(data.data.products, startDate) };
        } else {
            return { status: false, data: [] };
        }
    } catch (error) {
        console.error('Hotel search failed:', error);
        throw error;
    }
}