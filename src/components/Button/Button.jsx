import React from 'react';
import './Button.scss';


const Button = ({ setStart, txtAnimation, setTxtAnimation }) => {

    const startAnimation = () => {
        setStart(true);
        setTxtAnimation('Searching ...');
    }

    return <button
                onClick={startAnimation}
                className='btn'
            >{txtAnimation}</button>
}

export default Button;