import React from 'react';
import './Button.css';




const ButtonA = {
    text: 1,
    style: 'square'
};
const ButtonB = {
    text: 2,
    style: 'square'
};
const ButtonC = {
    text: 3,
    style: 'square'
};
const ButtonD = {
    text: 4,
    style: 'square'
};
const ButtonE = {
    text: 5,
    style: 'square'
};
const ButtonF = {
    text: 6,
    style: 'square'
};
const ButtonG = {
    text: 7,
    style: 'square'
};
const ButtonH = {
    text: 8,
    style: 'square'
};
const ButtonI = {
    text: 9,
    style: 'square'
};
const ButtonJ = {
    text: 0,
    style: 'rectangle'
};
const ButtonK = {
    text: 'clear',
    style: 'rectangle'
};
const ButtonL = {
    text: 'x',
    style: 'rectangle'
};
const ButtonM = {
    text: '+',
    style: 'rectangle'
};
const ButtonN = {
    text: '/',
    style: 'rectangle'
};
const ButtonO = {
    text: '-',
    style: 'rectangle'
};
const ButtonP = {
    text: '=',
    style: 'rectangle'
};

function NumberButton() {
    return (
        <div className='button-list'>
        <button className={props.style}>{props.text}</button>
        <Button buttonOnProps={ButtonA} />
        <Button buttonOnProps={ButtonB} />
        <Button buttonOnProps={ButtonC} />
        <Button buttonOnProps={ButtonD} />
        <Button buttonOnProps={ButtonE} />
        <Button buttonOnProps={ButtonF} />
        <Button buttonOnProps={ButtonG} />
        <Button buttonOnProps={ButtonH} />
        <Button buttonOnProps={ButtonI} />
        <Button buttonOnProps={ButtonJ} />
        <Button buttonOnProps={ButtonK} />
        <Button buttonOnProps={ButtonL} />
        <Button buttonOnProps={ButtonM} />
        <Button buttonOnProps={ButtonN} />
        <Button buttonOnProps={ButtonP} />
        </div>
    )
}

export default NumberButton;