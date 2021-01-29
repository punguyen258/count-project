import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  console.log('Button');
  return (
    <div className="counter">
      <button type="button" onClick={props.onSubmit}>
        {props.text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Button;
