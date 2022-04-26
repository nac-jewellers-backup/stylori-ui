import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { useStyles } from "./style";
import Slideshow from "../../Carousel/carosul";
import "./index.css";
import Gadgets from "components/product-image-slider/Gagetstylori/Gagetstylori";

export const FeaturedGridComponent = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      className={classes.containerset}
      style={{}}
      justify="center"
    >
      <Grid item xs={12} style={{ boxShadow: "10px 10px 5px #ccc" }}>
        <Hidden mdUp>
          <Slideshow dataCarousel={props.data[0].settings}>
            {props.data[0].images.map((val, Index) => {
              return (
                <img
                  onClick={() =>
                    (window.location.href =
                      props.imgs && "/silver-jewellery-dmudra")
                  }
                  style={{ cursor: "pointer" }}
                  src={val.mob}
                  className={`${classes.img}`}
                  loading="lazy" alt="...."
                />
              );
            })}
          </Slideshow>
        </Hidden>
        <Hidden smDown>
          <Slideshow dataCarousel={props.data[0].settings}>
            {props.data[0].images.map((val, Index) => {
              return (
                <a
                  onClick={() =>
                    (window.location.href =
                      props.imgs && "/silver-jewellery-dmudra")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={val.web}
                    className={`${classes.img}`}
                    style={{ cursor: "pointer", width: "100%" }}
                    loading="lazy" alt="...."
                  />
                </a>
              );
            })}
          </Slideshow>
        </Hidden>
      </Grid>
      <Hidden smDown>
        <Grid container>
          <Grid
            container
            item
            xs={12}
            style={{ marginTop: 50 }}
            justify={"center"}
          >
            <Grid item xs={6}>
              <Gadgets isSilver={true} />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};
