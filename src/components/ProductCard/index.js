import React from "react";
import  ProductCards  from "./ProductCards";
import  {ProductCard}  from "./ProductCard";
function Card(props) {
  const CardControls = {
  controls: {
    topleft: {
      icon: "home",
      handler: () => {
        console.info("HANDLED");
      }
    },
    bottomleft: {
      icon: "search",
      handler: () => {
        console.info("HANDLED");
      }
    },
    topright: {
      icon: "truck",
      handler: () => {
        console.info("HANDLED");
      }
    },
    bottomright: {
      icon: "heart-o",
      handler: () => {
        console.info("HANDLED");
      }
    }
  }
  }
  return (
 
      // <ProductCard  ard  data={props.data} {...CardControls}/>
      <ProductCards data={props.data} />

  );
}
export default Card;

