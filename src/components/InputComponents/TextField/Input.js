import React from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor:"#fff",
    marginTop:10,
    "& .MuiInputBase-input":{
      padding: '6px 5px 7px',
    }
  },
  root1: {
    width: "85%",
    [theme.breakpoints.down("sm")]: {
     width:"95%"
    },
    backgroundColor:"#fff",
    marginTop:10,
    "& .MuiInputBase-input":{
      padding: '6px 5px 7px',
    }
  },
}));


export const Input = props => {
  let {
    isNumber = false,
    pattern,
    maxLength,
    minLength,
    helperText,
    onChange,
    rowsMax,
    short,
    multiline,
    onInvalid,

    ...rest
  } = props;

  const defaultStyle = {
    margin: "normal",
    variant: "outlined"
  };

  const [invalid, setInvalid] = React.useState(false);
  const classes = useStyles();

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
          onInvalid={handleInvalid}
          error={invalid}
          multiline={multiline}
          rows={rowsMax}
          className={short ? classes.root1 : classes.root }
          disabled={props.disabled}
          // helperText={invalid && <b>{helperText}</b>}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          {...rest}
        />
        {invalid &&
        <Typography style={{fontSize:"10px",color:"red"}}>{helperText}</Typography>
        }
      {/* <TextField
        autoComplete={props && props.autoComplete && props.autoComplete}
        inputProps={{ pattern, maxLength, minLength }}
        style={{ width: "100%"}}
        onInvalid={handleInvalid}
        error={invalid}
        multiline={multiline}
        rows={10}
        disabled={props.disabled}
        helperText={invalid && <b>{helperText}</b>}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        {...defaultStyle}
        {...rest}
      /> */}
    </Grid>
  );
};

Input.propTypes = {
  isNumber: propTypes.bool
};
