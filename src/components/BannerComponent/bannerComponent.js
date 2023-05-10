import { Box, Grid, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import Banner from "./banner";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headContent: {
    outline: "none !important",
    position: "relative",
  },
}));

export default function BannerComponent(props) {
  const classes = useStyles();

  const { banners = [], dataCarousel = "single", arrows } = props;
  banners.sort((a, b) =>
    a.position < b.position ? -1 : a.position > b.position ? 1 : 0
  );

  const slider = React.createRef();

  const next = () => {
    slider.current.slickNext();
  };

  const previous = () => {
    slider.current.slickPrev();
  };
  console.log(banners, "banners");
  return (
    <>
      <Grid item xs={12} style={{ backgroundColor: "#ebebeb" }}>
        <Hidden smDown>
          {arrows && (
            <Grid container>
              <Grid item onClick={previous} className={"imagePrevios"}></Grid>
              <Grid item onClick={next} className={"imagenext"}></Grid>
            </Grid>
          )}
        </Hidden>

        <Banner sliderRef={slider} dataCarousel={dataCarousel}>
          {banners?.length > 0
            ? banners?.map((val, index) => {
                return (
                  <Box key={index}>
                    <Hidden smDown>
                      <Grid
                        container
                        key={index}
                        className={classes.headContent}
                      >
                        <a href={val?.url} style={{ width: "100%" }}>
                          <img
                            alt="images"
                            loading="lazy"
                            src={val?.web ?? val?.img}
                            style={{
                              width: "100%",
                              height: props?.forBlog ? "70vh" : "100%",
                            }}
                          />
                        </a>
                      </Grid>
                    </Hidden>
                    <Hidden mdUp>
                      <Grid
                        container
                        key={index}
                        className={classes.headContent}
                      >
                        <a href={val.url}>
                          <img
                            alt="images"
                            loading="lazy"
                            src={val?.mobile}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </a>
                      </Grid>
                    </Hidden>
                  </Box>
                );
              })
            : ""}
        </Banner>
      </Grid>
    </>
  );
}
