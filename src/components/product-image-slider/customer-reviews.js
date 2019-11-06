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
        const { classes } = this.props;
        return (
            <div>
                <Hidden smDown>
                        <div className="pricing-product-media">
                            <div className="reviews-header">
                                <span className={`reviews-customer ${classes.normalfonts}`}>Customer Reviews</span>
                            </div>
                            <div className="reviews">
                                <span className={`data-reviews ${classes.normalfonts}`}>No Reviews Found</span>
                            </div>
                        </div>
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        <ExpansionPanel
                           style={{boxShadow:"0px 0px 2px 0px #ed1165"}} square
                            expanded={expanded === 'panel1'}
                            onChange={this.handleChange('panel1')}
                        >
                            <ExpansionPanelSummary  expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>}>
                                <div style={{ width: "100%" }} >
                                    <Typography className={`subtabs-smrt ${classes.normalfonts}`}>You recently viewed</Typography>
                                    {/* <hr class="bottom-line border-line-"></hr> */}
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography style={{ height: "40px", width: "100%", textAlign: "center" }}>
                                    <Slideshow dataCarousel={dataCarousel}>
                                        {productsubHead.map(val => (
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
CustomerReviews.propTypes = {
    handleChange: PropTypes.func,
};
export default withStyles(styles)(props => {
    const { mapped } = useDummyRequest(productpricingPages);
    if (Object.keys(mapped).length === 0) return ''

    return <CustomerReviews {...props} data={mapped} />
});