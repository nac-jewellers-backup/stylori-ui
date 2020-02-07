import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
import { Input } from '../../components/InputComponents/TextField/Input'
import HelpContact from "../../components/faqs/faqsHelp"
import { SnackBar } from "components/snackbarAlert/SnackBar"
import { useNetworkRequest } from '../../hooks/NetworkHooks'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: "20px 15px 20px 15px"
    },
    contact_us: {
        fontSize: "21px",
        color: "#ed1165",
        fontWeight: 600,
        marginBottom: "10px"
    },
    Subtitle: {
        color: "#394578",
        fontSize: "17px",
        margin: "10px 0px",
        fontWeight: 600
    },
    Subtitle2: {
        color: "#394578",
        fontSize: "17px",
        margin: "10px 0px 20px 0px",
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            margin: "24px 0px 20px 0px",
        }
    },
    Subtitle3: {
        color: "#394578",
        fontSize: "17px",
        margin: "30px 0px 10px 0px",
        fontWeight: 600
    },
    widthFull: {
        width: "100%"
    },
    textFeild: {
        margin: "15px 0px 20px 0px !important"
    },
    smallSizeTypo: {
        color: "#666",
        fontSize: "14px",
        lineHeight: "19px"
    },
    maginBottomOnly: {
        marginBottom: "15px"
    }, Button: {
        backgroundColor: "#ed1165",
        width: "100%",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#ed1165",
        }

    },
    dottedvalue: {
        borderTop: "1px dashed #CCC",
        margin: "40px 0px 10px 0px",
        width: "100%",
    },
    smallSizeTypoblue: {
        fontSize: "15px",
        color: "#394578",
        lineHeight: "20px"
    },
    midconatiner:{
        justifyContent:"center",
        [theme.breakpoints.down('md')]: {
            justifyContent:"flex-start"
        }
    }
}));

export default function CustomizedInputs() {
    const [values, setValues] = React.useState({
        email: "",
        name: "",
        phone: "",
        message: "",
        errorName: "",
        emailError: "",
        errorMessage: "",
        phoneError: "",
        open: false
    });
    const classes = useStyles();
    const { loading: ntx, error: ntxerr, data: ntxdata, makeFetch } = useNetworkRequest('/addquestion', {}, false, {})
    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value, errorName: "", emailError: "", errorMessage: "", phoneError: "" })
    }
    const handleClose = () => {
        setValues({ ...values, open: false })
    }
    const handleSubmit = async () => {
        if (!values.name) {
            setValues({ ...values, errorName: "Name is required" })
        }
        else if (!values.email) {
            setValues({ ...values, emailError: "Email is required" })
        }
        else if (!values.phone) {
            setValues({ ...values, phoneError: "Phone is required" })
        }
        else if (!values.message) {
            setValues({ ...values, errorMessage: "Message is required" })
        }
        else {
            let emails = {
                "name": values.name,
                "email": values.email,
                "phone": values.phone,
                "message": values.message
            }
            await makeFetch(emails);
            setValues({ ...values, name: "", email: "", message: "", phone: "" })
        }
    }
    React.useEffect(() => {
        if (ntxdata && Object.entries(ntxdata).length > 0 && ntxdata.constructor === Object) {
            try {
                setValues({ ...values, open: true })
            } catch (error) {
                alert(error)
            }
        }


    }, [ntxdata])

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.widthFull}>
                <Typography variant="h2" className={classes.contact_us}>
                    Contact us
             </Typography>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Typography variant="h4" className={classes.Subtitle}>
                            Email us
                        </Typography>
                        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                            <Input
                                margin="normal"
                                variant="outlined"
                                autoComplete='off'
                                name="Name"
                                placeholder="Enter your name"
                                value={values.name}
                                error={values.errorName ? true : false}
                                onChange={e => handleChange('name', e.target.value)}
                            />
                            <label className='errtext'> {values.errorName && values.errorName}</label>
                            <Input
                                margin="normal"
                                variant="outlined"
                                type="email"
                                autoComplete='off'
                                name="email"
                                value={values.email}
                                error={values.emailError ? true : false}
                                onChange={e => handleChange('email', e.target.value)}
                                placeholder="Enter your email address"
                            />
                            <label className='errtext'> {values.emailError && values.emailError}</label>
                            <Input
                                margin="normal"
                                variant="outlined"
                                type="tel"
                                autoComplete='off'
                                name="Phone"
                                maxLength={10}
                                value={values.phone}
                                error={values.phoneError ? true : false}
                                onChange={e => handleChange('Phone', e.target.value)}
                                placeholder="Enter your mobile number"
                            />
                            <label className='errtext'> {values.phoneError && values.phoneError}</label>
                            <Input
                                variant="outlined"
                                type="text"
                                name="message"
                                fullWidth
                                placeholder='Enter your message'
                                className={classes.textFeild}
                                maxLength={250}
                                value={values.message}
                                multiline={true}
                                rowsMax={5}
                                row={3}
                                onChange={e => handleChange('message', e.target.value)}
                                error={values.errorMessage && values.errorMessage ? true : false}
                            />
                            <label className='errtext'> {values.errorMessage && values.errorMessage}</label>
                            <Button onClick={() => handleSubmit()} className={classes.Button}>Send Message to Support</Button>
                        </Grid>
                        <SnackBar handleClose={handleClose} anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                            classNameCloseIcon={'closeIcon'}
                            classNames={"snackBar"} message={ntxdata.message} open={values.open} />
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} lg={4} xl={4} className={classes.midconatiner}>
                        <Grid item>
                            <Typography variant="h4" className={classes.Subtitle2}>
                                Office Address
                        </Typography>
                            <p class={classes.smallSizeTypo}>
                                Old No.26/New No.45,
				        <br />KB Dasan Road,Teynampet,  <br />Chennai-600018.
			            </p>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} lg={4} xl={4} className={classes.midconatiner}>
                    <Grid item>
                        <Typography variant="h4" className={classes.Subtitle}>
                            We're Here To Help?
                        </Typography>
                        <Grid className={classes.maginBottomOnly}>
                            <HelpContact contactUs={true} />
                        </Grid>
                        <Typography variant="h4" className={classes.Subtitle3}>
                            Customer Care
                        </Typography>
                        <p class={classes.smallSizeTypo}>
                            Monday to Saturday 10 A.M to 7 P.M IST
			      </p>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid className={classes.dottedvalue}>
                    </Grid>
                    <p class={classes.smallSizeTypoblue}>
                        Chat and Email support is available Monday through Saturday 10am to 7pm IST and we make a serious effort to respond in less than an hour. We do offer phone support, but if you really want to get us on the phone on different time zones, just submit the form and we'll schedule a call.
			            </p>
                </Grid>

            </Grid>
        </Grid>
    );
}
