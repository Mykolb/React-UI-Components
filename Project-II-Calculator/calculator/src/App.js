import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

library.add(faDivide);



const App = () => {
  return (
    <div>
    <CalculatorDisplay text='0'/> 
    <ActionButton />
    <NumberButton  />
    </div>
  );
};

export default App;
