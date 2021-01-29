import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  console.log('Counter');
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
