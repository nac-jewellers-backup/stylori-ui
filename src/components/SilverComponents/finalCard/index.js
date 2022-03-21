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


function FinalCard({ slides, title, description, onClick }) {
  const classes = useStyles();

    const settings = {
      //   className: "center",
      infinite: true,
      //   centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
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
             <Typography className="footer-above">MURAL COLLECTIONS</Typography>
             <Typography className="desc-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
              <div style={{margin:5,display:"flex",justifyContent:"center",alignItems:"center"}}>
              <SilverButton variant="outlined" >Shop Now</SilverButton>
              </div>
              
            </div>
           
          ))}
        </Slider>
      </div>
    );
}

export default FinalCard;