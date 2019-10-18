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
                            <p class="form-group tp" style={{ width: "480px" }}>
                                {cl}
                            </p>  <Grid container item xs={12} lg={12} >
                                <Grid item xs={12} lg={5}>
                                    {!values.checkValue && 'If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form.'}
                                    {values.checkValue && 'If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form.'}
                                    <Grid container spacing={12}>
                                        <Grid item xs={4} lg={4}>
                                            <SimpleSelect name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                            <Input
                                                name="firstname"
                                                className='text-f'
                                                type="text"
                                                value={values.addressOne.firstname}
                                                placeholder="First name"
                                                required
                                                onChange={(event) => handle.handleChange(event, event.target.value)}
                                                helperText="Firstname is required"
                                            />
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name="lastname"
                                                value={values.addressOne.lastname}
                                                placeholder="Last name"
                                                required onChange={(event) => handle.handleChange(event, event.target.value)}
                                                helperText="Lastname is required"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={12}>
                                        <Grid item xs={6} lg={6}>
                                            {/* <SimpleSelect name={['country']} selectData={['country']}
                                                value={values.addressOne.state} /> */}
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
                                                    value={values.addressOne.name}
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
                                                onChange={(event) => handle.handleChange(event, event.target.value)}
                                                value={values.addressOne.pincode}
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
                                                onChange={(event) => handle.handleChange(event, event.target.value)}
                                                value={values.addressOne.addressline1}
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
                                                onChange={(event) => handle.handleChange(event, event.target.value)}
                                                value={values.addressOne.state}
                                                helperText="State is required"
                                                required />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name='city'
                                                placeholder="city *"
                                                onChange={(event) => handle.handleChange(event, event.target.value)}
                                                value={values.addressOne.city}
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
                                                value={values.addressOne.country_code}
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
                                                    // value={values.addressOne.name}
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
                                                onChange={(event) => handle.handleChange(event, event.target.value)}
                                                placeholder="Phone *"
                                                value={values.addressOne.contactno}
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
                                                    name="firstname"
                                                    className='text-f'
                                                    type="text"
                                                    value={values.addressTwo.firstname}
                                                    placeholder="First name"
                                                    required
                                                    onChange={(event) => handle.handleChange(event, event.target.value)}
                                                    helperText="Firstname is required"
                                                />
                                            </Grid>
                                            <Grid item xs={4} lg={4}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name="lastname"
                                                    value={values.addressTwo.lastname}
                                                    placeholder="Last name"
                                                    required onChange={(event) => handle.handleChange(event, event.target.value)}
                                                    helperText="Lastname is required"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={12}>
                                            <Grid item xs={6} lg={6}>
                                                {/* <SimpleSelect name={['country']} selectData={['country']}
                                                value={values.addressTwo.state} /> */}
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
                                                        value={values.addressTwo.name}
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
                                                    name='pincode'
                                                    placeholder="Pin Code/Zip Code"
                                                    onChange={(event) => handle.handleChange(event, event.target.value)}
                                                    value={values.addressTwo.pincode}
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
                                                    onChange={(event) => handle.handleChange(event, event.target.value)}
                                                    value={values.addressTwo.addressline1}
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
                                                    onChange={(event) => handle.handleChange(event, event.target.value)}
                                                    value={values.addressTwo.state}
                                                    helperText="State is required"
                                                    required />
                                            </Grid>
                                            <Grid item xs={6} lg={6}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name='city'
                                                    placeholder="city *"
                                                    onChange={(event) => handle.handleChange(event, event.target.value)}
                                                    value={values.addressTwo.city}
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
                                                    value={values.addressTwo.country_code}
                                                    onChange={(event) => handle.handleChange(event, "country_code")}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "country_code")}
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
                                                        // value={values.addressTwo}
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
                                                    onChange={(event) => handle.handleChange(event, event.target.value)}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "contactno")}
                                                    placeholder="Phone *"
                                                    value={values.addressTwo.contactno}
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
