import React, { useContext, memo } from 'react';

import useCount from '../hooks/countRender';
import AppContext from '../contexts/AppContext';

const Button = () => {
  const counter = useCount();
  const context = useContext(AppContext);

  console.log(`Button render lai ${counter}`);
  return (
    <div className="counter">
      <button type="button" onClick={context.handleDecrement}>
        decrement
      </button>
      <button type="button" onClick={context.handleIncrement}>
        increment
      </button>
    </div>
  );
};

export default memo(Button);
