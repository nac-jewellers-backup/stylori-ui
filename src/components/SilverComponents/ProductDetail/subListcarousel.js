import {
  Container,
  Grid,
  Hidden,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import './product-images.css'
import Slideshow from '../../Carousel/carosul'
class Sublistcarousel extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }
  state = {
    value: 0,
    valuse: 0,
    values: 0,
    expanded: null,
    dataToShow: "YouMayLike"
  }


  handle = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };


  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };
  render() {
    const limit = 4;
    const { expanded } = this.state;
    const { data } = this.props;
    const mobiledataCarousel = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    }

    const dataCarousel = {
      arrows: false,
      dots: false,
      infinite: true,
      accessibility: true,
      speed: 500,
      slidesToShow: this.state.dataToShow === "YouMayLike" ? data && data[0] && data[0].fadeImageSublist.length > 4 ? limit : data && data[0] && data[0].fadeImageSublist.length :
        data && data[0] && data[0].fadeImageSublistRecentlyViewed.length > 4 ? limit : data && data[0] && data[0].fadeImageSublistRecentlyViewed.length
      ,
      slidesToScroll: 4,
    }
    // this.state.dataToShow==="YouMayLike" ? data[0].fadeImageSublist : data[0].fadeImageSublistRecentlyViewed
    return (
      <div>
        <Hidden smDown>
          <div className="back_img">
            <div className='like-and-recently'>
              <Grid container spacing={12}>
                <Grid item xs={6} className={`${'like-page'} ${this.state.dataToShow === 'YouMayLike' ? 'recenetly-like-page-active' : ''}`} ><span onClick={() => this.setState({ dataToShow: 'YouMayLike' })}>You may also like</span></Grid>
                <Grid item xs={6} className={`${'recenetly-like-page'} ${this.state.dataToShow === 'YouRecentlyViewed' ? 'recenetly-like-page-active' : ''}`} ><span onClick={() => this.setState({ dataToShow: 'YouRecentlyViewed' })}>You recently viewed</span></Grid>
              </Grid>
            </div> <div className='sub-carousel-head'>
              <Container maxWidth='md'>
                {this.state.dataToShow === "YouMayLike" && data && data[0] && data[0].fadeImageSublist.length < 0 || this.state.dataToShow === "YouRecentlyViewed" && data && data[0] && data[0].fadeImageSublistRecentlyViewed.length === 0 ?

                  <span className="NoProducts">{this.state.dataToShow === "YouMayLike" ? "No products found" : "No products viewed yet"}</span>
                  :
                  <Grid container style={{ width: "100%" }} >
                    <Grid item style={{ width: "6%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                      <img onClick={() => this.previous()} className={"icon-leftcaro"} />

                    </Grid>
                    <Grid item style={{ width: "88%" }}>
                      <Slideshow sliderRef={this.slider} class="subslider-carousel" hoverlist={
                        this.state.dataToShow === "YouMayLike" ? data && data[0] && data[0].fadeImageSublist : data && data[0] && data[0].fadeImageSublistRecentlyViewed
                      }
                        dataCarousel={dataCarousel} hover={true} imagecra={true}>
                      </Slideshow>
                    </Grid>
                    <Grid item style={{ width: "6%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                      <img onClick={() => this.next()} className={"icon-rightcaro"} />

                    </Grid>
                  </Grid>
                }
              </Container>
            </div>
          </div>

        </Hidden>
        <Hidden mdUp>
          <Container>
            <ExpansionPanel style={{ boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)", padding: "0 5px" }} expanded={expanded === 'panel'} onChange={this.handle('panel')}>
              <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                <i class="fa fa-sort-up" ></i></span>}>
                <div style={{ width: "100%" }} >
                  <Typography className="subtabs-smrt">You may also like</Typography>
                  {/* <hr class="bottom-line border-line-"></hr> */}
                </div>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails >
                <div style={{ width: "100%" }}> 
                  <Slideshow class={` ${data && data[0] && data[0].fadeImageSublist ? 'subslider-carousel ' : "shine"}`}
                    hoverlist={data && data[0] && data[0].fadeImageSublist}
                    dataCarousel={mobiledataCarousel} hover={true}>
                  </Slideshow>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel><br />
          </Container>

        </Hidden >
      </div>
    );
  }
};
Sublistcarousel.propTypes = {
  handle: PropTypes.func,
};

export default Sublistcarousel;
