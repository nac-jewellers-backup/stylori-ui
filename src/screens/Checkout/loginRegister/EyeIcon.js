import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const EyeIcon = ({ isVisible, toggleVisibility }) => {
  return (
    <InputAdornment position="end">
      <IconButton onClick={toggleVisibility} edge="end">
        {isVisible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};

export default EyeIcon;
