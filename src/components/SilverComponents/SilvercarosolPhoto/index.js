import React from "react";
import Slideshow from "../../Carousel/carosul";
import { useDummyRequest } from "../../../hooks";
import { HomedataSilver } from "../../../mappers";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useStyles } from "./style.js";
import { GlobalContext } from "context";
import Gadgets from "components/product-image-slider/Gagetstylori/Gagetstylori";
import { Helmet } from "react-helmet";

const SilverCarousel = (props) => {
  const dataCarousel = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
  };
  const { carouselTop } = props.data;
  const classes = useStyles();
 
  return (
    <Grid container xs={12}>
      {/* <Helmet>
      <meta property="og:type" content="website"/>
        <meta property="og:title" content="Stylori Silver - Silver Jewellery" />
        <meta property="og:url" content={window.location.href} />
        <meta name="og:description" content={carouselTop[0].content} />
        <meta property="og:image" content={carouselTop[0].images[0].img} />
      </Helmet> */}
      <Grid
        item
        xs={12}
        className={
          window.location.pathname === "/styloriSilver"
            ? classes.backgroundImageColor
            : ""
        }
      >
        <Hidden mdUp>
          <Slideshow dataCarousel={carouselTop[0].settings}>
            {carouselTop[0].images.map((val, index) => (
              <a href={val.navigateUrl}>
                <Grid container key={index}>
                  <img
                    src={val.mobileImg}
                    alt="Stylori"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </a>
            ))}
          </Slideshow>
        </Hidden>
        <Hidden smDown>
          <Slideshow dataCarousel={carouselTop[0].settings}>
            {carouselTop[0].images.map((val, index) => (
              <a href={val.navigateUrl}>
                <Grid container key={index}>
                  <img
                    src={val.img}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </a>
            ))}
          </Slideshow>
        </Hidden>
      </Grid>
      <Grid
        item
        xs={12}
        className={`${
          props.collectionsPageSilver
            ? `${classes.seoText} ${classes.seoTextNobackground}`
            : classes.seoText
        }`}
      >
        <Hidden smDown>
          <Typography className={classes.TypoGraphy}>
            {carouselTop[0].content}
          </Typography>
        </Hidden>
        {/* <Hidden smUp>
       <Gadgets isSilver={props.isSilver}/>
        </Hidden> */}
      </Grid>
    </Grid>
  );
};
export default (props) => {
  const { mapped } = useDummyRequest(HomedataSilver);
  const { Globalctx } = React.useContext(GlobalContext);

  console.log(Globalctx);
  const _isSilver = Globalctx.pathName ? true : false;
  console.log(Globalctx.pathName);
  if (Object.keys(mapped).length === 0) return "";
  return <SilverCarousel {...props} data={mapped} isSilver={_isSilver} />;
};
