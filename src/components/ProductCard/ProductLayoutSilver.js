import React from "react";
import {
  GridList,
  GridListTile,
  Button,
  Grid,
  Container,
  Hidden,
} from "@material-ui/core";
import ProductCards from "./index";
import { withStyles } from "@material-ui/core/styles";
import { FilterOptionsContext } from "context";
import { withRouter } from "react-router";
import { homePageStylori } from "../../containers/dummydatahome";
import Slideshow from "../Carousel/carosul";
import { ALLSTYLORISILVERLISTINGBOTTOMBANNERS } from "../../queries/home";
import { API_URL } from "../../config";

const styles = (theme) => ({
  gridlistmain: {
    [theme.breakpoints.down("sm")]: {
      margin: "0px !important",
      marginTop: "10px !important",
    },
  },
  gridlistmainviewmore: {
    width: "100%",
    textAlign: "center",
    marginTop: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "75px",
    },

    button: {
      margin: theme.spacing(1),
    },
  },
  viewmoreColor: {
    color: "white",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      opacity: "0.8",
    },
  },
  viewmoreColorSilver: {
    backgroundColor: "#06AB9F",
    color:"white",
    width:"25%",
    "&:hover": {
      backgroundColor: "#06AB9F",
      opacity: "0.9",
    },
  },
});
const ProductLayoutSilver = (props) => {
  const { setOffset, setFirst, FilterOptionsCtx } =
    React.useContext(FilterOptionsContext);
  return (
    <Component
      offset={FilterOptionsCtx.offset}
      setOffset={setOffset}
      setFirst={setFirst}
      loadingFilterCtx={FilterOptionsCtx.loadingfilters}
      {...props}
    />
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colSize: window.innerWidth,
      loading: false,
      loadingtext: false,
      bannerData: [],
    };
  }
  componentDidMount() {
    this.screenWidth();
    window.addEventListener("resize", this.screenWidth);
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALLSTYLORISILVERLISTINGBOTTOMBANNERS,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let bannerFullData = data.data.allStyloriSilverBanners.nodes;
        this.setState({ bannerData: bannerFullData });
      });
  }
  screenWidth = () => {
    const width = window.innerWidth;
    if (width > 2555) {
      this.setState({ colSize: 3 });
    } else if (width > 1440) {
      this.setState({ colSize: 3 });
    } else if (width > 1024) {
      this.setState({ colSize: 3 });
    } else if (width > 960) {
      this.setState({ colSize: 3 });
    } else if (width > 760) {
      this.setState({ colSize: 2 });
    } else if (width < 760) {
      this.setState({ colSize: 2 });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({ loadingtext: false });
    }
  }
  handleOffset = () => {
    const offsets = this.props.offset + 15;
    this.setState({ loadingtext: true });
    this.props.setOffset(offsets);
  };
  render() {
    const { classes, data } = this.props;

    return (
      <Container maxWidth="lg" disableGutters>
        <div className={`productLayoutRoot `} style={this.props.styles}>
          {
            <>
              {this.props.loadingFilterCtx === false && (
                <>
                  <GridList
                    cellHeight={"auto"}
                    className={`productLayoutGridList ${classes.gridlistmain}`}
                    cols={this.state.colSize}
                    style={{ margin: "25px !important" }}
                  >
                    {data.map((tile, i) => {
                      return tile && Object.entries(tile).length > 0 ? (
                        (i + 1) % 15 === 0 ? (
                          [tile, homePageStylori].map((val) => {
                            return val.carouselTop ? (
                              data.length !== i + 1 ? (
                                <GridListTile
                                  key={val.title}
                                  cols={this.state.colSize}
                                  style={{ padding: "0 !important" }}
                                  className={`${classes.liClass}`}
                                >
                                  <Slideshow
                                    sliderRef={this.slider}
                                    dataCarousel={
                                      homePageStylori.carouselTop
                                        .settingSilverListingPage
                                    }
                                  >
                                    {
                                      <>
                                        <Hidden smDown>
                                          <Grid container>
                                            <a style={{ width: "100%" }}  href="/#"
                          target="_blank"
                          el="noopener noreferrer">
                                              <img
                                                src={
                                                  this.state?.bannerData[
                                                    Math.floor(
                                                      Math.random() *
                                                        this.state?.bannerData
                                                          .length
                                                    )
                                                  ]?.web ?? ""
                                                }
                                                alt="silver banner"
                                                loading="lazy"
                                                style={{
                                                  width: "100%",
                                                  height: "100%",
                                                }}
                                              />
                                            </a>
                                          </Grid>
                                        </Hidden>
                                        <Hidden mdUp>
                                          <Grid container>
                                            <a  href="/#"
                          target="_blank"
                          el="noopener noreferrer">
                                              <img
                                                src={
                                                  this.state?.bannerData[
                                                    Math.floor(
                                                      Math.random() *
                                                        this.state?.bannerData
                                                          .length
                                                    )
                                                  ]?.mobile ?? ""
                                                }
                                                alt="silver banner"
                                                loading="lazy"
                                                style={{
                                                  width: "100%",
                                                  height: "100%",
                                                }}
                                              />
                                            </a>
                                          </Grid>
                                        </Hidden>
                                      </>
                                    }
                                  </Slideshow>
                                </GridListTile>
                              ) : null
                            ) : (
                              <GridListTile
                                key={val.title}
                                cols={val.cols || 1}
                                style={{ padding: "0 !important" }}
                                className={`${classes.liClass}`}
                              >
                                <ProductCards
                                  data={val}
                                  wishlist={this.props.wishlist}
                                />
                              </GridListTile>
                            );
                          })
                        ) : (
                          <GridListTile
                            key={tile.title}
                            cols={tile.cols || 1}
                            style={{ padding: "0 !important" }}
                            className={`${classes.liClass}`}
                          >
                            <ProductCards
                              data={tile}
                              wishlist={this.props.wishlist}
                            />
                          </GridListTile>
                        )
                      ) : (
                        ""
                      );
                    })}
                  </GridList>

                  <div className={`${classes.gridlistmainviewmore}`}>
                    {this.state.loadingtext ? (
                      <div style={{ textAlign: "center" }}>Loading...</div>
                    ) : (
                      <>
                        {data && data.length !== 0 ? (
                          data[0] &&
                          data[0].totalCount &&
                          (data[0].totalCount - data.length === 0 ||
                            data[0].totalCount - data.length < 0) ? (
                            ""
                          ) : (
                            <Button
                              variant="contained"
                              className={`${classes.button}  ${classes.viewmoreColor} ${classes.viewmoreColorSilver}`}
                              onClick={() => {
                                this.handleOffset();
                              }}
                              disabled={data && data.length < 15}
                            >
                              {data && data.length === 0 && `No products found`}
                              {data &&
                                data.length >= 15 &&
                                ` View ${
                                  data && data.length > 0 && data[0]
                                    ? data[0].totalCount - data.length
                                    : ""
                                } More Products`}
                              {data &&
                                data.length > 0 &&
                                data.length < 15 &&
                                `Only ${
                                  data && data.length > 0 && data[0]
                                    ? data[0].totalCount - data.length
                                    : ""
                                } products avalilable`}
                            </Button>
                          )
                        ) : (
                          <>
                            <div>No Products Found.</div>
                            <a href="/jewellery">Try Again.</a>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          }
        </div>
      </Container>
    );
  }
}

export default withRouter(
  withStyles(styles, { withTheme: true })(ProductLayoutSilver)
);
