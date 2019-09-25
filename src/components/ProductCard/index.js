import React from "react";
import ProductCards from "./ProductCards.js";
import { useGraphql } from "../../hooks/GraphqlHook.js";
import productlistmapper from "../../mappers/productlist.js";
import { PRODUCTLIST as productlistquery } from "../../queries/index.js";
// import  {ProductCard}  from "./ProductCard";
function Card(props) {
  // const { loading, errro, data, mappedData } = useGraphql(productlistquery,productlistmapper);
  // 
  // console.info('GRAQPH',loading, errro, data, mappedData);
  // const CardControls = {
  // controls: {
  //   topleft: {
  //     icon: "home",
  //     handler: () => {
  //       console.info("HANDLED");
  //     }
  //   },
  //   bottomleft: {
  //     icon: "search",
  //     handler: () => {
  //       console.info("HANDLED");
  //     }
  //   },
  //   topright: {
  //     icon: "truck",
  //     handler: () => {
  //       console.info("HANDLED");
  //     }
  //   },
  //   bottomright: {
  //     icon: "heart-o",
  //     handler: () => {
  //       console.info("HANDLED");
  //     }
  //   }
  // }
  // }
  return (

    // <ProductCard  ard  data={props.data} {...CardControls}/>
    <ProductCards data={props.data} />

  );
}
export default Card;

