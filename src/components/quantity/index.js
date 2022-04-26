import React from "react";
import "./index.css";
import {Grid, Typography } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ProductDetailContext } from "context/ProductDetailContext";
import { API_URL } from "../../config";
import { withRouter } from "react-router-dom";
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
  
  const {
    ProductDetailCtx: { filters },
    setFilters,
  } = React.useContext(ProductDetailContext);
  const _incrementQty = props.data && props.data.length > 0 && props.data[0].minOrderQty ? props.data[0].minOrderQty : 1;
  const _maxOrderQty = props.data && props.data.length > 0 && props.data[0].maxOrderQty ? props.data[0].maxOrderQty : 1;
  const initialState = filters.quantity[props.data[0].skuId]
    ? filters.quantity[props.data[0].skuId]
    : _incrementQty
    ? _incrementQty
    : 1;

  const [state, setState] = React.useState({
    maxOrderQty: true,
    minOrderQty: filters.quantity[props.data[0].skuId] && filters.quantity[props.data[0].skuId] > _incrementQty ? true : false,
    qty: initialState,
  });

  const setClass = (data) => {
    setState({
      ...state,
      qty: data["qty"],
      minOrderQty: data["minOrderQty"],
      maxOrderQty: data["maxOrderQty"],
    });
  };
  const _updateQuantityApi = () => {
    if (localStorage.getItem("cart_id") && JSON.parse(localStorage.getItem("cart_id")).cart_id) {
      let updateVariables = {};
      let _price =
        props.data[0] && props.data[0].dataCard1 && props.data[0].dataCard1[0].offerPrice
          ? props.data[0].dataCard1[0].offerPrice
          : props.data[0].offerPrice;
      updateVariables["product"] = {
        sku_id: props.data[0].skuId,
        qty: state.qty,
        price: _price,
      };
      updateVariables["cart_id"] = JSON.parse(localStorage.getItem("cart_id")).cart_id;
      try {
        fetch(`${API_URL}/updatecartitem`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateVariables),
        })
          .then((res) => res.json())
          .then((res) => console.log(res.data));
      } catch (error) {
        console.log("Error Occoured in quantity updation.", error);
      }
    }
  };
  React.useEffect(() => {
    _updateQuantityApi();
    const _funcUpdate = () => {
      let { quantity } = filters;
      // quantity[props.data[0].skuId] = state.qty;
      let localStorageQuantity = localStorage.getItem("quantity") ? JSON.parse(localStorage.getItem("quantity")) : null;

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
      let localStorageCartDetails = JSON.parse(localStorage.getItem("cartDetails"));
      let _checkValid = localStorageCartDetails && localStorageCartDetails.products ? localStorageCartDetails.products : [];
      if (_checkValid.length > 0) {
        _checkValid.map((val, i) => {
          if (val.sku_id === props.data[0].skuId) {
            localStorageCartDetails.products[i].qty = state.qty;
          }
        });
        localStorage.setItem("cartDetails", JSON.stringify(localStorageCartDetails));
      }
      if (props.history.location.pathname === "/cart" || props.history.location.pathname === "/account-shoppingcart") {
        setFilters({ ...filters, quantity });
      }
    };
    _funcUpdate();
    // _updateQuantityApi()
  }, [state.qty]);
  React.useEffect(() => {
    let quantity = filters.quantity;

    let localStorageQuantity = localStorage.getItem("quantity") ? JSON.parse(localStorage.getItem("quantity")) : null;
    setFilters({ ...filters, quantity });
    if (!localStorageQuantity || !localStorageQuantity[props.data[0].skuId]) {
      let _obj = {};
      _obj[props.data[0].skuId] = state.qty;
      localStorage.setItem("quantity", JSON.stringify(_obj));
      quantity[props.data[0].skuId] = state.qty;
    }

    // _updateQuantityApi()
  }, []);

  const { classes, cart, pdpage } = props;
  const _cart = cart || pdpage ? true : false;
  return (
    <Grid container item xs={12}>
      {!_cart && (
        <Grid item xs={4} sm={3} md={12} lg={2} xl={2} className={classes.label}>
          <Typography variant="body1" component="div">
            <b>Quantity</b>
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
              className={`${classes.icon} ${!state.minOrderQty ? classes.iconDisabled : ""}`}
              onClick={() => {
                handleQty("min", _incrementQty, _maxOrderQty, setClass, state, props.data[0].skuId);
              }}
            />
          </Grid>
          <Grid item xs={6} className={`${classes.alignGrid} ${classes.border}`}>
            <input type="text" id={`number${[props.data[0].skuId]}`} value={state.qty} disabled style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={3} className={classes.alignGrid}>
            <AddBoxIcon
              className={`${classes.icon} ${!state.maxOrderQty ? classes.iconDisabled : ""}`}
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

export default withRouter(withStyles(styles)(Quantity));
