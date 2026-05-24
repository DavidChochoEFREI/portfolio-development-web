import React from 'react';
import './Button.css';

export default function Button({text, onClick = () => {}, type}) {

    const type_to_class = {
        "header": "header-button",
        "primary-resume": "primary-resume-button",
        "secondary-resume": "secondary-resume-button",
        "project": "project-button"
    }

    const handleClick = () => {
        onClick();
    };

    return (
        <button 
        className={type_to_class[type]}
        onClick={handleClick}>
            {text}
        </button>
    );
}