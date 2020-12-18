import React from "react";
import Slideshow from "../../Carousel/carosul";
import { useDummyRequest } from "../../../hooks";
import { HomedataSilver } from "../../../mappers";
import { useStyles } from "./styles.js";
import { Grid, Container, Hidden, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { injectUrl_url_construct } from "common/index";
import { CDN_URL, API_URL } from "config";
import {
  silverStyloriCollections,
  silverStyloriAllMasterCollections,
} from "queries/home";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const ProductModal = (props) => {
  const dataCarousel = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: false,
    arrows: false,
    arrowsImg: true,
    accessibility: true,
    autoplaySpeed: 300000,
    centerMode: false,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    swipe: false,
  };

  const [state, setState] = React.useState({ pagination: 4, isShowMore: true });
  const {
    data: { fadeImagessublist },
    shopByStyloriSilver,
    collectionsData,
    allSeo,
  } = props;

  let _shopByData =
    shopByStyloriSilver &&
    shopByStyloriSilver.length > 0 &&
    shopByStyloriSilver.map((val) => {
      return {
        img: val.image,
        title: val.label,
        description:
          allSeo && allSeo[val.label]
            ? allSeo[val.label].seoText
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
        price: "98.89789",
      };
    });

  const handleCollectionDataMapper = (_collectiondata, fadeImagessublist) => {
    let data = _collectiondata.data;

    console.log(data, "fadeImagessublist data");
    var _keysCollections = Object.keys(data).filter((val) => {
      let tempdata = data[val];
      if (tempdata.nodes.length > 0) return val;
    });

    let _fun = () => {
      let _arr = [];
      _keysCollections.map((val) => {
        let tempdata = data ? data[val] : false;
        if (tempdata && tempdata.nodes.length > 0) {
          let obj = {};

          obj["img"] =
            tempdata.nodes[0].productListByProductId.productImagesByProductId.nodes[0];
          obj["title"] = tempdata.nodes[0].collectionName;
          obj["description"] =
            "Lorem Ipsum is simply dummy text of the printing a…rem Ipsum has been the industry's standard dummy";
          _arr.push(obj);
        }
      });
      return _arr;
    };

    return _fun();
    // let _fun = () => {
    //   let _arr = []
    //   a.map(val=>{
    //   let tempdata = temp1.data[val]
    //   if(tempdata.nodes.length > 0 )
    //   {
    //   tempdata.nodes[0].productListByProductId.productImagesByProductId.nodes.map(val=>{
    //   let obj ={}
    //   if(val) {
    //   obj["img"]=val
    //   obj["collectionName"] = tempdata.nodes[0].collectionName
    //   _arr.push(obj)
    //   }
    //   })
    //   }

    //   })
    //   return _arr
    //   }
  };

  // console.log(collectionsData, collectionsData.constructor === Array,"TTTTTT")
  let collectionData = collectionsData
    ? collectionsData.constructor === Object &&
      Object.keys(collectionsData).length > 0
      ? handleCollectionDataMapper(collectionsData, fadeImagessublist)
      : []
    : false;
  let pagination = collectionData
    ? collectionData.slice(0, state.pagination)
    : collectionData;
  console.log(collectionData, "collectionDatacollectionData");
  let _mapper = collectionData
    ? pagination
    : shopByStyloriSilver
    ? _shopByData
    : fadeImagessublist;
  let _data = _mapper ? _mapper : [];
  const classes = useStyles();
  // alert(JSON.stringify(props.collectionsData))
  // console.log(props.allSeo,"props.allSeoprops.allSeoprops.allSeoprops.allSeo")

  const paginationtoggle = () => {
    if (state.pagination < collectionData.length) {
      setState({
        ...state,
        pagination: state.pagination + 4,
        isShowMore: true,
      });
    } else {
      setState({ ...state, isShowMore: false });
    }
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let ___data = [
    {
      img:
        "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-jewellery-stylori-Everyday.jpg",
      title: "Everyday",
      url: "silver-jewellery-everyday",
      description:
        "Light-weight pieces. Happy designs. It's the perfect dainty jewellery to compliment your everyday outfits. ",
    },
    {
      img:
        "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-jewellery-stylori-Folklore.jpg",
      title: "Folklore",
      url: "silver-jewellery-folklore",
      description:
        "Why blend in when you can stand out? Our line of Oxidised Silver Jewellery is as versatile as you are. Pair it up with a cocktail dress for a girl's night out or with a plain kurta for a friend's Mehendi ceremony. These statement pieces will get you the attention you deserve. ",
    },
    {
      img:
        "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-jewellery-stylori-Contemporary.jpg",
      title: "Contemporary",
      url: "silver-jewellery-contemporary",
      description:
        "Modern jewellery for the modern woman. Geometric shapes, minimal aesthetics and unique colours make these statement pieces a woman’s new best friend. ",
    },
    {
      img:
        "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-jewellery-stylori-Traditional.jpg",
      title: "Traditional",
      url: "silver-jewellery-traditional",
      description:
        "Dress up without being weighed down. Whether you are a modern bride or the bride's best friend, these pieces will let you make the most of the event. The Traditional style retains classic Indian designs but re-imagines it with pure silver. ",
    },
  ].map((val) => {
    return {
      img: val.img,
      title: val.title,
      description: val.description,
      url: val.url,
    };
  });
  let mapped_ = props.homepagecollections ? _data : ___data;
  return (
    <>
      <Grid container className={classes.containerTop} justify="center">
        {mapped_.map((tile) => {
          // debugger
          return (
            // tile.constructor === Array &&
            tile &&
              ((tile.constructor === Object && tile?.img?.imageUrl) ||
                tile?.img?.length > 0) ? (
              <Grid
                //  container
                item
                xs={props?.layout ? props.layout : 12}
                sm={5}
                md={5}
                lg={5}
                xl={5}
                className={`${
                  shopByStyloriSilver ? classes.shopBySilver : "ProductGrids"
                } ${classes.ProductGrids}`}
                // justify={"center"}
                // onClick={() => window.location.href = tile.url}
                style={{ cursor: "pointer" }}
              >
                {/* <Grid item xs={10} sm={10} md={8} lg={12} xl={12}> */}
                <Hidden smDown>
                  <Slideshow
                    class="subslider-carousel"
                    dataCarousel={dataCarousel}
                    hoverlist={[tile]}
                    hover={false}
                    Homepagefont={true}
                    hovereffect={true}
                    // isInjectUrl={true}
                    type="hover"
                    // collectionDataSilverSEO={allSeo}
                  />
                </Hidden>
                <Hidden mdUp>
                  {shopByStyloriSilver ? (
                    <Slideshow dataCarousel={dataCarousel}>
                      {tile.img.map((val, index) => (
                        <>
                          <Grid container key={index} className={classes.media}>
                            <a
                              href={`/silver-jewellery`}
                              style={{ width: "100%" }}
                            >
                              <img
                                src={injectUrl_url_construct(val)}
                                style={{ width: "100%", height: "100%" }}
                                onError={(e) => {
                                  e.target.src = `${CDN_URL}product/575X575/productnotfound.jpg`;
                                }}
                                alt="Stylori"
                              />
                            </a>
                          </Grid>
                          {/* <Hidden mdUp>
                  <Grid container key={index}   className={classes.media}>
                    <a href={val.navigateUrl}>
                      <img
                        src={val.mobileImg}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </Grid>
                </Hidden> */}
                        </>
                      ))}
                    </Slideshow>
                  ) : (
                    <Slideshow
                      class="subslider-carousel"
                      hoverlist={tile}
                      dataCarousel={dataCarousel}
                      WithoutHoverhover={true}
                      type="hover"
                      // isInjectUrl={true}
                    />
                  )}

                  {!Boolean(props.isShowDetails) && (
                    <ExpansionPanel
                      className={classes.expandCollapse}
                      expanded={expanded === tile.title}
                      onChange={handleChange(tile.title)}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Grid
                          container
                          item
                          xs={12}
                          justify="center"
                          className={
                            shopByStyloriSilver
                              ? classes.productCardTitle2
                              : classes.productCardTitle
                          }
                          style={{ textAlign: "center", marginTop: 5 }}
                        >
                          {tile.title.toUpperCase()}
                        </Grid>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid
                          container
                          item
                          xs={12}
                          alignContent="space-between"
                          justify="center"
                          className={classes.productCardDetail}
                        >
                          <Grid
                            container
                            item
                            xs={12}
                            className={
                              shopByStyloriSilver
                                ? `${classes.productCardDescription2}`
                                : `${classes.productCardDescription}`
                            }
                          >
                            {/* {collectionsData || allSeo
                                ? allSeo[tile.title]
                                  ? allSeo[tile.title].seoText
                                  : ""
                                : tile.description} */}
                            {tile.description}
                          </Grid>
                          <Grid container item xs={12} justify="center">
                            <a
                              href={
                                // collectionsData
                                //   ? props.allSeo[tile.title]
                                //     ? `/jewellery-${
                                //         props.allSeo[tile.title].seoUrl
                                //       }`
                                //     : "#"
                                //   : `/silver-${tile.title.toLowerCase()}-jewellery`
                                // collectionsData || allSeo
                                //   ? allSeo[tile.title]
                                //     ? `/${allSeo[tile.title].seoUrl}`
                                //     : "#"
                                //   :
                                `/silver-${tile.title.toLowerCase()}-jewellery`
                              }
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="contained"
                                style={{ color: "white" }}
                                color="primary"
                                className={
                                  shopByStyloriSilver
                                    ? `${classes.btnshop2}`
                                    : ""
                                }
                              >
                                SHOP
                              </Button>
                            </a>
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
                </Hidden>

                {/* </Grid> */}
              </Grid>
            ) : null
          );
        })}
      </Grid>
      {props.isPagination && state.isShowMore && (
        <Grid
          container
          item
          xs={12}
          justify="center"
          style={{ padding: "20px" }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              paginationtoggle();
            }}
          >
            View more Collections
          </Button>
        </Grid>
      )}
    </>
  );
};
export default (props) => {
  const { mapped } = useDummyRequest(HomedataSilver);
  if (Object.keys(mapped).length === 0) return "";
  return (
    <ProductModal
      {...props}
      data={mapped}
      collectionsData={props.data}
      allSeo={props.allSeo}
    />
  );
};
