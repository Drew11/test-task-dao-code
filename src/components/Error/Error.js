import React from 'react';
import './Error.css';
import src from '../../assets/icons/error.svg';

function Error({ error }) {

    return (
        <div className="error-view">
            <div className="error">
                <span className="error-message">{error}</span>
                <img
                    className="error-img"
                    src={src}
                    alt="error-img"
                />
            </div>
        </div>
    );
}

export default Error;