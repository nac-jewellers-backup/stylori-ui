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
        firstname: "",
        lastname: "",
        selectcountry: "",
        zipcode: "",
        address: "",
        state: "",
        City: "",
        phonenumber: "",
    }

    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
    } 
    
    myFunction = () => {
        // if (document.getElementById('myCheck').checked) {
        //     document.getElementById('text').style.display = 'block';
        // } else {
        //     document.getElementById('text').style.display = 'none';
        // }
    }

    render() {
        return (
            <Container>
                <div className='pt-sm'>
                    <form onSubmit={this.handleSubmit()}>
                        <h5 className='title'> Shipping Address</h5>
                        <p class="form-group tp" >
                            <Checkboxes id="myCheck" onclick={this.myFunction()} CheckBoxValues={['0']} />
                            If your billing address is different from the shipping adress please uncheck the box to select billing address.</p>    <Grid container item xs={12} lg={12} >
                            <Grid item xs={12} lg={5}>

                                <Grid container spacing={12}>
                                    <Grid item xs={4} lg={4}>
                                        <SimpleSelect name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                    </Grid>
                                    <Grid item xs={4} lg={4}>
                                        <Input
                                            name="firstname"
                                            className='text-f'
                                            type="text"
                                            value={this.state.firstname}
                                            placeholder="First name"
                                            required
                                            onChange={(event) => this.handleChange(event)}
                                        />
                                    </Grid>
                                    <Grid item xs={4} lg={4}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name="lastname"
                                            value={this.state.lastname}
                                            placeholder="Last name"
                                            onChange={(event) => this.handleChange(event)}
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
                                            name='zipcode'
                                            placeholder="Pin Code/Zip Code"
                                            onChange={(event) => this.handleChange(event)}
                                            value={this.state.zipcode}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={12} lg={12}>
                                        <Input
                                            type="text"
                                            placeholder="Address *"
                                            required
                                            name='address'
                                            onChange={(event) => this.handleChange(event)}
                                            value={this.state.address}

                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            style={{ float: "left" }}
                                            className='text-f'
                                            type="text"
                                            name='state'
                                            placeholder="State *"
                                            onChange={(event) => this.handleChange(event)}
                                            value={this.state.state}
                                        />
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='City'
                                            placeholder="City *"
                                            onChange={(event) => this.handleChange(event)}
                                            value={this.state.City}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={12}>
                                    <Grid item xs={3} lg={3}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            placeholder="+ 91"
                                        />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='phonenumber'
                                            onChange={(event) => this.handleChange(event)}
                                            placeholder="Phone *"
                                            value={this.state.phonenumber}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/*  */}
                            {/*  */}
                            {/* <div value="Show/Hide" id='divMsg' style={{display:"none"}}> */}
                            <Grid container item lg={1} />
                            <Grid item xs={12} lg={5} style={{ float: "right" }}>
                                <div style={{ float: "right" }} id="text" style={{ display: "none" }} >
                                    <h5 className='title'>  Billing  address </h5>
                                    <Grid container spacing={12}>
                                        <Grid item xs={4} lg={4}>
                                            <SimpleSelect name={['Select']} selectData={['one', 'tow']} />
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                value={'3'}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                value={'23'}
                                                required
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
                                                placeholder="Pin Code/Zip Code"
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={12}>
                                        <Grid item xs={12} lg={12}>
                                            <Input
                                                type="text"
                                                placeholder="Address *"
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={12}>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                style={{ float: "left" }}
                                                className='text-f'
                                                type="text"
                                                placeholder="State *"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                placeholder="City *"
                                                required
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={12}>
                                        <Grid item xs={3} lg={3}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                placeholder="+ 91"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={9} lg={9}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                placeholder="Phone *"
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
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