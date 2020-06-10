import React from "react";
import "./index.css";
import { Paper, Grid, Typography } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
const increaseValue = (_incrementQty) => {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 1 : value;
  value = _incrementQty ? value + _incrementQty : value++;
  document.getElementById("number").value = value;
};

const decreaseValue = (_incrementQty) => {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 1 : value;
  if (value > _incrementQty) {
    value = _incrementQty ? value - _incrementQty : value--;
  }

  document.getElementById("number").value = value;
};
const Quantity = (props) => {
    const { classes } = props;
  const _incrementQty = 10;
  return (
    
      <Grid container item xs={12}>
          <Grid item xs={12} className={classes.label}>
              <Typography variant="body1" component="div"><b>Quantity</b></Typography>
          </Grid>
        <Grid item xs={3} className={classes.qty}>
            <Grid container item xs={12} justify="space-between" style={{padding:5}}>
            
            <Grid item xs={3} className={classes.alignGrid}>
            <IndeterminateCheckBoxIcon className={classes.icon} onClick={()=>{decreaseValue(_incrementQty)}}/>
            
          </Grid>
          <Grid item xs={6} className={`${classes.alignGrid} ${classes.border}`}>
            <input type="text" id='number' value={_incrementQty} disabled style={{width:'100%'}}/>
          </Grid>
          <Grid item xs={3} className={classes.alignGrid}>
          <AddBoxIcon className={classes.icon} onClick={()=>{increaseValue(_incrementQty)}}/>
          </Grid>

            </Grid>

        </Grid>
      </Grid>
  );
};

export default withStyles(styles)(Quantity)