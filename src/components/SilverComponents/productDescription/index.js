import React, { Component } from 'react';
import './ProductDescription.css'
import { Container, Hidden, Grid, Typography } from '@material-ui/core';
import Slideshow from 'components/Carousel/carosul';
import CustomSeparator from 'components/BreadCrumb/index';
import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom';
const styles = theme => ({

  colorLight: {
    color: theme.palette.secondary.light
  },
  colorDark: {
    color: theme.palette.primary.dark,
    textTransform: "capitalize",
    fontSize: "1.1rem",
    // marginTop: "14px"

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
    var data_json = [{ title: 'home', url: '/' }, { title: 'jewellery', url: "/jewellery" }]
    // const descriptionData = this.props.data;
    const settings = this.props.data && this.props.data[0] && this.props.data[0].dataCarousel;
    const fadeImages = this.props.data && this.props.data[0] && this.props.data[0].carouselImage;
    const title = this.props.title;
    const datadescription = this.props.data && this.props.data[0] && this.props.data[0].seoText;
    const renderTitle = () => {
      var pathname_split_hyphen = path[1].split('-')
      var a = window.location.pathname.split('/')
      // var b = a[1].split(/\-/g).map(val=>{return val.split(/\+/g)})
      var b = a[1].split(/\-/g).map(val => { return val.replace(/\+/g, " ") })
      var c = b.map(val => { return b + ' ' })
      var d
      return d = c[0].replace(/\,/g, " ")
    }
    return (
      <>

        <Grid
          style={{ margin: "9px" }}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid
            item
            container
            alignItems="center">
          </Grid>
          <Grid
            item
            container
            alignItems="center">
            <Hidden smDown>
              <Grid
                item
                xs={6}

                alignItems="center">

                {/* < Slideshow fadeImages={this.props.fadeImages} dataCarousel={this.props.dataCarousel} styles={'productDescriptionCarousel'} /> */}
                < Slideshow fadeImages={fadeImages} dataCarousel={settings} styles={'productDescriptionCarousel'} />
              </Grid>
            </Hidden>
            <Grid
              item
              xs={12} sm={12} md={12} lg={12} xl={12}
              alignItems="center">
              <p>
                <div className="DescriptionContent">
                  {
                    this.state.showLess === true ?
                      <>
                        {(datadescription).slice(0, 350)}
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


      </>
    );
  }

}
export default withRouter(withStyles(styles)(ProductDescription))

