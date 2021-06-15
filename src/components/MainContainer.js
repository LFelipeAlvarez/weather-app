import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import CardsContainer from "./CardsContainer"
import Footer from "./Footer";
import HightlightsCards from "./HightlightsCards"
import Loader from "./Loader";

const MainContainer = () => {

    const { weatherData, loading } = useContext(WeatherContext);

    return (
        <main className="main">
            {
                weatherData
                    ?
                    loading
                        ? <Loader />
                        : <>
                            <CardsContainer />
                            <HightlightsCards />
                            <Footer />
                        </>
                    : <Loader />
            }
        </main>
    )
}

export default MainContainer;
