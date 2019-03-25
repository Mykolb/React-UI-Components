import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        // <NumberButton />
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>

    )
}

NumberButton.defaultProps = {
    buttonStyle: 'white,'
};



export default NumberButton;