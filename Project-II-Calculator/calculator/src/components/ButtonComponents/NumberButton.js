import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div>
        <div className='row1'>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        </div>

        <div className='row2'>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        </div>

        <div className='row3'>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>{props.text}</button>
        </div>

        <div className='row4'>
        <button className='zero-btn'>0</button>
        <button className='equal-btn'>=</button>
        </div>
        </div>
    )
}

NumberButton.defaultProps = {
    buttonStyle: 'white,'
};



export default NumberButton;