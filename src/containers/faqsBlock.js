import React from "react";
import Header from "components/Header/header";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import { homePageStylori } from "./dummydatahome";


class FaqsBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ position: "sticky", top: "0", zIndex: "1000" }}
        >
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Slideshow
            sliderRef={this.slider}
            dataCarousel={homePageStylori.carouselTop.setting}
          >
            {homePageStylori.carouselTop.data.map((val, index) => (
              <Grid container key={index}>
                  <img
                    src={val.img}
                    style={{ width: "100%", height: "100%" }}
                  />
              </Grid>
            ))}
          </Slideshow>
</Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <FaqsBlock/>;
  return content;
};

export default withRouter(Components);
