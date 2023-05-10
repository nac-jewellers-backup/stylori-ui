import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import HomePageImageCollectionStyles from "./style";

export default function HomePageImageCollection(props) {
  const titleData = props.GridImage;
  const classes = HomePageImageCollectionStyles();
  return (
    <div className={classes.root}>
      <>
        {props?.jewelleryCollection ? (
          <>
            <Hidden mdUp>
              <Grid container>
                <Grid item className={classes.marginAutos} md={3} lg={0} xl={0}>
                  <Grid container>
                    <a
                      className={classes.imagefull}
                      href={titleData[0]?.navigateUrl}
                    >
                      <img
                        loading="lazy"
                        alt="...."
                        className={classes.imagefull}
                        src={titleData[0]?.image}
                      />
                    </a>
                  </Grid>
                </Grid>
                <Grid
                  item
                  className={classes.firstcolumns}
                  md={9}
                  lg={0}
                  xl={0}
                >
                  <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                      <div>
                        <a
                          className={classes.imagefull}
                          href={titleData[2]?.navigateUrl}
                        >
                          <img
                            loading="lazy"
                            alt="...."
                            className={classes.imagefull}
                            src={titleData[2]?.image}
                          />
                        </a>
                      </div>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                      <div>
                        <a
                          className={classes.imagefull}
                          href={titleData[3]?.navigateUrl}
                        >
                          <img
                            loading="lazy"
                            alt="...."
                            className={classes.daisyday}
                            src={titleData[3]?.image}
                            style={{ paddingTop: "2px" }}
                          />
                        </a>
                      </div>
                    </Grid>

                    <Grid
                      item
                      container
                      style={{ paddingTop: "2px" }}
                      className={classes.img2container}
                    >
                      <Grid
                        item
                        md={6}
                        sm={6}
                        xs={6}
                        className={classes.imgsmall}
                      >
                        <div style={{ paddingRight: "5px" }}>
                          <a
                            className={classes.imagefull}
                            href={titleData[1]?.navigateUrl}
                          >
                            <img
                              loading="lazy"
                              alt="...."
                              className={classes.imagefull}
                              src={titleData[1]?.image}
                            />
                          </a>
                        </div>
                      </Grid>

                      <Grid item md={6} sm={6} xs={6}>
                        <div style={{ paddingLeft: "5px" }}>
                          <a
                            className={classes.imagefull}
                            href={titleData[4]?.navigateUrl}
                          >
                            <img
                              loading="lazy"
                              alt="...."
                              className={classes.imagefull}
                              src={titleData[4]?.image}
                            />
                          </a>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid container style={{ padding: "0px 15px" }}>
                <Grid
                  container
                  item
                  className={classes.marginAuto}
                  md={3}
                  lg={3}
                  xl={3}
                >
                  <div className={classes.bangleImg}>
                    <a
                      className={classes.imagefull}
                      href={titleData[0]?.navigateUrl}
                    >
                      <img
                        className={classes.imagefull}
                        src={titleData[0]?.image}
                        loading="lazy"
                        alt="...."
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item className={classes.firstcolumn} md={9} lg={9} xl={9}>
                  <Grid container>
                    <Grid item md={4} lg={4} xl={4}>
                      <div className={classes.bangleImg}>
                        <a
                          className={classes.imagefull}
                          href={titleData[1]?.navigateUrl}
                        >
                          <img
                            className={classes.imagefull}
                            loading="lazy"
                            alt="...."
                            src={titleData[1]?.image}
                          />
                        </a>
                      </div>
                    </Grid>

                    <Grid item md={8} lg={8} xl={8}>
                      <div className={classes.bangleImg}>
                        <a
                          className={classes.imagefull}
                          href={titleData[2]?.navigateUrl}
                        >
                          <img
                            className={classes.imagefull}
                            src={titleData[2]?.image}
                            style={{ paddingTop: "2px" }}
                            loading="lazy"
                            alt="...."
                          />
                        </a>
                      </div>
                    </Grid>

                    <Grid item container style={{ paddingTop: "10px" }}>
                      <Grid
                        item
                        md={8}
                        lg={8}
                        xl={8}
                        className={classes.imgsmall}
                      >
                        <div className={classes.bangleImg}>
                          <a
                            className={classes.imagefull}
                            href={titleData[3]?.navigateUrl}
                          >
                            <img
                              className={classes.imagefull}
                              src={titleData[3]?.image}
                              loading="lazy"
                              alt="...."
                            />
                          </a>
                        </div>
                      </Grid>

                      <Grid item md={4} lg={4} xl={4}>
                        <div className={classes.bangleImg}>
                          <a
                            className={classes.imagefull}
                            href={titleData[4]?.navigateUrl}
                          >
                            <img
                              className={classes.imagefull}
                              src={titleData[4]?.image}
                              loading="lazy"
                              alt="...."
                            />
                          </a>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </>
        ) : (
          <>
            <Hidden mdUp>
              <Grid container>
                <Grid item className={classes.firstcolumn} md={9} lg={0} xl={0}>
                  <Grid container>
                    <Grid item md={12} sm={12} xs={12}>
                      <div>
                        <a
                          className={classes.imagefull}
                          href={titleData[0]?.navigateUrl}
                        >
                          <img
                            loading="lazy"
                            alt="...."
                            className={classes.imagefull}
                            src={titleData[0]?.image}
                          />
                        </a>
                      </div>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                      <div>
                        <a
                          className={classes.imagefull}
                          href={titleData[1]?.navigateUrl}
                        >
                          <img
                            loading="lazy"
                            alt="...."
                            className={classes.daisyday}
                            src={titleData[1]?.image}
                            style={{ paddingTop: "2px" }}
                          />
                        </a>
                      </div>
                    </Grid>

                    <Grid
                      item
                      container
                      style={{ paddingTop: "2px" }}
                      className={classes.img2container}
                    >
                      <Grid
                        item
                        md={6}
                        sm={6}
                        xs={6}
                        className={classes.imgsmall}
                      >
                        <div style={{ paddingRight: "5px" }}>
                          <a
                            className={classes.imagefull}
                            href={titleData[2]?.navigateUrl}
                          >
                            <img
                              loading="lazy"
                              alt="...."
                              className={classes.imagefull}
                              src={titleData[2]?.image}
                            />
                          </a>
                        </div>
                      </Grid>

                      <Grid item md={6} sm={6} xs={6}>
                        <div style={{ paddingLeft: "5px" }}>
                          <a
                            className={classes.imagefull}
                            href={titleData[3]?.navigateUrl}
                          >
                            <img
                              loading="lazy"
                              alt="...."
                              className={classes.imagefull}
                              src={titleData[3]?.image}
                            />
                          </a>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  className={classes.marginAuto}
                  md={3}
                  lg={0}
                  xl={0}
                >
                  <a
                    className={classes.imagefull}
                    href={titleData[4]?.navigateUrl}
                  >
                    <img
                      className={classes.imagefulllong}
                      src={titleData[4]?.image}
                      loading="lazy"
                      alt="...."
                    />
                  </a>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid container style={{ padding: "0px 15px" }}>
                <Grid item className={classes.firstcolumn} md={9} lg={9} xl={9}>
                  <Grid container>
                    <Grid item md={8} lg={8} xl={8}>
                      <div className={classes.bangleImg}>
                        <a
                          className={classes.imagefull}
                          href={titleData[0]?.navigateUrl}
                        >
                          <img
                            className={classes.imagefull}
                            loading="lazy"
                            alt="...."
                            src={titleData[0]?.image}
                          />
                        </a>
                      </div>
                    </Grid>
                    <Grid item md={4} lg={4} xl={4}>
                      <div className={classes.bangleImg}>
                        <a
                          className={classes.imagefull}
                          href={titleData[1]?.navigateUrl}
                        >
                          <img
                            className={classes.imagefull}
                            src={titleData[1]?.image}
                            style={{ paddingTop: "2px" }}
                            loading="lazy"
                            alt="...."
                          />
                        </a>
                      </div>
                    </Grid>

                    <Grid item container style={{ paddingTop: "10px" }}>
                      <Grid
                        item
                        md={4}
                        lg={4}
                        xl={4}
                        className={classes.imgsmall}
                      >
                        <div className={classes.bangleImg}>
                          <a
                            className={classes.imagefull}
                            href={titleData[2]?.navigateUrl}
                          >
                            <img
                              className={classes.imagefull}
                              src={titleData[2]?.image}
                              loading="lazy"
                              alt="...."
                            />
                          </a>
                        </div>
                      </Grid>

                      <Grid item md={8} lg={8} xl={8}>
                        <div className={classes.bangleImg}>
                          <a
                            className={classes.imagefull}
                            href={titleData[3]?.navigateUrl}
                          >
                            <img
                              className={classes.imagefull}
                              src={titleData[3]?.image}
                              loading="lazy"
                              alt="...."
                            />
                          </a>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  className={classes.marginAuto}
                  md={3}
                  lg={3}
                  xl={3}
                >
                  <div className={classes.bangleImg}>
                    <a
                      className={classes.imagefull}
                      href={titleData[4]?.navigateUrl}
                    >
                      <img
                        className={classes.imagefull}
                        src={titleData[4]?.image}
                        loading="lazy"
                        alt="...."
                      />
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Hidden>
          </>
        )}
      </>
    </div>
  );
}
