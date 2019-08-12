import {
  Container,
  Grid,
  Hidden,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import fade from './producthoverData'
import PropTypes from 'prop-types';
import React from 'react';
import './product-images.css'
import Slideshow from '../Carousel/carosul'

class Sublistcarousel extends React.Component {
  state = {
    value: 0,
    expanded: null,
  }


  handle = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };


  render() {
    const { expanded } = this.state;


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
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    }
    return (
      <div>
        <Hidden smDown>
          <div className='like-and-recently'>
            <Grid container spacing={12}>
              <Grid item xs={6} className="like-page"><span>You may also like</span></Grid>
              <Grid item xs={6} className="recenetly-like-page"><span >You recently viewed</span></Grid>
            </Grid>
          </div> <div className='sub-carousel-head'>
            <Container maxWidth='md'>
              <Slideshow class="subslider-carousel" hoverlist={fade.fadeImagessublist}
                dataCarousel={dataCarousel} hover={true} >
              </Slideshow>
            </Container>
          </div>
        </Hidden>
        <Hidden mdUp>
          <Container>
            <ExpansionPanel expanded={expanded === 'panel'} onChange={this.handle('panel')}
              style={{ boxShadow: "none", backgroundColor: "none" }}>
              <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                <i class="fa fa-sort-up" ></i></span>}>
                <div style={{ width: "100%" }} >
                  <Typography className="subtabs-smrt">You may also like</Typography>
                  <hr class="bottom-line border-line-"></hr>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails >
                <div style={{ width: "100%" }}>
                  <Slideshow class={` ${fade.fadeImagessublist ? 'subslider-carousel ' : "shine"}`}
                    hoverlist={fade.fadeImagessublist}
                    dataCarousel={mobiledataCarousel} hover={true}>
                  </Slideshow>
                </div>

              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Container>
        </Hidden>
      </div>
    );
  }
};
Sublistcarousel.propTypes = {
  render: PropTypes.func,
};

export default Sublistcarousel;