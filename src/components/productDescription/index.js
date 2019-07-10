import React, { Component } from 'react';
import './ProductDescription.css'
import CustomSeparator from '../BreadCrumb'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Slideshow from '../Carousel/carosul'

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

    return (
      <>
        <Container >
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center">
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

                  alignItems="center"            >
                  <h2 className="DescriptionTitle">Jewellery</h2>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid
                  item
                  xs={6}

                  alignItems="center"            >
                  <h2 className="DescriptionTitleSmallScreen">Jewellery</h2>
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

                  < Slideshow />
                </Grid>
              </Hidden>
              <Hidden smDown>
                <Grid
                  item
                  xs={6}
                  alignItems="center">
                  <p>
                    <span className="DescriptionContent">Express yourself with a pendant that defines you. Personalize your look by adding a designer pendant and statement necklace to your ensemble. Gift that special person in your life a pendant that will be treasured forever. Gold pendants and diamond pendants never go out of style. Featuring the latest<span id="moreDots" style={{ display: 'inline' }}>...</span> </span>
                    <span id="txtopen" className="DescriptionContent" style={{ display: 'none' }}> in pendant designs, Stylori brings to you a range of casual, classic and fashion pendants.  Crafted using the finest jewellery design and jewellery making principles, buy our jewellery online for fast deliveries and an easy returns policy.<br />For every occasion and non-occasion. Shop our range of everyday fashion jewellery featuring gold, silver and stone rings and earrings, for work, play and everything in between. Give special occasions a little extra glimmer with our range of bridal jewellery ranging from engagement rings to wedding rings to classic party wear.  Crafted using the finest jewellery design and jewellery making principles, buy our jewellery online for fast deliveries and an easy returns policy.<br />&nbsp;&nbsp;</span>
                  </p>
                  <p onClick={this.handleOpen} className="know-txt" id="readMore" style={{ display: 'block' }}>
                    <span ><i className="fa">&#xf0da;</i></span> READ MORE
               </p>
                  <p onClick={this.handleClose} className="know-txt" id="readLess" style={{ display: 'none' }}>
                    <span ><i className="fa">&#xf0da;</i></span> CLOSE
               </p>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid
                  item
                  xs={12}
                  alignItems="center">
                  <p>
                    <span className="DescriptionContent">Express yourself with a pendant that defines you. Personalize your look by adding a designer pendant and statement necklace to your ensemble. Gift that special person in your life a pendant that will be treasured forever. Gold pendants and diamond pendants never go out of style. Featuring the latest<span id="moreDots" style={{ display: 'inline' }}>...</span> </span>
                    <span id="txtopen" className="DescriptionContent" style={{ display: 'none' }}> in pendant designs, Stylori brings to you a range of casual, classic and fashion pendants.  Crafted using the finest jewellery design and jewellery making principles, buy our jewellery online for fast deliveries and an easy returns policy.<br />For every occasion and non-occasion. Shop our range of everyday fashion jewellery featuring gold, silver and stone rings and earrings, for work, play and everything in between. Give special occasions a little extra glimmer with our range of bridal jewellery ranging from engagement rings to wedding rings to classic party wear.  Crafted using the finest jewellery design and jewellery making principles, buy our jewellery online for fast deliveries and an easy returns policy.<br />&nbsp;&nbsp;</span>
                  </p>
                  <p onClick={this.handleOpen} className="know-txt" id="readMore" style={{ display: 'block' }}>
                    <span ><i className="fa">&#xf0da;</i></span> READ MORE
               </p>
                  <p onClick={this.handleClose} className="know-txt" id="readLess" style={{ display: 'none' }}>
                    <span ><i className="fa">&#xf0da;</i></span> CLOSE
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
export default ProductDescription;