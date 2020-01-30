import {
    Grid,
    Button,
    Hidden,
    Container,
    ExpansionPanelSummary,
    ExpansionPanel,
    Typography,
    TextField
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import './product-images.css'
import { Input } from '../InputComponents/TextField/Input'
import { Form } from '../Form/Form'
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { API_URL } from '../../config'
import { SnackBar } from "components/snackbarAlert/SnackBar"

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            mailId: "",
            names: "",
            mobileNo: "",
            request: "",
            isNumber: false,
            fetch: false,
            product_sku: "",
            open: false,
            messageData: "",
            errors: {
                mailId: false,
                names: false,
                mobileNo: false,
                request: false
            },
            errorMessage: {
                mailId: "Name is required",
                names: "Email is required",
                mobileNo: "Mobile number is required",
                request: "Content is required"
            },
        };
    }
    // const { loading: ntx, error: ntxerr, data: ntxdata, makeFetch } = useNetworkRequest('/addquestion', {}, false, {})
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        event.preventDefault();
        let errors = this.state.errors;
        let errorMessage = this.state.errorMessage;
        // if (name === "" && this.state['errors'] && this.state['errorMessage']) {
        this.state['errors'][name] = false
        this.setState((state) => ({ state, [name]: value }))
        // }
        // this.setState({ [name]: value }, () => {
        // })
    }
    handleError = (e) => {
        e.preventDefault();
        let { errors } = this.state;
        errors = {
            ...errors,
            [e.target.name]: true,
        }
        this.setState({ errors })
    }
    status = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }
    json = (response) => {
        return response.json()
    }
    handleSubmit = async (e) => {
        if (this.state.names === "" && this.state['errors'] && this.state['errorMessage']) {
            this.state['errors']['names'] = true
            this.setState((state) => ({ state }))
        }
        if (this.state.mailId === "" && this.state['errors'] && this.state['errorMessage']) {
            this.state['errors']['mailId'] = true
            this.setState((state) => ({ state }))
        }
        if (this.state.mobileNo === "" && this.state['errors'] && this.state['errorMessage']) {
            this.state['errors']['mobileNo'] = true
            this.setState((state) => ({ state }))
        }
        if (this.state.request === "" && this.state['errors'] && this.state['errorMessage']) {
            this.state['errors']['request'] = true
            this.setState((state) => ({ state }))
        }
        else {
            fetch(`${API_URL}/asktoexport`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:
                    JSON.stringify({
                        "name": this.state.names,
                        "email": this.state.mailId,
                        "phone": this.state.mobileNo,
                        "message": this.state.request,
                        "product_sku": this.props && this.props.data && this.props.data[0] && this.props.data[0].skuId,
                        "sku_url":window.location.href
                    })

            })
                .then(this.status)
                .then(this.json)
                .then((data) => {
                    this.setState((state) => ({ names: "", mailId: "", mobileNo: "", request: "", messageData: data.message, open: true }))
                })
                .catch((error) => {
                    // console.log('Error:', error);
                });
        }
    }
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    handleClose = () => {
        this.setState({ open: false })
    }
    handleKeyPress = (event, isNumber) => {
        if (isNumber) {
            if (!(event.which >= 48 && event.which <= 57)) event.preventDefault();
        }
    };

    Requestform = (errors, handleError, errorMessage, handleChange) => {
        const { classes, data } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <div className='overall-boxz' style={{}}>
                    <form action="javascript:void(0)" >
                        <div className='overall-bo'>
                            <Hidden smDown>
                                <span className={`product-details ${classes.normalfonts}`}>Ask Our Expert</span>
                                <hr class="bottom-line"></hr>
                            </Hidden>
                            <Grid container spacing={12} >
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="names"
                                        value={this.state.names}
                                        onInvalid={e => handleError(e)}
                                        error={errors.names ? true : false}
                                        helperText={errors.names ? errorMessage.names : ''}
                                        placeholder="Enter your name"
                                        className="request-text"
                                        onChange={event => handleChange(event, 'names')}
                                    />
                                    <label className='errtextFeild'> {errors.names && this.state.errorMessage.names && this.state.errorMessage.names}</label>
                                </Grid>
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="email"
                                        name="mailId"
                                        value={this.state.mailId}
                                        onInvalid={e => handleError(e)}
                                        error={errors.mailId ? true : false}
                                        helperText={errors.mailId ? errorMessage.mailId : ''}
                                        placeholder="Enter your email address"
                                        className="request-text"
                                        onChange={event => handleChange(event, 'mailId')}
                                    />
                                    <label className='errtextFeild'> {errors.mailId && this.state.errorMessage.mailId && this.state.errorMessage.mailId}</label>
                                </Grid>
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        isNumber
                                        maxLength={10}
                                        minLength={10}
                                        name="mobileNo"
                                        value={this.state.mobileNo}
                                        onInvalid={e => handleError(e)}
                                        error={errors.mobileNo ? true : false}
                                        helperText={errors.mobileNo ? errorMessage.mobileNo : ''}
                                        placeholder="Enter your mobile number"
                                        className="request-text"
                                        onChange={event => handleChange(event, 'mobileNo')}
                                        onKeyPress={event => { this.handleKeyPress(event, 'isNumber') }}
                                    />
                                    <label className='errtextFeild'> {errors.mobileNo && this.state.errorMessage.mobileNo && this.state.errorMessage.mobileNo}</label>
                                </Grid>
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="request"
                                        value={this.state.request}
                                        placeholder="Enter your request"
                                        className="request-text"
                                        onChange={event => handleChange(event, 'request')}
                                    />
                                    <label className='errtextFeild'> {errors.request && this.state.errorMessage.request}</label>
                                </Grid>

                            </Grid>
                            <SnackBar handleClose={this.handleClose} anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                                classNameCloseIcon={'closeIcon'}
                                classNames={"snackBar"} message={this.state.messageData} open={this.state.open} />
                            <Grid container>
                                <Grid xs={12} lg={12} >
                                    <Button onClick={(e) => this.handleSubmit(e)} className={`requset-button ${classes.fontwhite} ${classes.normalcolorback}`}>
                                        Submit
                            </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


    render() {
        const { expanded, errors, errorMessage } = this.state;
        const { classes, data } = this.props;
        return (
            <div>

                <Hidden smDown>
                    {/* <Form children={this.Requestform} inputvalues={this.state.values} /> */}
                    <Grid style={{ borderRadius: "5px", width: "100%" }}>
                        {this.Requestform(errors, this.handleError, errorMessage, this.handleChange)}
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        <ExpansionPanel style={{ boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)", padding: "0 10px", marginBottom: "0px" }} expanded={expanded === 'panel3'} onChange={this.handle('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div style={{ width: "100%" }} >
                                    <Typography className={`product-details-smrt ${classes.normalfonts}`}>Ask our Expert</Typography>
                                    {/* <hr class="bottom-line border-line-"></hr> */}
                                </div>
                            </ExpansionPanelSummary>
                            <Grid container spacing={12}>
                                <Grid item xs={12} className="product-subhead">
                                    <span style={{ fontSize: "12px" }}>
                                        {/* <Form children={this.Requestform} /> */}
                                        {this.Requestform(errors, this.handleError, errorMessage, this.handleChange)}
                                    </span>
                                </Grid>
                            </Grid>
                        </ExpansionPanel><br />
                    </Container> </Hidden>
            </div>
        )
    }
}
Request.propTypes = {
    render: PropTypes.func,
    Requestform: PropTypes.func,
};
export default withStyles(styles)(Request);