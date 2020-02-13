import React from "react";
import { TextField, Grid } from "@material-ui/core";
import propTypes from "prop-types";

// NOTABLE POINTS
//  Min and Max
// Email ID
// Confirm Email ID
// Mobile Number
// Number
// Password
// Repeat Password
// On Button Submit
// On Moving Out
// Live

export const Input = props => {
  let {
    isNumber = false,
    pattern,
    maxLength,
    minLength,
    helperText,
    onChange,
    rowsMax,
    multiline,
    onInvalid,

    ...rest
  } = props;

  const defaultStyle = {
    margin: "normal",
    variant: "outlined"
  };

  const [invalid, setInvalid] = React.useState(false);

  // INTEGRATE THEME HERE

  const handleKeyPress = e => {
    if (isNumber) {
      if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
    }
  };

  const handleChange = e => {
    setInvalid(false);
    onChange(e);
  }

  const handleInvalid = e => {
    e.preventDefault();
    setInvalid(true);
  }

  return (
    <Grid item xs={12}>
      <TextField
        autoComplete={props && props.autoComplete && props.autoComplete}
        inputProps={{ pattern, maxLength, minLength }}
        style={{ width: "100%" }}
        onInvalid={handleInvalid}
        error={invalid}
        multiline={multiline}
        rowsMax={rowsMax}
        disabled={props.disabled}
        helperText={invalid && <b>{helperText}</b>}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        {...defaultStyle}
        {...rest}
      />
    </Grid>
  );
};

Input.propTypes = {
  isNumber: propTypes.bool
};
