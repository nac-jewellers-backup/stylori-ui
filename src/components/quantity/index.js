import React from "react";
import "./index.css";
import { Paper, Grid, Typography } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
const handleQty = (isMaxMin, _incrementQty, _maxOrderQty, setClass, state) => {
  debugger;
  var element = document.getElementById("number");
  var value = parseInt(element.value, 10);
  var increment = state['maxOrderQty'];
  var decrement = state['minOrderQty'];
  value = isNaN(value) ? 1 : value;
  if (isMaxMin === "max") {
    if (value < _maxOrderQty) {
      increment = true;
     
      value = _incrementQty ? value + _incrementQty : value++;
    } else {
      increment = false;
    }
    if (value > _incrementQty) {
      decrement = true;
    }
    else{
      decrement = false;
    }
  } else if (isMaxMin === "min") {
    if (value > _incrementQty) {
      decrement = true;
      value = _incrementQty ? value - _incrementQty : value--;
    } else {
      decrement = false;
    }
    if (value < _maxOrderQty) {
      increment = true;
    }
    else{
      increment = false;
    }
  }

  setClass({"maxOrderQty":increment,"minOrderQty":decrement,"qty":value});
  
};

const Quantity = (props) => {
  const _incrementQty =
    props.data && props.data.length > 0 && props.data[0].minOrderQty
      ? props.data[0].minOrderQty
      : 1;
  const _maxOrderQty =
    props.data && props.data.length > 0 && props.data[0].maxOrderQty
      ? props.data[0].maxOrderQty
      : 100000;
  const [state, setState] = React.useState({
    maxOrderQty: true,
    minOrderQty: false,
    qty: _incrementQty ? _incrementQty : 1,
  });
  const setClass = (data) => {
    debugger
    
      setState({ ...state, minOrderQty: data['minOrderQty'], maxOrderQty: data['maxOrderQty'], qty:data['qty'] });
    
    
  };
  const { classes } = props;

  console.log(state, "//////////QTY");
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} className={classes.label}>
        <Typography variant="body1" component="div">
          <b>Quantity</b>
        </Typography>
      </Grid>
      <Grid item xs={3} className={classes.qty}>
        <Grid
          container
          item
          xs={12}
          justify="space-between"
          style={{ padding: 5 }}
        >
          <Grid item xs={3} className={classes.alignGrid}>
            <IndeterminateCheckBoxIcon
              className={`${classes.icon} ${
                !state.minOrderQty ? classes.iconDisabled : ""
              }`}
              onClick={() => {
                handleQty("min", _incrementQty, _maxOrderQty, setClass, state);
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            className={`${classes.alignGrid} ${classes.border}`}
          >
            <input
              type="text"
              id="number"
              value={state.qty}
              disabled
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={3} className={classes.alignGrid}>
            <AddBoxIcon
              className={`${classes.icon} ${
                !state.maxOrderQty ? classes.iconDisabled : ""
              }`}
              onClick={() => {
                handleQty("max", _incrementQty, _maxOrderQty, setClass, state);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Quantity);
