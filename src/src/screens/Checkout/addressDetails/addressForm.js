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
    var local_storages = (localStorage.getItem("vals"));
    var isedit = (localStorage.getItem("isedit"));
    let lgn = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[0] : ""
    let lgn1 = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[1] : ""
    const a = values.addressOne
    const b = values.addressTwo ? values.addressTwo : a
    const aa = localStorage.getItem("m") ? localStorage.getItem("m") : ""
    return (
        <Container>
            <div>
                {(isedit === '1' ? true : false) && values.addrs === true ?
                    <div className='pt-sm'>
                        <form onSubmit={(e) => {
                            handle.handleSubmit(e)
                            setValues({ addrs: !values.addrs });
                            if (Object.keys(lgn).length > 0) {
                                lgn = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[0] : ""
                                var data = {}
                                var allUserAddresses = {}
                                var nodes = {}
                                data['data'] = allUserAddresses
                                allUserAddresses['allUserAddresses'] = nodes
                                nodes['nodes'] = [a]
                                // const nodes = [a]
                                localStorage.setItem("vals", JSON.stringify(data))
                            }
                            else {
                                localStorage.setItem("valuessetdata", JSON.stringify(values))
                            }
                            // window.location.reload(); 
                        }} autoComplete={true}>
                            {localStorage.getItem("valuessetdata") || localStorage.getItem("vals") ? "" : <h5 className='title'> Shipping Address</h5>}
                            <p class="form-group tp" style={{ width: "480px" }}>
                                {cl}
                            </p>  <Grid container item xs={12} lg={12} >
                                <Grid item xs={12} lg={5}>
                                    {localStorage.getItem("valuessetdata") || localStorage.getItem("vals") ?
                                        <h5 className='title'>Edit Address</h5> :
                                        <>
                                            {!values.checkValue && 'If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form.'}
                                            {values.checkValue && 'If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form.'}
                                        </>
                                    }
                                    <Grid container spacing={12}>
                                        <Grid item xs={4} lg={4}>
                                            <SimpleSelect val={'1'} name={aa ? [aa] : ['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                            <Input
                                                name="firstname"
                                                className='text-f'
                                                type="text"
                                                value={values.addressOne.firstname}
                                                placeholder="First name"
                                                required
                                                onChange={(event) => handle.handleChange('addressOne', 'firstname', event.target.value)}
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
                                                required onChange={(event) => handle.handleChange('addressOne', 'lastname', event.target.value)}
                                                helperText="Lastname is required"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={12}>
                                        <Grid item xs={6} lg={6}>
                                            <SimpleSelect name={values.addressOne.country ? values.addressOne.country : ""} selectData={['India']}
                                                disabled={'disabled'} />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name='pincode'
                                                placeholder="Pin Code/Zip Code"
                                                onChange={(event) => handle.handleChange('addressOne', 'pincode', event.target.value)}
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
                                                onChange={(event) => handle.handleChange('addressOne', 'addressline1', event.target.value)}
                                                value={values.addressOne.addressline1}
                                                helperText="Address is required"
                                                required />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={12}>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                style={{ float: "left", width: "99%", background: "rgba(192, 192, 192, 0.41)" }}
                                                type="text"
                                                name='state'
                                                placeholder="State *"
                                                onChange={(event) => handle.handleChange('addressOne', 'state', event.target.value)}
                                                value={values.addressOne.state}
                                                helperText="State is required"
                                                InputProps={{
                                                    readOnly: true,
                                                }} required />
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name='city'
                                                placeholder="city *"
                                                style={{ background: "rgba(192, 192, 192, 0.41)" }}
                                                onChange={(event) => handle.handleChange('addressOne', 'city', event.target.value)}
                                                value={values.addressOne.city}
                                                helperText="City is required"
                                                InputProps={{
                                                    readOnly: true,
                                                }} required />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={12}>
                                        <Grid item xs={3} lg={3}>
                                            <SimpleSelect name={['+91']} selectData={['+91']}
                                                disabled={'disabled'}
                                                value={values.addressOne.country_code} />
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
                                        </Grid>
                                        <Grid item xs={9} lg={9}>
                                            <Input
                                                className='text-f'
                                                type="text"
                                                name='contactNumber'
                                                onKeyPress={(e) => handle.handleKeyPress(e, "contactNumber")}
                                                onChange={(event) => handle.handleChange('addressOne', 'contactNumber', event.target.value)}
                                                placeholder="Phone *"
                                                value={values.addressOne.contactNumber}
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
                                                <SimpleSelect val={"2"} name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                                            </Grid>
                                            <Grid item xs={4} lg={4}>
                                                <Input
                                                    name="firstnametwo"
                                                    className='text-f'
                                                    type="text"
                                                    value={values.addressTwo.firstname}
                                                    placeholder="First name"
                                                    required
                                                    onChange={(event) => handle.handleChange('addressTwo', 'firstname', event.target.value)}
                                                    helperText="Firstname is required"
                                                />
                                            </Grid>
                                            <Grid item xs={4} lg={4}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name="lastnametwo"
                                                    value={values.addressTwo.lastname}
                                                    placeholder="Last name"
                                                    required onChange={(event) => handle.handleChange('addressTwo', 'lastname', event.target.value)}
                                                    helperText="Lastname is required"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={12}>
                                            <Grid item xs={6} lg={6}>
                                                <SimpleSelect name={values.addressTwo.country ? values.addressTwo.country : ""} selectData={['India']}
                                                    disabled={'disabled'} />
                                            </Grid>
                                            <Grid item xs={6} lg={6}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name='pincodetwo'
                                                    placeholder="Pin Code/Zip Code"
                                                    onChange={(event) => handle.handleChange('addressTwo', 'pincode', event.target.value, 'pincode2')}
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
                                                    name='addressline1two'
                                                    onChange={(event) => handle.handleChange('addressTwo', 'addressline1', event.target.value)}
                                                    value={values.addressTwo.addressline1}
                                                    helperText="Address is required"
                                                    required />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={12}>
                                            <Grid item xs={6} lg={6}>
                                                <Input
                                                    style={{ float: "left", width: "99%", background: "rgba(192, 192, 192, 0.41)" }}
                                                    type="text"
                                                    name='statetwo'
                                                    placeholder="State *"
                                                    onChange={(event) => handle.handleChange('addressTwo', 'state', event.target.value)}
                                                    value={values.addressTwo.state}
                                                    helperText="State is required"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }} required />
                                            </Grid>
                                            <Grid item xs={6} lg={6}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name='citytwo'
                                                    placeholder="city *"
                                                    style={{ background: "rgba(192, 192, 192, 0.41)" }}
                                                    onChange={(event) => handle.handleChange('addressTwo', 'city', event.target.value)}
                                                    value={values.addressTwo.city}
                                                    helperText="City is required"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }} required />
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={12}>
                                            <Grid item xs={3} lg={3}>
                                                <SimpleSelect name={['+91']} selectData={['+91']}
                                                    disabled={'disabled'} />
                                                {/* <Input
                                                    className='text-f'
                                                    type="text"
                                                    name="bill_country_code"
                                                    value={values.addressTwo.bill_country_code}
                                                    onChange={(event) => handle.handleChange(event, "bill_country_code")}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "bill_country_code")}
                                                    placeholder="+ 91"
                                                    isNumber
                                                    maxLength={2}
                                                    minLength={2}
                                                    required
                                                /> */}
                                            </Grid>
                                            <Grid item xs={9} lg={9}>
                                                <Input
                                                    className='text-f'
                                                    type="text"
                                                    name='contactNumbertwo'
                                                    onChange={(event) => handle.handleChange('addressTwo', 'contactNumber', event.target.value)}
                                                    onKeyPress={(e) => handle.handleKeyPress(e, "contactNumber")}
                                                    placeholder="Phone *"
                                                    value={values.addressTwo.contactNumber}
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
                                <Button type="submit" className='apply-b'>Save and Review</Button>
                            </div>
                        </form>
                    </div>
                    : <Addressdetails values={values} setValues={setValues} changevalue={props.changePanel} redirectForm={handle.redirectForm} />}
            </div>
        </Container>
    )
}
export default Addressform;