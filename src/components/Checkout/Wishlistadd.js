import { Button, Hidden } from "@material-ui/core";
import React, { useEffect } from "react";
import { API_URL } from "../../config";
export default function WishlistButton(props) {
  const [values, setValues] = React.useState({
    user_id: "",
    product_id: "",
    add: "",
    product_sku: "",
    isactive: null,
  });
  let user_id = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : {};

  const handlewishlist = (e) => {
    var option = window.confirm(`Are You Sure To Move WishList`);
    if (option) {
      fetch(`${API_URL}/addwishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          return response.json();
        })
        .then(() => {
          alert("Successfully added to Wishlist");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (option) {
      var local_storage = JSON.parse(localStorage.getItem("cartDetails"));

      var _localStorageQuantity = JSON.parse(localStorage.getItem("quantity"));

      var currentValue =
        e.target.id && e.target.id.length > 0
          ? e.target.id
          : e.currentTarget.id;

      var a = local_storage.products.filter((val) => {
        if (currentValue !== val.sku_id) {
          return val;
        }
      });

      function status(response) {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      }

      function json(response) {
        return response.json();
      }
      if (JSON.parse(localStorage.getItem("cart_id"))) {
        let cart_id = JSON.parse(localStorage.getItem("cart_id")).cart_id;
        let bodyVariableRemoveCartItem = {
          cart_id: cart_id,
          product_id: currentValue,
        };
        fetch(`${API_URL}/removecartitem`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...bodyVariableRemoveCartItem,
          }),
        })
          .then(status)
          .then(json)
          .then((val) => {
            sessionStorage.removeItem("updatedProduct");
            alert(val.message);
            var cartId = JSON.parse(
              localStorage.getItem("cartDetails")
            ).cart_id;
            var userId = JSON.parse(
              localStorage.getItem("cartDetails")
            ).user_id;
            var localstorage = JSON.stringify({
              cart_id: `${cartId}`,
              user_id: `${userId}`,
              products: a,
            });
            delete _localStorageQuantity[currentValue];
            localStorage.setItem(
              "quantity",
              JSON.stringify(_localStorageQuantity)
            );
            localStorage.setItem("cartDetails", localstorage);
            window.location.reload();
          });
      } else {
        var _products = JSON.parse(
          localStorage.getItem("cartDetails")
        ).products.filter((val) => {
          if (val.sku_id !== currentValue) return val;
        });
        var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
        var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
        var _obj = { cart_id: cartId, user_id: userId, products: _products };
        if (_products.length > 0) {
          localStorage.setItem("cartDetails", JSON.stringify(_obj));
          delete _localStorageQuantity[currentValue];
          localStorage.setItem(
            "quantity",
            JSON.stringify(_localStorageQuantity)
          );

          window.location.reload();
        } else {
          localStorage.removeItem("cartDetails", _products);

          window.location.reload();
        }
      }
    }
  };
  useEffect(() => {
    values["user_id"] = user_id;
    values["product_id"] = props.productId;
    values["product_sku"] = props.sku;
    setValues({ values, ...values });
  });
  return (
    <>
      <Hidden smDown>
        <Button
          id={props.sku}
          onClick={(event) => handlewishlist(event)}
          variant="contained"
          style={{
            fontSize: "14px",
            color: "gray",
            border: "1.3px solid #6D6E71",
            backgroundColor: "white",
            borderRadius: "0px",
            boxShadow: "none",
            paddingRight: "6px",
            paddingLeft: "6px",
            width: "95%",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            marginTop:
              window.location.pathname == "/account-shoppingcart"
                ? " "
                : "10px",
          }}
        >
          Move to Wishlist
        </Button>
      </Hidden>
      <Hidden mdUp>
        <Button
          id={props.sku}
          onClick={(event) => handlewishlist(event)}
          variant="contained"
          style={{
            color: "gray",
            border: "2px solid #C1C1C1",
            backgroundColor: "white",
            borderRadius: "0px",
            boxShadow: "none",
            paddingRight: "6px",
            paddingLeft: "6px",
            width: "95%",
            whiteSpace: "nowrap",
            marginTop:
              window.location.pathname == "/account-shoppingcart"
                ? " "
                : "10px",
          }}
        >
          Move to Wishlist
        </Button>
      </Hidden>
    </>
  );
}
