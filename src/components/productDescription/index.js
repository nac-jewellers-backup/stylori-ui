import React, { Component } from 'react';
import './ProductDescription.css'
import { Container, Hidden, Grid, Typography } from '@material-ui/core';
import Slideshow from '../Carousel/carosul';
import CustomSeparator from '../BreadCrumb/index';
import { withStyles } from '@material-ui/core/styles';
import { useDummyRequest } from '../../hooks';
import { descriptionData } from '../../mappers';
import { withRouter } from 'react-router-dom';
const styles = theme => ({

  colorLight: {
    color: theme.palette.secondary.light
  },
  colorDark: {
    color: theme.palette.primary.dark,

  },
});

class ProductDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLess: true
    }
  }
  handleReadMore = () => {
    this.setState({ showLess: !this.state.showLess })
  }


  render() {
    const { classes } = this.props;
    // let path = window.location.pathname.split('/').pop();
    var loc = this.props.location.pathname;
    var path = loc.split('/');
    var data_json = [{title:'home' ,url:'/home'}, {title:path[1] ,url:loc}]
    // const descriptionData = this.props.data;
    const settings = this.props.data[0].dataCarousel;
    const fadeImages = this.props.data[0].carouselImage;
    const title = this.props.title;
    const datadescription = this.props.data[0].seoText;
    return (
      <>
        <Container >
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid
              item
              container
              alignItems="center">
              <Hidden smDown>
                <Grid
                  item
                  xs={3}

                  style={{ textAlign: 'center' }}

                  alignItems="center">
                  <CustomSeparator
                    list='product-dis'
                    classsubhed='product-backg'
                    data={data_json} />{/* window.location.pathname.split('/').pop()  */}
                </Grid>
              </Hidden>
              <Hidden smDown >
                <Grid
                  item
                  xs={6}
                  className={`DescriptionTitle`}
                  alignItems="center"            >
                  <Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
                    {/* {window.location.pathname.split('/').pop()} */}
                    {title}

                  </Typography>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid
                  item
                  xs={6}
                  className={` DescriptionTitleSmallScreen `}
                  alignItems="center"            >
                  <Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
                    {title}
                  </Typography>
                </Grid>
              </Hidden>
            </Grid>
            <Grid
              item
              container
              alignItems="center">
              <Hidden smDown>
                <Grid
                  item
                  xs={3}
                  style={{ paddingLeft: '4%' }}
                  alignItems="center">

                  {/* < Slideshow fadeImages={this.props.fadeImages} dataCarousel={this.props.dataCarousel} styles={'productDescriptionCarousel'} /> */}
                  < Slideshow fadeImages={fadeImages} dataCarousel={settings} styles={'productDescriptionCarousel'} />
                </Grid>
              </Hidden>
              <Grid
                item
                xs={12} sm={12} md={9} lg={9} xl={9}
                alignItems="center">
                <p>
                  <div className="DescriptionContent">
                    {
                      this.state.showLess === true ?
                        <>
                          {(datadescription).slice(0, 160)}
                          <span id="moreDots" style={{ display: 'inline' }}>...</span>
                          <p onClick={this.handleReadMore} className={`know-txt ${classes.colorLight}`} id="readMore" >
                            <span ><i className="fa faMore">&#xf0da;</i></span> READ MORE
                   </p>
                        </>
                        :
                        <>
                          {datadescription}
                          <p onClick={this.handleReadMore} className={`know-txt ${classes.colorLight}`} id="readLess" >
                            <span ><i className="fa faMore">&#xf0d8;</i></span> CLOSE
               </p>
                          <br />
                        </>
                    }

                  </div>
                </p>
              </Grid>

            </Grid>
          </Grid>
        </Container>

      </>
    );
  }

}
export default withRouter(withStyles(styles)(ProductDescription))

