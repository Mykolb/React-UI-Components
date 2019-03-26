import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div>
        <div className='row1'>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>7</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>8</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>9</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>x</button>
        </div>
        <div className='row2'>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>4</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>5</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>6</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>-</button>
        </div>
        <div className='row3'>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>1</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>2</button>
        <button className={`numberButtonStyle ${props.buttonStyle}`}>3</button>
        <button className={`numberButtonStyle  ${props.buttonStyle}`}>+</button>
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