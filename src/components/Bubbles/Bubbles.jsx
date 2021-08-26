import React, { useEffect } from 'react';
import './Bubbles.scss';


const Bubbles = ({ start, setStart, setTxtAnimation, refWrapButton }) => {
    const createBubbles = () => {
        const NUM_OF_BUBBLES = 100;
        const bubbles = [];
        for (let i = 0; i < NUM_OF_BUBBLES; i++) {
            const span = <span className={`bubbles`} key={bubbles.length}></span>;
            bubbles.push(span);
        }
        return bubbles;
    }

    const animation = item => {
            const generateRandomPositionX = Math.random() * (100 - (0)) + (0);
            const generateRandomPositionY = Math.random() * (100 - (0)) + (0);
            const generateDelay = Math.random() * (1000 - (0)) + (0);
            const generateDuration = Math.random() * (1000 - (500)) + (500);

            item.animate([
                {
                    transform: 'scale(1.1) translate(-50%,-50%) perspective(800px)',
                    visibility: 'visible',
                    left: '50%',
                    top: '50% '
                },
                {
                    transform: 'scale(0) translate(-50%,-50%) perspective(800px)',
                    visibility: 'hidden',
                    left: `${generateRandomPositionX}%`,
                    top: `${generateRandomPositionY}%`
                }
            ], {
                duration: generateDuration,
                easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                delay: generateDelay,

            })

    }

    useEffect(() => {
        if (start) {

            if (!refWrapButton.current.classList.contains('clicked')) {
                setTimeout(() => {
                    refWrapButton.current.classList.remove('clicked');
                    setStart(false);
                    setTxtAnimation('Congratulations!');
                }, 3000);
                const getAllBubbles = [...document.querySelectorAll('span.bubbles')];

                getAllBubbles.map(bubble => animation(bubble));
            };
            refWrapButton.current.classList.add('clicked');
        }

    }, [start]);

    const renderBubbles = start ? createBubbles() : null;

    return (<div className='bubbles-wrap'>{renderBubbles}</div>)
}

export default Bubbles;