import React, { useEffect, useState } from "react";
import Header from "components/SilverComponents/Header";
import { API_URL } from "config";
import { CMS_PAGES } from "queries/cms";
import { BannerComponent } from "components/BannerComponent";
import HomePageImageCollection from "components/homePageImageCollection/homePageImageCollection";
import { HomePageIcons } from "components/homePageIcons.js";
import { HomePageTestimonial } from "components/homePageTestimonial";
import { HomePageStories } from "components/homePageStories";
import { Grid, Hidden } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import StaticView from "components/Feedes/Index";
import CollectionItem from "components/collectionCMS/CollectionItem";
import { StyloriSilver } from "components/styloriSilverComp";
import { SilverStyloriTitle } from "components/silverStyloriTitle";
import { StylesCard } from "components/stylesCard";
import { StylesCardPrice } from "components/stylesCardPrice";
import { TestimonialComp } from "components/testimonialComp";
import { StyloriSilverStore } from "components/styloriSilverStore";
import { StyloriInstagramPost } from "components/styloriInstagramPost";
import SilverFooter from "components/SilverComponents/SilverFooter";
import CareersAccordianComp from "components/careersPage/careerAccordianComp";
import CareersHeaderComp from "components/careersPage/careerHeader";
import { Navbar } from "screens/silverHomePage/navbar";
import Login from "components/SilverComponents/login";
import DesktopFooter from "components/SilverComponents/DesktopFooter";
import CMSfaqs from "components/CMSfaqs";
import CMSfaqss from "components/faqss";
import { BlogImageCard } from "components/BlogImageCard";
import { Title } from "containers/title";
import StyloriYarnsCMS from "components/CMSyarns";
import { INSTA_ID } from "config";
import { INSTA_TOKEN } from "config";


const iconsSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  fade: false,
  dots: false,
  autoplaySpeed: 5000,
  arrows: false,
  arrowsImg: false,
};

const testimonialsSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  fade: false,
  autoplaySpeed: false,
  arrows: false,
  accessibility: true,
  centerMode: false,
  focusOnSelect: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  pauseOnFocus: true,
  swipe: false,
};

const storiesSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  fade: false,
  autoplaySpeed: false,
  arrows: false,
  accessibility: true,
  centerMode: false,
  focusOnSelect: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  pauseOnFocus: true,
  swipe: false,
};

const CMSPages = (props) => {
  const [state, setState] = useState([]);
  const [login, setLogin] = useState(true);

  // Title comp show and hide
  const [showCard, setShowCard] = useState(false);

  const showTitle = () => {
    setShowCard(!showCard);
  };

  const isSilver =
    props.globalContext &&
    props.globalContext.Globalctx &&
    props.globalContext.Globalctx.pathName &&
    props.globalContext.Globalctx.pathName
      ? props.globalContext.Globalctx.pathName
      : false;

  const handleCloseLogin = () => {
    setLogin(false);
  };

  const getUrl = () => {
    if (window.location.pathname === "/") {
      return "home";
    } else {
      return window.location.pathname.split("/")[1];
    }
  };

  const getInsta = async() => {
    await fetch(`https://graph.instagram.com/v16.0/${INSTA_ID}/media?fields=id,caption,media_type,media_url,permalink&access_token=${INSTA_TOKEN}}`)
    .then((response) => response.json())
    .then((json) => {
        const recievedImages = json?.data?.filter((val) => val?.media_type === "IMAGE").slice(0,6);
        localStorage.setItem("instapost",JSON.stringify(recievedImages))
    });
  }

  useEffect(() => {
    getInsta();
    const url = getUrl();
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CMS_PAGES(url),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.cdnByPage.data) {
          const dataRecieved = JSON.parse(data.data.cdnByPage.data);
          console.log("dataRecieved",dataRecieved);
          if (data.data.cdnByPage.isActive) {
            setState(dataRecieved);
          }
        }
      });
  }, [window.location.pathname]);
  console.log(window.location.pathname,"window.location.pathname")

  const handleComponents = (val) => {
    switch (val.component) {
      case "HomePageBanner": {
        return (
          <BannerComponent
            arrows={val?.props?.banners.length > 1 ? true : false}
            custom
            banners={val?.props?.banners}
            dataCarousel={
              val?.props?.banners.length > 1 ? "multiple" : "single"
            }
          />
        );
      }
      case "bannerComponent": {
        return (
          <BannerComponent
            arrows={val?.props?.banners.length > 1 ? "multiple" : "single"}
            custom
            banners={val?.props?.banners}
            dataCarousel={
              val?.props?.banners.length > 1 ? "multiple" : "single"
            }
          />
        );
      }
      case "careersComponent": {
        return <CareersAccordianComp data={val?.props} />;
      }
      case "careerHeader": {
        return <CareersHeaderComp data={val?.props} />;
      }
      case "HomePageIconsList": {
        return (
          <HomePageIcons
            dataCarousel={iconsSettings}
            data={val?.props?.cardContent}
          />
        );
      }
      case "CollectionCardData": {
        return (
          <Grid Container className="GridConatiner">
            <Grid item className="GridListImg">
              <HomePageImageCollection GridImage={val?.props?.collectionGrid} />
            </Grid>
          </Grid>
        );
      }
      case "CollectionJewelleryData": {
        return (
          <Grid Container className="GridConatiner">
            <Grid item className="GridListImg">
              <HomePageImageCollection
                jewelleryCollection
                GridImage={val?.props?.jewelleryGrid}
              />
            </Grid>
          </Grid>
        );
      }
      case "TestimonialCard": {
        return (
          <div style={{ marginBottom: "20px" }}>
            <HomePageTestimonial
              dataCarousel={testimonialsSettings}
              carosolData={val?.props?.cardContent}
            />
          </div>
        );
      }
      case "StoriesCard": {
        return (
          <HomePageStories
            dataCarousel={storiesSettings}
            carosolData={val?.props?.storiesData}
          />
        );
      }
      case "socialMedia": {
        return (
          <Hidden smDown>
            <StaticView />
          </Hidden>
        );
      }

      case "titleComp": {
        return !showCard && <Title title={val?.props?.title} />;
      }

      case "blogPageCard": {
        return (
          // <BlogImageCard
          //   value={val?.props?.cardContent}
          //   handleShow={showTitle}
          // />
          <StyloriYarnsCMS value={val?.props?.cardContent} />
        );
      }

      case "collectionCarouselCardComponent": {
        return <CollectionItem data={val?.props} />;
      }
      case "StyloriSilver": {
        return <StyloriSilver data={val?.props} />;
      }
      case "StyloriTitle": {
        return <SilverStyloriTitle data={val?.props} />;
      }
      case "StyloriCard": {
        return (
          <StylesCard
            data={val?.props?.cardContent}
            type={val?.type ? val?.type : null}
          />
        );
      }
      case "StyloriCardPrice": {
        return <StylesCardPrice data={val?.props?.cardContent} />;
      }
      case "TestimonialSlider": {
        return <TestimonialComp data={val?.props?.cardContent} />;
      }
      case "StyloriStore": {
        return (
          <StyloriSilverStore
            name={val?.component}
            data={val?.props}
            reverse
            noButton
          />
        );
      }
      case "StyloriYarns": {
        return <StyloriSilverStore name={val?.component} data={val?.props} />;
      }
      case "InstagramPost": {
        return <StyloriInstagramPost data={val?.props?.cardContent} />;
      }
      case "faqComponent": {
        return <CMSfaqs data={val} state={state} />;
      }

      case "faqComponents": {
        return <CMSfaqss data={val} state={state} />;
      }

      case "SocialMedia":{
        return <StaticView />
      }

      default: {
        return;
      }
    }
  };

  return (
    <div>
      {/* {window.location.pathname.split("/")[1] === "styloriSilver" ? <Navbar /> : <Header />} */}
      <Header />
      {state.map((val) => {
        return handleComponents(val);
      })}
      <Grid item xs={12}>
        <Hidden smDown>
          {/* <Footer silver={window.location.pathname.split("-")[1] === "styloriSilver" ? true :false}  /> */}
          {window.location.pathname.split("/")[1] === "styloriSilver" ? (
            <DesktopFooter />
          ) : (
            <Footer />
          )}
        </Hidden>
        <Hidden mdUp>
          <SilverFooter />
        </Hidden>
      </Grid>
      {window.location.pathname === "/" &&
        !localStorage.getItem("accessToken") && (
          <Login open={login} handleClose={handleCloseLogin} />
        )}
      {/* {(!localStorage.getItem("accessToken")) &&
          <Login open={login} handleClose={handleCloseLogin} />
        } */}
    </div>
  );
};

export default CMSPages;
