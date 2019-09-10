import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import Checkboxes from '../../../components/InputComponents/CheckBox/CheckBox';
import SimpleSelect from '../../../components/InputComponents/Select/Select'

class Addressform extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        adrs_firstname: "",
        adrs_lastname: "",
        adrs_selectcountry: "",
        adrs_zipcode: "",
        adrs_address: "",
        adrs_state: "",
        adrs_City: "",
        adrs_phonenumber: "",
        adrs_numcode: "",
        bill_firstname: "",
        bill_lastname: "",
        bill_selectcountry: "",
        bill_zipcode: "",
        bill_address: "",
        bill_state: "",
        bill_City: "",
        bill_phonenumber: "",
        bill_numcode: "",
        bill_isNumber: false,
        // checked:false
    }

    handleChange(event, name) {
        this.setState({
            [name]: event.target.value,
            // checked: !this.state.checked
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
    }
    handleKeyPress = (e, isNumber) => {
        if (isNumber) {
            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
        }
    };

    render() {
        const hidden_chk1 = this.state.checked ? 'hidden' : '';
        return (
            <Container>
                <div className='pt-sm'>
                    <form onSubmit={this.handleSubmit()}>
                        <h5 className='title'> Shipping Address</h5>
                        <p class="form-group tp" >
                            <Checkboxes CheckBoxValues={['0']} />
                            If your billing address is different from the shipping adress please uncheck the box to select billing address.</p>    <Grid container item xs={12} lg={12} >
                            <Grid item xs={12} lg={5}>

                                <Grid container spacing={12}>
                                    <Grid item xs={4} lg={4}>
                                        <SimpleSelect name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                    </Grid>
                                    <Grid item xs={4} lg={4}>
                                        <Input
                                            name="adrs_firstname"
                                            className='text-f'
                                            type="text"
                                            value={this.state.adrs_firstname}
                                            placeholder="First name"
                                            required
                                            onChange={(event) => this.handleChange(event, "adrs_firstname")}
                                        />
                                    </Grid>
                                    <Grid item xs={4} lg={4}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name="adrs_lastname"
                                            value={this.state.adrs_lastname}
                                            placeholder="Last name"
                                            onChange={(event) => this.handleChange(event, "adrs_lastname")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={6} lg={6}>
                                        <SimpleSelect name={['India']} selectData={['India']} />
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='adrs_zipcode'
                                            placeholder="Pin Code/Zip Code"
                                            onChange={(event) => this.handleChange(event, "adrs_zipcode")}
                                            value={this.state.adrs_zipcode}
                                            onKeyPress={(e) => this.handleKeyPress(e, "adrs_zipcode")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={12} lg={12}>
                                        <Input
                                            type="text"
                                            placeholder="Address *"
                                            required
                                            name='adrs_address'
                                            onChange={(event) => this.handleChange(event, "adrs_address")}
                                            value={this.state.adrs_address}

                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            style={{ float: "left" }}
                                            className='text-f'
                                            type="text"
                                            name='adrs_state'
                                            placeholder="State *"
                                            onChange={(event) => this.handleChange(event, "adrs_state")}
                                            value={this.state.adrs_state}
                                        />
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='adrs_City'
                                            placeholder="adrs_City *"
                                            onChange={(event) => this.handleChange(event, "adrs_City")}
                                            value={this.state.adrs_City}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={12}>
                                    <Grid item xs={3} lg={3}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name="adrs_numcode"
                                            value={this.state.adrs_numcode}
                                            onKeyPress={(e) => this.handleKeyPress(e, "adrs_numcode")}
                                            onChange={(event) => this.handleChange(event, "adrs_numcode")}
                                            placeholder="+ 91"
                                        />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='adrs_phonenumber'
                                            onChange={(event) => this.handleChange(event, "adrs_phonenumber")}
                                            placeholder="Phone *"
                                            value={this.state.adrs_phonenumber}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/*  */}
                            {/*  */}
                            {/* <div value="Show/Hide" id='divMsg' style={{display:"none"}}> */}
                            <Grid container item lg={1} />
                            <Grid item xs={12} lg={5}>
                                <Grid container spacing={12}>
                                    <Grid item xs={4} lg={4}>
                                        <SimpleSelect name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                    </Grid>
                                    <Grid item xs={4} lg={4}>
                                        <Input
                                            name="bill_firstname"
                                            className='text-f'
                                            type="text"
                                            value={this.state.bill_firstname}
                                            placeholder="First name"
                                            onChange={(event) => this.handleChange(event, "bill_firstname")}
                                        />
                                    </Grid>
                                    <Grid item xs={4} lg={4}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name="bill_lastname"
                                            value={this.state.bill_lastname}
                                            placeholder="Last name"
                                            onChange={(event) => this.handleChange(event, "bill_lastname")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={6} lg={6}>
                                        <SimpleSelect name={['India']} selectData={['India']} />
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='bill_zipcode'
                                            placeholder="Pin Code/Zip Code"
                                            onChange={(event) => this.handleChange(event, "bill_zipcode")}
                                            value={this.state.bill_zipcode}
                                            onKeyPress={(e) => this.handleKeyPress(e, "bill_zipcode")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={12} lg={12}>
                                        <Input
                                            type="text"
                                            placeholder="Address *"
                                            name='bill_address'
                                            onChange={(event) => this.handleChange(event, "bill_address")}
                                            value={this.state.bill_address}

                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            style={{ float: "left" }}
                                            className='text-f'
                                            type="text"
                                            name='bill_state'
                                            placeholder="State *"
                                            onChange={(event) => this.handleChange(event, "bill_state")}
                                            value={this.state.bill_state}
                                        />
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='bill_City'
                                            placeholder="City *"
                                            onChange={(event) => this.handleChange(event, "bill_City")}
                                            value={this.state.bill_City}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={12}>
                                    <Grid item xs={3} lg={3}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name="bill_numcode"
                                            value={this.state.bill_numcode}
                                            onKeyPress={(e) => this.handleKeyPress(e, "bill_numcode")}
                                            onChange={(event) => this.handleChange(event, "bill_numcode")}
                                            placeholder="+ 91"
                                        />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='bill_phonenumber'
                                            onChange={(event) => this.handleChange(event, "bill_phonenumber")}
                                            placeholder="Phone *"
                                            value={this.state.bill_phonenumber}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* </div> */}
                        </Grid>

                        <div className='login-butn'>
                            <Button type="submit" className='apply-b'>Save and Review</Button>
                        </div>
                    </form>

                </div>
            </Container>
        )
    }
}
export default Addressform;