import React, { useContext } from 'react';

import useCount from '../hooks/countRender';
import AppContext from '../contexts/AppContext';

const Counter = () => {
  const counter = useCount();
  console.log(`Counter render lai ${counter}`);
  const context = useContext(AppContext);

  return <div className="counter">{context.count}</div>;
};

export default Counter;
