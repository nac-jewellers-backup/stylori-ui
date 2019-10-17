import React from 'react';
import './address.css'
import { Container, Grid, Button, OutlinedInput, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import Checkboxes from '../../../components/InputComponents/CheckBox/CheckBox';
import SimpleSelect from '../../../components/InputComponents/Select/Select'
import Addressdetails from './addressDetails';
import Addressforms from './Addressforms'

const Addressform = (props) => {
    return <AddressComponent   {...props} />
}

const AddressComponent = (props) => { 
    const { values, handle, setValues } = Addressforms();
    const cl = <input onChange={() => setValues({
        ...values,
        checkValue: !values.checkValue
    })} type='checkbox' checked={values.checkValue} />
    return (
        <Container>
            <div>
                {values.addrs === true ?
                    <div className='pt-sm'>
                        <form onSubmit={(e) => {
                            localStorage.setItem("valuessetdata", JSON.stringify(values))
                            handle.handleSubmit(e)
                            setValues({ addrs: !values.addrs });
                            //
                        }}>
                            <h5 className='title'> Shipping Address</h5>
                            <p class="form-group tp ts" style={{ width: "480px" }}>
                                {/* <Checkboxes CheckBoxValues={['']} change={() => {
                                    setValues({
                                        checkValue: !values.checkValue
                                    })
                                }} checked={values.checkValue} /> */}
                                {cl}
                                {/* {values.checkValue + ""} */}
                                {/* If your billing address is different from the shipping adress please uncheck the box to select billing address. */}
                                
                                {!values.checkValue &&'If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form.'}
                                {values.checkValue &&'If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form.'}
                                </p>  <Grid container item xs={12} lg={12} >
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
                                                value={values.firstname}
                                                placeholder="First name"
                                                required
                                                onChange={(event) => handle.handleChange(event, "firstname")}
                                                helperText="Firstname is required"
                                            />
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name="lastname"
                                                value={values.lastname}
                                                placeholder="Last name"
                                                required onChange={(event) => handle.handleChange(event, "lastname")}
                                                helperText="Lastname is required"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={12}>
                                        <Grid item xs={6} lg={6}>
                                            {/* <SimpleSelect name={['country']} selectData={['country']}
                                                value={values.state} /> */}
                                            <FormControl disabled style={{ width: "100%", marginTop: '7%' }}>
                                                <InputLabel htmlFor="name-disabled"
                                                    style={{
                                                        marginLeft: '40%',
                                                        marginTop: '-4%'
                                                    }}>India</InputLabel>
                                                <Select
                                                    input={<OutlinedInput id="name-disabled" />}
                                                    style={{ width: "100%" }}
                                                    variant="outlined"
                                                    value={values.name}
                                                    //   onChange={handleChange}
                                                    inputProps={{
                                                        name: 'name',
                                                        id: 'name-disabled',
                                                    }}
                                                >
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name='pincode'
                                                placeholder="Pin Code/Zip Code"
                                                onChange={(event) => handle.handleChange(event, "pincode")}
                                                value={values.pincode}
                                                onKeyPress={(e) => handle.handleKeyPress(e, "pincode")}
                                                helperText="Pin Code is required"
                                                required />

                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={12}>
                                        <Grid item xs={12} lg={12}>
                                            <Input
                                                type="text"
                                                placeholder="Address *"
                                                name='addressline1'
                                                onChange={(event) => handle.handleChange(event, "addressline1")}
                                                value={values.addressline1}
                                                helperText="Address is required"
                                                required />
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
                                                onChange={(event) => handle.handleChange(event, "state")}
                                                value={values.state}
                                                helperText="State is required"
                                                required />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name='city'
                                                placeholder="city *"
                                                onChange={(event) => handle.handleChange(event, "city")}
                                                value={values.city}
                                                helperText="City is required"
                                                required />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={12}>
                                        <Grid item xs={3} lg={3}>
                                            {/* <Input
                                                className='text-f'
                                                type="text"
                                                name="country_code"
                                                value={values.country_code}
                                                onChange={(event) => handle.handleChange(event, "country_code")}
                                                onKeyPress={(e) => handle.handleKeyPress(e, "country_code")}
                                                placeholder="+ 91"
                                                maxLength={2}
                                                minLength={2}
                                                required
                                            /> */}
                                            <FormControl disabled style={{ width: "100%", marginTop: '13%' }}>
                                                <InputLabel htmlFor="name-disabled"
                                                    style={{
                                                        marginLeft: '40%',
                                                        marginTop: '-4%'
                                                    }}>+91</InputLabel>
                                                <Select
                                                    input={<OutlinedInput id="name-disabled" />}
                                                    style={{ width: "100%" }}
                                                    variant="outlined"
                                                    value={values.name}
                                                    //   onChange={handleChange}
                                                    inputProps={{
                                                        name: 'name',
                                                        id: 'name-disabled',
                                                    }}
                                                >
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={9} lg={9}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name='contactno'
                                                onKeyPress={(e) => handle.handleKeyPress(e, "contactno")}
                                                onChange={(event) => handle.handleChange(event, "contactno")}
                                                placeholder="Phone *"
                                                value={values.contactno}
                                                helperText="Please enter yout 10 digit Phone no**"
                                                maxLength={10}
                                                minLength={10}
                                                required />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/*  */}
                                {/*  */}
                                <Grid container item lg={1} />
                                {!values.checkValue &&
                                    <Grid item xs={12} lg={5}>
                                        <h5 className='title'> Billing Address</h5>
                                        <Grid container spacing={12}>
                                            <Grid item xs={4} lg={4}>
                                                <SimpleSelect name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                            </Grid>
                                            <Grid item xs={4} lg={4}>
                                                <Input
                                                    name="bill_firstname"
                                                    className='text-f'
                                                    type="text"
                                                    value={values.bill_firstname}
                                                    placeholder="First name"
                                                    required
                                                    onChange={(event) => handle.handleChange(event, "bill_firstname")}
                                                    helperText="Firstname is required"
                                                />
                                            </Grid>
                                            <Grid item xs={4} lg={4}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name="bill_lastname"
                                                    value={values.bill_lastname}
                                                    placeholder="Last name"
                                                    required onChange={(event) => handle.handleChange(event, "bill_lastname")}
                                                    helperText="Lastname is required"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={12}>
                                            <Grid item xs={6} lg={6}>
                                                {/* <SimpleSelect name={['country']} selectData={['country']}
                                                value={values.bill_state} /> */}
                                                <FormControl disabled style={{ width: "100%", marginTop: '7%' }}>
                                                    <InputLabel htmlFor="name-disabled"
                                                        style={{
                                                            marginLeft: '40%',
                                                            marginTop: '-4%'
                                                        }}>India</InputLabel>
                                                    <Select
                                                        input={<OutlinedInput id="name-disabled" />}
                                                        style={{ width: "100%" }}
                                                        variant="outlined"
                                                        value={values.bill_name}
                                                        //   onChange={handleChange}
                                                        inputProps={{
                                                            name: 'name',
                                                            id: 'name-disabled',
                                                        }}
                                                    >
                                                        {/* <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem> */}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} lg={6}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name='bill_pincode'
                                                    placeholder="Pin Code/Zip Code"
                                                    onChange={(event) => handle.handleChange(event, "bill_pincode")}
                                                    value={values.bill_pincode}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "bill_pincode")}
                                                    helperText="Pin Code is required"
                                                    required />

                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={12}>
                                            <Grid item xs={12} lg={12}>
                                                <Input
                                                    type="text"
                                                    placeholder="Address *"
                                                    name='bill_addressline1'
                                                    onChange={(event) => handle.handleChange(event, "bill_addressline1")}
                                                    value={values.bill_addressline1}
                                                    helperText="Address is required"
                                                    required />
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
                                                    onChange={(event) => handle.handleChange(event, "bill_state")}
                                                    value={values.bill_state}
                                                    helperText="State is required"
                                                    required />
                                            </Grid>
                                            <Grid item xs={6} lg={6}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name='bill_city'
                                                    placeholder="city *"
                                                    onChange={(event) => handle.handleChange(event, "bill_city")}
                                                    value={values.bill_city}
                                                    helperText="City is required"
                                                    required />
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={12}>
                                            <Grid item xs={3} lg={3}>
                                                {/* <Input
                                                    className='text-f'
                                                    type="text"
                                                    name="bill_country_code"
                                                    value={values.bill_country_code}
                                                    onChange={(event) => handle.handleChange(event, "bill_country_code")}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "bill_country_code")}
                                                    placeholder="+ 91"
                                                    isNumber
                                                    maxLength={2}
                                                    minLength={2}
                                                    required
                                                /> */}
                                                <FormControl disabled style={{ width: "100%", marginTop: '13%' }}>
                                                <InputLabel htmlFor="name-disabled"
                                                    style={{
                                                        marginLeft: '40%',
                                                        marginTop: '-4%'
                                                    }}>+91</InputLabel>
                                                <Select
                                                    input={<OutlinedInput id="name-disabled" />}
                                                    style={{ width: "100%" }}
                                                    variant="outlined"
                                                    value={values.name}
                                                    //   onChange={handleChange}
                                                    inputProps={{
                                                        name: 'name',
                                                        id: 'name-disabled',
                                                    }}
                                                >
                                                </Select>
                                            </FormControl>
                                            </Grid>
                                            <Grid item xs={9} lg={9}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name='bill_contactno'
                                                    onChange={(event) => handle.handleChange(event, "bill_contactno")}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "bill_contactno")}
                                                    placeholder="Phone *"
                                                    value={values.bill_contactno}
                                                    helperText="Please enter your 10 digit Phone no**"
                                                    isNumber
                                                    maxLength={10}
                                                    minLength={10}
                                                    required />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                } </Grid>

                            <div className='login-butn'>
                                <Button type="submit"
                                    className='apply-b'>Save and Review</Button>
                            </div>
                        </form>
                    </div>
                    : <Addressdetails values={values} setValues={setValues} changevalue={props.changePanel} redirectForm={handle.redirectForm} />}
            </div>
        </Container>
    )
}
export default Addressform;
