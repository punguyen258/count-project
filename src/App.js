import React, { useState } from 'react';
import Counter from './Components/Counter';
import Button from './Components/Button';
import useCount from './hooks/countRender';
import './App.css';

const App = () => {
  const counter = useCount();
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  console.log('App');

  return (
    <div className="App">
      <div className="d-flex">
        <Button onSubmit={decrement} text="DECREMENT" />
        <Counter count={count} />
        <Button onSubmit={increment} text="INCREMENT" />
      </div>
      <h2>{`Số lần component render : ${counter.counter} `}</h2>
    </div>
  );
};

export default App;
