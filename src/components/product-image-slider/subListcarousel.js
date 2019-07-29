import React from 'react';
import './product-images.css'
import Slideshow from '../Carousel/carosul'
import { Container, Grid, Hidden } from '@material-ui/core';
import fade from './producthoverData'
import D from './producthoverData'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
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
              <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>} style={{ borderBottom: "1px solid #ed1165" }}>
                <Typography className='subtabs-smrt'>You may also like</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ height: "200px" }}>
                <Slideshow class="" dataCarousel={mobiledataCarousel} >
                  {D.fadeImagessublist.map(val => (
                    <div style={{ height: "200px" }}>
                      <img src={val.img} className='' style={{ width: "50%", height: "50%" }} />
                      <span className='next-price'>{val.title}</span><br />
                      <span className='sub-list-price'> <i class="fa fa-rupee"></i> &nbsp;{val.price}</span>
                    </div>
                  ))}
                </Slideshow>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Container>    </Hidden>
      </div>
    );
  }
};


export default Sublistcarousel;