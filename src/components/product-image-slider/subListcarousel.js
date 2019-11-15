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
import Slideshow from '../Carousel/carosul'
class Sublistcarousel extends React.Component {
  state = {
    value: 0,
    valuse: 0,
    values: 0,
    expanded: null,
    dataToShow:"YouMayLike"
  }


  handle = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
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
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.dataToShow === "YouMayLike" ? data[0].fadeImageSublist.length > 4 ? limit : data[0].fadeImageSublist.length  :
      data[0].fadeImageSublistRecentlyViewed.length > 4 ? limit : data[0].fadeImageSublistRecentlyViewed.length
      ,
      slidesToScroll: 4,
    }
    // this.state.dataToShow==="YouMayLike" ? data[0].fadeImageSublist : data[0].fadeImageSublistRecentlyViewed
    console.info('vadamapla_objectu',data[0].fadeImageSublist)
    return (
      <div>
        <Hidden smDown>
          <div className='like-and-recently'>
            <Grid container spacing={12}>
              <Grid item xs={6} className={`${'like-page'} ${this.state.dataToShow==='YouMayLike' ?'recenetly-like-page-active' :''}`} ><span onClick={()=>this.setState({dataToShow:'YouMayLike'})}>You may also like</span></Grid>
              <Grid item xs={6} className={`${'recenetly-like-page'} ${this.state.dataToShow==='YouRecentlyViewed' ?'recenetly-like-page-active' :''}`} ><span onClick={()=>this.setState({dataToShow:'YouRecentlyViewed'})}>You recently viewed</span></Grid>
            </Grid>
          </div> <div className='sub-carousel-head'>
            <Container maxWidth='md'>
            { this.state.dataToShow==="YouMayLike" && data[0].fadeImageSublist.length<0 || this.state.dataToShow==="YouRecentlyViewed" && data[0].fadeImageSublistRecentlyViewed.length<0 ? 
            
            <span>No products found </span>
            :
             <Slideshow class="subslider-carousel" hoverlist={
              this.state.dataToShow==="YouMayLike" ? data[0].fadeImageSublist : data[0].fadeImageSublistRecentlyViewed
              }
                dataCarousel={dataCarousel} hover={true} >
              </Slideshow>}
            </Container>
          </div>

        </Hidden>
        <Hidden mdUp>
          <Container>
            <ExpansionPanel style={{boxShadow:"none"}} expanded={expanded === 'panel'} onChange={this.handle('panel')}>
              <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                <i class="fa fa-sort-up" ></i></span>}>
                <div style={{ width: "100%" }} >
                  <Typography className="subtabs-smrt">You may also like</Typography>
                  {/* <hr class="bottom-line border-line-"></hr> */}
                </div>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails >
                <div style={{ width: "100%" }}>
                  <Slideshow class={` ${data[0].fadeImageSublist ? 'subslider-carousel ' : "shine"}`}
                    hoverlist={data[0].fadeImageSublist}
                    dataCarousel={mobiledataCarousel} hover={true}>
                  </Slideshow>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel><br/>
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
