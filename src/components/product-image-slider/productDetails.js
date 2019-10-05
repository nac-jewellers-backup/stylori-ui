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
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class ProductDetails extends React.Component {
    state = {
        expanded: null
    };

    productsDetails = (data) => {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={12} style={{ paddingRight: "20px" }}>
                    {data[0].productsDetails.map(val => {
                        return ((data[0].productType !== "Earring" && val.header === 'Gemstone Details')
                            || (data[0].productType === "Earring" && val.header.trim() === 'Diamond Details')) ? false :
                            <>
                                <div className='overall-boxz'>
                                    <div className='overall-bo'>
                                        <span key={val.name} className={`product-details ${classes.normalfonts}`} > {val.header}</span>
                                        <hr class="bottom-line"></hr>
                                        <>{
                                            val.namedetail !== undefined && val.namedetail.map(res =>
                                                <Grid container item xs={12} >
                                                    <Grid xs={6}>
                                                        <ListItemText variant='' className={`product-subhead ${classes.normalfonts}`}>
                                                            <span style={{ fontSize: "12px" }}> {res.name}</span>
                                                        </ListItemText>
                                                    </Grid>
                                                    <Grid xs={6}>
                                                        <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`}>
                                                            <span style={{ fontSize: "12px" }}> {res.details}</span>
                                                        </ListItemText>
                                                    </Grid>
                                                </Grid>
                                            )}</>
                                    </div>
                                </div>
                            </>
                    })}
                </Grid>

                <Grid container spacing={12} style={{ paddingRight: "20px" }}>
                    {data[0].productsPendants.map(val => (
                        <>
                            <div className='overall-boxz'>
                                <div className='overall-bo'>
                                    <span key={val.name} className={`product-details ${classes.normalfonts}`}>{val.header}</span>
                                    <hr class="bottom-line"></hr>
                                    <Grid item xs={12} className={`product-subhead ${classes.normalfonts}`}>
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
        const { data } = this.props;
        const { classes } = this.props;
        return (
            <div>
                <Container>

                    {data[0].productsDetails.map(val => (
                        <ExpansionPanel expanded={expanded === val.header} onChange={this.handle(val.header)}
                            style={{ boxShadow: "none", backgroundColor: "none" }} key={val.name}>
                            <ExpansionPanelSummary className="expansion-summary"
                                expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" >
                                </i></span>}>
                                <div style={{ width: "100%" }} >
                                    <Typography className={`subtabs-smrt ${classes.normalfonts}`}>{val.header}</Typography>
                                    <hr class="bottom-line border-line-"></hr>
                                </div>
                            </ExpansionPanelSummary>
                            {
                                val.namedetail !== undefined && val.namedetail.map(res =>
                                    <Grid container spacing xs={12} sm={12}>
                                        <Grid item xs={6} sm={6}>
                                            <ListItemText variant='' className={`product-subhead ${classes.normalfonts}`}>
                                                <span style={{ fontSize: "12px" }}> {res.name}</span>
                                            </ListItemText>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`}>
                                                <span style={{ fontSize: "12px" }}> {res.details}</span>
                                            </ListItemText>
                                        </Grid>
                                    </Grid>
                                )}
                        </ExpansionPanel>
                    ))}

                    {data[0].productsPendants.map(val => (
                        <ExpansionPanel expanded={expanded === 'panel'} onChange={this.handle('panel')}
                            style={{ boxShadow: "none", backgroundColor: "none" }}>
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>}>
                                <div style={{ width: "100%" }} >
                                    <Typography className={`product-details-smrt ${classes.normalfonts}`}>{val.header}</Typography>
                                    <hr class="bottom-line border-line-"></hr>
                                </div>
                            </ExpansionPanelSummary>

                            <Grid container spacing={12}>
                                <Grid item xs={12} className={`product-subhead ${classes.normalfonts}`}>
                                    <span style={{ fontSize: "12px" }}>{val.name.join(' ')}</span>
                                </Grid>
                            </Grid>
                        </ExpansionPanel>
                    ))}

                </Container>
            </div>
        )
    }
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        const { data } = this.props;
        return (
            <div>
                <Hidden smDown>
                    {this.productsDetails(data)}

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
export default withStyles(styles)(ProductDetails);