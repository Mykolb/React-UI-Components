import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <div className='action'>
        <button className='clear-btn'>clear</button>
        <button className='divide-btn'></button>
        </div>
    )
}

export default ActionButton;