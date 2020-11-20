import React from "react";
import { Container, Grid, Hidden } from "@material-ui/core";
import Title from "../ProductTitle";
import { TopPicksGridComponent } from "../TopPicksGridComponent/index";
import { useDummyRequest } from "../../../hooks";
import { HomedataSilver } from "../../../mappers";
import { FeaturedGridComponent } from "../FeaturedGridComponent";
import Testimonialsmodel from "../TestimonialModel";
import { useStyles } from "./style.js";
import GridList from "components/GridList/GridList";
import { silverStyloriHomepage } from "queries/home";
import { API_URL } from "../../../config";
import { Slideshow } from "components";
import { Diversestyles } from "components/product-image-slider/Gagetstylori/Diversestyles-pink";
import { Certified } from "components/product-image-slider/Gagetstylori/Certified";
import { Fromthehouseofnac } from "components/product-image-slider/Gagetstylori/Fromthehouseofnac-pink";
import { Hypoallergenic } from "components/product-image-slider/Gagetstylori/Hypoallergenic-pink";
import { Securepayments } from "components/product-image-slider/Gagetstylori/Securepayments-pink";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const MultipleSections = (props) => {
  const {
    titleContiner,
    TopPicksimages,
    FeaturedCarousel,
    testimonyCarousel,
    collectionGrid,
  } = props.data;

  const classes = useStyles();
  const mobiledataCarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: (
      <ArrowLeftIcon style={{ fill: "rgb(6, 171, 159)", fontSize: "1.7rem" }} />
    ),
    nextArrow: (
      <ArrowRightIcon
        style={{ fill: "rgb(6, 171, 159)", fontSize: "1.7rem" }}
      />
    ),
  };
  return (
    <Grid container className={classes.containerTop}>
      {titleContiner.map((title) => {
        return (
          <>
          <>
            {title == "TESTIMONIALS" && (
              
                <Hidden mdUp>
                {props?.isGadgets && (
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
                </Hidden>
            )}
                <Title title={title} isSilver={true} />
              </>
            {title == "TOP PICKS" && (
              <GridList GridImage={collectionGrid} isHover={props.isHover} {...props}/> 
            )}
            {title == "FEATURED" && (
              <FeaturedGridComponent data={FeaturedCarousel} />
            )}

            {title == "TESTIMONIALS" && (
              <>
                <Testimonialsmodel
                  data={testimonyCarousel}
                  testimonyCarousel={props.testimonyCarousel}
                  dataactual={props.customerReviews}
                />
              </>
            )}
          </>
        );
      })}
    </Grid>
  );
};

export default (props) => {
  const [state, setState] = React.useState({ data: [], testimonyCarousel: [] });
  React.useEffect(() => {
    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }

    function json(response) {
      return response.json();
    }
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: silverStyloriHomepage,
      }),
    })
      .then(status)
      .then(json)
      .then((data) => {
        setState({ ...state, data: data });
      });
  }, []);
  const mapperData = (data) => {
    const _stateMapper =
      data &&
      data.data &&
      data.data.allCustomerReviews &&
      data.data.allCustomerReviews.nodes.length > 0 &&
      data.data.allCustomerReviews.nodes
        ? data.data.allCustomerReviews.nodes
        : [];

    if (_stateMapper && _stateMapper.length > 0) {
      return [0, 1].map((val) => ({
        Content:
          "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        name: "Selvan",
        location: "Chennai",
      }));
    } else {
      return [{}];
    }
  };
  const testimonyCarousel = [
    {
      settings: {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        fade: false,
        arrows: false,
        dotsClass: "featureCarousel",
      },
      images: mapperData(state.data),
    },
  ];
  React.useState(() => {
    setState({ ...state, testimonyCarousel });
    // console.log(state.data,"vada mapala")
  }, [state.data]);

  const { mapped } = useDummyRequest(HomedataSilver);
  if (Object.keys(mapped).length === 0) return "";

  return (
    <MultipleSections
      {...props}
      data={mapped}
      testimonyCarousel={state.testimonyCarousel}
    />
  );
};
