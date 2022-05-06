import React from "react";
import {ImgMediaCard} from "./Card.js";
import {SilverImgMediaCard} from "./silverCard";
import {GlobalContext } from 'context'
// import  {ProductCard}  from "./ProductCard";
function Card(props) {
  const { Globalctx } = React.useContext(GlobalContext)
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

    Globalctx.pathName ?
      <SilverImgMediaCard data={props.data} wishlist={props.wishlist}/>
:
    <ImgMediaCard data={props.data} wishlist={props.wishlist}/>

  );
}
export default Card;

