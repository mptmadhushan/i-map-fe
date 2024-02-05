// CustomButton.js

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const CustomButton = ({ onClick, label, color, disabled, buttonStyle }) => {
  return (
    <Button
      color={color}
      style={buttonStyle}
      onClick   onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomButton;
