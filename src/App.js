import React, { useState, useRef } from 'react';
import Counter from './Components/Counter';
import Button from './Components/Button';
import './App.css';

const App = () => {
  const counter = useRef(0);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    counter.current += 1;
    console.log(`Count render : ${counter.current}`);
  };
  const decrement = () => {
    setCount(count - 1);
    counter.current += 1;
    console.log(`Count render : ${counter.current}`);
  };
  console.log('App');

  return (
    <div className="App">
      <div className="d-flex">
        <Button onSubmit={decrement} text="DECREMENT" />
        <Counter count={count} />
        <Button onSubmit={increment} text="INCREMENT" />
      </div>
    </div>
  );
};

export default App;
