import React from "react";
import { Card, Typography } from "@material-ui/core";
import { SilverButton } from "../SilverButton";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Slider from "react-slick";
import "components/product-image-slider/product-images.css";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "center",
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 600,
    marginTop: 12,
  },
  description: {
    fontWeight: 500,
  },
  buttonContainer: {
    width: 120,
    margin: "auto",
    marginTop: 12,
  },
}));


function CollectionCard({ slides, title, description, onClick }) {
  const classes = useStyles();

    const settings = {
      //   className: "center",
      infinite: false,
      //   centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      dots: false,
      arrows: true,
      swipeToSlide: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div>
               <img
              src={slide}
              alt={"Product Image"}
              onError={() => {}}
              style={{ width: "100vw" }}
            />
            <Typography className="card-image">MURAL COLLECTIONS</Typography>
            </div>
           
          ))}
        </Slider>
      </div>
    );
}

export default CollectionCard;
