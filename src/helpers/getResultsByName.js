import { requestApi } from "./requestApi";

export const getResultsByName = async keyWords => {
    const keyWordsClean = keyWords.toLowerCase().trim();
    const url = `https://www.metaweather.com/api/location/search/?query=${keyWordsClean}`;
    const results = await requestApi(url);
    return results;
}