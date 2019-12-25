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
import { isArray } from 'util';

class ProductDetails extends React.Component {
    state = {
        expanded: null
    };
  
    productsDetails = (data) => {
        const { classes } = this.props;
        return (
            <div>

                <Grid container spacing={12} style={{ paddingRight: "20px" }}>
                    {data[0].productsDetails.map(valueofproductdetail => {
                        
                        return (valueofproductdetail.namedetail.length===0) ? false :
                            <>
                                <div className='overall-boxz'>
                                    <div className='overall-bo'>
                                        <span key={valueofproductdetail.name} className={`product-details ${classes.normalfonts}`} > {valueofproductdetail.header}</span>
                                        <hr class="bottom-line"></hr>
                                        <>{
                                            valueofproductdetail.namedetail !== undefined && valueofproductdetail.namedetail.map(res => {
                                                return (
                                                    <span>
                                                        {res.details !== null && res.details.length === 0 ? false :

                                                            <Grid container item xs={12} >
                                                                <Grid xs={4}>
                                                                    <ListItemText variant='' className={`product-subhead ${classes.normalfonts}`}>
                                                                        <span style={{ fontSize: "12px" }}> {res.name}</span>
                                                                    </ListItemText>
                                                                </Grid>
                                                                <Grid container item xs={8}  >
                                                                    {
                                                                        isArray(res.details) ?
                                                                        
                                                                            <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`} >
                                                                               {res.details.map((Item , Index) => {
                                                                                    return(<span style={{ fontSize: "12px", textAlign: 'left' }}> { 
                                                                                    (valueofproductdetail.header === 'Price Breakup' && res.name !== 'GST') ? 
                                                                                ( (Index === 0 && (res.details[Index] !== res.details[Index + 1] ) ? <del>{Item}</del> : Item  ) ) : Item } </span>)
                                                                                })}
                                                                            </ListItemText>
                                                                            :

                                                                            <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`}>
                                                                                {/* {data[0].productsDetails[3].namedetail[1].length > 0} */}
                                                                               {  <span style={{ fontSize: "12px", marginLeft: '10px' }}> {res.details}</span>}
                                                                            </ListItemText>
                                                                    }
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    </span>
                                                )
                                            }
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
                                    {/* <hr class="bottom-line"></hr> */}
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

                    {data[0].productsDetails.map(val => {
                        return (
                            (data[0].productType !== "Earring" && val.header === 'Gemstone Details')
                            || (data[0].productType === "Earring" && val.header.trim() === 'Diamond Details')) ? false :
                            <>
                                <ExpansionPanel style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05) ! important",padding:"0 5px" }} expanded={expanded === val.header} onChange={this.handle(val.header)} key={val.name}>
                                    <ExpansionPanelSummary className="expansion-summary"
                                        expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" >
                                        </i></span>}>
                                        <div style={{ width: "100%" }} >
                                            <Typography className={`subtabs-smrt ${classes.normalfonts}`}>{val.header}</Typography>
                                            {/* <hr class="bottom-line border-line-"></hr> */}
                                        </div>
                                    </ExpansionPanelSummary>
                                    <div>
                                        {
                                            val.namedetail !== undefined && val.namedetail.map(res =>
                                                <span>
                                                    {((data[0].productType !== "Earring" && res.name === 'Gemstone')
                                                        || (data[0].productType === "Earring" && res.name === 'Diamond')) ? false :
                                                        <Grid container item xs={12} >
                                                            <Grid xs={4}>
                                                                <ListItemText variant='' className={`product-subhead ${classes.normalfonts}`}>
                                                                    <span style={{ fontSize: "12px" }}> {res.name}</span>
                                                                </ListItemText>
                                                            </Grid>
                                                            <Grid container item xs={8}  >
                                                                {
                                                                    isArray(res.details) ?
                                                                        <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`} >
                                                                            {res.details.map(val => {
                                                                                return (
                                                                                    <span style={{ fontSize: "12px", textAlign: 'left' }}> {val}</span>
                                                                                )
                                                                            })}
                                                                        </ListItemText>
                                                                        :
                                                                        <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`}>
                                                                            <span style={{ fontSize: "12px", marginLeft: '10px' }}> {res.details}</span>
                                                                        </ListItemText>
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                    }
                                                </span>
                                            )}
                                    </div>
                                </ExpansionPanel>
                            </>
                    })}<br />

                    {data[0].productsPendants.map(val => (
                        <div>
                            <ExpansionPanel style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05) ! important",padding:"0 5px" }} expanded={expanded === 'panel'} onChange={this.handle('panel')}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                    <i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className={`product-details-smrt ${classes.normalfonts}`}>{val.header}</Typography>
                                        {/* <hr class="bottom-line border-line-"></hr> */}
                                    </div>
                                </ExpansionPanelSummary>

                                <div style={{ padding: "10px" }}>
                                    <Grid container spacing={12}>
                                        <Grid item xs={12} className={`product-subhead ${classes.normalfonts}`}>
                                            <span style={{ fontSize: "12px" }}>{val.name.join(' ')}</span>
                                        </Grid>
                                    </Grid>
                                </div>
                            </ExpansionPanel>
                            <br />
                        </div>
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