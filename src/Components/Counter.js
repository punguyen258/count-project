import React from 'react';
import PropTypes from 'prop-types';
import useCount from '../hooks/countRender';

const Counter = (props) => {
  const counter = useCount();
  console.log(`Counter render lai ${counter}`);

  return (
    <div className="counter">
      <p>{props.count}</p>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
