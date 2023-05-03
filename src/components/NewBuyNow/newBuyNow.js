import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import "../product-image-slider/product-images.css";

function NewBuyNow(props) {
  const [state, setState] = useState({
    vals: 0,
  });

  useEffect(() => {
    const valus_locl = localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails")).products
      : "";
    if (valus_locl) {
      let productIds = valus_locl.map((val) => {
        return val.sku_id;
      });
      productIds.indexOf(props.sku) > -1
        ? setState({ vals: 1 })
        : setState({ vals: 0 });
    }
  }, []);

  const enquireLink = () =>{
    if (props?.productURL) {
      window.open(
        `https://wa.me/919952625252?text=Hi - ${
          window.location.hostname + "/" + props.productURL ?? ""
        }`
      );
    } else {
      window.open(
        `https://wa.me/919952625252?text=Hi - ${window.location.href}`
      );
    }
  }
  return (
    <div>
      <Button
        className={props.class}
        style={{ borderRadius: "5px", ...props.style }}
        variant={props.addtoCart ? "outlined" : "contained"}
        fullWidth 
        onClick={props?.buttonName === "Enquire Now" ? () => enquireLink() : null}
      >
        {props?.buttonName
          ? state.vals === 1
            ? "In Bag"
            : props?.buttonName === "Make an Order" ? `Add to Cart - ${props?.buttonName}` : props?.buttonName
          : state.vals === 1
          ? "In Cart"
          : "Add to Cart"}
      </Button>
    </div>
  );
}

export default withRouter(NewBuyNow);