import {
    Container,
    Hidden,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    ExpandMoreIcon,
    Grid
} from '@material-ui/core';
import img from './producthoverData'
import React from 'react';
import './product-images.css'
import PropTypes from 'prop-types';

class PriceCertification extends React.Component {
    state = {
        expanded: null
    };
    mobilePriceCertificat = () => {
        const { expanded } = this.state;
        return (
            <div>
                <Container>
                    {img.imagecertificat.map(val =>
                        <ExpansionPanel expanded={expanded === val.header} onChange={this.handle(val.header)}
                            style={{ boxShadow: "none", backgroundColor: "none" }} key={val.name}>
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>} >
                                <div style={{ width: "100%" }} >
                                    <Typography className='subtabs-smrt'>{val.header}</Typography>
                                    <hr class="bottom-line border-line-"></hr>
                                </div>

                            </ExpansionPanelSummary>
                            <Grid container spacing={12} >
                                <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                    <Grid item xs={6} >
                                        <img src={val.img1} />
                                    </Grid>
                                    <Grid item xs={6} style={{ padding: "12px" }}>
                                        <img src={val.img2} />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                    <Grid item xs={6}>
                                        <img src={val.img3} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={val.img4} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid spacing={12}>
                                <Grid item xs={12} className='certification-img'>
                                    <img width='85%' height='100%' src={val.img5} />
                                </Grid>
                            </Grid>
                        </ExpansionPanel>
                    )}
                </Container>
            </div>
        )
    };
    PriceCertificat = () => {
        return (
            <div>
                {img.imagecertificat.map(val =>
                    <>
                        <h4 className="product-details">{val.header}</h4>
                        <hr class="bottom-line"></hr>
                        <Grid container spacing={12} >
                            <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                <Grid item xs={6} >
                                    <img src={val.img1} />
                                </Grid>
                                <Grid item xs={6} style={{ padding: "12px" }}>
                                    <img src={val.img2} />
                                </Grid>
                            </Grid>
                            <Grid item xs={6} style={{ padding: "0px 33px" }}>
                                <Grid item xs={6}>
                                    <img src={val.img3} />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={val.img4} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid spacing={12}>
                            <Grid item xs={12} className='certification-img'>
                                <img width='85%' height='100%' src={val.img5} />
                            </Grid>
                        </Grid>
                    </>
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

export default PriceCertification;