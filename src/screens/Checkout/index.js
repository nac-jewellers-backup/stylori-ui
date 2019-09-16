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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Login from './loginRegister/login';
import Addressform from './addressDetails/addressForm';
import ProductList from './orderSummary/productList';
import CartCard from '../../components/Checkout/CartCard';
import LoginRegisterIndex from './loginRegister';
import { withStyles } from '@material-ui/core/styles';
import Addressdetails from './addressDetails/addressDetails';
import PaymentIndex from './paymentOption/paymentindex';
const styles = theme => ({
    cart: {
        [theme.breakpoints.down('xs')]: {
            boxShadow: "none",
            marginTop: "25px"
        },
        [theme.breakpoints.up('lg')]: {
            boxShadow: "none",
        },
    },
});

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
        return (
            <div className='pt-sm' style={{ marginTop: "20px" }}>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel1'}
                    onChange={this.handleChange('panel1')}
                    style={{ boxShadow: "none" }}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>1</Avatar><Typography className='text-chck'> Login or Register</Typography>
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
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>2</Avatar><Typography className='text-chck'>Address Detail</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container >
                            <Grid item xs={12} lg={12}>
                                <Addressform />
                            </Grid>
                            {/* <Grid item xs={12} lg={12}>
                                <Addressdetails />
                            </Grid> */}
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel3'}
                    onChange={this.handleChange('panel3')}
                    style={{ boxShadow: "none" }} >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>3</Avatar><Typography className='text-chck'>Order Summary</Typography>
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
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                        <Avatar className='avart-ckc'>4</Avatar><Typography className='text-chck'>Payment Options</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                       <PaymentIndex />
                    </ExpansionPanelDetails>
                </ExpansionPanel>



            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Chckoutindex);
