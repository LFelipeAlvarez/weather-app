import { requestApi } from "./requestApi";

export const getWeather = async locationId => {
    const url = `https://www.metaweather.com/api/location/${locationId}/`;
    return await requestApi(url);
}