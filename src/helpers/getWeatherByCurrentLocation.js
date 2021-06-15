import { getResultsByCoordinates } from "../helpers/getResultsByCoordinates";
import { getWeather } from "../helpers/getWeather";

export const getWeatherByCurrentLocation = (setWeather, setLoading) => {

    navigator.geolocation.getCurrentPosition(
        async position => {
            setLoading(true);
            const coordinates = position.coords;
            const results = await getResultsByCoordinates(coordinates.latitude, coordinates.longitude);
            const weather = await getWeather(results.woeid);
            setWeather(weather);
            setLoading(false);
        },
        async err => {
            console.warn('ERROR(' + err.code + '): ' + err.message);
            alert("You must allow this site to access your location.");
            const weather = await getWeather(565346);
            setWeather(weather);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
}