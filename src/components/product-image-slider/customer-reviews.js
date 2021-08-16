import {
  Grid,
  Container,
  Hidden,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import Slideshow from "../Carousel/carosul";
import React from "react";
import "./product-images.css";
import PropTypes from "prop-types";
import { useDummyRequest } from "../../hooks";
import { withStyles } from "@material-ui/core/styles";
import { productpricingPages } from "../../mappers";
import styles from "./style";
import { ProductDetailContext } from "context/ProductDetailContext";
import productDetails from "mappers/productDetails";
import subcarousel from "components/Home/subcarousel";
import Sublistcarousel from "./subListcarousel";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div>
    {selected ? (
      <div class="star-rating">
        <input type="radio" />
        <label for="1-stars" class="star">
          &#9733;
        </label>
      </div>
    ) : (
      <div class="star-rating">
        <input type="radio" />
        <div for="1-stars">&#9733;</div>
      </div>
    )}
  </div>
);

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: "",
      expanded: "panel1",
    };
  }

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  // rat_map_message = () => this.props.rating && this.props.rating.CodData && this.props.rating.CodData.data && this.props.rating.CodData.data.allCustomerReviews && this.props.rating.CodData.data.allCustomerReviews.nodes.map(val => {
  //     var value;
  //     if (val.message !== "" && val.message !== undefined && val.message !== null) {
  //         value = <> {val.message}</>
  //     }
  //     return value
  // })
  rat_map_title = () =>
    this.props.rating &&
    this.props.rating.CodData &&
    this.props.rating.CodData.data &&
    this.props.rating.CodData.data.allCustomerReviews &&
    this.props.rating.CodData.data.allCustomerReviews.nodes.map((val) => {
      var value;
      if (
        (val.title !== "" && val.title !== undefined && val.title !== null) ||
        (val.message !== "" && val.message !== undefined && val.message !== null) ||
        (val.rating !== "" && val.rating !== undefined && val.rating !== null)
      ) {
        value = (
          <>
            <div style={{ display: "flex" }}>
              {[1, 2, 3, 4, 5].map((n, i) => (
                <Star key={i} selected={i < val.rating} onClick={() => this.change(i + 1)} />
              ))}
            </div>
            <div style={{ width: "100%", fontSize: "16px", marginBottom: "5px" }}>{val.customerName}</div>
            <div style={{ width: "100%", fontSize: "14px", marginBottom: "5px" }}>{val.message}</div>

            <br />
            <div className="brder-btom"></div>
          </>
        );
      }
      return value;
    });
  componentDidUpdate(prevProps) {
    // const rating = rating.CodData.data ? rating.CodData.data : ""
    // const rating_if = this.props.rating && this.props.rating.CodData && this.props.rating.CodData.data
    // if (rating_if !== prevProps.rating.CodData && rating.CodData.data) this.rat_map_message()
  }
  render() {
    const { expanded } = this.state;

    const dataCarousel = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      fade: false,
      dots: false,
      autoplaySpeed: 4000,
      arrows: false,
    };

    // const { productsubHead } = this.props.data
    const { classes, data, isSilver } = this.props;

    const { starsSelected } = this.state;
    return (
      <div style={{ width: "100%", paddingLeft: "5%", paddingRight: "5%" }}>
        {this.props.isSilver ? (
          <Hidden smDown>
            <Grid container item xs={12} style={{ paddingTop: "5px" }}>
              <div style={{ padding: " 20px 0px 0px 0px !important", width: "100%" }}>
                <div className="reviews-header" style={{ margin: "0px 0px 0px 15px" }}>
                  {!this.props.isSilver && <span className={`reviews-customer ${classes.normalfonts}`}>Customer Reviews</span>}
                  {this.props.isSilver && (
                    <h5 className={`reviews-customer ${classes.reviewandratingsmallScreen}`}>{"CUSTOMER REVIEWS"}</h5>
                  )}
                </div>
                <div className="reviews">
                  <span className={`data-reviews ${classes.normalfonts}`}>
                    <Grid spacing={12} container style={{ float: "left", padding: "2%", lineHeight: "23px" }}>
                      <Grid item lg={12}>
                        {this.rat_map_title() ? (
                          this.rat_map_title()
                        ) : (
                          <div
                            style={{ textAlign: "center", fontWeight: "bold" }}
                            className={this.props.isSilver ? `${classes.colorNoreviews}` : ""}
                          >
                            {" "}
                            No reviews found
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </span>
                </div>
              </div>
            </Grid>
          </Hidden>
        ) : (
          <Hidden smDown>
            <Container style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "5px" }}>
              <div style={{ padding: " 20px 0px 0px 0px !important" }}>
                <div className="reviews-header">
                  {!this.props.isSilver && <span className={`reviews-customer ${classes.normalfonts}`}>Customer Reviews</span>}
                  {this.props.isSilver && (
                    <h5 className={`reviews-customer ${classes.reviewandratingsmallScreen}`}>{"CUSTOMER REVIEWS"}</h5>
                  )}
                </div>
                <div className="reviews">
                  <span className={`data-reviews ${classes.normalfonts}`}>
                    <Grid spacing={12} container style={{ float: "left", padding: "2%", lineHeight: "23px" }}>
                      <Grid item lg={12}>
                        {this.rat_map_title() ? (
                          this.rat_map_title()
                        ) : (
                          <div
                            style={{ textAlign: "center", fontWeight: "bold" }}
                            className={this.props.isSilver ? `${classes.colorNoreviews}` : ""}
                          >
                            {" "}
                            No reviews found
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </span>
                </div>
              </div>
            </Container>
          </Hidden>
        )}

        {/* <Hidden mdUp>
                    <Container>
                    <ExpansionPanel
                            style={{ boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)", padding: "0 5px" }} square
                            expanded={expanded === 'panel1'}
                            onChange={this.handleChange('panel1')}
                        >
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>}>
                                <div style={{ width: "100%" }} >
                                    <Typography className={`subtabs-smrt ${classes.normalfonts}`}>You recently viewed</Typography> */}
        {/* <hr class="bottom-line border-line-"></hr> */}
        {/* </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails> */}
        {/* <Sublistcarousel/> */}

        {/* <Typography style={{ height: "40px", width: "100%", textAlign: "center" }}>
                                    <Slideshow dataCarousel={dataCarousel}>
                                        {this.props.data[0].productsubHead.map(val => (
                                            <div key={val.name} className="wrappercustom">
                                                <img className='features-tags-images' src={val.icon} alt="" />
                                                <span style={{ fontSize: "12px" }}>{val.name} </span>
                                            </div>
                                        ))} 
                                    </Slideshow>
                                    <div className="loader"></div>
                                </Typography> */}
        {/* </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Container> </Hidden> */}
      </div>
    );
  }
}
const Components = (props) => {
  const {
    ProductDetailCtx: { filters, data, loading, error, rating },
  } = React.useContext(ProductDetailContext);
  const datas = data;
  let mapped = datas;
  if (!loading && !error) {
    mapped = productDetails(datas, rating);
  }
  if (Object.keys(mapped).length === 0) {
    if (window.location.pathname === "silver") {
      return (
        <div className="overall-loader">
          <div id="loadingsilver"></div>
        </div>
      );
    }
    return (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  } else {
    return <CustomerReviews {...props} data={mapped} filters={filters} rating={rating} />;
  }
};
export default withStyles(styles)(Components);
