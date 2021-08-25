import React, { useEffect, useRef, useState } from 'react';
import './Button.scss';




const Button = () => {

    const refWrapButton = useRef(null);
    const [txTAnimation, setTxtAnimation] = useState('Search & Hire');
    const [start, setStart] = useState(false);


    const createBubbles = () => {
        const NUM_OF_BUBBLES = 100;
        const bubbles = [];
        for (let i = 0; i < NUM_OF_BUBBLES; i++) {
            const span = <span className={`bubbles`} key={bubbles.length}></span>;
            bubbles.push(span);
        }
        return bubbles;
    }

    useEffect(() => {
        if (start) {

            if (!refWrapButton.current.classList.contains('clicked')) {
                setTimeout(() => {
                    refWrapButton.current.classList.remove('clicked');
                    setStart(false);
                    setTxtAnimation('Search & Hire');
                }, 3000);
                const getAllBubbles = [...document.querySelectorAll('span.bubbles')];

                getAllBubbles.map(bubble => {
                    const generateRandomPositionX = Math.random() * (100 - (0)) + (0);
                    const generateRandomPositionY = Math.random() * (100 - (0)) + (0);
                    const generateDelay = Math.random() * (1000 - (0)) + (0);
                    const time = Math.random() * (1000 - (500)) + (500);

                    bubble.animate([
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
                        duration: time,
                        easing: "linear",
                        delay: generateDelay,

                    })
                });
            };
            refWrapButton.current.classList.add('clicked');

        }

    }, [start])

    const startAnimation = () => {
        setStart(true);
        setTxtAnimation('searching ...');
        // console.log(start)
        // if (!refWrapButton.current.classList.contains('clicked')) {
        //     setTimeout(() => {
        //         refWrapButton.current.classList.remove('clicked');
        //         setStart(false);
        //     }, 3000);
        //     const getAllBubbles = [...document.querySelectorAll('span.bubbles')];

        //     getAllBubbles.map(bubble => {
        //         const generateRandomPositionX = Math.random() * (100 - (0)) + (0);
        //         const generateRandomPositionY = Math.random() * (100 - (0)) + (0);
        //         const generateDelay = Math.random() * (1000 - (0)) + (0);
        //         const time = Math.random() * (1000 - (500)) + (500);

        //         bubble.animate([
        //             {
        //                 transform: 'scale(1.1) translate(-50%,-50%) perspective(800px)',
        //                 visibility: 'visible',
        //                 left: '50%',
        //                 top: '50% '
        //             },
        //             {
        //                 transform: 'scale(0) translate(-50%,-50%) perspective(800px)',
        //                 visibility: 'hidden',
        //                 left: `${generateRandomPositionX}%`,
        //                 top: `${generateRandomPositionY}%`
        //             }
        //         ], {
        //             duration: time,
        //             easing: "linear",
        //             delay: generateDelay,

        //         })
        //     });

        //     setTxtAnimation('searching ...');
        // };
        // refWrapButton.current.classList.add('clicked');
    }


    return (
        <div className="wrap" ref={refWrapButton}>
            <button onClick={startAnimation}
                className='btn'>{txTAnimation}</button>
            <div className='bubbles-wrap'>{start ? createBubbles() : null}</div>
        </div>
    )
}

export default Button;