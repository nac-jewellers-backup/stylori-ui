import React from "react";

import { ProductCard } from "./ProductCard";


function Card() {
  const productCard = {
    offerPrice: "23000.10",
    price: "29000.0",
    title: "Diamond Pendant Ring",
    image: {
      placeImage:
        "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
      hoverImage:
        "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg"
    },
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
  };

  return (
 
      <ProductCard {...productCard} />

  );
}
export default Card;

