import React from "react";
import Header from "components/SilverComponents/Header";
import Aos from "aos";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import StaticView from "../components/CarouselLazyer/StaticView";
import GridList from "../components/GridList/GridList";
import { homePageStylori } from "./dummydatahome";
import Testimony from "../components/Testimony/Testimony";
import Feedes from "../components/Feedes/Index";
import Stories from "../components/Stories/Index";
import MetaTags from "react-meta-tags";
import { storyData } from "../components/storyTemplate/storyTemplateData";
import NeedHelp from "../components/needHelp";
import { API_URL } from "../config";
import { ALLSTYLORILANDINGBANNERS } from "queries/home";
import "aos/dist/aos.css";
import ReactPixel from "react-facebook-pixel";
import Login from "components/SilverComponents/login";
import { CartContext } from "context";
import { FilterOptionsContext } from "context";

class HomeStylori extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
    this.state = {
      loading: false,
      count: "",
      datas: [],
      starting: false,
      imageLoading: false,
      login: true,
    };
  }

  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };
  imageLoader = () => {
    this.setState({ imageLoading: true });
  };
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: true });
    ReactPixel.pageView();

    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: ALLSTYLORILANDINGBANNERS,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let datas = data.data.allStyloriBanners.nodes;
        datas.sort((a, b) => parseFloat(a.position) - parseFloat(b.position));

        this.setState({ datas: datas });
        if (data.data.allStyloriBanners.nodes.length > 0) {
          this.setState({ starting: true });
        }
      });
    Aos.init({ duration: 1500 });
  }

  handleClose = () => {
    this.setState({
      login: false,
    });
  };

  render() {
    const dataCarousel = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      fade: false,
      dots: false,
      autoplaySpeed: 5000,
      arrows: false,
    };
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

    return (
      <Grid container style={{ overflowX: "auto" }}>
        <div>
          <MetaTags>
            <title>
              Online Jewellery Shopping in India | Gold and Diamond Jewellery
              Online
            </title>
            <meta
              name="facebook-domain-verification"
              content="t3yrba182xfqp79aqld63vtoaong46"
            />
            <meta
              name="description"
              content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings"
            />
            <meta
              name="keywords"
              content="Jewellery Online, Online Jewellery India, buy gold jewellery online, Online Jewellery Shopping, gold jewellery online, gold jewellery, fashion jewellery, jewellery designs, indian jewellery, designer jewellery,  fashion Jewellery, online jewellery, diamond Jewellery, online jewellery shopping india, jewellery websites, diamond jewellery india,"
            />
            <meta
              property="og:title"
              id="fb-title"
              content="Online Jewellery Shopping in India - Gold and Diamond Jewellery Online"
            />
            <meta
              property="og:description"
              content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings"
            />
            <meta
              property="og:url"
              id="fb-product-url"
              content={window.location.href}
            />
            <meta
              property="og:image"
              id="fb_imageUrl"
              content="https://assets.stylori.com/stylori-logo.svg"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@StyloriLove" />
            <meta
              name="twitter:title"
              id="twitter-title"
              content="Online Jewellery Shopping"
            />
            <meta
              name="twitter:description"
              content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings"
            />
            <meta
              name="twitter:image"
              id="twitter_imageUrl"
              content="https://assets.stylori.com/stylori-logo.svg"
            />
            <meta
              name="google-site-verification"
              content="IESxo4pcZChK4D_EmiAbncGjB7LXFOIF0EyVGnYDEGk"
            />
          </MetaTags>
        </div>
        <Header
          cartcount={this.props.cartcount}
          wishlist={this.props.wishlistdata}
        />
        {this.state.starting ? (
          <Grid item xs={12} style={{ backgroundColor: "#ebebeb" }}>
            <Hidden smDown>
              {homePageStylori.carouselTop.setting.arrowsImg && (
                <Grid container>
                  <Grid item onClick={this.previous} className={"imagePrevios"}>
                    {/* <i
                class="fa fa-angle-left"
                style={{ fontSize: "42px", color: "#F699A3" }}
              ></i> */}
                  </Grid>
                  <Grid item onClick={this.next} className={"imagenext"}>
                    {/* <i
                class="fa fa-angle-right"
                style={{ fontSize: "42px", color: "#F699A3" }}
              ></i> */}
                  </Grid>
                </Grid>
              )}
            </Hidden>
            <Slideshow
              sliderRef={this.slider}
              dataCarousel={homePageStylori.carouselTop.setting}
            >
              {this.state.datas.map((val, index) => (
                <>
                  <Hidden smDown>
                    <Grid
                      container
                      key={index}
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="200"
                      data-aos-offset="0"
                    >
                      <a href={`${val.url} `} style={{ width: "100%" }}>
                        <img
                          src={val.web}
                          alt="…"
                          loading="lazy"
                          style={{ width: "100%", height: "100%" }}
                          className={`image-${
                            this.state.imageLoading ? "visible" : "hidden"
                          }`}
                          onLoad={this.imageLoader}
                        />
                      </a>
                    </Grid>
                  </Hidden>
                  <Hidden mdUp>
                    <Grid
                      container
                      key={index}
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="200"
                      data-aos-offset="0"
                    >
                      <a href={`${val.url} `}>
                        <img
                          src={val.mobile}
                          style={{ width: "100%", height: "100%" }}
                          className={`smooth-image image-${
                            this.state.imageLoading ? "visible" : "hidden"
                          }`}
                          onLoad={this.imageLoader}
                          loading="lazy"
                          alt="...."
                        />
                      </a>
                    </Grid>
                  </Hidden>
                </>
              ))}
            </Slideshow>
          </Grid>
        ) : (
          <Skeleton
            variant="rect"
            style={{ width: "100%" }}
            className="skeletonHeight"
            animation="wave"
          />
        )}

        <Hidden mdUp>
          <Grid container>
            <Grid
              item
              xs={12}
              style={{
                paddingTop: "6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography style={{ width: "100%", textAlign: "center" }}>
                <Slideshow dataCarousel={dataCarousel}>
                  {productsubHead.map((val, index) => (
                    <>
                      <Grid
                        container
                        style={{
                          display: "flex !important",
                        }}
                        key={"From the House of NAC"}
                        className="wrappercustomer"
                      >
                        <Grid
                          item
                          container
                          key={index}
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <img
                            style={{ width: "18%" }}
                            src={val.icon}
                            loading="lazy"
                            alt="...."
                          />
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
        </Hidden>
        <Hidden smDown>
          <Grid
            Container
            item
            style={{
              padding: "10px 15px",
              width: "100%",
              // borderBottom: "1px solid #eeeeee"
            }}
          >
            <StaticView />
          </Grid>
        </Hidden>

        <Grid Container className="GridConatiner">
          <Grid
            item
            className="GridListImg"
            // data-aos="fade-left"
          >
            <GridList GridImage={homePageStylori.collectionGrid} />
          </Grid>
        </Grid>

        <Testimony
          dataCarousel={homePageStylori.Testimony.carousel.setting}
          GridImage={homePageStylori.Testimony.bangleGrid}
          carosolData={homePageStylori.Testimony.carousel.data}
        />

        <Hidden smDown>
          <Feedes
            fadeImages={homePageStylori.NewsFeeds.carousel.data}
            dataCarousel={homePageStylori.NewsFeeds.carousel.setting}
          />
        </Hidden>
        <Grid Container style={{ width: "100%" }}>
          <Grid item className="selectionHead">
            <em className="LeftImage"></em>
            <Grid className="headerTestimony">
              <span className="Typograpytestimony">Stories</span>
            </Grid>
            <em className="rightImage"></em>
          </Grid>
        </Grid>
        <Stories
          dataCarousel={homePageStylori.Stories.carousel.setting}
          carosolData={storyData.storiesData}
        />

        <Grid item xs={12} style={{ marginTop: 20, width: "100%" }}>
          <Footer />
        </Grid>
        <>
          <Hidden smDown>
            <div
              style={{
                position: "fixed",
                bottom: "10%",
                right: 0,
                zIndex: 20,
              }}
            >
              <NeedHelp position="top" />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div
              style={{
                position: "fixed",
                top: "75%",
                right: "5px",
                zIndex: 20,
              }}
            >
              <NeedHelp position="top" />
            </div>
          </Hidden>
        </>
        {localStorage.getItem("accessToken") ? null : (
          <Login open={this.state.login} handleClose={this.handleClose} />
        )}
      </Grid>
    );
  }
}

const Components = () => {
  let {
    CartCtx: { allorderdata, wishlistdata },
  } = React.useContext(CartContext);
  let {
    FilterOptionsCtx: {
      data,
      loading,
      error,
      dataArr,
      mappedFilters,
      cartcount,
      loadingfilters,
    },
    setloadingfilters,
  } = React.useContext(FilterOptionsContext);

  let content = (
    <HomeStylori
      allorderdata={allorderdata}
      wishlistdata={wishlistdata}
      cartcount={cartcount}
    />
  );
  return content;
};

export default withRouter(Components);
