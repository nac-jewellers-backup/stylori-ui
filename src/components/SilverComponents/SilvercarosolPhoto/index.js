import React, { useEffect } from "react";
import Slideshow from "../../Carousel/carosul";
import { useDummyRequest } from "../../../hooks";
import { HomedataSilver } from "../../../mappers";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { useStyles } from "./style.js";
import { GlobalContext } from "context";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { API_URL } from "../../../config";
import { ALLSTYLORISILVERLANDINGBANNERS } from "queries/home";

const SilverCarousel = (props) => {
  const dataCarousel = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
  };
  const { carouselTop } = props.data;
  const [state, setState] = React.useState([]);
  const classes = useStyles();
  // debugger;
  // console.log(props);
  useEffect(async () => {
    function fetchBanner() {
      fetch(`${API_URL}/graphql`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          query: ALLSTYLORISILVERLANDINGBANNERS,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          let datas = data.data.allStyloriSilverBanners.nodes;

          datas.sort((a, b) => parseFloat(a.position) - parseFloat(b.position));
          return setState(datas);
        });
    }
    fetchBanner();
  }, []);
  return (
    <Grid container xs={12} style={{paddingTop:"13px"}}>
      <Helmet>
        <meta property="og:title" content="Stylori Silver - Silver Jewellery" />
        <meta name="description" property="og:description" content={carouselTop[0].content} />{" "}
        <meta property="og:type" content="Stylori Website" />
        <meta property="og:image" content={carouselTop[0].images[0].img} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Stylori" />
        <meta name="twitter:title" content="Stylori Silver - Silver Jewellery"></meta>
        <meta name="twitter:description" content={carouselTop[0].content}></meta>
        <meta name="twitter:image" content={carouselTop[0].images[0].img}></meta>
        <meta name="twitter:site" content="@StyloriSilver"></meta>
        <meta name="twitter:creator" content="@StyloriSilver"></meta>
        <link rel="canonical" href="https://stylori.com" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        {/* <meta
            name="keywords"
            content={this.props.data[0].titleContiner}
          /> */}
      </Helmet>

      <Grid item xs={12} className={window.location.pathname === "/styloriSilver" ? classes.backgroundImageColor : ""}>
        <Hidden mdUp>
          <Slideshow dataCarousel={carouselTop[0].settings}>
            {state.map((val, index) => (
              <a href={`${val.url} `}>
                <Grid container>
                  <LazyLoadImage loading="lazy" src={val.mobile} alt="Stylori" style={{ width: "100%", height: "100%" }} />
                  {/* <img
                    loading="lazy"
                    src={val.mobileImg}
                    alt="Stylori"
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                </Grid>
              </a>
            ))}
          </Slideshow>
        </Hidden>
        <Hidden smDown>
          <Slideshow dataCarousel={carouselTop[0].settings}>
            {state.map((val, index) => (
              <a href={`${val.url} `}>
                <Grid container>
                  <LazyLoadImage loading="lazy" src={val.web} style={{ width: "100%", height: "100%" }} />

                  {/* <img
                    loading="lazy"
                    src={val.img}
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                </Grid>
              </a>
            ))}
          </Slideshow>
        </Hidden>
      </Grid>
      <Grid
        item
        xs={12}
        className={`${props.collectionsPageSilver ? `${classes.seoText} ${classes.seoTextNobackground}` : classes.seoText}`}
      >
        <Hidden smDown>
          <Typography className={classes.TypoGraphy}>{carouselTop[0].content}</Typography>
        </Hidden>
        {/* <Hidden smUp>
       <Gadgets isSilver={props.isSilver}/>
        </Hidden> */}
      </Grid>
    </Grid>
  );
};
export default (props) => {
  const { mapped } = useDummyRequest(HomedataSilver);
  const { Globalctx } = React.useContext(GlobalContext);

  const _isSilver = Globalctx.pathName ? true : false;
  if (Object.keys(mapped).length === 0) return "";
  return <SilverCarousel {...props} data={mapped} isSilver={_isSilver} />;
};
