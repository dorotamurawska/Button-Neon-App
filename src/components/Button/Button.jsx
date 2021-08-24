import React, { useRef, useState } from 'react';
import './Button.scss';




const Button = () => {

    const refWrapButton = useRef(null);
    const [txTAnimation, setTxtAnimation] = useState('Search & Hire');

    const startAnimation = () => {
        if (!refWrapButton.current.classList.contains('clicked')) {
            setTimeout(() => {
                refWrapButton.current.classList.remove('clicked');
                console.log(refWrapButton.current, 'can click')
            }, 3000);
        };
        refWrapButton.current.classList.add('clicked');

    }


    return (
        <div className="wrap" ref={refWrapButton}>
            <button onClick={startAnimation} className='btn'>{txTAnimation}</button>
        </div>
    )
}

export default Button;