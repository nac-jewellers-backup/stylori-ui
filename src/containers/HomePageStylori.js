import React from "react";
import Header from 'components/SilverComponents/Header'
import { Grid, Hidden, Typography } from "@material-ui/core";
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
import MetaTags from 'react-meta-tags';

class HomeStylori extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
    this.state = {
      loading: false,
      count: ""
    };
  }
  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
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
      arrows: false
    };
    const productsubHead = [
      {
        name: "From the House of NAC",
        icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
        class: "image1"
      },
      {
        name: "Certified Jewellery",
        icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
        class: "image2"
      },
      {
        name: "Free Shipping",
        icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
        class: "image3"
      },
      {
        name: "Diverse Styles",
        icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
        class: "image4"
      },
      {
        name: "Easy Returns",
        icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
        class: "image5"
      }
    ];

    return (
      <Grid container>
         <div>
        {/* <MetaTags>
        <title>Online Jewellery Shopping in India | Gold and Diamond Jewellery Online</title>
        <meta name="description" content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings"  />
        <meta name="keywords" content="Jewellery Online, Online Jewellery India, buy gold jewellery online, Online Jewellery Shopping, gold jewellery online, gold jewellery, fashion jewellery, jewellery designs, indian jewellery, designer jewellery,  fashion Jewellery, online jewellery, diamond Jewellery, online jewellery shopping india, jewellery websites, diamond jewellery india," />

        <meta property="og:title" id="fb-title" content="Online Jewellery Shopping in India - Gold and Diamond Jewellery Online" />
        <meta property="og:description" content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings" />
        <meta property="og:url" id="fb-product-url" content={window.location.href} />
        <meta property="og:image" id="fb_imageUrl" content="https://styloriimages.s3.ap-south-1.amazonaws.com/stylori-logo.svg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@StyloriLove" />
        <meta name="twitter:title" id="twitter-title" content="Online Jewellery Shopping" />
        <meta name="twitter:description" content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings" />
        <meta name="twitter:image" id="twitter_imageUrl" content="https://styloriimages.s3.ap-south-1.amazonaws.com/stylori-logo.svg" /> */}
        {/* <meta name="google-site-verification" content="6I1mw4ayVxUxw1AZYP_BK73mXUaajhhhYyYl3Qv0E60" /> */}
        {/* </MetaTags> */}

        </div>
        <Grid
          item
          xs={12}
         
        >
          <Header />
        </Grid>

        <Grid item xs={12}>
          <Hidden smDown>
            {homePageStylori.carouselTop.setting.arrowsImg && (
              <Grid container>
                <Grid
                  item
                  onClick={this.previous}
                  className={"imagePrevios"}
                ></Grid>
                <Grid item onClick={this.next} className={"imagenext"}></Grid>
              </Grid>
            )}
          </Hidden>
          <Slideshow
            sliderRef={this.slider}
            dataCarousel={homePageStylori.carouselTop.setting}
          >
            {homePageStylori.carouselTop.data.map((val, index) => (
              <Grid container key={index}>
                <a href={val.navigateUrl}>
                  <img
                    src={val.img}
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </Grid>
            ))}
          </Slideshow>
        </Grid>
        <Hidden mdUp>
          <Grid container>
            <Grid
              item
              xs={12}
              alignItems="center"
              style={{ paddingTop: "6px" }}
            >
              <Typography
                style={{ height: "40px", width: "100%", textAlign: "center" }}
              >
                <Slideshow dataCarousel={dataCarousel}>
                  {productsubHead.map((val, index) => (
                    <>
                      <Grid
                        container
                        style={{
                          display: "flex !important",
                          marginBottom: "6px"
                        }}
                        key={"From the House of NAC"}
                        className="wrappercustomer"
                      >
                        <Grid
                          item
                          style={{ alignItems: "center", display: "flex" }}
                          className={val.class}
                          src={val.icon}
                        ></Grid>
                        <Grid
                          item
                          style={{
                            fontSize: "12px",
                            alignItems: "center",
                            display: "flex"
                          }}
                        >
                          {val.name}{" "}
                        </Grid>
                      </Grid>
                    </>
                  ))}
                </Slideshow>
                <Grid style={{ width: "100%" }}>
                  <div className="loaders"></div>
                </Grid>
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
              borderBottom: "1px solid #eeeeee"
            }}
          >
            <StaticView />
          </Grid>
        </Hidden>

        <Grid Container className="GridConatiner">
          <Grid item className="GridListImg">
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
          carosolData={homePageStylori.Stories.carousel.data}
        />
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <HomeStylori />;
  return content;
};

export default withRouter(Components);
