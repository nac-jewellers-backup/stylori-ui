import { Hidden, Grid, Container } from "@material-ui/core";
import React, { Component } from "react";
import Header from "components/SilverComponents/Header";
import CustomSeparator from "components/BreadCrumb/index";
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
import Buynowfixed from "components/product-image-slider/buynowfixed";
import "components/product-image-slider/product-images.css";
import { withRouter } from "react-router-dom";
import productDetails from "mappers/productDetails";
import { PRODUCTDETAILS, conditions } from "queries/productdetail";
import { useGraphql } from "hooks/GraphqlHook";
import { ProductDetailContext } from "context/ProductDetailContext";
import { CDN_URL, API_URL } from "config";
import "screens/screens.css";
import { Helmet } from "react-helmet";
import { CartContext } from "context";
import { GlobalContext } from "context";
import SilverProductPrice from "components/product-image-slider/silverProductPrice";
import ShopBy from "components/shopBy";
import ProductModal from "../components/SilverComponents/ProductModal";
import { shopByStyloriSilver, allSeoPriorities } from "queries/productdetail";
import ProductTitle from "components/SilverComponents/ProductTitle";
import Quantity from "../components/quantity";
import { Slideshow } from "components";
import { Diversestyles } from "../components/product-image-slider/Gagetstylori/Diversestyles-pink";
import { Certified } from "../components/product-image-slider/Gagetstylori/Certified";
import { Fromthehouseofnac } from "../components/product-image-slider/Gagetstylori/Fromthehouseofnac-pink";
import { Hypoallergenic } from "../components/product-image-slider/Gagetstylori/Hypoallergenic-pink";
import { Securepayments } from "../components/product-image-slider/Gagetstylori/Securepayments-pink";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NeedHelp from "../components/needHelp";
// import {Helmet} from "react-helmet";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    // this.handleMeta()
    this.state = {
      clear: "",
      data: null,
    };
    console.log(
      "----------this.props.data--------- CONSTRUCTOR",
      this.props.data
    );
  }
  UNSAFE_componentWillMount() {
    // this.handleOGTag()
  }
  handleOGTag = () => {
    if (this.props.data && this.props.data.length > 0) {
      var arr = [
        { key: "Description", value: this.props.data[0].dis },
        { key: "keywords", value: this.props.data[0].productsPendants[0].name },
        { key: "og_site_name", value: "Stylori.com" },
        { key: "og_title", value: this.props.data[0].title },
        { key: "og_type", value: "website_stylori" },
        { key: "og_url", value: window.location.href },
        //  {key:"title", value:this.props.data[0].title}
      ];
      arr.map((val) => {
        document.getElementById(val.key).setAttribute("content", val.value);
      });
      document.title = this.props.data[0].title;
    }
  };
  renderUrl = () => {
    var loc = this.props.location.pathname;
    var path = loc.split("/");
    if (path[2] === "Bracelets") return "/bracelets-jewellery";
    if (path[2] === "Pendants") return "/pendants-jewellery";
    if (path[2] === "Nosepins") return "/nose+pin+online-jewellery";
    if (path[2] === "Earrings") return "/earrings-jewellery";
    if (path[2] === "Bangles") return "/bangles-jewellery";
    if (path[2] === "Rings") return "/rings-jewellery";
  };
  handleMeta = () => {
    //    console.log("camein..", "handleMeta")

    return (
      // this.props.data && this.props.data[0] && this.props.data[0].length > 0 ?
      <Helmet>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <link
          rel="icon"
          type="image/gif"
          sizes="16x16"
          href="http://static.nfl.com/static/content/public/static/img/logos/react-helmet.jpg"
        />
        {/* <link rel="shortcut icon" href="http://static.nfl.com/static/content/public/static/img/logos/react-helmet.jpg"></link> */}
        {/* <title>{this.props.data[0].title}</title> */}
        <meta
          name="Description"
          property="og:description"
          content={this.props.data[0].dis}
        />
        {/* <meta name="keywords" content={this.props.data[0].productsPendants[0].name} /> */}
        <meta
          name="og_site_name"
          property="og:site:name"
          content="Stylori.com"
        ></meta>
        <meta
          name="og_title"
          property="og:title"
          content={this.props.data[0].title}
        />
        {/* <meta property="og:description" content={'this.props.data[0].dis'} /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" id="fb-product-url" content={window.location.href} /> */}
        <meta
          name="og_url"
          property="og:url"
          content={window.location.href}
        ></meta>
        {/* <meta property="og:image" id="fb_imageUrl" content={this.props.data[0].fadeImages.arrOfurls[0]} /> */}
        {/* <meta name="twitter_card" content="summary" />
  //       <meta name="twitter_site" content="@StyloriLove" />
  //       <meta name="twitter_title" id="twitter-title" content={this.props.data[0].title} />
  //       <meta name="twitter_description" content={this.props.data[0].dis} />
  //       <meta name="twitter_image" id="twitter_imageUrl" content={this.props.data[0].fadeImages.arrOfurls[0]} /> */}
        {/* <meta charSet="utf-8" /> */}
        <title>My Title</title>
        <link rel="canonical" href="https://staging.stylori.com" />
      </Helmet>
      // :
      // null
      /*:*/
      /*:*/
      /*:*/
    );
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== prevState.data) {
      console.log("camein", prevProps.data);
      console.log("camein..", this.props.data);
      this.setState({ data: this.props.data });
      console.log("camein.....", this.state.data);
      // this.handleOGTag()
    }
  }

  render() {
    // const meta = {
    //   title: 'Some Meta Title',
    //   og_description: 'I am a description, and I can create multiple tags',
    //   canonical: 'http://example.com/path/to/page',
    //   meta: {
    //     charset: 'utf-8',
    //     name: {
    //       keywords: 'react,meta,document,html,tags'
    //     }
    //   }
    // };

    var loc = this.props.location.pathname;
    var path = loc.split("/");
    var data_json = [
      { title: "home", url: "/" },
      { title: path[2], url: this.renderUrl() },
      {
        title:
          this.props.data && this.props.data[0] && this.props.data[0].title,
      },
    ];
    // alert(JSON.stringify(this.props.wishlistdata))
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
    return (
      <div>
        {/* <div>

          <MetaTags>
            {
              this.state.data && this.state.data.length > 0 ?
       
         this.handleMeta()
         :
         null
            }

          </MetaTags>
        </div> */}
        {/* <DocumentMeta {...meta}> */}

        <Hidden smDown>
          <Header wishlist={this.props.wishlistdata} />

          {/* {!isSilver ? (
            <Grid
              Container
              spacing={12}
              style={{ maxWidth: "1600px", margin: "auto" }}
            >
              <Grid item xs={12}>
                <div className="pricing-breadcrums-media">
                  <CustomSeparator
                    list="pricing-loctn"
                    classsubhed="pricing-loctn-head"
                    data={data_json}
                  />
                </div>
              </Grid>
            </Grid>
          ) : (
            <Grid container item xs={12} style={{ marginTop: "30px" }}></Grid>
          )} */}

          <Grid
            Container
            spacing={12}
            style={{ maxWidth: "1600px", margin: "auto" }}
          >
            <Grid item xs={12}>
              <div className="pricing-breadcrums-media">
                <CustomSeparator
                  list="pricing-loctn"
                  classsubhed="pricing-loctn-head"
                  data={data_json}
                  listSilver="pricing-loctn-silver"
                  isSilver={isSilver}
                />
              </div>
            </Grid>
          </Grid>
          {/* {isSilver && ( */}
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
          {/* )} */}
          <div
            className="pricing-imgzom-media"
            style={{ maxWidth: "1600px", margin: "auto" }}
          >
            <Grid
              container
              spacing={isSilver ? 5 : 12}
              justify={isSilver ? "space-between" : "space-evenly"}
            >
              <Grid item xs={6}>
                {isSilver ? (
                  <ProductImageZoom
                    data={this.props.data}
                    isSilver={isSilver}
                    customLimit={3}
                  />
                ) : (
                  <ProductImageZoom
                    data={this.props.data}
                    isSilver={isSilver}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {isSilver ? (
                  <div className="overall-box-without-shadow-silver">
                    <SilverProductPrice
                      data={this.props.data}
                      wishlist={this.props.wishlistdata}
                    />
                  </div>
                ) : (
                  <div className="overall-box priceecontainer">
                    <ProductPrice
                      data={this.props.data}
                      wishlist={this.props.wishlistdata}
                    />
                  </div>
                )}
                {!isSilver && (
                  <div className="overall-box priceecontainer">
                    <PriceTabs data={this.props.data} isSilver={isSilver} />
                  </div>
                )}
                {isSilver ? (
                  <div>
                    <PriceBuynow data={this.props.data} isSilver={isSilver} />
                  </div>
                ) : (
                  <div className="overall-box priceecontainer">
                    <PriceBuynow data={this.props.data} isSilver={isSilver} />
                  </div>
                )}
                {isSilver && (
                  <Grid
                    item
                    xs={12}
                    style={{ marginBottom: "20px", marginTop: "20px" }}
                  >
                    <ProductDetails
                      data={this.props.data}
                      isSilver={isSilver}
                    />
                  </Grid>
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
                  <ProductDetails data={this.props.data} isSilver={isSilver} />
                </Grid>
                {!isSilver && (
                  <Grid
                    item
                    xs={6}
                    style={{ marginBottom: "20px", marginTop: "20px" }}
                  >
                    <PriceCertification data={this.props.data} />
                    <Request data={this.props.data} />
                  </Grid>
                )}
                <br />
              </Grid>
            </div>
          )}
          {/* BUY TOGETHER - COMMENTED FOR SOME RESON DON'T REMOVE IT */}
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
              <Sublistcarousel
                data={this.props.data}
                isSilver={isSilver}
                nextPreviousIconSize = {'3rem'}
                customLimit={2}
                label="BUY TOGETHER"
              />
            </div>
          )} */}
          {/* -------------------------------- */}
          {isSilver ? (
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
            <Sublistcarousel data={this.props.data} isSilver={isSilver} />
          )}
          {isSilver && (
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
                shopByStyloriSilver={this.props.shopByStyloriSilver}
              />
            </div>
          )}
          {isSilver ? (
            <div
              style={{
                maxWidth: "1600px",
                margin: "auto",
              }}
            >
              <RatingForm
                // 0 0 0
                data={this.props.data}
                clear_rating={this.state.clear}
                clear_rating_onchange={clear_rating}
                isSilver={isSilver}
              />
            </div>
          ) : (
            <RatingForm
              // 0 0 0
              data={this.props.data}
              clear_rating={this.state.clear}
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
            >
              {/* <CustomerReviews rating={this.props.rating} isSilver={isSilver} /> */}
            </div>
          ) : (
            <CustomerReviews rating={this.props.rating} isSilver={isSilver} />
          )}

          <Grid item xs={12}>
            <Footer silver={isSilver} />
          </Grid>
        </Hidden>

        <Hidden mdUp>
          {/* <div style={{ paddingBottom: "50px" }}> */}
          {/* <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}> */}
          <Header wishlist={this.props.wishlistdata} pdpage={true} />
          {/* </Grid> */}

          <Grid item xs={12}>
            <PriceBuynow
              data={this.props.data}
              wishlist={this.props.wishlistdata}
              isSilver={isSilver}
            />
          </Grid>
          {/* {isSilver && <Grid item xs={12} style={{marginBottom:'15px'}}>
               <Container > <Quantity data={this.props.data}/></Container>
                </Grid>} */}
          <Grid item xs={12}>
            <ProductDetails
              data={this.props.data}
              wishlist={this.props.wishlistdata}
              isSilver={isSilver}
            />
          </Grid>
          {isSilver && (
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
          )}
          {!isSilver && (
            <Grid item xs={12}>
              <PriceCertification data={this.props.data} isSilver={isSilver} />
            </Grid>
          )}
          {!isSilver && (
            <Grid item xs={12}>
              <Request data={this.props.data} />
            </Grid>
          )}

          <Grid item xs={12}>
            <Sublistcarousel
              data={this.props.data}
              isSilver={isSilver}
              customLimit={4}
            />
          </Grid>
          {/* BUY TOGETHER - COMMENTED FOR SOME RESON DON'T REMOVE IT */}
          {/* <Grid item xs={12}>
            <Sublistcarousel
              data={this.props.data}
              isSilver={isSilver}
              label="BUY TOGETHER"
              customLimit={4}
            />
          </Grid> */}
          {isSilver && (
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
          )}
          <Grid item xs={12}>
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
                  {/* <ProductTitle
                    title={"SHOP BY TYPE"}
                    class={["silverPDPage", "silverPDPagehrline"]}
                    isSilver={isSilver}
                  /> */}
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
          </Grid>
          <Grid item xs={12}>
            <RatingForm
              data={this.props.data}
              clear_rating={this.state.clear}
              clear_rating_onchange={clear_rating}
              isSilver={isSilver}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomerReviews data={this.props.data} />
          </Grid>
          <Grid item style={{ paddingBottom: "50px" }}>
            <Footer silver={isSilver} />
          </Grid>
        </Hidden>
        {/* </DocumentMeta> */}
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
    // _shopsProducts = [
    //   {
    //     label: val.label,
    //     image:val.images[0].imageUrl,
    //   },

    // ];
    _shopsProducts = Object.keys(val).map((data) => {
      return { label: val[data].label, image: val[data].images };
    });
    // setState({...state,shopByData:_shopsProducts})
  };

  const _queryResultsValidator = (_result) => {
    console.log(_result, "_result");
    let _keys = Object.keys(_result);
    var _obj = {};
    _keys.map((val) => {
      var a = _result[val].nodes.map((val) => {
        return val.productListByProductSku.productImagesByProductId.nodes;
      });

      let _arr = [];
      a.map((val1) => {
        val1.map((val2) => {
          if (val2.imagePosition === 2) return _arr.push(val2);
        });
      });
      _obj[val] = { label: val, images: _arr };
    });
    console.log(_obj, "aaa");
    _shopsProductss(_obj);
  };

  const _fetchProducts = () => {
    fetch(`${API_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `${shopByStyloriSilver([
          "Earrings",
          "Pendants",
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
            // let _data =func()
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

  console.log(state.shopByData, "-------------+*/-");

  const { Globalctx, setGlobalCtx } = React.useContext(GlobalContext);
  const {
    ProductDetailCtx: {
      data,
      loading,
      error,
      likedatas,
      viewedddatas,
      rating,
      filters: { quantity },
    },
  } = React.useContext(ProductDetailContext);
  console.log(quantity, "product detail quantity");
  const _silverArr = [];
  React.useEffect(() => {
    if (data && !loading) {
      if (Object.keys(data).length > 0) {
        if (
          data.data.allTransSkuLists &&
          data.data.allTransSkuLists.nodes.length > 0 &&
          data.data.allTransSkuLists.nodes[0].productListByProductId &&
          data.data.allTransSkuLists.nodes[0].productListByProductId
            .productMaterialsByProductSku &&
          data.data.allTransSkuLists.nodes[0].productListByProductId
            .productMaterialsByProductSku.nodes.length > 0
        ) {
          data.data.allTransSkuLists.nodes[0].productListByProductId.productMaterialsByProductSku.nodes.map(
            (val) => {
              _silverArr.push(val.materialName.toLowerCase());
            }
          );
          console.log(_silverArr, "_silverArr");
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
  if (Object.keys(mapped).length === 0)
    return (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else {
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

export default withRouter(Components);
