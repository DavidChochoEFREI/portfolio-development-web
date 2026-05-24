import React from 'react';
import './HeaderButton.css';

export default function HeaderButton({text, onClick = () => {}}) {

    const handleClick = () => {
        onClick();
    };

    return (
        <button 
        className="header-button"
        onClick={handleClick}>
            {text}
        </button>
    );
}