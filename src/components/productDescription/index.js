import React, { Component } from 'react';
import './ProductDescription.css'
import { Container, Hidden, Grid, Typography } from '@material-ui/core';
import Slideshow from '../Carousel/carosul';
import CustomSeparator from '../BreadCrumb/index';
import { withStyles } from '@material-ui/core/styles';
import data from './data'





const styles = theme => ({

    colorLight:{
      color: theme.palette.secondary.light
    },
    colorDark: {
      color: theme.palette.primary.dark,
  
    },
});




class ProductDescription extends Component {
  constructor(props) {
    super(props)
  }
  handleOpen = () => {
    document.getElementById('txtopen').style.display = "inline";
    document.getElementById('readLess').style.display = "block";
    document.getElementById('readMore').style.display = "none";
    document.getElementById('moreDots').style.display = "none";

  }
  handleClose = () => {
    document.getElementById('txtopen').style.display = "none";
    document.getElementById('readLess').style.display = "none";
    document.getElementById('readMore').style.display = "block";
    document.getElementById('moreDots').style.display = "inline";

  }
  
  render() {
    const { classes } = this.props;
   
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
                  <CustomSeparator />
                </Grid>
              </Hidden>
              <Hidden smDown >
                <Grid
                  item
                  xs={6}
                  className={`DescriptionTitle` }
                  alignItems="center"            >
             <Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
{this.props.title}
</Typography>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid
                  item
                  xs={6}
                  className={` DescriptionTitleSmallScreen ` }
                  alignItems="center"            >
              <Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
{this.props.title}
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
                  style={{ textAlign: 'center' }}
                  alignItems="center">

                  < Slideshow fadeImages={this.props.fadeImages} dataCarousel={this.props.dataCarousel} styles={'productDescriptionCarousel'}/>
                </Grid>
              </Hidden>
              <Hidden smDown>
                <Grid
                  item
                  xs={6}
                  alignItems="center">
                  <p>
                    {/* {this.props.ProductContent.slice(0, 60)} */}
                    <span className="DescriptionContent">
                      {/* For every occasion and non-occasion. Shop our range of everyday fashion jewellery featuring gold, silver and stone rings and earrings, for work, play and everything in between. Give special occasions a little extra glimmer with our range of bridal jewellery ranging from engagement rings to wedding r */}
                    
                    {
                    
                    (data.jewlleryData).slice(0,160)
                    }
                    
                    <span id="moreDots" style={{ display: 'inline' }}>...</span> </span>
                    <span id="txtopen" className="DescriptionContent" style={{ display: 'none' }}> 
                    {/* ings to classic party wear.  Crafted using the finest jewellery design and jewellery making principles, buy our jewellery online for fast deliveries and an easy returns policy. */}
                    {data.jewlleryData}
                    <br />&nbsp;&nbsp;</span>
                  </p>
                  <p onClick={this.handleOpen}  className={`know-txt ${classes.colorLight}`} id="readMore" style={{ display: 'block' }}>
                    <span ><i className="fa faMore">&#xf0da;</i></span> READ MORE
               </p>
                  <p onClick={this.handleClose} className={`know-txt ${classes.colorLight}`} id="readLess" style={{ display: 'none' }}>
                    <span ><i className="fa faMore">&#xf0d8;</i></span> CLOSE
               </p>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid
                  item
                  xs={12}
                  alignItems="center">
                  <p>
                    <span className="DescriptionContent">
                      {/* For every occasion and non-occasion. Shop our range of everyday fashion jewellery featuring gold, silver and stone rings and earrings, for work, play and everything in between. Give special occasions a little extra glimmer with our range of bridal jewellery ranging from engagement rings to wedding r */}
                      {(data.jewlleryData).slice(0,160)}
                      <span id="moreDots" style={{ display: 'inline' }}>...</span> </span>
                    <span id="txtopen" className="DescriptionContent" style={{ display: 'none' }}>
                       {/* ings to classic party wear.  Crafted using the finest jewellery design and jewellery making principles, buy our jewellery online for fast deliveries and an easy returns policy. */}
                       {data.jewlleryData}
                       <br />&nbsp;&nbsp;</span>
                  </p>
                  <p onClick={this.handleOpen} className={`know-txt ${classes.colorLight}`} id="readMore" style={{ display: 'block' }}>
                    <span ><i className="fa faMore">&#xf0da;</i></span> READ MORE
               </p>
                  <p onClick={this.handleClose} className={`know-txt ${classes.colorLight}`} id="readLess" style={{ display: 'none' }}>
                    <span ><i className="fa faMore">&#xf0d8;</i></span> CLOSE
               </p>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Container>

      </>
    );
  }

}
export default withStyles(styles)(ProductDescription);