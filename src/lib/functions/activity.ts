import { ActivityDetail } from "../types/activity_types";

interface raw_attraction_data {
    name: string,
    shortDescription: string,
    representativePrice: { currency: string, publicAmount: string },
    reviewsStats: { combinedNumericStats: { average: number, total: number } },
    primaryPhoto: { small: string },
    ufiDetails: {
        bCityName: string,
    }
}

export const processAttractions = (arr: raw_attraction_data[], date: string): ActivityDetail[] => {
    const res = arr.map(({ name, shortDescription, representativePrice, reviewsStats, primaryPhoto, ufiDetails }) => ({
        name,
        description: shortDescription,
        price: `${representativePrice.currency} ${representativePrice?.publicAmount}`,
        date: date,
        time: "9:00 AM",
        rating: `${reviewsStats?.combinedNumericStats?.average} (${reviewsStats?.combinedNumericStats.total})`,
        img: primaryPhoto?.small,
        location: ufiDetails.bCityName
    }))
    console.log(res);
    return res;
};