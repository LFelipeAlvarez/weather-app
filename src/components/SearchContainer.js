import { useState } from "react"
import ResultsList from "./ResultsList"
import SearchForm from "./SearchForm"

const initialResults = [
    {
        title: 'London',
        woeid: 44418
    },
    {
        title: 'Barcelona',
        woeid: 753692
    },
    {
        title: 'Long Beach',
        woeid: 2441472
    }
];

const SearchContainer = ({ navRef, toggleNav }) => {

    const [results, setResults] = useState(initialResults);
    const [loading, setLoading] = useState(false);

    return (
        <nav className="header__nav" ref={navRef}>
            <div className="header__inner">
                <button className="header__close" onClick={toggleNav}></button>
                <SearchForm setResults={setResults} setLoading={setLoading} />
                <ResultsList results={results} toggleNav={toggleNav} loading={loading} />
            </div>
        </nav>
    )
}

export default SearchContainer;
