import React from "react";
import Header from "components/SilverComponents/Header";
// import Header from "components/SilverComponents/Header";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import { homePageStylori } from "./dummydatahome";
import MediaCard from '../components/storyTemplate/educationcard';
// import { withStyles } from '@material-ui/core/styles';
import SocialLinkFrame from '../components/storyTemplate/socialLinkFrame';
// import Pagination from '../components/storyTemplate/pagination';
// const styles = (theme)=>({
//   flexContainer:{
// display:"flex",
// flexFlow:"row wrap"
//   }
// })

class StoryBlock extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    // const { classes } = this.props;
    return (
      <Grid container>

        <Header />
        <Grid item xs={12}>
          <Slideshow
            sliderRef={this.slider}
            dataCarousel={homePageStylori.carouselTop.setting}
          >
            {homePageStylori.carouselTop.data.map((val, index) => (
              <><Hidden smDown>
                <Grid container key={index}>
                  <a href={val.navigateUrl}>
                    <img
                      src={val.img}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
                <Hidden mdUp>
                  <Grid container key={index}>
                    <a href={val.navigateUrl}>
                      <img
                        src={val.mobileImg}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </Grid>
                </Hidden></>
            ))}
          </Slideshow>
        </Grid>
        <Grid container style={{ maxWidth: "1170px", margin: "auto" }}>
          <Grid item md={12} style={{ marginTop: "12px", padding: "10px 0 10px 10px" }}>
            <Typography component="a" onClick={() => { window.location.href = "/stories" }} className={window.location.pathname === "/stories" ? "selectedTab" : "storiesData"}>Stories</Typography>
            <Typography onClick={() => { window.location.href = "/education" }} component="a" className={window.location.pathname === "/education" ? "selectedTab" : "storiesData"}>Education</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <MediaCard />
          </Grid>
          <Grid item style={{ width: "100%" }}  xs={"hidden"} sm={"hidden"} md={4}>
            <Hidden smDown>
              <SocialLinkFrame />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <StoryBlock />;
  return content;
};

export default withRouter(Components);
