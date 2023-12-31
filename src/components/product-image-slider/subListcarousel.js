import {
  Container,
  Grid,
  Hidden,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import "./product-images.css";
import Slideshow from "../Carousel/carosul";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
class Sublistcarousel extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }
  state = {
    value: 0,
    valuse: 0,
    values: 0,
    expanded: null,
    expanded1: true,
    dataToShow: "YouMayLike",
  };

  handle = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  handle_recent_view = (panel1) => (event, expanded1) => {
    this.setState({
      expanded1: !this.state.expanded1,
    });
  };

  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };
  withExpandCollapse = (data, mobiledataCarousel) => {
    const { expanded } = this.state;
    return (
      <ExpansionPanel
        style={{
          boxShadow:
            "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
          padding: "0 5px",
        }}
        expanded={expanded === "panel"}
        onChange={this.handle("panel")}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <div style={{ width: "100%" }}>
            <Typography className="subtabs-smrt">You may also like</Typography>
            {/* <hr class="bottom-line border-line-"></hr> */}
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <div style={{ width: "100%" }}>
            <Slideshow
              class={` ${data && data[0] && data[0].fadeImageSublist ? "subslider-carousel " : "shine"}`}
              hoverlist={data && data[0] && data[0].fadeImageSublist}
              dataCarousel={mobiledataCarousel}
              hover={true}
            ></Slideshow>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };
  withoutExpandCollapse = (data, mobiledataCarousel, props, _isSilver) => {
    return (
      <Container>
        <div style={{ width: "100%", margin: "20px 0px" }}>
          <Typography
            variant="h1"
            component="h1"
            className={`subtabs-smrt ${props.classes.similarproductssmallScreen}`}
            style={{ textAlign: "center" }}
          >
            {props?.label ? props.label : "SIMILAR PRODUCTS"}
          </Typography>
          {/* <hr class="bottom-line border-line-"></hr> */}
        </div>

        <div style={{ width: "100%" }}>
          <Slideshow
            class={` ${data && data[0] && data[0].fadeImageSublist ? "subslider-carousel " : "shine"}`}
            hoverlist={data && data[0] && data[0].fadeImageSublist}
            dataCarousel={mobiledataCarousel}
            hover={true}
            isSilver={_isSilver}
          ></Slideshow>
        </div>
      </Container>
    );
  };
  render() {
    const limit = 4;
    const { expanded1 } = this.state;
    const { data, classes, customLimit } = this.props;
    const mobiledataCarousel = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: <ArrowLeftIcon className={classes.carouselCustomArrow} style={{ fontSize: "3rem" }} />,
      nextArrow: <ArrowRightIcon className={classes.carouselCustomArrow} style={{ fontSize: "3rem" }} />,
    };
    const dataCarousel_ = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      fade: false,
      dots: false,
      autoplaySpeed: 4000,
      arrows: false,
    };

    const dataCarouselSimilarProducts = {
      // arrows: false,
      dots: false,
      infinite: true,
      accessibility: true,
      speed: 2500,
      prevArrow: <ArrowLeftIcon className={classes.carouselCustomArrow} />,
      nextArrow: <ArrowRightIcon className={classes.carouselCustomArrow} />,

      // fade: true,
      slidesToShow: customLimit
        ? customLimit
        : this.state.dataToShow === "YouMayLike"
        ? data && data[0] && data[0].fadeImageSublist.length > 4
          ? limit
          : data && data[0] && data[0].fadeImageSublist.length
        : data && data[0] && data[0].fadeImageSublistRecentlyViewed.length > 4
        ? limit
        : data && data[0] && data[0].fadeImageSublistRecentlyViewed.length,

      slidesToScroll: 4,
    };
    const dataCarousel = {
      arrows: false,
      dots: false,
      infinite: true,
      accessibility: true,
      speed: 2500,

      // fade: true,
      slidesToShow: customLimit
        ? customLimit
        : this.state.dataToShow === "YouMayLike"
        ? data && data[0] && data[0].fadeImageSublist.length > 4
          ? limit
          : data && data[0] && data[0].fadeImageSublist.length
        : data && data[0] && data[0].fadeImageSublistRecentlyViewed.length > 4
        ? limit
        : data && data[0] && data[0].fadeImageSublistRecentlyViewed.length,
      slidesToScroll: 4,
    };
    // this.state.dataToShow==="YouMayLike" ? data[0].fadeImageSublist : data[0].fadeImageSublistRecentlyViewed
    const productsubHead = [
      {
        name: "From the House of NAC",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/fromthehouseofnac-pink.svg",
        class: "image1",
      },
      {
        name: "Certified Jewellery",
        icon: "https://assets.stylori.com/images/Static%20Pages/Other%20Pages/certifiedjewellery-pink.svg",
        class: "image2",
      },
      {
        name: "Free Shipping",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/securepayments-pink.svg",
        class: "image3",
      },
      {
        name: "Diverse Styles",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/diversestyles-pink.svg",
        class: "image4",
      },
      {
        name: "Easy Returns",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/easyreturns-pink.svg",
        class: "image5",
      },
    ];

    const _isSilver = this.props.isSilver ? true : false;

    return (
      <div style={{ width: "100%" }}>
        {_isSilver ? (
          <Hidden smDown>
            {/* <Container style={{ padding: "0px 17px" }}> */}
            <div
              className="back_img"
              style={{
                padding: "2px 0px",
                margin: "auto",
                boxShadow: _isSilver
                  ? "unset"
                  : "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              {_isSilver ? (
                //  <Container maxWidth="lg">
                <Grid
                  container
                  justifyContent={"flex-start"}
                  className={classes.labelSilverProductDetail}
                  style={{ padding: "0px 0px 0px 12px" }}
                >
                  {/* <Grid item xs={10} className={`${'like-page'} ${this.state.dataToShow === 'YouMayLike' ? 'recenetly-like-page-active' : ''}`} ><span onClick={() => this.setState({ dataToShow: 'YouMayLike' })}>You may also like</span></Grid> */}
                  <Grid container item xs={12} justify="center">
                    <Typography variant="body1" component="div">
                      {this.props.label ? this.props.label : "Similar Products"}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <div className={`like-and-recently`}>
                  <Grid container spacing={12}>
                    <Grid
                      item
                      xs={6}
                      className={`${"like-page"} ${this.state.dataToShow === "YouMayLike" ? "recenetly-like-page-active" : ""}`}
                    >
                      <span onClick={() => this.setState({ dataToShow: "YouMayLike" })}>You may also like</span>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      className={`${"recenetly-like-page"} ${
                        this.state.dataToShow === "YouRecentlyViewed" ? "recenetly-like-page-active" : "" 
                      }`}
                    >
                      <span onClick={() => this.setState({ dataToShow: "YouRecentlyViewed" })}>You recently viewed</span>
                    </Grid>
                  </Grid>
                </div>
              )}
              <div className={`sub-carousel-head ${classes.silverSubCarouselHead}`}>
                {/* <Container> */}
                {(this.state.dataToShow === "YouMayLike" && data && data[0] && data[0].fadeImageSublist.length < 0) ||
                (this.state.dataToShow === "YouRecentlyViewed" &&
                  data &&
                  data[0] &&
                  data[0].fadeImageSublistRecentlyViewed.length === 0) ? (
                  <span className="NoProducts">
                    {this.state.dataToShow === "YouMayLike" ? "No products found" : "No products viewed yet"}
                  </span>
                ) : (
                  <Grid container style={{ width: "100%" }}>
                    <Grid item style={{ width: "100%" }}>
                      <Slideshow
                        sliderRef={this.slider}
                        class="subslider-carousel"
                        isSilver={_isSilver}
                        nextPreviousIconSize={this.props.nextPreviousIconSize}
                        hoverlist={
                          this.state.dataToShow === "YouMayLike"
                            ? data && data[0] && data[0].fadeImageSublist
                            : data && data[0] && data[0].fadeImageSublistRecentlyViewed
                        }
                        dataCarousel={dataCarouselSimilarProducts}
                        hover={true}
                        imagecra={true}
                        data={data}
                      ></Slideshow>
                    </Grid>
                  </Grid>
                )}
                {/* </Container> */}
              </div>
            </div>
            {/* </Container> */}
          </Hidden>
        ) : (
          <Hidden smDown>
            <Container style={{ padding: "0px 17px" }}>
              <div
                className="back_img"
                style={{
                  padding: "2px 0px",
                  margin: "auto",
                  boxShadow: _isSilver
                    ? "unset"
                    : "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                {_isSilver ? (
                  <Container maxWidth="lg">
                    <Grid container justifyContent={"space-around"} className={classes.labelSilverProductDetail}>
                      {/* <Grid item xs={10} className={`${'like-page'} ${this.state.dataToShow === 'YouMayLike' ? 'recenetly-like-page-active' : ''}`} ><span onClick={() => this.setState({ dataToShow: 'YouMayLike' })}>You may also like</span></Grid> */}
                      <Grid container item xs={10}>
                        <Typography variant="body1" component="div">
                          Similar Products
                        </Typography>
                      </Grid>
                    </Grid>
                  </Container>
                ) : (
                  <div className={`like-and-recently`}>
                    <Grid container spacing={12}>
                      <Grid
                        item
                        xs={6}
                        className={`${"like-page"} ${this.state.dataToShow === "YouMayLike" ? "recenetly-like-page-active" : ""}`}
                      >
                        <span onClick={() => this.setState({ dataToShow: "YouMayLike" })}>You may also like</span>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        className={`${"recenetly-like-page"} ${
                          this.state.dataToShow === "YouRecentlyViewed" ? "recenetly-like-page-active" : ""
                        }`}
                      >
                        <span onClick={() => this.setState({ dataToShow: "YouRecentlyViewed" })}>You recently viewed</span>
                      </Grid>
                    </Grid>
                  </div>
                )}
                <div className={`sub-carousel-head ${classes.silverSubCarouselHead}`}>
                  <Container>
                    {(this.state.dataToShow === "YouMayLike" && data && data[0] && data[0].fadeImageSublist.length < 0) ||
                    (this.state.dataToShow === "YouRecentlyViewed" &&
                      data &&
                      data[0] &&
                      data[0].fadeImageSublistRecentlyViewed.length === 0) ? (
                      <span className="NoProducts">
                        {this.state.dataToShow === "YouMayLike" ? "No products found" : "No products viewed yet"}
                      </span>
                    ) : (
                      <Grid container style={{ width: "100%" }}>
                        <Grid
                          item
                          style={{
                            width: "6%",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          {/* <img
                          onClick={() => this.previous()}
                          className={"icon-leftcaro"}
                        /> */}
                          <ArrowLeftIcon
                            onClick={() => this.previous()}
                            className={`${classes.carouselCustomArrow}`}
                            nextPreviousIconSize={this.props.nextPreviousIconSize}
                          />
                        </Grid>
                        <Grid item style={{ width: "88%" }}>
                          <Slideshow
                            sliderRef={this.slider}
                            class="subslider-carousel"
                            isSilver={_isSilver}
                            hoverlist={
                              this.state.dataToShow === "YouMayLike"
                                ? data && data[0] && data[0].fadeImageSublist
                                : data && data[0] && data[0].fadeImageSublistRecentlyViewed
                            }
                            dataCarousel={dataCarousel}
                            hover={true}
                            imagecra={true}
                            nextPreviousIconSize={this.props.nextPreviousIconSize}
                            data={data}
                          ></Slideshow>
                        </Grid>
                        <Grid
                          item
                          style={{
                            width: "6%",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          {/* <img
                          onClick={() => this.next()}
                          className={"icon-rightcaro"}
                        /> */}
                          <ArrowRightIcon onClick={() => this.next()} className={`${classes.carouselCustomArrow}`} />
                        </Grid>
                      </Grid>
                    )}
                  </Container>
                </div>
              </div>
            </Container>
          </Hidden>
        )}
        <Hidden mdUp>
          <Container>
            {_isSilver
              ? this.withoutExpandCollapse(data, mobiledataCarousel, this.props, _isSilver)
              : this.withExpandCollapse(data, mobiledataCarousel, this.props, _isSilver)}

            {_isSilver ? null : (
              <ExpansionPanel
                style={{
                  boxShadow:
                    "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                  padding: "0 5px",
                }}
                expanded={expanded1 === true}
                onChange={this.handle_recent_view(false)}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <div style={{ width: "100%" }}>
                    <Typography className="subtabs-smrt">You recently viewed</Typography>
                    {/* <hr class="bottom-line border-line-"></hr> */}
                  </div>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <div style={{ width: "100%" }}>
                    {data && data[0] && data[0].fadeImageSublistRecentlyViewed.length > 0 ? (
                      <Slideshow
                        class={` ${data && data[0] && data[0].fadeImageSublistRecentlyViewed ? "subslider-carousel " : "shine"}`}
                        hoverlist={data && data[0] && data[0].fadeImageSublistRecentlyViewed}
                        nextPreviousIconSize={this.props.nextPreviousIconSize}
                        dataCarousel={mobiledataCarousel}
                        hover={true}
                      ></Slideshow>
                    ) : (
                      <Grid container xs={12}>
                        <Grid item xs={12} alignItems="center" style={{ paddingTop: "6px" }}>
                          <Typography
                            style={{
                              height: "40px",
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            <Slideshow dataCarousel={dataCarousel_} nextPreviousIconSize={this.props.nextPreviousIconSize}>
                              {productsubHead.map((val, index) => (
                                <>
                                  <Grid
                                    container
                                    style={{
                                      display: "flex !important",
                                      marginBottom: "6px",
                                    }}
                                    key={"From the House of NAC"}
                                    className="wrappercustomer"
                                  >
                                    <Grid
                                      item
                                      container
                                      style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                      }}
                                    >
                                      <img style={{ width: "60px" }} src={val.icon} loading="lazy" alt="...."/>
                                    </Grid>
                                  </Grid>
                                </>
                              ))}
                            </Slideshow>
                            {/* <Grid style={{ width: "100%" }}>
                            <div className="loaders"></div>
                          </Grid> */}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )}
          </Container>
        </Hidden>
      </div>
    );
  }
}
Sublistcarousel.propTypes = {
  handle: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(Sublistcarousel);
