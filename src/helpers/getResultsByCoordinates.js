import { requestApi } from "./requestApi";

export const getResultsByCoordinates = async (lat, long) => {
    const url = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`;
    const results = await requestApi(url);
    return results[0];
}