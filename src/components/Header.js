import SearchContainer from "./SearchContainer";
import HeaderSections from "./HeaderSections";
import { useContext, useRef } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import Loader from "./Loader";

const Header = () => {

    const navRef = useRef();

    const toggleNav = () => {
        const $nav = navRef.current;
        $nav.classList.toggle('header__nav--visible');
    }

    const { weatherData, loading } = useContext(WeatherContext);

    return (
        <header className="header">
            <SearchContainer navRef={navRef} toggleNav={toggleNav} />
            {
                weatherData
                    ? loading
                        ? <Loader />
                        : <HeaderSections toggleNav={toggleNav} />
                    : <Loader />
            }

        </header>
    )
}

export default Header;
