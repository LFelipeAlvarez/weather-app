import { useEffect, useState } from "react";
import { getWeatherByCurrentLocation } from "../helpers/getWeatherByCurrentLocation";


const useWeather = () => {

    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getWeatherByCurrentLocation(setWeatherData, setLoading);
    }, []);

    return {
        weatherData,
        setWeatherData,
        loading,
        setLoading
    }

}

export default useWeather;
