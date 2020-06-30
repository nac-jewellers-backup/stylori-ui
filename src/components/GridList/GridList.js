import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./GridList.css";
import { Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "0px 0px 20px 0px ",
  },
  [theme.breakpoints.down("md")]: {
    imagefull: {
      width: "100%",
    },
    imagefulllong: {
      width: "100%",
    },
    firstcolumn: {
      padding: "0px 8px 0px 0px !important",
    },
  },
  [theme.breakpoints.only("sm")]: {
    daisyday: {
      marginTop: "7.5px !important",
      width: "100%",
    },
    img2container: {
      marginTop: "7.5px !important",
    },
  },
  [theme.breakpoints.down("sm")]: {
    firstcolumn: {
      width: "53.12% !important",
      float: "left",
      marginLeft: "2.66% !important",
      padding: "0px !important",
    },
    marginAuto: {
      padding: "0px 0px 0px 0px !important",
      width: "40.31% !important",
      marginLeft: "1.25% !important",
      marginRight: "2.66% !important",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      margin: "0px 0px 20px 0px ",
    },
  },

  gridList: {
    width: "100%",
    height: "auto",
  },
  marginAuto: {
    padding: "0px 0px 0px 6px",
  },
  firstcolumn: {
    padding: "0px 8px 0px 0px",
  },
  [theme.breakpoints.up("lg")]: {
    gridList: {
      width: " 1170px",
      height: "auto",
    },
    firstcolumnsilver: {
      padding: "0px 8px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    gridList: {
      width: " 500px",
      height: "auto",
    },
  },
  imgsmall: {
    width: " calc(50% - 5px) !important",
  },
  imagefull: {
    width: "100%",
    verticalAlign: "center",
  },
  daisyday: {
    marginTop: 0,
    width: "100%",
  },
  img2container: {
    marginTop: 0,
  },
}));

export default function ImageGridList(props) {
  const tileData = props.GridImage;
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Hidden mdUp>
        {props.isHover ? (
          <>
            <Grid container style={{ marginTop: 30, marginBottom: 10 }}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    className={`hovereffectSilvertoppicks`}
                    style={{ padding: "0 4px 0 0" }}
                  >
                    <div>
                      <a
                        className={classes.imagefull}
                        href={"earrings-jewellery"}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[1].img}
                        />
                        <div className="overlay1">
                          <div className={"collectionDataSilverSEOflex"}>
                            <div style={{ margin: "auto" }}>
                              <h2 className="next-price">
                                {"Earrings".toUpperCase()}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className={`hovereffectSilvertoppicks`}
                    style={{ padding: "0 0 0 4px" }}
                  >
                    <div>
                      <a
                        className={classes.imagefull}
                        href={"pendants-jewellery"}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[1].img}
                        />

                        <div className="overlay1">
                          <div className={"collectionDataSilverSEOflex"}>
                            <div style={{ margin: "auto" }}>
                              <h2 className="next-price">
                                {"Pendants".toUpperCase()}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              style={{ paddingTop: "2px", marginBottom: 15 }}
              className={`${classes.img2container} `}
              xs={12}
            >
              <Grid
                item
                md={12}
                sm={12}
                xs={12}
                className={`hovereffectSilvertoppicks`}
              >
                <div>
                  <a className={classes.imagefull} href={"bangles-jewellery"}>
                    <img
                      className={classes.daisyday}
                      src={tileData[3].img}
                      style={{ paddingTop: "2px" }}
                    />
                    <div className="overlay1">
                      <div className={"collectionDataSilverSEOflex"}>
                        <div style={{ margin: "auto" }}>
                          <h2
                            className="next-price"
                            style={{ fontSize: "0.5rem !important" }}
                          >
                            {"Bangles".toUpperCase()}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              item
              
              xs={12}
            >
              <Grid item xs={6} style={{ padding: "0 4px 0 0" }} className={`hovereffectSilvertoppicks`}>
                <a className={classes.imagefull} href={"rings-jewellery"}>
                  <img
                    className={classes.imagefulllong}
                    src={tileData[4].img}
                  />
                  <div className="overlay1">
                    <div className={"collectionDataSilverSEOflex"}>
                      <div style={{ margin: "auto" }}>
                        <h2 className="next-price">
                          {"Rings".toUpperCase()}
                        </h2>
                      </div>
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item xs={6} style={{ padding: "0 0 0 4px" }} className={`hovereffectSilvertoppicks`}>
                <a className={classes.imagefull} href={"bracelets-jewellery"}>
                  <img
                    className={classes.imagefulllong}
                    src={tileData[4].img}
                  />
                  <div className="overlay1">
                    <div className={"collectionDataSilverSEOflex"}>
                      <div style={{ margin: "auto" }}>
                        <h2 className="next-price">
                          {"Bracelets".toUpperCase()}
                        </h2>
                      </div>
                    </div>
                  </div>
                </a>
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container>
            <Grid item className={classes.firstcolumn} md={9} lg={0} xl={0}>
              <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                  <div>
                    <a
                      className={classes.imagefull}
                      href={tileData[0].navigateUrl}
                    >
                      <img
                        className={classes.imagefull}
                        src={tileData[0].img}
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <div>
                    <a
                      className={classes.imagefull}
                      href={tileData[3].navigateUrl}
                    >
                      <img
                        className={classes.daisyday}
                        src={tileData[3].img}
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
                  <Grid item md={6} sm={6} xs={6} className={classes.imgsmall}>
                    <div style={{ paddingRight: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[2].navigateUrl}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[2].img}
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    <div style={{ paddingLeft: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[1].navigateUrl}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[1].img}
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
              p0
              lg={0}
              xl={0}
            >
              <a className={classes.imagefull} href={tileData[4].navigateUrl}>
                <img className={classes.imagefulllong} src={tileData[4].img} />
              </a>
            </Grid>
          </Grid>
        )}
      </Hidden>
      <Hidden smDown>
        {props.isHover ? (
          <Grid
            container
            style={{
              padding: "0px 15px",
              marginTop: 50,
              marginBottom: 50,
              height: 570,
            }}
          >
            <Grid
              container
              item
              className={classes.marginAuto}
              md={3}
              lg={3}
              xl={3}
              className={`hovereffectSilvertoppicks`}
            >
              <a className={classes.imagefull} href={"rings-jewellery"}>
                <img className={classes.imagefull} src={tileData[4].img} />
                <div className="overlay1">
                  <div className={"collectionDataSilverSEOflex"}>
                    <div style={{ margin: "auto" }}>
                      <h2 className="next-price"> {"Rings".toUpperCase()}</h2>
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
            <Grid
              item
              className={classes.firstcolumnsilver}
              md={6}
              lg={6}
              xl={6}
            >
              <Grid container>
                <Grid
                  item
                  md={6}
                  lg={6}
                  xl={6}
                  className={`hovereffectSilvertoppicks`}
                >
                  <div style={{ padding: "0px 4px 0px 0px " }}>
                    <a
                      className={classes.imagefull}
                      href={"earrings-jewellery"}
                    >
                      <img
                        className={classes.imagefull}
                        src={tileData[1].img}
                        style={{ paddingTop: "2px" }}
                      />
                      <div className="overlay1">
                        <div className={"collectionDataSilverSEOflex"}>
                          <div style={{ margin: "auto" }}>
                            <h2 className="next-price">
                              {"Earrings".toUpperCase()}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  lg={6}
                  xl={6}
                  className={`hovereffectSilvertoppicks`}
                >
                  <div style={{ padding: "0px 0px 0px 4px " }}>
                    <a
                      className={classes.imagefull}
                      href={"pendants-jewellery"}
                    >
                      <img
                        className={classes.imagefull}
                        src={tileData[1].img}
                        style={{ paddingTop: "2px" }}
                      />
                      <div className="overlay1">
                        <div className={"collectionDataSilverSEOflex"}>
                          <div style={{ margin: "auto" }}>
                            <h2 className="next-price">
                              {"Pendants".toUpperCase()}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </Grid>
                <Grid item container style={{ paddingTop: "10px" }}>
                  {/* <Grid
                        item
                        md={4}
                        lg={4}
                        xl={4}
                        className={classes.imgsmall}
                        className={`hovereffectSilvertoppicks`}
                      >
                        <div style={{ padding: "0px 8px 0px 0px " }}>
                          <a
                            className={classes.imagefull}
                            href={'rings-jewellery'}
                          >
                            <img
                              className={classes.imagefull}
                              src={tileData[2].img}
                            />
                            <div className="overlay1">
                              <div className={"collectionDataSilverSEOflex"}>
                                <div style={{ margin: "auto" }}>
                                  <h2 className="next-price">
                                    {"Rings".toUpperCase()}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </Grid> */}
                  <Grid
                    item
                    md={12}
                    lg={12}
                    xl={12}
                    className={`hovereffectSilvertoppicks`}
                  >
                    <div>
                      <a
                        className={classes.imagefull}
                        href={"bangles-jewellery"}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[3].img}
                        />
                        <div className="overlay1">
                          <div className={"collectionDataSilverSEOflex"}>
                            <div style={{ margin: "auto" }}>
                              <h2 className="next-price">
                                {"Bangles".toUpperCase()}
                              </h2>
                            </div>
                          </div>
                        </div>
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
              className={`hovereffectSilvertoppicks`}
            >
              <a className={classes.imagefull} href={"bracelets-jewellery"}>
                <img className={classes.imagefull} src={tileData[4].img} />
                <div className="overlay1">
                  <div className={"collectionDataSilverSEOflex"}>
                    <div style={{ margin: "auto" }}>
                      <h2 className="next-price">
                        {"Bracelets".toUpperCase()}
                      </h2>
                    </div>
                  </div>
                </div>
              </a>
            </Grid>
          </Grid>
        ) : (
          <Grid container style={{ padding: "0px 15px" }}>
            <Grid item className={classes.firstcolumn} md={9} lg={9} xl={9}>
              <Grid container>
                <Grid item md={8} lg={8} xl={8}>
                  <div style={{ padding: "0px 8px 0px 0px " }}>
                    <a
                      className={classes.imagefull}
                      href={tileData[0].navigateUrl}
                    >
                      <img
                        className={classes.imagefull}
                        src={tileData[0].img}
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                  <div style={{ padding: "0px 0px 0px 8px " }}>
                    <a
                      className={classes.imagefull}
                      href={tileData[1].navigateUrl}
                    >
                      <img
                        className={classes.imagefull}
                        src={tileData[1].img}
                        style={{ paddingTop: "2px" }}
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item container style={{ paddingTop: "10px" }}>
                  <Grid item md={4} lg={4} xl={4} className={classes.imgsmall}>
                    <div style={{ padding: "0px 8px 0px 0px " }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[2].navigateUrl}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[2].img}
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item md={8} lg={8} xl={8}>
                    <div style={{ padding: "0px 0px 0px 8px " }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[3].navigateUrl}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[3].img}
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
              <a className={classes.imagefull} href={tileData[4].navigateUrl}>
                <img className={classes.imagefull} src={tileData[4].img} />
              </a>
            </Grid>
          </Grid>
        )}
      </Hidden>
    </Grid>
  );
}
