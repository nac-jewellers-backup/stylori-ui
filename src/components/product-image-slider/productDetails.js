import {
    Grid,
    ListItemText,
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    Hidden,
    Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from "react";
import './product-images.css';
import { useDummyRequest } from '../../hooks';
import { productpricingPages } from '../../mappers';
class ProductDetails extends React.Component {
    state = {
        expanded: null
    };

    productsDetails = () => {
        const { productsDetails,productsPendants } = this.props.data;
        return (
            <div>
                <Grid container spacing={12} style={{ paddingRight: "20px" }}>

                    {productsDetails.map(val => (
                        <>
                            <div className='overall-boxz'>
                                <div className='overall-bo'>
                                    <span key={val.name} className="product-details">{val.header}</span>
                                    <hr class="bottom-line"></hr>
                                    <>{
                                        val.namedetail !== undefined && val.namedetail.map(res =>
                                            <Grid container item xs={12} >
                                                <Grid xs={6}>
                                                    <ListItemText variant='' className="product-subhead">
                                                        <span style={{ fontSize: "12px" }}> {res.name}</span>
                                                    </ListItemText>
                                                </Grid>
                                                <Grid xs={6}>
                                                    <ListItemText variant='' className="product-subhead-list">
                                                        <span style={{ fontSize: "12px" }}> {res.details}</span>
                                                    </ListItemText>
                                                </Grid>
                                            </Grid>
                                        )}</>
                                </div>
                            </div>
                        </>
                    ))}
                </Grid>
                <Grid container spacing={12} style={{ paddingRight: "20px" }}>
                    {productsPendants.map(val => (
                        <>
                            <div className='overall-boxz'>
                                <div className='overall-bo'>
                                    <span key={val.name} className="product-details">{val.header}</span>
                                    <hr class="bottom-line"></hr>
                                    <Grid item xs={12} className="product-subhead">
                                        <span style={{ fontSize: "12px" }}>{val.name.join(' ')}</span>
                                    </Grid>
                                </div>
                            </div>
                        </>
                    ))}
                </Grid>
            </div>
        )
    };
    mobileproductsDetails = () => {
        const { expanded } = this.state;
        const { productsDetails ,productsPendants} = this.props.data;
        return (
            <div>
                <div>
                    <Container>
                        {productsDetails.map(val => (
                            <ExpansionPanel expanded={expanded === val.header} onChange={this.handle(val.header)}
                                style={{ boxShadow: "none", backgroundColor: "none" }} key={val.name}>
                                <ExpansionPanelSummary className="expansion-summary"
                                    expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" >
                                    </i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className='subtabs-smrt'>{val.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>
                                {
                                    val.namedetail !== undefined && val.namedetail.map(res =>
                                        <Grid container spacing xs={12} sm={12}>
                                            <Grid item xs={6} sm={6}>
                                                <ListItemText variant='' className="product-subhead">
                                                    <span style={{ fontSize: "12px" }}> {res.name}</span>
                                                </ListItemText>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <ListItemText variant='' className="product-subhead-list">
                                                    <span style={{ fontSize: "12px" }}> {res.details}</span>
                                                </ListItemText>
                                            </Grid>
                                        </Grid>
                                    )}
                            </ExpansionPanel>
                        ))}
                        {productsPendants.map(val => (
                            <ExpansionPanel expanded={expanded === 'panel'} onChange={this.handle('panel')}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                    <i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className='product-details-smrt'>{val.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>

                                <Grid container spacing={12}>
                                    <Grid item xs={12} className="product-subhead ">
                                        <span style={{ fontSize: "12px" }}>{val.name.join(' ')}</span>
                                    </Grid>
                                </Grid>
                            </ExpansionPanel>
                        ))}
                    </Container>
                </div>
            </div>
        )
    }
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        return (
            <div>
                <Hidden smDown>
                    {this.productsDetails()}
                </Hidden>

                <Hidden mdUp>
                    {this.mobileproductsDetails()}
                </Hidden>
            </div>
        );
    }
}
ProductDetails.propTypes = {
    productsDetails: PropTypes.func,
    mobileproductsDetails: PropTypes.func,
    handle: PropTypes.func,
};
export default (props => {
    const { mapped } = useDummyRequest(productpricingPages);
    if (Object.keys(mapped).length === 0) return ''

    return <ProductDetails {...props} data={mapped} />
});