import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const weatherImages = require.context('../assets/img', true);

const WeatherCard = ({ order, state, date, min, max }) => {

    const { farenheit } = useContext(WeatherContext);

    const formatDate = new Date(date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
    return (
        <article className="card">
            <h2 className="card__title">
                <time>{order === 0 ? 'Tomorrow' : formatDate}</time>
            </h2>
            <div className="card__body">
                <img src={weatherImages(`./${state}.png`).default} alt={state} className="card__img" />
            </div>
            <footer className="card__footer">
                {
                    !farenheit
                        ?
                        <>
                            <span className="card__temp" >{Math.round(max)}°C</span>
                            <span className="card__temp card__temp--gray" >{Math.round(min)}°C</span>
                        </>
                        :
                        <>
                            <span className="card__temp" >{Math.round((max * 9 / 5) + 32)}°F</span>
                            <span className="card__temp card__temp--gray" >{Math.round((min * 9 / 5) + 32)}°F</span>
                        </>
                }
            </footer>
        </article>
    )
}

export default WeatherCard;
