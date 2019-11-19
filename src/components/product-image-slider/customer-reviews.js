import {
    Grid,
    Container,
    Hidden,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,

} from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import React from "react";
import './product-images.css'
import PropTypes from 'prop-types';
import { useDummyRequest } from '../../hooks';
import { withStyles } from '@material-ui/core/styles';
import { productpricingPages } from '../../mappers';
import styles from './style'
import { ProductDetailContext } from 'context/ProductDetailContext';
import productDetails from 'mappers/productDetails';

class CustomerReviews extends React.Component {
    state = {
        expanded: 'panel1',
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        const { expanded } = this.state;
        const dataCarousel = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            autoplaySpeed: 5000,
            arrows: false
        }
        const { productsubHead } = this.props.data
        const { classes, data } = this.props;
        debugger
        var rat_val = this.props.rating && this.props.rating.CodData && this.props.rating.CodData.data && this.props.rating.CodData.data.allCustomerReviews && this.props.rating.CodData.data.allCustomerReviews.nodes
        // var rat_map_message = rat_val.map(val => {
        //     var value;
        //     if (val.message !== "" && val.message !== undefined && val.message !== null) {
        //         value = val.message
        //     }
        //     return value
        // })
        // console.log('rating_val', rat_val)
        return (
            <div>
                <Hidden smDown>
                    <div className="pricing-product-media">
                        <div className="reviews-header">
                            <span className={`reviews-customer ${classes.normalfonts}`}>Customer Reviews</span>
                        </div>
                        <div className="reviews">
                            <span className={`data-reviews ${classes.normalfonts}`}>No Reviews Found
                            {JSON.stringify(rat_val)}
                                {/* <div>{rat_map_message}</div> */}
                                {/* {rat_val.message} */}
                            </span>
                        </div>
                    </div>
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        <ExpansionPanel
                            style={{ boxShadow: "none" }} square
                            expanded={expanded === 'panel1'}
                            onChange={this.handleChange('panel1')}
                        >
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>}>
                                <div style={{ width: "100%" }} >
                                    <Typography className={`subtabs-smrt ${classes.normalfonts}`}>You recently viewed</Typography>
                                    {/* <hr class="bottom-line border-line-"></hr> */}
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography style={{ height: "40px", width: "100%", textAlign: "center" }}>
                                    <Slideshow dataCarousel={dataCarousel}>
                                        {this.props.data[0].productsubHead.map(val => (
                                            <div key={val.name} className="wrappercustom">
                                                <img className='features-tags-images' src={val.icon} alt="" />
                                                <span style={{ fontSize: "12px" }}>{val.name} </span>
                                            </div>
                                        ))}
                                    </Slideshow>
                                    <div className="loader"></div>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Container> </Hidden>
            </div>
        );
    }
}
const Components = props => {
    const { ProductDetailCtx: { filters, data, loading, error, rating } } = React.useContext(ProductDetailContext);
    const datas = data;
    debugger
    let mapped = datas;
    if (!loading && !error) {
        mapped = productDetails(datas, rating);
    }
    if (Object.keys(mapped).length === 0) return <div className="overall-loader"><div id="loading"></div></div>
    else {
        return <CustomerReviews {...props} data={mapped} filters={filters} rating={rating} />
    }
}
export default withStyles(styles)(Components);