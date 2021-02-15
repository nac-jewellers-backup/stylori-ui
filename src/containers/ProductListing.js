import React from "react";
import Header from "components/SilverComponents/Header";
import ProductDescription from "components/productDescription";
import SilverProductDescription from "components/productDescription/silverDescription";
import { Grid, Hidden } from "@material-ui/core";
import Filter from "components/Filter/filter";
import Footer from "components/Footer/Footer";
import { ChatHelp } from "components/ChatHelp";
import { FilterOptionsContext } from "context";
import productList from "mappers/productlist";
import { CDN_URL } from "config";
import { withRouter } from "react-router";
import "screens/screens.css";
import filterData from "mappers/filterData";
import { async } from "q";
import MetaTags from "react-meta-tags";
import { CartContext, GlobalContext } from "context";
import LiveChat from "react-livechat";
import NeedHelp from "../components/needHelp";
import { Helmet } from "react-helmet";
class Stylori extends React.Component {
  constructor(props) {
    super();
    this.state = { loading: false };
  }
  static contextType = GlobalContext;
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    //  if(this.props.dataFilter !== prevProps.dataFilter){

    if (this.props.loading !== prevProps.loading) {
      this.props.setloadingfilters(false);

      // }
      // setTimeout(function(){ alert("Hello"); }, 3000);
      // setTimeout(function(){  this.props.setloadingfilters(false); }.bind(this), 5000);
    }
  }
  render() {
    // alert(JSON.stringify(this.props.wishlist))
    const context = this.context;

    const { data, dataFilter, loading } = this.props;
    let locs = window.location.pathname.slice(1);
    let replaceValue = locs.replace(/[-\+]/gi, " ");
    replaceValue = replaceValue
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    return (
      <>
        {/* <LiveChat license={5807571} /> */}
        <Grid container>
          <Helmet>
            <title>{replaceValue}</title>
            <meta property="og:title" id="fb-title" content={this.props.mappedFilters.seo_url} />
            <meta name="description" content={this.props.mappedFilters.seo_text} />
            <meta name="keywords" content={this.props.dataFilter[0].filter} />
            <meta property="og:site_name" content="Stylori" />
            <meta property="og:description" content={this.props.mappedFilters.seo_text} />
            <meta property="og:type" content="website" />
            <meta property="og:url" id="fb-product-url" content={window.location.href} />
            <meta
              property="og:image"
              id="fb_imageUrl"
              content={
                this.props.data && this.props.data[0] && this.props.data[0].image && this.props.data[0].image.placeImage.img
              }
            />
            <meta property="og:image:width" content="200" />
            <meta property="og:image:height" content="200" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@StyloriLove" /> <meta name="twitter:creator" content="@StyloriSilver"></meta>
            <meta name="twitter:title" id="twitter-title" content={this.props.mappedFilters.seo_url} />
            <meta name="twitter:description" content={this.props.mappedFilters.seo_text} />
            <meta
              name="twitter:image"
              content={
                this.props.data && this.props.data[0] && this.props.data[0].image && this.props.data[0].image.placeImage.img
              }
            ></meta>
            <link rel="canonical" href="https://stylori.com" />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_US" />
          </Helmet>

          <Header
            data={data}
            cartcount={this.props.cartcount}
            wishlist={this.props.wishlistdata}
            wishlist_count={this.props.wishlist_count}
          />

          <Grid item xs={12}>
            {context.Globalctx.pathName ? (
              <>
                <SilverProductDescription
                  title="Jewellery"
                  data={dataFilter}
                  datalisting={data}
                  wishlist={this.props.wishlistdata}
                />
                <Filter datas={data} data={dataFilter} loading={loading} wishlist={this.props.wishlistdata} />
              </>
            ) : (
              <>
                <ProductDescription title="Jewellery" data={dataFilter} datalisting={data} wishlist={this.props.wishlistdata} />
                <Filter datas={data} data={dataFilter} loading={loading} wishlist={this.props.wishlistdata} />
              </>
            )}
          </Grid>
          <Grid item xs={12}>
            <Hidden smDown>
              {/* <ChatHelp data={data} wishlist={this.props.wishlistdata} /> */}

              <Footer silver={context.Globalctx.pathName} />
            </Hidden>
          </Grid>

          {/* {context.Globalctx.pathName && ( */}
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
          {/* )} */}
        </Grid>
      </>
    );
  }
}

// const history = (props, aa) => props.history.push(`/stylori?${aa}`);

const Components = (props) => {
  let {
    CartCtx: { allorderdata, wishlistdata },
  } = React.useContext(CartContext);
  let {
    FilterOptionsCtx: { data, loading, error, dataArr, mappedFilters, cartcount, loadingfilters, wishlist_count },
    setloadingfilters,
  } = React.useContext(FilterOptionsContext);
  let content,
    mapped = [];
  // alert(JSON.stringify(cartcount))
  var arrFilters = Array(mappedFilters);
  let mappedFiltersList = arrFilters.length > 0 ? filterData(arrFilters) : [];
  // let mappedFilter = filterData(mappedFilters)
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = async () => await productList(data, CDN_URL);
    }
  }
  if (Object.keys(data).length === 0)
    content = (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else
    content = (
      <Stylori
        {...props}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        cartcount={cartcount}
        data={dataArr}
        dataFilter={mappedFiltersList}
        loadingfilters={loadingfilters}
        loading={loading}
        mappedFilters={mappedFilters}
        setloadingfilters={setloadingfilters}
      />
    );
  return content;
};

export default withRouter(Components);
