import React from "react";
import Header from "components/Header/header";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";
import "index.css";
import Slideshow from "../components/Carousel/carosul";
import { homePageStylori } from "./dummydatahome";
import MediaCard from '../components/storyTemplate/educationcard';
import { withStyles } from '@material-ui/core/styles';
import SocialLinkFrame from '../components/storyTemplate/socialLinkFrame';
import PaginacionTabla from '../components/storyTemplate/pagination';
// const styles = (theme)=>({
//   flexContainer:{
    // display:"flex",
    // flexFlow:"row wrap"
//   }
// })

class StoryBlock extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { classes }  = this.props;
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
         <Grid item md={12} style={{marginTop:"12px"}}>
           <Typography component="a" style={{color:"#394578",padding:"20px 0 20px 20px"}}>Stories</Typography>
           <Typography component="a" style={{color:"#394578",padding:"20px 0 20px 20px"}}>Education</Typography>
         </Grid>
         <Grid item xs={12} sm={12} md={8}>
              <MediaCard />
              {/* <Grid container style={{background:"#ccc"}}>
                  {
                    dummy.map(data=>{
                    return<Grid item style={{  width: "40px",border: "1px solid red",display:"flex",justifyContent:"center",margin:"15px 0", height: "36px",alignItems:"center"}}>{data.a}</Grid>
                    })
                  }
              </Grid> */}
         </Grid>
         <Grid item  style={{width:"100%"}} item xs={"hidden"} sm={"hidden"} md={4}>
           <Hidden smDown>
           <SocialLinkFrame />
           </Hidden>
         </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <StoryBlock/>;
  return content;
};

export default withRouter(Components);
