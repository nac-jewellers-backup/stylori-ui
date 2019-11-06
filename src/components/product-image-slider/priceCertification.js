import {
    Container,
    Hidden,
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    Grid
} from '@material-ui/core';
import React from 'react';
import './product-images.css'
import PropTypes from 'prop-types';
import { useDummyRequest } from '../../hooks';
import { productpricingPages } from '../../mappers';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
class PriceCertification extends React.Component {
    state = {
        expanded: null
    };
    mobilePriceCertificat = () => {
        const { expanded } = this.state;
        const { imagecertificat } = this.props.data
        const { classes } = this.props;
        return (
            <div>
                <Container>
                    {imagecertificat.map(val =>
                        <>
                        
                        <ExpansionPanel style={{boxShadow:"0px 0px 2px 0px #ed1165"}} expanded={expanded === val.header} onChange={this.handle(val.header)} key={val.name}>
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>} >
                                <div style={{ width: "100%" }} >
                                    <Typography className={`subtabs-smrt ${classes.normalfonts}`}>{val.header}</Typography>
                                    {/* <hr class="bottom-line border-line-"></hr> */}
                                </div>

                            </ExpansionPanelSummary>
                            <Grid container spacing={12} >
                                <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                    <Grid item xs={6} >
                                        <img src={val.img1} alt="" />
                                    </Grid>
                                    <Grid item xs={6} style={{ padding: "12px" }}>
                                        <img src={val.img2} alt="" />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                    <Grid item xs={6}>
                                        <img src={val.img3} alt="" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={val.img4} alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid spacing={12}>
                                <Grid item xs={12} className='certification-img'>
                                    <img width='100%' height='100%' src={val.img5} alt="" />
                                </Grid>
                            </Grid>
                        </ExpansionPanel>
                    <br/></>)}
                </Container></div>
        )
    };
    PriceCertificat = () => {
        const { imagecertificat } = this.props.data
        const { classes } = this.props;
        return (
            <div>
                {imagecertificat.map(val =>
                    <div className="overall-boxz">
                        <div className="overall-bo">
                            <span className={`product-details ${classes.normalfonts}`}>{val.header}</span>
                            <hr class="bottom-line"></hr>
                            <Grid container spacing={12} >
                                <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                    <Grid item xs={6} >
                                        <img src={val.img1} alt="" />
                                    </Grid>
                                    <Grid item xs={6} style={{ padding: "12px" }}>
                                        <img src={val.img2} alt="" />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                    <Grid item xs={6}>
                                        <img src={val.img3} alt="" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={val.img4} alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid spacing={12}>
                                <Grid item xs={12} className='certification-img'>
                                    <img width='100%' height='100%' src={val.img5} alt="" />
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                )}
            </div>)
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
                    {this.PriceCertificat()}
                </Hidden>


                <Hidden mdUp>
                    {this.mobilePriceCertificat()}
                </Hidden>
            </div>
        )
    }

}
PriceCertification.propTypes = {
    PriceCertificat: PropTypes.func,
    handle: PropTypes.func
};

export default withStyles(styles)(props => {
    const { mapped } = useDummyRequest(productpricingPages);
    if (Object.keys(mapped).length === 0) return ''

    return <PriceCertification {...props} data={mapped} />
});