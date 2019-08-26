import React from 'react';
import './ordersummary.css'
import {
    Container,
    Button,
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    cart: {
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            boxShadow:"none",
            marginBottom:"25px"
        },
        [theme.breakpoints.up('lg')]: {
            width: "95%",
            boxShadow:"none",
        },
    },
});
class Productlist extends React.Component {
    state = {
    }

    render() {
        const { classes } = this.props;
        return (
            <Container>
                <div className='pt-sm'>
                    {/* <Checkoutcard /> */}
                    <div>
                        <Grid container spacing={12}>
                            <Grid item xs={12} lg={4}>

                                <ExpansionPanel className={classes.cart} >
                                    <ExpansionPanelSummary
                                        expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='order-ship'
                                    >
                                        <h5 className='title' style={{ textAlign: "center"}}> Shipping Address</h5>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className='order-ship pdng'>
                                        <div style={{ width: "100%" }}>

                                            <p className='dis-phn btm'>Prakash pravi</p>
                                            <p className='dis-phn btm'> 11 , North West Delhi - 110034</p>
                                            <p className='dis-phn'>Phone : +91 734897348743</p>
                                        </div>

                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Grid>

                            <Grid item xs={12} lg={4}>
                                <ExpansionPanel className={classes.cart} >
                                    <ExpansionPanelSummary
                                        expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='order-ship'
                                    >
                                        <h5 className='title' style={{ textAlign: "center" }}> Gift Wrap</h5>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className='order-ship pdng'>
                                        <div style={{ width: "100%" }}>
                                            <Input
                                                placeholder='Form'
                                            />
                                            <Input
                                                placeholder='To'
                                            />
                                            <Input
                                                placeholder='Message'
                                            />
                                            <div className='login-butn'>
                                                <Button className='apply-b'>Save</Button>
                                            </div>
                                        </div>

                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Grid>



                            <Grid item xs={12} lg={4}>
                                <ExpansionPanel className={classes.cart} >
                                    <ExpansionPanelSummary
                                        expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='order-ship'
                                    >
                                        <h5 className='title' style={{ textAlign: "center" }}> Gift Wrap</h5>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className='order-ship pdng'>
                                        <div style={{ width: "100%" }}>
                                            <Grid container spacing={12}>
                                                <Grid item xs={8} lg={8}>
                                                    <Input
                                                        placeholder='Enter Promocode'
                                                    />
                                                </Grid>
                                                <Grid item xs={4} lg={4}>
                                                    <Button className='ship-promo-btn'>Apply</Button>
                                                </Grid>
                                            </Grid>
                                        </div>

                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Productlist);
