import React, { Component } from "react";
import "./ProductDescription.css";
import { Container, Hidden, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { API_URL } from "../../config";
import { ALLSTYLORISILVERLISTINGPAGE } from "../../queries/home";

const styles = (theme) => ({
  colorLight: {
    color: "rgb(109,110,112)",
  },
  colorDark: {
    color: "#6D6E71",
    textTransform: "capitalize",
    fontSize: "1.1rem",
  },
  TypoDark: {
    color: theme.palette.primary.dark,
    textTransform: "capitalize",
    fontSize: "1.1rem !important",
    fontWeight: 600,
    letterSpacing: "1px",
  },
  TypoDarktitleseo: {
    fontSize: "0.9rem !important",
  },
  showLess: {
    whiteSpace: "nowrap",
    width: "100% !important",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  LgHeading: {
    fontSize: "24px !important",
    color: "#6D6E71",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  descriptionText: {
    fontSize: "14px !important",
    color: "#6D6E71",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: "10px !important",
    },
    // textAlign: "center                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
  },
});

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLess: true,
      bannerData: [],
    };
  }
  handleReadMore = () => {
    this.setState({ showLess: !this.state.showLess });
  };

  componentDidMount() {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALLSTYLORISILVERLISTINGPAGE,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let bannerFullData = data.data.allStyloriSilverBanners.nodes;
        const specificPageData = bannerFullData?.filter(
          (item) => item.urlParam === window.location.pathname
        );
        const listedPageData = bannerFullData?.filter(
          (item) => item.urlParam === "listingPage"
        );

        if (specificPageData.length > 0) {
          this.setState({ bannerData: specificPageData });
        } else {
          this.setState({ bannerData: listedPageData });
        }
      });
  }

  render() {
    const { classes } = this.props;
    // var loc = this.props.location.pathname;

    // var path = loc.split("/");
    // var data_json = [
    //   { title: "home", url: "/" },
    //   { title: "jewellery", url: "/jewellery" },
    // ];
    // const settings =
    //   this.props.data && this.props.data[0] && this.props.data[0].dataCarousel;
    const fadeImages =
      this.props.datalisting &&
      this.props.datalisting &&
      this.props.datalisting.length > 0
        ? this.props.datalisting.map((val) => {
            if (
              val &&
              val.image &&
              val.image.placeImage &&
              val.image.placeImage.img
            )
              return val.image.placeImage.img;
            else
              return "https://assets.stylori.com/product/SP0384/1000X1000/SP0384-1W.webp";
          })
        : [
            "https://assets.stylori.com/product/SP0384/500X500/SP0384-1W.webp",
            "https://assets.stylori.com/product/SR0783/500X500/SR0783-1Y.webp",
            "https://assets.stylori.com/product/SR0367/500X500/SR0367-1Y.webp",
            "https://assets.stylori.com/product/SE0891/500X500/SE0891-1Y.webp",
          ];

    fadeImages.sort((a, b) => 0.5 - Math.random());
    const datadescription =
      this.props.data && this.props.data[0] && this.props.data[0].seoText;
    const renderTitle = () => {
      var a = window.location.pathname.split("/");
      var b = a[1].split(/\-/g).map((val) => {
        return val.replace(/\+/g, " ");
      });
      var c = b.map((val) => {
        return b + " ";
      });
      var d;
      return (d = c[0].replace(/\,/g, " "));
    };
    return (
      <>
        <Container>
          <Grid
            style={{ marginTop: "15px", textAlign: "center" }}
            container
            direction="row"
            justify="space-around"
          >
            <Grid item container>
              <Hidden smDown>
                <Grid
                  item
                  xs={12}
                  className={`DescriptionTitle`}
                  style={{
                    textAlign: "center",
                    paddingBottom: "10px",
                    fontSize: "1rem",
                  }}
                ></Grid>
              </Hidden>
            </Grid>
            <Grid item container alignItems="center">
              {/* <Grid item xs={12} style={{ textAlign: "center" }}>
                <Hidden smDown>
                  <Slideshow
                    sliderRef={this.slider}
                    dataCarousel={homePageStylori.carouselTop.settingSilver}
                  >
                    {this.state.bannerData.map((val, index) => (
                      <>
                        <Hidden smDown>
                          <Grid container key={index}>
                            <a
                              href={
                                val.url == "specificListingPage" ? "" : val.url
                              }
                              style={{ width: "100%" }}
                            >
                              <img
                                alt="banner"
                                src={val.web}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </Grid>
                        </Hidden>
                        <Hidden mdUp>
                          <Grid container key={index}>
                            <a
                              href={
                                val.url == "specificListingPage" ? "" : val.url
                              }
                            >
                              <img
                                alt="banner"
                                src={val.mobile}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </Grid>
                        </Hidden>
                      </>
                    ))}
                  </Slideshow>
                </Hidden>
                <Hidden smUp>
                  <Slideshow
                    sliderRef={this.slider}
                    dataCarousel={homePageStylori.carouselTop.settingSilver}
                  >
                    {this.state.bannerData.map((val, index) => (
                      <>
                        <Hidden smDown>
                          <Grid container key={index}>
                            <a
                              href={
                                val.url == "specificListingPage" ? "" : val.url
                              }
                              style={{ width: "100%" }}
                            >
                              <img
                                alt="banner"
                                src={val.web}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </Grid>
                        </Hidden>
                        <Hidden mdUp>
                          <Grid container key={index}>
                            <a
                              href={
                                val.url == "specificListingPage" ? "" : val.url
                              }
                            >
                              <img
                                alt="banner"
                                src={val.mobile}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </Grid>
                        </Hidden>
                      </>
                    ))}
                  </Slideshow>
                </Hidden>
              </Grid> */}
              <Grid item container>
                <Hidden mdDown>
                  <Grid
                    item
                    xs={12}
                    style={{ textAlign: "center", marginTop: "10px" }}
                    className={` DescriptionTitleSmallScreen `}
                  >
                    <Typography
                      className={`${classes.LgHeading} ${classes.TypoDarktitleseo}`}
                      variant="h1"
                      component="h1"
                    >
                      {renderTitle()}
                    </Typography>
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item container>
                <Hidden mdUp>
                  <Grid
                    item
                    xs={12}
                    style={{ textAlign: "center", marginTop: "10px" }}
                    className={` DescriptionTitleSmallScreen `}
                  >
                    <Typography className={`${classes.colorDark}`}>
                      {renderTitle()}
                    </Typography>
                  </Grid>
                </Hidden>
              </Grid>
              {/* </Hidden> */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ textAlign: "center" }}
              >
                <p>
                  <div className="DescriptionContent DescriptionContentsilver">
                    <Grid container>
                      <Grid
                        container
                        item
                        xs={12}
                        style={{ justifyContent: "center" }}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={10}
                          xl={10}
                          className={classes.descriptionText}
                        >
                          {datadescription}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withRouter(withStyles(styles)(ProductDescription));
