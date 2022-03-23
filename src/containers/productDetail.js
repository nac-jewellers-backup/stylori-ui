import { Hidden, Grid, Container, withStyles, Card } from "@material-ui/core";
import React, { Component } from "react";
import Header from "components/SilverComponents/Header";
// import CustomSeparator from "components/BreadCrumb/index";
import ProductImageZoom from "components/product-image-slider/productImageZoom";
import ProductPrice from "components/product-image-slider/productPrice";
import PriceTabs from "components/product-image-slider/priceTabs";
import PriceBuynow from "components/product-image-slider/buyNow";
import ProductDetails from "components/product-image-slider/productDetails";
import PriceCertification from "components/product-image-slider/priceCertification";
import Request from "components/product-image-slider/request";
import RatingForm from "components/product-image-slider/ratingform";
import Sublistcarousel from "components/product-image-slider/subListcarousel";
import CustomerReviews from "components/product-image-slider/customer-reviews";
import Footer from "components/Footer/Footer";
import "components/product-image-slider/product-images.css";
import { withRouter } from "react-router-dom";
import productDetails from "mappers/productDetails";

import { ProductDetailContext } from "context/ProductDetailContext";
import { API_URL } from "config";
import "screens/screens.css";
import { Helmet } from "react-helmet";
import { CartContext } from "context";
import { GlobalContext } from "context";
import SilverProductPrice from "components/product-image-slider/silverProductPrice";
import ShopBy from "components/shopBy";
import ProductModal from "../components/SilverComponents/ProductModal";
import { shopByStyloriSilver, allSeoPriorities } from "queries/productdetail";

import { Slideshow } from "components";
import { Diversestyles } from "../components/product-image-slider/Gagetstylori/Diversestyles-pink";
import { Certified } from "../components/product-image-slider/Gagetstylori/Certified";
import { Fromthehouseofnac } from "../components/product-image-slider/Gagetstylori/Fromthehouseofnac-pink";
import { Hypoallergenic } from "../components/product-image-slider/Gagetstylori/Hypoallergenic-pink";
import { Securepayments } from "../components/product-image-slider/Gagetstylori/Securepayments-pink";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NeedHelp from "../components/needHelp";
import ReactPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";

import JewelSlider from "components/SilverComponents/JewelSlider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import JewelDetailAccordion from "components/SilverComponents/JewelDetailAccordion";
import HouseOfNac from "assets/houseOfNAC.png";
import HouseOfNac2x from "assets/houseOfNAC@2x.png";
import HouseOfNac3x from "assets/houseOfNAC@3x.png";
import { SilverButton } from "components/SilverComponents/SilverButton";
import SliderWithHeading from "components/SilverComponents/SliderWithHeading";
import CollectionCard from "components/SilverComponents/CollectionCard";
import FinalCard from "components/SilverComponents/finalCard";
import SilverFooter from "components/SilverComponents/SilverFooter";

// V2 Desktop
import { CustomSeparator } from "components/SilverComponents/v2";
import NACSection from "components/HouseOfNac";
import CollectionSlider from "components/SilverComponents/CollectionSlider";
import DesktopFooter from "components/SilverComponents/DesktopFooter";

const styles = (theme) => ({
  font: {
    fontFamily: `'Playfair Display', serif !important`,
  },
  breadcrumbs: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    fontFamily: `'Playfair Display', serif`,
    fontWeight: 500,
    marginTop: 8,
  },
  name: {
    fontSize: 15,
    color: theme.palette.text.secondary,
    fontWeight: 600,
    marginTop: 8,
  },
  tag: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    fontWeight: 500,
    marginTop: 2,
  },
  price: {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 600,
    marginTop: 16,
    lineHeight: 1,
  },
  discountContainer: {
    fontSize: 16,
    fontWeight: 600,
  },
  actualPrice: {
    color: theme.palette.primary.main,
    textDecoration: "line-through",
  },
  discount: {
    color: theme.palette.secondary.main,
    textDecoration: "unset",
  },
  tax: {
    color: theme.palette.text.secondary,
    fontSize: 12,
    fontWeight: 500,
    marginTop: 8,
    marginBottom: 8,
  },
  bestSellerText: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    marginTop: 20,
  },
  description: {
    color: theme.palette.text.secondary,
    textAlign: "left",
    fontSize: 12,
    fontWeight: 500,
  },
  getInTouchButtonContainer: {
    marginTop: 32,
  },
  houseOfNacContainer: {
    position: "relative",
    marginTop: 50,
    "& img": {
      width: "100%",
    },
  },
  nacDescription: {
    color: "#6D6E71",
    position: "absolute",
    padding: theme.spacing(3, 2),
    background: "#F8E3C0",
    textAlign: "center",
    margin: "-20px 16px",
    maxWidth: 320,
    "& #title": {
      fontFamily: `'Playfair Display', serif !important`,
      fontWeight: 500,
      fontSize: 22,
      color: "#6D6E71",
    },
    "& #desc": {
      fontSize: 12,
      textAlign: "center",
      fontWeight: 500,
      color: "#6D6E71",
    },
  },
  productDimensions: {
    display: "flex",
    gap: 24,
  },
  productDetailText: {
    color: theme.palette.text.secondary,
    textAlign: "left",
    fontSize: 12,
  },
  productLabel: {
    fontWeight: 500,
  },
  trademarks: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 60,
    columnGap: 8,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      marginTop: 130,
    },
  },

  // Collection Card
  collectionCardContainer: {
    marginBottom: 50,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      margin: "0px 30px 50px 30px",
    },
  },

  backToProducts: {
    width: 320,
    margin: "80px auto",
    [theme.breakpoints.down("sm")]: {
      width: 200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  sliderWithHeadingContainer: {
    marginTop: 52,
    [theme.breakpoints.up("sm")]: {
      marginTop: 30,
    },
  },
});

const Wrapper = ({ children }) => {
  return (
    <div style={{ padding: "0px 16px", textAlign: "center" }}>{children}</div>
  );
};

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clear: "",
      data: null,
      isActive: false,
      Index: "",
    };
  }
  componentDidMount() {
    // Facebook Pixel Code
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.track("PageView");

    // Google Tag Manager
    const tagManagerArgs = {
      gtmId: "GTM-PW3ZXSF",
      dataLayer: {
        ecommerce: {
          detail: {
            actionField: { list: "Apparel Gallery" },
            products: [
              {
                name: this?.props?.data[0]?.title,
                id: this?.props?.data[0]?.skuId,
                price: this?.props?.data[0]?.offerPrice,
                category: this?.props?.data[0]?.productType,
              },
            ],
          },
        },
      },
    };
    this?.props?.data && TagManager.initialize(tagManagerArgs);
  }
  UNSAFE_componentWillMount() {}

  handleOGTag = () => {
    if (this?.props?.data && this?.props?.data?.length > 0) {
      var arr = [
        { key: "Description", value: this?.props?.data[0]?.dis },
        {
          key: "keywords",
          value: this?.props?.data[0]?.productsPendants[0]?.name,
        },
        { key: "og_site_name", value: "Stylori.com" },
        { key: "og_title", value: this?.props?.data[0]?.title },
        { key: "og_type", value: "website_stylori" },
        { key: "og_url", value: window.location.href },
      ];
      arr.map((val) => {
        document.getElementById(val.key).setAttribute("content", val?.value);
      });
      document.title = this?.props?.data[0]?.title;
    }
  };
  renderUrl = () => {
    var loc = this?.props?.location?.pathname;
    var path = loc.split("/");
    if (path[2] === "Bracelets") return "/bracelets-jewellery";
    if (path[2] === "Pendants") return "/pendants-jewellery";
    if (path[2] === "Nosepins") return "/nose+pin+online-jewellery";
    if (path[2] === "Earrings") return "/earrings-jewellery";
    if (path[2] === "Bangles") return "/bangles-jewellery";
    if (path[2] === "Rings") return "/rings-jewellery";
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== prevState.data) {
      this.setState({ data: this.props.data });
    }
  }

  render() {
    var loc = this?.props?.location?.pathname;
    var path = loc.split("/");
    var data_json = [
      { title: "home", url: "/" },
      { title: path[2], url: this.renderUrl() },
      {
        title:
          this?.props?.data &&
          this?.props?.data[0] &&
          this?.props?.data[0]?.title,
      },
    ];

    const clear_rating = (bool) => {
      if (bool === false) {
        this.setState({
          clear: "",
        });
      }
      if (bool === true) {
        this.setState({
          clear: "clear_",
        });
      }
    };
    const { Globalctx } = this.props;
    const isSilver = Globalctx.pathName ? true : false;
    const mobiledataCarousel = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: (
        <ArrowLeftIcon
          style={{ fill: "rgb(6, 171, 159)", fontSize: "1.7rem" }}
        />
      ),
      nextArrow: (
        <ArrowRightIcon
          style={{ fill: "rgb(6, 171, 159)", fontSize: "1.7rem" }}
        />
      ),
    };

    const { classes } = this.props;
    const jewelData = this.props?.data?.[0];
    console.log(jewelData,"lllll")

    var detail_data = [
      {
        title: "Description",
        data: jewelData.dis != "" ? <Typography className="no-data">{jewelData.dis}</Typography> : <Typography className="no-data">No Data Found</Typography>,
      },
      {
        title: "Product Details",
        data: (
          <ProductDetails
            data={this?.props?.data}
            isSilver={isSilver}
            isActive={this.state.isActive}
          />
        ),
      },
      {
        title: "Jewellery Care",
        data: <Typography className="no-data">No Data Found</Typography>,
      },
    ];

    return (
      <div>
        <Helmet>
          <title>
            {(this?.props?.data[0]?.title ?? " ") +
              " - " +
              (this?.props?.data[0]?.dis ?? "")}
          </title>
          <meta
            property="og:title"
            content={this?.props?.data[0]?.title ?? ""}
          />
          <meta
            name="description"
            property="og:description"
            content={this?.props?.data[0]?.dis ?? ""}
          />{" "}
          <meta property="og:type" content="Stylori Website" />
          <meta
            property="og:image"
            content={this?.props?.data[0]?.fadeImages?.arrOfurls[0] ?? ""}
          />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content="Stylori" />
          <meta
            name="twitter:title"
            content={this?.props?.data[0]?.title ?? ""}
          ></meta>
          <meta
            name="twitter:description"
            content={this?.props?.data[0]?.dis ?? ""}
          ></meta>
          <meta
            name="twitter:image"
            content={this?.props?.data[0]?.fadeImages?.arrOfurls[0] ?? ""}
          ></meta>
          <meta name="twitter:site" content="@StyloriSilver"></meta>
          <meta name="twitter:creator" content="@StyloriSilver"></meta>
          <link rel="canonical" href="https://stylori.com" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_US" />
          <meta
            name="keywords"
            content={this?.props?.data[0]?.productsPendants[0]?.name ?? ""}
          />
        </Helmet>

        <Hidden smDown>
          {/* <Header wishlist={this?.props?.wishlistdata ?? ""} /> */}

          {/* <Grid
            Container
            spacing={12}
            style={{ maxWidth: "1600px", margin: "auto" }}
          >
            <Grid item xs={12}>
              <div className="pricing-breadcrums-media">
                {isSilver ? (
                  ""
                ) : (
                  <CustomSeparator
                    list="pricing-loctn"
                    classsubhed="pricing-loctn-head"
                    data={data_json}
                    listSilver="pricing-loctn-silver"
                    isSilver={isSilver}
                  />
                )}
              </div>
            </Grid>
          </Grid> */}

          {/* Need Help */}
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
                  top: "50%",
                  right: 0,
                  zIndex: 20,
                }}
              >
                <NeedHelp position="top" />
              </div>
            </Hidden>
          </>

          <Header paymentSucces={true} />
          {/* Main Container for Product image and Details */}
          <div
            className="pricing-imgzom-media"
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            style={{
              margin: "auto",
              paddingTop: isSilver ? "20px" : "",
            }}
          >
            <Grid
              container
              spacing={isSilver ? 5 : 12}
              justify={isSilver ? "space-between" : "space-evenly"}
            >
              {/* Product Image section */}
              <Grid item xs={6}>
                {isSilver ? (
                  <ProductImageZoom
                    data={this?.props?.data}
                    isSilver={isSilver}
                    customLimit={3}
                  />
                ) : (
                  <ProductImageZoom
                    data={this?.props?.data}
                    isSilver={isSilver}
                  />
                )}
              </Grid>

              {/* Product Detail section */}
              <Grid item xs={6}>
                {/* Breadcrumbs */}

                {isSilver && (
                  <CustomSeparator
                    list="pricing-loctn"
                    classsubhed="pricing-loctn-head"
                    data={data_json}
                    listSilver="pricing-loctn-silver"
                    isSilver={isSilver}
                  />
                )}

                {/* Product title and SKU ID */}
                {isSilver ? (
                  <div className="overall-box-without-shadow-silver">
                    <SilverProductPrice
                      data={this?.props?.data}
                      wishlist={this?.props?.wishlistdata}
                    />
                  </div>
                ) : (
                  <div className="overall-box priceecontainer">
                    <ProductPrice
                      data={this?.props?.data}
                      wishlist={this?.props?.wishlistdata}
                    />
                  </div>
                )}

                {/* {isSilver ? (
                  <div>
                    <PriceBuynow data={this?.props?.data} isSilver={isSilver} />
                  </div>
                ) : (
                  <div className="overall-box priceecontainer">
                    <PriceBuynow data={this?.props?.data} isSilver={isSilver} />
                  </div>
                )}  */}

                {!isSilver && (
                  <div className="overall-box priceecontainer">
                    <PriceTabs data={this?.props?.data} isSilver={isSilver} />
                  </div>
                )}

                {!isSilver && (
                  <div className="overall-box priceecontainer">
                    <PriceBuynow data={this?.props?.data} isSilver={isSilver} />
                  </div>
                )}

                {isSilver && (
                  <div className="">
                    <div className="">
                      {detail_data.map((item, index) => (
                        <div className="accordian-item">
                          <div
                            className="accordion-title"
                            onClick={() =>
                              this.setState({
                                isActive: !this.state.isActive,
                                Index: index,
                              })
                            }
                          >
                            <div className="accordion-title2">{item.title}</div>
                            <div style={{ cursor: "pointer" }}>
                              {this.state.isActive && this.state.Index === index
                                ? "-"
                                : "+"}
                            </div>
                          </div>
                          {this.state.isActive && this.state.Index === index ? (
                            <div className="" style={{ margin: 10 }}>
                              {item.data}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {isSilver && (
                  <div className={classes.getInTouchButtonContainer}>
                    <SilverButton variant="outlined">Get in Touch</SilverButton>
                  </div>
                )}
              </Grid>
            </Grid>
          </div>

          {!isSilver && (
            <div
              style={{
                background: isSilver ? "unset" : "whitesmoke",
                maxWidth: "1600px",
                margin: "auto",
              }}
              className="pricing-product-media"
            >
              <Grid container spacing={12}>
                <Grid
                  item
                  xs={6}
                  style={{ marginBottom: "20px", marginTop: "20px" }}
                >
                  <ProductDetails
                    data={this?.props?.data}
                    isSilver={isSilver}
                  />
                </Grid>
                {!isSilver && (
                  <Grid
                    item
                    xs={6}
                    style={{ marginBottom: "20px", marginTop: "20px" }}
                  >
                    <PriceCertification data={this.props.data} />
                    <Request data={this?.props?.data} />
                  </Grid>
                )}
                <br />
              </Grid>
            </div>
          )}
          {!isSilver && (
            <Sublistcarousel data={this?.props?.data} isSilver={isSilver} />
          )}

          {/* {isSilver ? (
            <div
              style={{
                maxWidth: "1600px",
                margin: "auto",
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "4%",
              }}
            >
              <Sublistcarousel
                data={this.props.data}
                isSilver={isSilver}
                customLimit={4}
                nextPreviousIconSize={"3rem"}
              />
            </div>
          ) : (
            <Sublistcarousel data={this?.props?.data} isSilver={isSilver} />
          )} */}
          {/* {isSilver && (
            <div
              style={{
                maxWidth: "1600px",
                margin: "auto",
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "4%",
              }}
            >
              <ShopBy
                isSilver={isSilver}
                shopByStyloriSilver={this?.props?.shopByStyloriSilver}
              />
            </div>
          )} */}
          {isSilver ? (
            <div
              style={{
                maxWidth: "1600px",
                margin: "auto",
              }}
            >
              <RatingForm
                data={this?.props?.data}
                clear_rating={this?.state?.clear}
                clear_rating_onchange={clear_rating}
                isSilver={isSilver}
              />
            </div>
          ) : (
            <RatingForm
              data={this?.props?.data}
              clear_rating={this?.state?.clear}
              clear_rating_onchange={clear_rating}
              isSilver={isSilver}
            />
          )}
          {isSilver ? (
            <div
              style={{
                maxWidth: "1600px",
                margin: "auto",
              }}
            ></div>
          ) : (
            <CustomerReviews rating={this?.props?.rating} isSilver={isSilver} />
          )}

          {/* HouseOfNac */}
          {isSilver && (
            <div>
              <NACSection />
            </div>
          )}

          {/* Trademarks Section */}
          {isSilver && (
            <Container maxWidth="md">
              <div className={classes.trademarks}>
                <Securepayments size={88} color="rgb(6, 171, 159)" />
                <Certified size={88} color="rgb(6, 171, 159)" />
                <Diversestyles size={88} color="rgb(6, 171, 159)" />
                <Hypoallergenic size={88} color="rgb(6, 171, 159)" />
                {/* <Fromthehouseofnac color="rgb(6, 171, 159)" /> */}
              </div>
            </Container>
          )}

          {/* SLider with Headings */}
          {isSilver && (
            <div className={classes.sliderWithHeadingContainer}>
              <SliderWithHeading
                heading="Recently Viewed"
                products={jewelData?.fadeImageSublistRecentlyViewed}
              />
            </div>
          )}

          {isSilver && (
            <div className={classes.sliderWithHeadingContainer}>
              <SliderWithHeading
                heading="You may also like"
                products={jewelData?.fadeImageSublist}
              />
            </div>
          )}

          {isSilver && (
            <Wrapper>
              <div className={classes.backToProducts}>
                <SilverButton
                  variant="contained"
                  color="secondary"
                  style={{ padding: "8px 16px" }}
                  onClick={()=>{this.props.history.push("/silver-jewellery")}}
                >
                  Back to Products
                </SilverButton>
              </div>
            </Wrapper>
          )}

          {/* Collection Card section */}
          <div className={classes.collectionCardContainer}>
            {isSilver && (
              <div style={{ display: "flex" }}>
                {["BAROQUE WHITES", "MURAL COLLECTIONS", "STAR STRUCK"].map(
                  (items) => (
                    <div>
                      <Card style={{ height: 250, width: 400, margin: 5 }}>
                        <img src={jewelData?.fadeImages?.arrOfurls[1]}></img>
                      </Card>
                      <Typography className="card-image">{items}</Typography>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {isSilver ? <DesktopFooter /> : <Footer silver={isSilver} />}

          {/* <Grid item xs={12}>
            <Footer silver={isSilver} />
          </Grid> */}
        </Hidden>

        {/* --------------------------------------------MOBILE UI BELOW---------------------------------------------------- */}
        <Hidden mdUp>
          <Header wishlist={this?.props?.wishlistdata} pdpage={true} />

          {/* Product Slider */}
          {isSilver ? (
            <JewelSlider slides={jewelData?.fadeImages} />
          ) : (
            // <ProductPrice
            //   data={this?.props?.data}
            //   wishlist={this?.props?.wishlistdata}
            // />
            <PriceBuynow
              data={this?.props?.data}
              wishlist={this?.props?.wishlistdata}
              isSilver={isSilver}
            />
          )}

          {/* {!isSilver && (
            <PriceTabs data={this?.props?.data} isSilver={isSilver} />
          )} */}

          {/* Product Detail section */}
          {isSilver ? (
            <Wrapper>
              <CustomSeparator
                list="pricing-loctn"
                classsubhed="pricing-loctn-head"
                data={data_json}
                listSilver="pricing-loctn-silver"
                isSilver={isSilver}
              />

              <SilverProductPrice
                data={this?.props?.data}
                wishlist={this?.props?.wishlistdata}
              />

              <Typography className={classes.bestSellerText}>
                Shipping Calculated at Checkout
              </Typography>

              <JewelDetailAccordion title="Description">
                <Typography className={classes.description}>
                  No data Found
                </Typography>
              </JewelDetailAccordion>
              <JewelDetailAccordion title="Product Details">
                <ProductDetails
                  data={this?.props?.data}
                  isSilver={isSilver}
                  isActive={true}
                />
              </JewelDetailAccordion>
              <JewelDetailAccordion title="Jewellery Care">
                <Typography className={classes.description}>
                  No data Found
                </Typography>
              </JewelDetailAccordion>

              <div className={classes.getInTouchButtonContainer}>
                <SilverButton variant="outlined">Get in Touch</SilverButton>
              </div>
            </Wrapper>
          ) : (
            <div>
              <ProductDetails
                data={this?.props?.data}
                isSilver={isSilver}
                isActive={true}
              />
              <PriceCertification data={this.props.data} />
              <Request data={this?.props?.data} />
            </div>
          )}

          {/* House of NAC Section */}
          {isSilver && (
            <div className={classes.houseOfNacContainer}>
              <img
                srcset={`${HouseOfNac},
              ${HouseOfNac2x} 2x,
              ${HouseOfNac3x} 3x`}
                src={HouseOfNac}
                alt="House of NAC"
              />

              <div className={classes.nacDescription}>
                <Typography id="title">From the House of Nac</Typography>
                <Typography id="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </div>
            </div>
          )}

          {/* Trademarks Section */}
          {isSilver && (
            <Container maxWidth="sm">
              <div className={classes.trademarks}>
                <Securepayments size={60} color="rgb(6, 171, 159)" />
                <Certified size={60} color="rgb(6, 171, 159)" />
                <Diversestyles size={60} color="rgb(6, 171, 159)" />
                <Hypoallergenic size={60} color="rgb(6, 171, 159)" />
                {/* <Fromthehouseofnac color="rgb(6, 171, 159)" /> */}
              </div>
            </Container>
          )}

          {!isSilver && (
            <Sublistcarousel data={this?.props?.data} isSilver={isSilver} />
          )}

          {/* SLider with Headings */}
          {isSilver && (
            <div className={classes.sliderWithHeadingContainer}>
              <SliderWithHeading
                heading="Recently Viewed"
                products={jewelData?.fadeImages?.arrOfurls}
              />
            </div>
          )}

          {isSilver && (
            <div className={classes.sliderWithHeadingContainer}>
              <SliderWithHeading
                heading="You may also like"
                products={jewelData?.fadeImages?.arrOfurls}
              />
            </div>
          )}

          {isSilver && (
            <div className={classes.backToProducts}>
              <SilverButton variant="contained" color="secondary">
                Back to Products
              </SilverButton>
            </div>
          )}

          {!isSilver && (
            <RatingForm
              data={this?.props?.data}
              clear_rating={this?.state?.clear}
              clear_rating_onchange={clear_rating}
              isSilver={isSilver}
            />
          )}

          {/* Collection Card section */}

          {isSilver && <FinalCard slides={jewelData?.fadeImages?.arrOfurls} />}

          {/* Footer Section */}
          {isSilver ? <SilverFooter /> : <Footer silver={isSilver} />}

          {/* <Grid item xs={12}>
            <PriceBuynow
              data={this?.props?.data}
              wishlist={this?.props?.wishlistdata}
              isSilver={isSilver}
            />
          </Grid> */}

          {/* <Grid item xs={12}>
            <ProductDetails
              data={this?.props?.data}
              wishlist={this?.props?.wishlistdata}
              isSilver={isSilver}
            />
          </Grid> */}
          {/* {isSilver && (
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
          )} */}
          {/* {!isSilver && (
            <Grid item xs={12}>
              <PriceCertification
                data={this?.props?.data}
                isSilver={isSilver}
              />
            </Grid>
          )} */}
          {/* {!isSilver && (
            <Grid item xs={12}>
              <Request data={this?.props?.data} />
            </Grid>
          )} */}

          {/* <Grid item xs={12}>
            <Sublistcarousel
              data={this?.props?.data}
              isSilver={isSilver}
              customLimit={4}
            />
          </Grid> */}

          {/* {isSilver && (
            <Container>
              <Container>
                <Grid container xs={12}>
                  <Grid
                    item
                    xs={12}
                    alignItems="center"
                    style={{ paddingTop: "10%" }}
                  >
                    <Slideshow dataCarousel={mobiledataCarousel}>
                      <Certified color="rgb(6, 171, 159)" />
                      <Diversestyles color="rgb(6, 171, 159)" />
                      <Hypoallergenic color="rgb(6, 171, 159)" />
                      <Fromthehouseofnac color="rgb(6, 171, 159)" />
                      <Securepayments color="rgb(6, 171, 159)" />
                    </Slideshow>
                  </Grid>
                </Grid>
              </Container>
            </Container>
          )} */}
          {/* <Grid item xs={12}>
            {isSilver && (
              <Container>
                <div
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    fontSize: 20,
                    color: "rgb(58,69,120)",
                    fontWeight: "bold",
                    letterSpacing: 4,
                    textAlign: "center",
                  }}
                >
                  SHOP BY TYPE
                </div>

                <ProductModal
                  shopByStyloriSilver={
                    this.props?.shopByStyloriSilver?.length > 3
                      ? this.props?.shopByStyloriSilver?.slice(0, 4)
                      : this.props?.shopByStyloriSilver
                  }
                  allSeo={this.props.allSeo}
                  isShowDetails={true}
                  layout={6}
                  homepagecollections={true}
                />
              </Container>
            )}
          </Grid> */}
          {/* <Grid item xs={12}>
            <RatingForm
              data={this?.props?.data}
              clear_rating={this?.state?.clear}
              clear_rating_onchange={clear_rating}
              isSilver={isSilver}
            />
          </Grid> */}
          {/* <Grid item xs={12}>
            <CustomerReviews data={this?.props?.data} />
          </Grid> */}
          {/* <Grid item style={{ paddingBottom: "50px" }}>
            <Footer silver={isSilver} />
          </Grid> */}
        </Hidden>
      </div>
    );
  }
}
const Components = (props) => {
  let {
    CartCtx: { allorderdata, wishlistdata, setratingcountsclear },
  } = React.useContext(CartContext);

  // ONLY SILVER PRODUCT DETAIL PAGE
  let _shopsProducts = [];
  const [state, setState] = React.useState({ shopByData: [], allSeo: {} });
  const _shopsProductss = (val) => {
    _shopsProducts = Object.keys(val).map((data) => {
      return { label: val[data].label, image: val[data].images };
    });
  };

  const _queryResultsValidator = (_result) => {
    let _keys = Object.keys(_result);
    var _obj = {};
    _keys.map((val) => {
      var a = _result[val].nodes.map((val) => {
        return val?.productListByProductSku?.productImagesByProductId?.nodes;
      });

      let _arr = [];
      a.map((val1) => {
        val1.map((val2) => {
          if (val2.imagePosition === 2) return _arr.push(val2);
        });
      });
      _obj[val] = { label: val, images: _arr };
    });
    _shopsProductss(_obj);
  };

  const _fetchProducts = () => {
    fetch(`${API_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `${shopByStyloriSilver([
          "Earrings",
          "Rings",
          "Bracelets",
          "Bangles",
        ])}`,
      }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        _queryResultsValidator(res.data);
        await fetch(`${API_URL}/graphql`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            query: allSeoPriorities([
              `"Earrings"`,
              `"Pendants"`,
              `"Rings"`,
              `"Bracelets"`,
              `"Bangles"`,
            ]),
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            const func = () => {
              var obj = {};
              res.data.allSeoUrlPriorities.nodes.map((val) => {
                obj[val.attributeValue] = {};
                obj[val.attributeValue]["seoText"] = val.seoText
                  ? val.seoText
                  : " ";
                obj[val.attributeValue]["seoUrl"] = val.seoUrl
                  ? val.seoUrl
                  : " ";
              });
              return obj;
            };
            state["allSeo"] = func();

            setState({
              ...state,
              shopByData: _shopsProducts,
              allSeo: state.allSeo,
            });
          });
      });
  };

  React.useEffect(() => {
    _fetchProducts();
  }, []);

  //

  const { Globalctx, setGlobalCtx } = React.useContext(GlobalContext);
  const {
    ProductDetailCtx: { data, loading, error, likedatas, viewedddatas, rating },
  } = React.useContext(ProductDetailContext);
  const _silverArr = [];
  React.useEffect(() => {
    if (data && !loading) {
      if (Object.keys(data).length > 0) {
        if (
          data?.data?.allTransSkuLists &&
          data?.data?.allTransSkuLists?.nodes?.length > 0 &&
          data?.data?.allTransSkuLists?.nodes[0]?.productListByProductId &&
          data?.data?.allTransSkuLists?.nodes[0]?.productListByProductId
            ?.productMaterialsByProductSku &&
          data?.data?.allTransSkuLists?.nodes[0]?.productListByProductId
            ?.productMaterialsByProductSku?.nodes?.length > 0
        ) {
          data.data.allTransSkuLists.nodes[0].productListByProductId.productMaterialsByProductSku.nodes.map(
            (val) => {
              _silverArr.push(val.materialName.toLowerCase());
            }
          );
          if (_silverArr.indexOf("silver") > -1)
            setGlobalCtx({ ...Globalctx, pathName: true });
        }
      }
    }
  }, [data]);

  const datas = data;
  let mapped = datas;
  if (!loading && !error) {
    mapped = productDetails(
      datas,
      likedatas,
      viewedddatas,
      rating,
      Globalctx.tabsChange
    );
  }

  if (Object.keys(mapped).length === 0) {
    if (window.location.href.toLowerCase().includes("silver")) {
      return (
        <div className="overall-loader">
          <div id="loadingsilver"></div>
        </div>
      );
    } else {
      return (
        <div className="overall-loader">
          <div id="loading"></div>
        </div>
      );
    }
  } else {
    return (
      <ProductDetail
        {...props}
        setratingcountsclear={setratingcountsclear}
        data={mapped}
        rating={rating}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        Globalctx={Globalctx}
        shopByStyloriSilver={state.shopByData}
        allSeo={state.allSeo}
      />
    );
  }
};

export default withRouter(withStyles(styles)(Components));
