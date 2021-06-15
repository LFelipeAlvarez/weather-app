import { useState } from "react";
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import { WeatherContext } from "../contexts/WeatherContext";
import useWeather from "../hooks/useWeather";

const WeatherPage = () => {
    const { weatherData, setWeatherData, setLoading, loading } = useWeather();
    const [farenheit, setFarenheit] = useState(false);
    return (
        <>
            <WeatherContext.Provider value={{ weatherData, setWeatherData, farenheit, setFarenheit, loading, setLoading }}>
                <Header />
                <MainContainer />
            </WeatherContext.Provider>
        </>
    )
}

export default WeatherPage;
