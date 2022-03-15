import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  headingContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0 16px 20px",
    position: "relative",
    "& hr": {
      position: "absolute",
      width: "100%",
      zIndex: "-1",
    },
    "& p": {
      fontFamily: `'Playfair Display', serif !important`,
      textAlign: "center",
      margin: "auto",
      width: "fit-content",
      backgroundColor: "white",
      padding: theme.spacing(0, 4),
      fontSize: "18px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "3px",
      color: theme.palette.text.secondary,
      borderTopColor: theme.palette.ternary.main,
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    "& img": {
      width: "100%",
    },
    "& p": {
      textAlign: "center",
      color: theme.palette.text.secondary,
      "&:nth-child(2)": {
        fontSize: 12,
        fontWeight: 500,
      },
      "&:nth-child(3)": {
        fontSize: 12,
      },
    },
  },
});
class SliderWithHeading extends Component {
  render() {
    const { heading, products = [], classes } = this.props;
    var settings = {
      dots: false,
      infinite: false,
      //   slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      lazyLoad: "progressive",
      swipeToSlide: true,
      arrows: false,
      variableWidth: true,
    };
    return (
      <div>
        <div className={classes.headingContainer}>
          <hr />
          <Typography>{this.props.heading}</Typography>
        </div>
        <div>
          <Slider {...settings}>
            {[
              ...products,
              products[1],
              products[1],
              products[1],
              products[1],
              products[1],
              products[1],
              products[1],
              products[1],
            ].map((product) => (
              <div className={classes.imageContainer} style={{ width: 150 }}>
                <img
                  src={product}
                  alt={"Product Image"}
                  //   style={{ width: "120px" }}
                />
                <Typography>Blissfull Silver Earrings</Typography>
                <Typography>₹ 5939</Typography>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SliderWithHeading);
