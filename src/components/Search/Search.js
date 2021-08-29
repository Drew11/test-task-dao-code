import React, {useState} from 'react';
import './Search.css';

function Search({ setSearchQuery }) {

    const [query, setQuery] = useState('');

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    };

    const sendQuery = (event) => {
        if (event.code === 'Enter') {
            setSearchQuery(event.target.value)
        }
    };

    return (
        <div className="search-view">
            <div className="search">
                <input
                    className="search-input"
                    type="text"
                    value={query}
                    onChange={onChangeQuery}
                    onKeyDown={sendQuery}
                    placeholder="Type city"
                />
            </div>
        </div>
    );
}

export default Search;