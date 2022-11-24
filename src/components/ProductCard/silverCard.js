import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./productCard.css";
import styles from "./style";
import { ProductDetailContext } from "context";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Wishlist from "components/wishlist/wishlist";
import CurrencyConversion from 'utils/CurrencyConversion';
import { Hidden } from "@material-ui/core";

export const SilverImgMediaCard = (props) => {
  const { ProductDetailCtx, setFilters } =
    React.useContext(ProductDetailContext);
  const classes = styles();

  return (
    <Component
      filters={ProductDetailCtx.filters}
      setFilters={setFilters}
      classes={classes}
      {...props}
    />
  );
};
// const MyImage = ( props, callmouseover, callmouseout, cardstate ) => {
//   return(

//   <LazyLoadImage
//     alt={'props.data.title'}
//     effect="blur"
//     srcset={renderImages(props, cardstate)}
//     sizes="(max-width: 320px) 320w,
//             (max-width: 480px) 375w,
//             (max-width: 600px) 600w,
//             (max-width: 992px) 768w,
//             (max-width: 1440px) 1440w,
//             (max-width: 2560px) 2560w,
//             2560w

// "
// title={props.data.title}
// onMouseOver={() => {
//  callmouseover()
// }}
// onMouseOut={() => {
//   callmouseout()
// }}
// style={{width:'100%',height:'100%'}}
// visibleByDefault={renderImages(props, cardstate) === 'https://alpha-assets.stylori.com/276x276/images/static/Image_Not_Available.jpg'}
//     />
// );
// }
function checkImage(imageSrc, good, bad) {
  var img = new Image();
  img.onload = good;
  img.onerror = bad;
  img.src = imageSrc;
}
const imageOnError = async (
  event,
  res,
  setLoading,
  url,
  loadAndSaveErrorImage
) => {
  const _event = event && event.target ? event.target : event.currentTarget;
  setLoading(true);
  const check_image_exists_in_server = (url) => {
    // var _url = url.replace(res.img_res, '1000X1000');

    return new Promise(async (resolve, reject) => {
      // create an XHR object
      await checkImage(
        url,
        () => {
          resolve(true);
        },
        () => {
          resolve(false);
        }
      );
    });
  };
  let _url = "";
  const urlCheck = (size) => {
    var current_url = url.split("/");
    current_url.splice(current_url.length - 2, 1, size);
    _url = current_url.join().replace(/\,/g, "/"); //eslint-disable-line
    return _url;
  };
  // let _url_2400X2400 = res.url_1000x1000;
  let _notFound =
    "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png";
  _event.src =
    "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png";

  let _image = (await check_image_exists_in_server(urlCheck("1000X1000")))
    ? _url
    : (await check_image_exists_in_server(urlCheck("2400X2400")))
    ? _url
    : _notFound;
  _event.src = _image;
  loadAndSaveErrorImage(_image);
  setLoading(false);
  // setLoading(false)
  //  `${CDN_URL}${res.url_1000x1000}`
  // check_image_exists_in_server()
  // check_image_exists_in_server()
  // event.target.src = `${CDN_URL}product/${res.img_res}X${res.img_res}/productnotfound.webp`
};
const Gallery = (
  props,
  callmouseover,
  callmouseout,
  cardstate,
  loadAndSaveErrorImage,
  scrollPosition
) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="imageHeight_silver">
      {props.data.oneDayShipping ? (
        <div
          className={`one-day-ship-listing-page-withoutTop`}
          style={{ zIndex: 2 }}
        >      
          <i
            class="fa fa-truck"
            style={{ 
            fontSize: "20px",
            fontFamily: 'FontAwesome !important',
            position: 'absolute',
            zIndex: 500,
            left: '16px',
            color:"#111"
            }}
          ></i>
          <span className={`one-day-ship-listing-page-label`}>
            1 day shipping
          </span>
        </div>
      ) : (
        ""
      )}
      {/* {
        props.data.discount && props.data.discount !== 0 ? 
          <>
            <span className="overlayCss" style={{ zIndex: 10, color: "#fff", backgroundColor: "#f699a3" }}>

              {`${props.data.discount} % off`}

            </span>
          </>
          :
          null
      } */}

      {/* <Grid container >
        <Grid item lg={1}>
        {
            Math.round(props.data.offerPrice) === Math.round(props.data.price) ? '' :
              <>
                <span style={{ zIndex: 10, color: "#fff", backgroundColor: "#f699a3" }}>
                  < div class="one-day-ship-listing-page__" > {`${props.data.discount}%`} < br /> {"OFF"}</div>
                </span>
              </>
          } 
        </Grid>
        <Grid item lg={4}>
        {props.data.oneDayShipping ? <div class={Math.round(props.data.offerPrice) === Math.round(props.data.price) ? "one-day-ship-listing-page-withoutTop" : "one-day-ship-listing-page"} style={{ zIndex: 2 }}>
            <i class="fa fa-truck" style={{ fontSize: "20px" }}></i>
            <span class="one-day-ship-listing-page-label">1 day shipping</span>
          </div> : ''}
        </Grid>
      </Grid> */}

      <div class="wishListStyle">
        <Wishlist
          sku={props.data.skuId}
          productId={props.data.productId}
          wishlist={props.wishlist}
          isSilver
        />
      </div>
      <Link
        to={{ pathname: props.data.skuUrl }}
        style={{ textDecoration: "none" }}
        target="_blank"
        // onClick={handleProductDetatiContext(props)}
      >
        <LazyLoadImage
          alt={"props.data.title"}
          effect="blur"
          src={renderImages(props, cardstate)}
          // onLoadedData={()=>{setLoading(false)}}
          //  srcset={renderImages(props, cardstate)}
          //      sizes="(max-width: 320px) 320w,
          //              (max-width: 480px) 375w,
          //              (max-width: 600px) 600w,
          //              (max-width: 992px) 768w,
          //              (max-width: 1440px) 1440w,
          //              (max-width: 2560px) 2560w,
          //              2560w

          //  "
          onError={(e) =>
            imageOnError(
              e,
              props.data.imageResolution,
              setLoading,
              renderImages(props, cardstate),
              loadAndSaveErrorImage
            )
          }
          title={props.data.title}
          placeholderSrc={`https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png`}
          // onMouseOver={() => {
          //   callmouseover();
          // }}
          // onMouseOut={() => {
          //   callmouseout();
          // }}
          style={{ width: "100%",transition:'all 0.5s' }}
          scrollPosition={scrollPosition}

          // If the image we are creating here has the same src than before,
          // we can directly display it with no need to lazy-load.
          // onerror={this.src=}
          // placeholderSrc={renderImages(props, cardstate) === '' ? 'https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg' : ''}
          // placeholder	= { <div >loading.....</div> }
        ></LazyLoadImage>
      </Link>
    </div>
  );
};
// onLoad={(e)=>e.target.src=e.target.style.background='url(https://assets.stylori.com/images/static/loadingimg.gif') center center / 25% 25% no-repeat rgb(255, 255, 255);'}
export default trackWindowScroll(Gallery);
// <img
// srcset={renderImages(props, cardstate)}
// sizes="(max-width: 320px) 320w,
//             (max-width: 480px) 375w,
//             (max-width: 600px) 600w,
//             (max-width: 992px) 768w,
//             (max-width: 1440px) 1440w,
//             (max-width: 2560px) 2560w,
//             2560w

// "
//      alt=""
//           title={props.data.title}
//           onMouseOver={() => {
//             setCardState({ ...cardstate, hovered: !cardstate.hovered });
//           }}
//           onMouseOut={() => {
//             setCardState({ ...cardstate, hovered: !cardstate.hovered });
//           }}
//           style={{width:'100%',height:'100%'}}
//           className={`${props.data.image.placeImage.length === 0 || props.data.image.hoverImage.length === 0 ? 'shine' : '' }`}

//           />
const handleProductDetatiContext = (props) => {
  props.filters["defaultVariants"]["diamondType"] = props.data.diamondType;
  props.filters["defaultVariants"]["metalColor"] = props.data.metalColor;
  props.filters["defaultVariants"]["purity"] = props.data.purity;
  props.filters["defaultVariants"]["skuSize"] = props.data.skuSize;
  // props.filters['defaultVariants']['productType'] = props.data.productType
  // props.filters['skuId'] = props.data.generatedSku
  props.filters["skuId"] = props.data.skuID;
  props.setFilters(props.filters);
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
  },
  card: {
    minWidth: "90%",
    maxWidth: "90%",
    // boxShadow:
    //   "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",
    margin: "10px 0px ",
    borderRadius: "0 !important",
  },
  cardAtionspadding: {
    padding: 0,
    margin: 0,
  },
  textDel: {
    color: "#828282",
  },
  priceClass: {
    // boxShadow: "0px 0px 5px #F699A3 inset",
    padding: "10px",
    paddingLeft: "0px",
    height: "80px",
    display: "flex",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: "0 !important",
    // borderTopLeftRadius: "20% !important",
    // borderTopRightRadius: "20% !important",
    opacity: "1.2",
    "&:hover": {
      boxShadow: "40 0 11px rgba(33,33,33,.2)",
      cursor: "pointer",
      // opacity: "2"
    },
    [theme.breakpoints.down("sm")]: {
      // height: "60px",
      padding: "0 !important",
      //   paddingLeft: '10px !important'
    },
    "& div": {
      padding: "0 !important",
    },

    // border: "1px solid #F699A3"
  },
  priceClassMain: {
    margin: "auto !important",
  },
  offerMainPrice: {
    color: "rgb(109,110,112)",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    "& i": {
      fontSize: "26px",
      paddingRight: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
  },
  offerMainPriceStrike: {
    color: "rgb(109,110,112)",
    fontWeight: "bold",
    textDecorationLine: "line-through",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem !important",
    },
    "& i": {
      fontSize: "20px !important",
      paddingRight: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.5rem !important",
      },
    },
  },

  offerPrice: {
    fontSize: "0.8rem",
    lineHeight: 0,
    color: "#828282",
    // fontWeight: "bold",
    width: "fit-content",
    flex: 0.7,
    textAlign: "center",
    padding: 5,
    "&:span": {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      padding: "0 !important",
      paddingTop: "4px !important",
      paddingBottom: "4px !important",
    },
  },
  youSave: {
    fontSize: "0.8rem",
    color: "#828282",
    "&:span": {
      margin: 0,
      marginBottom: 0,
    },
  },
  cardContent: {
    // margin: "auto"
    width: "100%",
  },
  textPriceCardGrid: {
    display: "flex",
    width: "100%",
  },
  priceOffGridsub: {
    flex: 1,
    display: "flex",
  },
  priceOffGrid: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  youSavePrice: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#ed1165",
    borderRadius: "3px",
    width: "40%",
    flex: 0.7,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      // flex: 0.3,
      borderRadius: "3px",
      fontWeight: "normal",
      fontSize: "0.7rem",
    },
  },
  offerPricesMain: {
    flex: 1,
    display: "flex",
  },
  titles: {
    fontSize: "0.9rem",
    // whiteSpace: "nowrap",
    // flex: 0.6,
    // color: "rgb(109,110,112)",
    color: "#959598",
    fontWeight: "500",
    overflow: "hidden",
    // textOverflow: "ellipsis",
    width: "90%",
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.75rem'
    },
  },
  iconColor: {
    color: theme.palette.secondary.light,
  },
  cardActionsImage: {
    margin: 0,
    overflow:'hidden',
    [theme.breakpoints.down("md")]: {
      // height: '200px !important'
    },
  },
}));
const renderImages = (props, cardstate) => {
  const filterType = cardstate.hovered ? "hoverImage" : "placeImage";
  if (cardstate.image[filterType]) {
    return cardstate.image[filterType];
  } else {
    // console.info('props.data.image[filterType]',props.data.image[filterType]);
    // return props.data.image['hoverImage'].length === 0 ?"https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg" : props.data.image[filterType].map(imgs => `${imgs.img} ${imgs.size}`).toString()
    return props.data.image["hoverImage"].length === 0
      ? "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png"
      : props.data.image[filterType].img;
  }
};

function Component(props) {
  const classes = useStyles();
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true,
    image: { hoverImage: null, placeImage: null },
  });
  // const _height = props.data.imageResolution.img_res;
  const callmouseover = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };
  const callmouseout = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };
  const loadAndSaveErrorImage = async (image) => {
    cardstate.image[cardstate.hovered ? "hoverImage" : "placeImage"] = image;
    await setCardState({ ...cardstate, ...image });
  };
  return (
    <div className={classes.root} style={{ marginLeft: "0px !important" }}>
      <Card
        className={classes.card}
        style={{ marginLeft: "0px !important", boxShadow: "none" }}
      >
        {/* <CardActions className={classes.cardAtionspadding}>
          <Grid container xs={12}>
            <Grid container item xs={6} justify="flex-start">
            

            </Grid>

            <Grid container item xs={6} justify="flex-end">
              <i
                style={{ fontSize: "18px" }}
                className={`fa ${classes.iconColor}`}
              >
                &#xf08a;
              </i>
            </Grid>
          </Grid>


        </CardActions> */}
        {/* /:productCategory/:productType/:material/:productName */}

        <CardActions
          style={
            {
              //  maxHeight: `${_height ? `${_height}px` : '300px'}`, minHeight: '250px'
            }
          }
          className={`${classes.cardAtionspadding} ${classes.cardActionsImage}`}
        >
          {/* <img 
srcset={renderImages(props, cardstate)}
sizes="(max-width: 320px) 320w,
            (max-width: 480px) 375w,
            (max-width: 600px) 600w,
            (max-width: 992px) 768w,
            (max-width: 1440px) 1440w,
            (max-width: 2560px) 2560w,
            2560w
           
"
     alt=""
          title={props.data.title}
          onMouseOver={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          onMouseOut={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          style={{width:'100%',height:'100%'}}
          className={`${props.data.image.placeImage.length === 0 || props.data.image.hoverImage.length === 0 ? 'shine' : '' }`}
          
          /> */}

          {Gallery(
            props,
            callmouseover,
            callmouseout,
            cardstate,
            loadAndSaveErrorImage
          )}
        </CardActions>
        <Card className={classes.priceClass}>
          {Math.round(props.data.price) &&
          Math.round(props.data.price) !== 0 &&
          Math.round(props.data.offerPrice) === Math.round(props.data.price) ? (
            <CardContent
              className={classes.cardContent}
              style={{ display: "flex" }}
            >
              <Grid
                container
                item
                xs={12}
                className={classes.textPriceCardGrid}
                alignItems="center"
              >
                {/* <Hidden smDown> */}
                {/* 
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  className={`${classes.priceClassMain}`}
                  style={{ alignItems: "center" }}
                >
                  <Typography
                    variant="h6"
                    component="h6"
                    className={classes.offerMainPrice}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: "5px",
                    }}
                  >
       
                   
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(Math.round(props.data.offerPrice))}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(Math.round(props.data.price))}
                  </Typography>
                </Grid> */}
                <span
                  variant="h4"
                  component="h4"
                  className={classes.offerMainPrice}
                  style={{
                    paddingLeft: "5px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  {CurrencyConversion(props.data.offerPrice)}
                  <span
                   
                    className={classes.offerMainPriceStrike}
                    style={{
                      fontSize: "22px",
                      paddingLeft: "5px",
                      display: "flex",
                      alignItems: "flex-end",
                      marginBottom: "1px",
                    }}
                  >
                    {/* <i
        
                     className="fa"
                      >
                      &#xf156;
                             </i> */}
                    {/* {Math.round(props.data.offerPrice)} */}

                    {CurrencyConversion(props.data.price)}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      width: "100%",
                      paddingRight: "5px",
                      color: "rgb(6, 171, 159)",
                    }}
                  >
                    (
                    {Math.round(props.data.price) === 0
                      ? 0
                      : Math.round(
                          ((props.data.price - props.data.offerPrice) /
                            props.data.price) *
                            100
                        )}
                    % off)
                  </span>
                </span>

                <Grid container xs={12}>
                  <Typography
                    variant="body1"
                    component="span"
                    style={{ paddingLeft: "5px" }}
                    className={`${classes.titles}`}
                  >
                    {props.data.title}
                  </Typography>
                </Grid>
                {/* </Hidden> */}
              </Grid>
            </CardContent>
          ) : (
            <CardContent className={classes.cardContent}>
              <Grid
                container
                item
                xs={12}
                className={classes.textPriceCardGrid}
                alignItems="center"
              >
                {/* <Hidden smDown> */}

                {/* </Hidden> */}
                <Hidden smDown>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  className={`${classes.priceClassMain}`}
                >
                  <span
                    variant="h4"
                    component="h4"
                    className={classes.offerMainPrice}
                    style={{
                      // paddingLeft: "5px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    {CurrencyConversion(props.data.offerPrice)}
                    <span
                      // variant="h6"
                      // component="h6"
                      className={classes.offerMainPriceStrike}
                      style={{
                        // width: "100%",
                        fontSize: "12px",
                        paddingLeft: "5px",
                        display: "flex",
                        alignItems: "flex-end",
                        marginBottom: "1px",
                      }}
                    >
                      {/* <i
        
                       className="fa"
                         >
                           &#xf156;
                              </i> */}
                      {/* {Math.round(props.data.offerPrice)} */}

                      {CurrencyConversion(props.data.price)}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "100%",
                        paddingRight: "5px",
                        marginTop: "2px",
                        marginLeft: "5px",
                        color: "rgb(6, 171, 159)",
                      }}
                    >
                      (
                      {Math.round(props.data.price) === 0
                        ? 0
                        : Math.round(
                            ((props.data.price - props.data.offerPrice) /
                              props.data.price) *
                              100
                          )}
                      % off)
                    </span>
                  </span>

                  {/* <Typography
                      style={{
                        width: "100%",
                        justifyContent: "flex-start",
                        display: "flex",
                        marginTop: "4px"
                      }}
                      gutterBottom
                      variant="body1"
                      component="span"
                      className={classes.offerPrice}
                    >



                      <del>

                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(props.data.price))}
                      </del>


                    </Typography> */}
                </Grid>
                <Grid container xs={12}>
                  {/* <Grid item xs={12} className={`${classes.titles}`}> */}
                  <Typography
                    variant="body1"
                    component="span"
                    style={{ color: "#959598" }}
                    className={`${classes.titles}`}
                  >
                    {props.data.title}
                  </Typography>

                  {/* </Grid> */}
                </Grid>
                </Hidden>
                <Hidden mdUp>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  className={`${classes.priceClassMain}`}
                >
                    <Grid container xs={12}>
                  {/* <Grid item xs={12} className={`${classes.titles}`}> */}
                  <Typography
                    variant="body1"
                    component="span"
                    style={{ color: "#959598"}}
                    className={`${classes.titles}`}
                  >
                    {props.data.title}
                  </Typography>

                  {/* </Grid> */}
                </Grid>

                  <span
                    variant="h4"
                    component="h4"
                    className={classes.offerMainPrice}
                    style={{
                      // paddingLeft: "5px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    {CurrencyConversion(props.data.offerPrice)}
                    <span
                      // variant="h6"
                      // component="h6"
                      className={classes.offerMainPriceStrike}
                      style={{
                        // width: "100%",
                        fontSize: "12px",
                        paddingLeft: "5px",
                        display: "flex",
                        alignItems: "flex-end",
                        marginBottom: "1px",
                      }}
                    >
                      {/* <i
        
                       className="fa"
                         >
                           &#xf156;
                              </i> */}
                      {/* {Math.round(props.data.offerPrice)} */}

                      {CurrencyConversion(props.data.price)}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: "100%",
                        paddingRight: "5px",
                        marginTop: "2px",
                        marginLeft: "5px",
                        color: "rgb(6, 171, 159)",
                      }}
                    >
                      (
                      {Math.round(props.data.price) === 0
                        ? 0
                        : Math.round(
                            ((props.data.price - props.data.offerPrice) /
                              props.data.price) *
                              100
                          )}
                      % off)
                    </span>
                  </span>

                  {/* <Typography
                      style={{
                        width: "100%",
                        justifyContent: "flex-start",
                        display: "flex",
                        marginTop: "4px"
                      }}
                      gutterBottom
                      variant="body1"
                      component="span"
                      className={classes.offerPrice}
                    >



                      <del>

                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(props.data.price))}
                      </del>


                    </Typography> */}
                </Grid>
              
                </Hidden>
               

                {/*  */}
                {/* <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={`${classes.priceOffGrid}`}>
    <Grid container item xs={12} alignItems="center" className={`${classes.priceOffGridsub}`}>

    </Grid>


  </Grid> */}
                {/* 

                  <Hidden smDown>
                    <Grid container xs={12}>
                      {/* <Grid item xs={12} className={`${classes.titles}`}> */}
                {/* <Typography variant="body1" */}
                {/* // component="span" style={{ paddingLeft: "5px" }} className={`${classes.titles}`}> */}
                {/* {props.data.title} */}
                {/* </Typography> */}

                {/* </Grid> */}
                {/* </Grid> */}
                {/* </Hidden> */}
                {/* */}
              </Grid>
            </CardContent>
          )}
        </Card>
      </Card>
    </div>
  );
}
