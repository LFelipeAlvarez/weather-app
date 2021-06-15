import { useContext, useEffect } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const HightlightsCards = () => {

    const { weatherData } = useContext(WeatherContext);
    const [today] = weatherData.consolidated_weather;
    const {
        wind_direction_compass: windDirectionCompass,
        wind_direction: windDirection,
        wind_speed,
        air_pressure,
        humidity,
        visibility
    } = today;

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--range', humidity + "%");
        root.style.setProperty('--deg', (Math.round(windDirection * 10) / 10) + "deg");
    });

    return (
        <section className="section section--second">
            <div className="section__cards section__cards--hight">
                <h2 className="section__title section__title--left">Today's Hightlights</h2>
                <article className="card card--hight">
                    <h2 className="card__title">
                        Wind status
                        </h2>
                    <div className="card__body card__body--first">
                        {Math.round(wind_speed * 10) / 10}<span className="card__span">mph</span>
                    </div>
                    <div className="card__footer">
                        <span className="card__icon"></span>
                        <span className="card__span card__span--small">{windDirectionCompass}</span>
                    </div>
                </article>
                <article className="card card--hight">
                    <h2 className="card__title">
                        Humidity
                        </h2>
                    <div className="card__body card__body--second">
                        {humidity}<span className="card__span">%</span>
                    </div>
                    <div className="card__footer card__footer--range">
                        <div className="card__range">
                            <div className="card__number">0</div>
                            <div className="card__number card__number--center">50</div>
                            <div className="card__number">100</div>
                            <div className="card__input"></div>
                        </div>

                    </div>
                </article>
                <article className="card card--hight">
                    <h2 className="card__title">
                        Visibility
                        </h2>
                    <div className="card__body card__body--third">
                        {Math.round(visibility * 10) / 10} <span className="card__span">miles</span>
                    </div>
                </article>
                <article className="card card--hight">
                    <h2 className="card__title">
                        Air Pressure
                        </h2>
                    <div className="card__body card__body--fourth">
                        {Math.round(air_pressure * 10) / 10} <span className="card__span">mb</span>
                    </div>
                </article>
            </div>
        </section>

    )
}

export default HightlightsCards;
