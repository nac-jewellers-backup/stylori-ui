import React from "react";
import StyloriSilverYarnsStyles from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Grid, Typography } from "@material-ui/core";
import "./index.css";
import { useHistory } from "react-router-dom";


const StyloriYarnsCMS = (props) => {
  const classes = StyloriSilverYarnsStyles();
  const history = useHistory();
  const handleClick = (value) => {
    // if (url) {
    //   window.open("/styloriSilver", "_blank");
    // }
    history.push({
        pathname:"/styloriBlog",
        state:value
    })
  };

  console.log("blogProps",props?.value);

  const data = props?.value;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        {data?.map((val) => (
          <div className={classes.styloriStore}>
            <Grid
              container
              direction={"row-reverse"}
              className={classes.columnAlign}
              style={{cursor:"pointer"}}
              onClick= {() => handleClick(val)}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: `url(${
                    props?.data?.button_Text
                      ? ""
                      : "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-23901.webp"
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className={classes.location}>
                  <Typography className={classes.title}>
                    {val?.header}
                  </Typography>
                  <Typography className={classes.subText}>
                    {/* {
                      "Silver Yarns Silver Yarns Silver Yarns Silver YarnsSilver Yarns Silver YarnsSilver Yarns Silver Yarns Silver Yarns"
                    } */}
                    {val?.heading}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <div className={classes.storeImage}>
                  <img
                    alt="Store Image"
                    src={val?.image}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default StyloriYarnsCMS;
