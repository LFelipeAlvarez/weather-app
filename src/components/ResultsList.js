import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext';
import { getWeather } from '../helpers/getWeather';
import Loader from './Loader';

const ResultsList = ({ results = [], toggleNav, loading }) => {

    const { setWeatherData, setLoading } = useContext(WeatherContext);

    const handleClick = id => {
        toggleNav();
        setLoading(true);
        getWeather(id).then(weatherData => {
            setWeatherData(weatherData);
            setLoading(false);
        });
    }

    return (
        loading
            ? <Loader />
            : <ul className="header__list">
                {
                    results.map(city =>
                        <li
                            className="header__list-item"
                            key={city.woeid} id={city.woeid}
                            onClick={() => handleClick(city.woeid)}>

                            {city.title}

                        </li>
                    )
                }
            </ul>
    )
}

export default ResultsList;
