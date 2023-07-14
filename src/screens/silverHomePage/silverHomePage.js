import { Grid, Hidden } from "@material-ui/core";
import { BannerComponent } from "components/BannerComponent";
import Footer from "components/Footer/Footer";
import NeedHelp from "components/needHelp";
import Header from "components/SilverComponents/Header";


import SilverFooter from "components/SilverComponents/SilverFooter";
import { SilverStyloriTitle } from "components/silverStyloriTitle";
import { StylesCard } from "components/stylesCard";
import { StylesCardPrice } from "components/stylesCardPrice";
import { StyloriInstagramPost } from "components/styloriInstagramPost";
import StyloriSilver from "components/styloriSilverComp/styloriSilverComp";
import { StyloriSilverStore } from "components/styloriSilverStore";
import TestimonialComp from "components/testimonialComp/testimonialComp";
import {
  bestSellers,
  bestSellersTitle,
  instagramPost,
  instagramTitle,
  shopByFinish,
  shopByFinishTitle,
  silverBannerJson,
  silverYarnsJson,
  silverYarnsTitle,
  starSpottingJson,
  starSpottingTitle,
  storeCompJson,
  storeTitle,
  stylesCardJson,
  stylesTitle,
  styloriSilverJson,
  testimonialJson,
  testimonialTitle,
} from "mappers/dummydata/silverHomePageData";
import React from "react";
import { Navbar } from "./navbar";

const testimonialSettings = {
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

const SilverHomePage = () => {
  return (
    <>
      <Navbar />

      <BannerComponent
        arrows={false}
        custom
        banners={silverBannerJson?.props?.banners}
        dataCarousel={
          silverBannerJson?.props?.banners.length > 1 ? "multiple" : "single"
        }
      />

      <StyloriSilver data={styloriSilverJson?.props} />

      <SilverStyloriTitle data={stylesTitle?.props} />

      <StylesCard data={stylesCardJson?.props?.cardContent} />

      <SilverStyloriTitle data={bestSellersTitle?.props} />

      <StylesCard data={bestSellers?.props?.cardContent} price />

      <SilverStyloriTitle data={starSpottingTitle?.props} />

      <BannerComponent
        arrows={false}
        custom
        banners={starSpottingJson?.props?.banners}
        dataCarousel={
          starSpottingJson?.props?.banners.length > 1 ? "multiple" : "single"
        }
      />

      <SilverStyloriTitle data={testimonialTitle?.props} />

      <TestimonialComp
        dataCarousel={testimonialSettings}
        data={testimonialJson?.props?.cardContent}
      />

      <SilverStyloriTitle data={shopByFinishTitle?.props} />

      <StylesCardPrice data={shopByFinish?.props?.cardContent} />

      <SilverStyloriTitle data={storeTitle?.props} />

      <StyloriSilverStore data={storeCompJson?.props} noButton />

      <SilverStyloriTitle data={instagramTitle?.props} subText />

      <StyloriInstagramPost data={instagramPost?.props?.cardContent} />

      <SilverStyloriTitle data={silverYarnsTitle?.props} subText />

      <StyloriSilverStore data={silverYarnsJson?.props} reverse />

      <Grid item xs={12}>
        <Hidden smDown>
          <Footer silver={true} />
        </Hidden>
        <Hidden mdUp>
          <SilverFooter />
        </Hidden>
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
    </>
  );
};

export default SilverHomePage;