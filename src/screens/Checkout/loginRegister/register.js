import { Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import './loginRegisters.css'
import { Input } from '../../../components/InputComponents/TextField/Input'
import SimpleSelect from '../../../components/InputComponents/Select/Select';
import useRegister from './useregister';

const Register = (props) => {
    return <RegisterComponent  {...props} />
}

const RegisterComponent = (props) => {
    let email = localStorage.getItem("email") ? localStorage.getItem("email") : '';
    const { values, setValues, handlers, data, valuesedit, valuesadrees } = useRegister(() => props.changePanel(2));
    // var cc = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : ""
    // var ccc = data.message ? data.message : ""
    const paths = window.location.pathname.split("-")[0]==="/account"
    const pathreg = window.location.pathname === "/registers"

    const clear = () => {
        setValues({
            email: "",
            password: "",
            confirmpassword: "",
            firstname: "",
            lastname: "",
            errortext: {
                emerr: "",
                passerr: "",
                cnfpasserr: "",
                firstname: "",
                lastname: ""
            },
            error: {
                passerr: false,
                emerr: false,
                cnfpasserr: false,
                firstname: false,
                lastname: false
            }
        })
        props.change()
    }
    return (
        <div className='pt-sm'>
            <form onSubmit={(e) => {
                handlers.handleSubmit(e)
            }} action="javascript:void(0)" >
                <Grid container>
                
                    <Grid  item xs={12} lg={window.location.pathname === "/registers" ? 12 : 6}  >
                   
                       <Grid style={{paddingLeft:"20px"}}>
                           {window.location.pathname.split("-")[0]!=="/account" &&
                           <h5 className='title'>
                           {window.location.pathname.split("-")[0]==="/account" ? "" : <>
                               {window.location.pathname === "/registers" ? "Register" : "New user registration"}</>}
                       </h5> }
                       
                        {/* <h5>Personal Information</h5> */}
                        {paths ?
                            <Input
                                style={{ background: "rgba(192, 192, 192, 0.41)", width: "100%" }}
                                value={email}
                                InputProps={{
                                    readOnly: true,
                                }}
                            /> : <>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    // type="email"
                                    name="email"
                                    value={values.email}
                                    error={values.error && values.error.emerr ? true : false}
                                    // helperText={values.errortext && values.errortext.emerr}
                                    placeholder="Enter your email Id"
                                    onChange={e => handlers.handleChange('email', e.target.value)}
                                />
                                <label className='errtext'> {values.errortext && values.errortext.emerr}</label></>
                        }
                        {paths ?
                            <Grid container spacing={12} >
                                <Grid item class="passwordRight" >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="password"
                                        name="password"
                                        value={"........"}
                                        // helperText={values.errortext && values.errortext.passerr}
                                        placeholder="Enter your password"
                                        onChange={e => handlers.handleChange('password', e.target.value)}
                                        style={{ background: "rgba(192, 192, 192, 0.41)" }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    /> </Grid>
                                <Grid item  style={{ textAlign: "center", lineHeight: "66px", color: "#337ab7",paddingLeft:"8px" }}>
                                    <a style={{width:"50%"}}> Change password </a> </Grid>
                            </Grid> : <>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    error={values.error && values.error.passerr ? true : false}
                                    // helperText={values.errortext && values.errortext.passerr}
                                    placeholder="Enter your password"
                                    onChange={e => handlers.handleChange('password', e.target.value)}
                                />
                                <label className='errtext'> {values.errortext && values.errortext.passerr}</label></>
                        }
                        {paths ? "" :
                            <>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="password"
                                    name="confirmpassword"
                                    value={values.confirmpassword}
                                    error={values.error && values.error.cnfpasserr ? true : false}
                                    // helperText={values.errortext && values.errortext.cnfpasserr}
                                    placeholder="Enter your Confirm password"
                                    onChange={e => handlers.handleChange('confirmpassword', e.target.value)}
                                />
                                <label className='errtext'> {values.errortext && values.errortext.cnfpasserr}</label>
                            </>
                        }
                        <Grid container spacing={12}>
                            <Grid item lg={4} xs={4}>
                                <SimpleSelect val={'1'} name={['Select']} selectData={['Mr', 'Mrs', 'Ms']} />
                            </Grid>
                            {!paths && <>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="firstname"
                                        value={values.firstname}
                                        error={values.error && values.error.firstname ? true : false}
                                        // helperText={values.errortext && values.errortext.firstname}
                                        placeholder="Enter FirstName*"
                                        onChange={e => handlers.handleChange('firstname', e.target.value)}
                                        className='text-f'
                                    // helperText=""
                                    />
                                    <label className='errtext'> {values.errortext && values.errortext.firstname}</label>
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="lastname"
                                        value={values.lastname}
                                        error={values.error && values.error.lastname ? true : false}
                                        // helperText={values.errortext && values.errortext.lastname}
                                        placeholder="Enter LastName*"
                                        onChange={e => handlers.handleChange('lastname', e.target.value)}
                                        className='text-f'
                                    // helperText=""
                                    />
                                    <label className='errtext'> {values.errortext && values.errortext.lastname}</label>
                                </Grid></>}
                            {paths && <>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="firstname"
                                        value={valuesedit.firstname}
                                        placeholder="Enter FirstName*"
                                        onChange={e => handlers.handleChangeedit('firstname', e.target.value)}
                                        className='text-f'
                                        helperText="Firstname is required"
                                        required  />
                                </Grid>
                                <Grid item lg={4} xs={4}>
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="lastname"
                                        value={valuesedit.lastname}
                                        placeholder="Enter LastName*"
                                        onChange={e => handlers.handleChangeedit('lastname', e.target.value)}
                                        className='text-f'
                                        helperText="Lastname is required"
                                        required/>
                                </Grid></>}
                        </Grid>

                        {paths &&
                            <Grid item xs={12} lg={12}>
                                <Grid container spacing={12}>
                                    <Grid item xs={6} lg={6}>
                                        <SimpleSelect name={"India"} selectData={['India']}
                                            disabled={'disabled'} />
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='pincode'
                                            placeholder="Pin Code/Zip Code"
                                            onChange={e => handlers.handlesetvaluesadrees('pincode', e.target.value)}
                                            value={valuesadrees.pincode}
                                            // onKeyPress={(e) => handle.handleKeyPress(e, "pincode")}
                                            helperText="Pin Code is required"
                                            required />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={12}>
                                    <Grid item xs={3} lg={3}>
                                        <SimpleSelect name={['+91']} selectData={['+91']}
                                            disabled={'disabled'} />
                                    </Grid>
                                    <Grid item xs={9} lg={9}>
                                        <Input
                                            className='text-f'
                                            type="text"
                                            name='contactno'
                                            onChange={(event) => handlers.handlesetvaluesadrees('contactno', event.target.value)}
                                            // onKeyPress={(e) => handle.handleKeyPress(e, "contactno")}
                                            placeholder="Phone *"
                                            value={valuesadrees.contactno}
                                            helperText="Please enter your 10 digit Phone no**"
                                            isNumber
                                            maxLength={10}
                                            minLength={10}
                                            required />
                                    </Grid>
                                </Grid>
                            </Grid>
                        }

                        <div className='login-butn'>
                            {paths || pathreg ? "" : <Button className='back-b' onClick={() => clear()} >Back</Button>}
                            <Button className='apply-b' type="submit" >Register</Button>
                        </div>
                    </Grid>
                </Grid>
                </Grid>
            </form>
        </div>
        
    )
}
export default (Register);