import React from "react";
import Slideshow from "../../Carousel/carosul";
import { useDummyRequest } from "../../../hooks";
import { HomedataSilver } from "../../../mappers";
import { useStyles } from "./styles.js";
import { Grid, Container, Hidden, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { injectUrl_url_construct } from "common/index";
import { CDN_URL } from "config";

const ProductModal = (props) => {
  const dataCarousel = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: false,
    arrows: false,
    arrowsImg: true,
    accessibility: true,
    autoplaySpeed: 300000,
    centerMode: false,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    swipe: false
  };
  const {
    data: { fadeImagessublist },
    shopByStyloriSilver,
  } = props;

  let _shopByData =
  shopByStyloriSilver && shopByStyloriSilver.length > 0 &&
    shopByStyloriSilver.map((val) => {
      return {
        img: val.image,
        title: val.label,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
        price: "98.89789",
      };
    });

  let _mapper = shopByStyloriSilver ? _shopByData : fadeImagessublist;
  let _data = _mapper ? _mapper : []
  const classes = useStyles();
  return (
    <Grid container className={classes.containerTop} justify="center">
      {_data.map((tile) => {
        return (
            tile.img.length > 0 ?
            <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            className={`${shopByStyloriSilver ? classes.shopBySilver:'ProductGrids'} ${classes.ProductGrids}`}
          >
            <Hidden smDown>
              <Slideshow
                class="subslider-carousel"
                dataCarousel={dataCarousel}
                hoverlist={[tile]}
                hover={false}
                hovereffect={true}
                type="hover"
              />
            </Hidden>
            <Hidden mdUp>
              {shopByStyloriSilver ? (
                <Slideshow dataCarousel={dataCarousel}>
                  {tile.img.map((val, index) => (
                    <>
                      <Grid container key={index} className={classes.media}>
                        <a href={`/silver-jewellery`} style={{ width: "100%" }}>
                          <img
                            src={injectUrl_url_construct(val)}
                            style={{ width: "100%", height: "100%" }}
                            onError={(e) => {
                              e.target.src = `${CDN_URL}product/575X575/productnotfound.jpg`;
                            }}
                            alt="Stylori"
                          />
                        </a>
                      </Grid>
                      {/* <Hidden mdUp>
                  <Grid container key={index}   className={classes.media}>
                    <a href={val.navigateUrl}>
                      <img
                        src={val.mobileImg}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </Grid>
                </Hidden> */}
                    </>
                  ))}
                </Slideshow>
              ) : (
                <Slideshow
                  class="subslider-carousel"
                  hoverlist={tile}
                  dataCarousel={dataCarousel}
                  WithoutHoverhover={true}
                  type="hover"
                />
              )}
              <Grid
                container
                item
                xs={12}
                alignContent="space-between"
                justify="center"
                className={classes.productCardDetail}
              >
                <Grid
                  container
                  item
                  xs={12}
                  justify="center"
                  className={shopByStyloriSilver ? classes.productCardTitle2:classes.productCardTitle}
                >
                  {tile.title}
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  className={shopByStyloriSilver ? `${classes.productCardDescription2}`:`${classes.productCardDescription}`}
                >
                  {tile.description}
                </Grid>
                <Grid container item xs={12} justify="center">
                    <a href={`/silver-${tile.title.toLowerCase()}-jewellery`} style={{textDecoration:'none'}}>
                    <Button variant="contained" className={shopByStyloriSilver ? `${classes.btnshop2}` :`${classes.btnshop}`}>
                    SHOP
                  </Button>
                    </a>
                  
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
       :
       null
       );
      })}
    </Grid>
  );
};
export default (props) => {
  const { mapped } = useDummyRequest(HomedataSilver);
  if (Object.keys(mapped).length === 0) return "";
  return <ProductModal {...props} data={mapped} />;
};
