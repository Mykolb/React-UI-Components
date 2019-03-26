import React from 'react';
import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const ActionButton = props => {
    return(
        <div className='action'>
        <button className='clear-btn'>clear</button>
        <button className='divide-btn'>
        <FontAwesomeIcon icon='divide' />
        </button>
        </div>
    )
}

export default ActionButton;