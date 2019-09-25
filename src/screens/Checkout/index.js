import React from 'react';
import './chckout.css'
import {
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Avatar,
    Grid
} from '@material-ui/core';
import "../../components/Checkout/Cart.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Addressform from './addressDetails/addressForm';
import ProductList from './orderSummary/productList';
import CartCard from '../../components/Checkout/CartCard';
import LoginRegisterIndex from './loginRegister';
import { withStyles } from '@material-ui/core/styles';
import PaymentIndex from './paymentOption/paymentindex';
import { useDummyRequest } from '../../hooks';
import { cartdatas } from '../../mappers';
import CustomSeparator from '../../components/BreadCrumb/index'
import styles from '../Checkout/loginRegister/style'

class Chckoutindex extends React.Component {
    state = {
        expanded: 'panel1',
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };


    render() {
        const { expanded } = this.state;
        const { classes } = this.props;
        const { breadcrumsdata, cartsubdata } = this.props.data;
        return (
            <div className='pt-sm checkout-ovralldiv-media' >
                <CustomSeparator
                    arrowicon='cart-head-arrows'
                    className={`breadcrums-header ${classes.normalcolorback}`}
                    classsubhed={`breadcrums-sub ${classes.normalcolorback}`}
                    list={`MuiBreadcrumbs-li ${classes.fontwhite}`}
                    data={breadcrumsdata}
                    subdata={cartsubdata}
                />
                <div style={{ marginTop: "20px" }}>
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel1'}
                        onChange={this.handleChange('panel1')}
                        style={{ boxShadow: "none" }}
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className={`ckcut-main-body ${classes.normalfonts}`}>
                            <Avatar className={`avart-ckc ${classes.normalcolorback}`}>1</Avatar><Typography className='text-chck'> Login or Register</Typography>
                        </ExpansionPanelSummary >
                        <ExpansionPanelDetails
                        >
                            <LoginRegisterIndex />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel2'}
                        onChange={this.handleChange('panel2')}
                        style={{ boxShadow: "none" }}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className={`ckcut-main-body ${classes.normalfonts}`}>
                            <Avatar className={`avart-ckc ${classes.normalcolorback}`}>2</Avatar><Typography className='text-chck'>Address Detail</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container >
                                <Grid item xs={12} lg={12}>
                                    <Addressform />
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel3'}
                        onChange={this.handleChange('panel3')}
                        style={{ boxShadow: "none" }} >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className={`ckcut-main-body ${classes.normalfonts}`}>
                            <Avatar className={`avart-ckc ${classes.normalcolorback}`}>3</Avatar><Typography className='text-chck'>Order Summary</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                            <Grid container >
                                <Grid item xs={12} lg={12}>
                                    <CartCard />
                                </Grid>
                                <Grid item xs={12} lg={12} className={classes.cart}>
                                    <ProductList />
                                </Grid>

                            </Grid>


                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel4'}
                        onChange={this.handleChange('panel4')}
                        style={{ boxShadow: "none" }}  >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className={`ckcut-main-body ${classes.normalfonts}`}>
                            <Avatar className={`avart-ckc ${classes.normalcolorback}`}>4</Avatar><Typography className='text-chck'>Payment Options</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <PaymentIndex />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>



                </div>
            </div>
        )
    }
}
export default withStyles(styles)(props => {
    const { mapped } = useDummyRequest(cartdatas);
    if (Object.keys(mapped).length === 0) return ''

    return <Chckoutindex {...props} data={mapped} />
});