import React from 'react';
import './HeaderButton.css';

export default function HeaderButton() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button 
        className="header-button"
        onClick={handleClick}>
            Click Me
        </button>
    );
}