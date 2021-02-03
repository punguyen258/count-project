import React, { useState } from 'react';
import Counter from './Components/Counter';
import Button from './Components/Button';
import useCount from './hooks/countRender';
import './App.css';

const App = () => {
  const counter = useCount();
  const [count, setCount] = useState(0);
  console.log(`App render lai ${counter}`);

  return (
    <div className="App">
      <div className="d-flex">
        <Button setCount={setCount} count={count} />
        <Counter count={count} />
      </div>
    </div>
  );
};

export default App;
