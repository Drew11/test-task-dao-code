import React from 'react';
import './Search.css';

function Search({ searchQuery, setSearchQuery }) {

    const onChangeSearchQuery = (event) => {
        if (event.code === 'Enter') {
            setSearchQuery(event.target.value)
        }
    }

    return (
        <div className="search-view">
            <div className="search">
                <input
                    className="search-input"
                    type="text"
                    defaultValue={searchQuery}
                    onChange={onChangeSearchQuery}
                    onKeyDown={onChangeSearchQuery}
                    placeholder="Type city"
                />
            </div>
        </div>
    );
}

export default Search;