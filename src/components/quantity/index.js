import React from "react";
import "./index.css";
import { Paper, Grid, Typography } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ProductDetailContext } from "context/ProductDetailContext";
const handleQty = (isMaxMin, _incrementQty, _maxOrderQty, setClass, state, skuId) => {
  var element = document.getElementById(`number${skuId}`);
  var value = parseInt(element.value, 10);
  var increment = state["maxOrderQty"];
  var decrement = state["minOrderQty"];
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
    } else {
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
    } else {
      increment = false;
    }
  }
  setClass({ maxOrderQty: increment, minOrderQty: decrement, qty: value });
};

const Quantity = (props) => {
  debugger
  const {
    ProductDetailCtx: { filters },
    setFilters,
  } = React.useContext(ProductDetailContext);
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
    minOrderQty:
      filters.quantity[props.data[0].skuId] &&
      filters.quantity[props.data[0].skuId] > _incrementQty
        ? true
        : false,
    qty: filters.quantity[props.data[0].skuId]
      ? filters.quantity[props.data[0].skuId]
      : _incrementQty
      ? _incrementQty
      : 1,
  });

  const setClass = (data) => {
    setState({
      ...state,
      qty: data["qty"],
      minOrderQty: data["minOrderQty"],
      maxOrderQty: data["maxOrderQty"],
    });
  };
  React.useEffect(() => {
    const _funcUpdate = () =>{
      debugger
      let { quantity } = filters;
    // quantity[props.data[0].skuId] = state.qty;
    let localStorageQuantity = localStorage.getItem("quantity")
      ? JSON.parse(localStorage.getItem("quantity"))
      : null;

    // if(localStorageQuantity && localStorageQuantity[props.data[0].skuId] !== state.qty){
    //   setFilters({ ...filters, quantity });
    // }

    if (!localStorageQuantity) {
      if (localStorageQuantity && !localStorageQuantity[props.data[0].skuId]) {
        let _obj = {};
        localStorageQuantity[props.data[0].skuId] = state.qty;
        localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
        quantity[props.data[0].skuId] = state.qty;
      } else {
        let _obj = {};
        _obj[props.data[0].skuId] = state.qty;
        localStorage.setItem("quantity", JSON.stringify(_obj));
        quantity[props.data[0].skuId] = state.qty;
      }
    } else {
      localStorageQuantity[props.data[0].skuId] = state.qty;
      localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
      quantity[props.data[0].skuId] = localStorageQuantity[props.data[0].skuId];
    }
    setFilters({ ...filters, quantity });
    }
    _funcUpdate()
  }, [state.qty]);
  React.useEffect(() => {
    let quantity = filters.quantity;

    let localStorageQuantity = localStorage.getItem("quantity")
      ? JSON.parse(localStorage.getItem("quantity"))
      : null;
    if (!localStorageQuantity || !localStorageQuantity[props.data[0].skuId]) {
      let _obj = {};
      _obj[props.data[0].skuId] = state.qty;
      localStorage.setItem("quantity", JSON.stringify(_obj));
      quantity[props.data[0].skuId] = state.qty;
    }

    setFilters({ ...filters, quantity });
  }, []);
  console.clear();
  console.log("this.props.isdatafromstate", filters);
  const { classes, cart } = props;
  const _cart = cart ? true : false;
  console.log(filters, "//////////QTY");
  return (
    <Grid container item xs={12}>
      {!_cart && (
        <Grid
          item
          xs={4}
          sm={3}
          md={12}
          lg={4}
          xl={4}
          className={classes.label}
        >
          <Typography variant="body1" component="div">
            Quantity
          </Typography>
        </Grid>
      )}
      <Grid
        item
        xs={_cart ? 8 : 4}
        sm={_cart ? 4 : 3}
        md={_cart ? 8 : 3}
        lg={_cart ? 8 : 2}
        xl={_cart ? 8 : 2}
        className={classes.qty}
      >
        <Grid container item xs={12} justify="space-between">
          <Grid item xs={3} className={classes.alignGrid}>
            <IndeterminateCheckBoxIcon
              className={`${classes.icon} ${
                !state.minOrderQty ? classes.iconDisabled : ""
              }`}
              onClick={() => {
                handleQty("min", _incrementQty, _maxOrderQty, setClass, state, props.data[0].skuId);
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
              id={`number${[props.data[0].skuId]}`}
              value={filters.quantity[props.data[0].skuId]}
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
                handleQty("max", _incrementQty, _maxOrderQty, setClass, state, props.data[0].skuId);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Quantity);
