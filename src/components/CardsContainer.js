import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import WeatherCard from "./WeatherCard";

const CardsContainer = () => {

    const { weatherData, farenheit, setFarenheit } = useContext(WeatherContext);

    const weatherNextDays = weatherData.consolidated_weather.filter((e, i) => i !== 0);//remove first element of array

    return (
        <section className="section">
            <div className="section__cards">
                <h2 className="section__title">
                    {
                        !farenheit
                            ?
                            <>
                                <button className="section__button section__button--active">
                                    <span className="section__span">C</span>
                                </button>
                                <button onClick={() => setFarenheit(!farenheit)} className="section__button">
                                    <span className="section__span">F</span>
                                </button>
                            </>
                            :
                            <>
                                <button onClick={() => setFarenheit(!farenheit)} className="section__button">
                                    <span className="section__span">C</span>
                                </button>
                                <button className="section__button section__button--active">
                                    <span className="section__span">F</span>
                                </button>
                            </>
                    }
                </h2>
                {
                    weatherNextDays.map((weatherInfo, i) => {
                        const {
                            id,
                            weather_state_name: state,
                            applicable_date: date,
                            min_temp: min,
                            max_temp: max
                        } = weatherInfo;
                        return <WeatherCard key={id} order={i} state={state} date={date} min={min} max={max} />
                    })
                }
            </div>

        </section>
    )
}

export default CardsContainer;
