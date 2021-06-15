import { useState } from "react";
import { getResultsByName } from "../helpers/getResultsByName";

const SearchForm = ({ setResults, setLoading }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setLoading(true);
            getResultsByName(inputValue).then(results => {
                setResults(results);
                setLoading(false);
            });
        }
    }

    return (
        <form className="header__form" onSubmit={handleSubmit}>
            <div className="header__input-group">
                <span className="header__icon header__icon--search"></span>
                <input
                    type="text"
                    className="header__input"
                    placeholder="search location"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
            </div>
            <button className="header__button header__button--search">
                Search
            </button>
        </form>
    )
}
export default SearchForm;
