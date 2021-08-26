import React, { useState, useRef } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Description from './components/Description/Description';
import Bubbles from './components/Bubbles/Bubbles';

const App = () => {

  const [start, setStart] = useState(false);
  const [txtAnimation, setTxtAnimation] = useState('Search & Hire');

  const refWrapButton = useRef(null);

  return (
    <div className="App" >
      <div
        className="wrap"
        ref={refWrapButton}
      >
        <Button
          start={start}
          setStart={setStart}
          txtAnimation={txtAnimation}
          setTxtAnimation={setTxtAnimation}
        />
        <Description
          txtAnimation={txtAnimation}
        />
      </div>
      <Bubbles
        start={start}
        setStart={setStart}
        txtAnimation={txtAnimation}
        setTxtAnimation={setTxtAnimation}
        refWrapButton={refWrapButton} />
    </div >
  );
}

export default App;
