import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { getWeatherByCurrentLocation } from "../helpers/getWeatherByCurrentLocation";

const weatherImages = require.context('../assets/img', true);

const HeaderSections = ({ toggleNav }) => {

    const { weatherData, setWeatherData, farenheit, setLoading } = useContext(WeatherContext);

    const { title: city } = weatherData;
    const [today] = weatherData.consolidated_weather;
    const {
        weather_state_name: state,
        applicable_date: date,
        the_temp: temp
    } = today;



    return (
        <>
            <div className="header__section header__section--first">
                <button className="header__button" onClick={toggleNav}>
                    Searh for places
                </button>
                <button onClick={() => getWeatherByCurrentLocation(setWeatherData, setLoading)} className="header__button header__button--circle"></button>
            </div>
            <div className="header__section header__section--second">
                <div className="header__img">
                    <img src={weatherImages(`./${state}.png`).default} alt={state} />
                </div>
                <div className="header__section header__section--third">
                    <h1 className="header__weather">
                        {
                            !farenheit
                                ?
                                <span className="header__temp">
                                    {Math.round(temp)}<span className="header__cent">C</span>
                                </span>
                                :
                                <span className="header__temp">
                                    {Math.round(temp * (9 / 5) + 32)}<span className="header__cent">F</span>
                                </span>
                        }
                        <span className="header__time">
                            {state}
                        </span>
                    </h1>
                    <div className="header__location">
                        <time className="header__today">
                            Today &bull; {new Date(date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                        </time>
                        <address className="header__city">
                            <div className="header__icon"></div>{city}
                        </address>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSections;
