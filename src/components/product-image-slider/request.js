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
            errors: {
                mailId: "",
                names: "",
                mobileNo: "",
            },
            errorMessage: {
                mailId: "Please filled out your email Id",
                names: "Please filled out name",
                mobileNo: "Please enter yout 10 digit mobile number",
            },
        };
    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        event.preventDefault();
        let errors = this.state.errors;
        let errorMessage = this.state.errorMessage;
        switch (name) {
            case 'names':
                errors.names =
                    value.names === "" ? errorMessage : "";
                break;
            case 'mobileNo':
                errors.mobileNo =
                    value.length < 10 ? errorMessage : "";
                break;
            case 'mailId':
                errors.mailId =
                    value.mailId === ""
                        ? errorMessage
                        : '';
                break;

        }
        this.setState({ errors, [name]: value }, () => {
            // console.log(errors)
        })
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
    handleSubmit = (e) => {
        //k
    }
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    handleKeyPress = (event, isNumber) => {
        if (isNumber) {
            if (!(event.which >= 48 && event.which <= 57)) event.preventDefault();
        }
    };

    Requestform = (errors, handleError, errorMessage) => {
        const { classes } = this.props;
        return (
            <div>
                <div className='overall-boxz'>
                    <form onSubmit={this.handleSubmit()}>
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
                                        placeholder="Name"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'names')}
                                        required />
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
                                        placeholder="Enter your mail"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'mailId')}
                                        required />
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
                                        placeholder="909419****"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'mobileNo')}
                                        onKeyPress={event => { this.handleKeyPress(event, 'isNumber') }}
                                        required />
                                </Grid>
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="request"
                                        value={this.state.request}
                                        placeholder="Enter Request"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'request')}
                                    />
                                </Grid>

                            </Grid>
                            <Grid container>
                                <Grid xs={12} >
                                    <Button type="submit" className={`requset-button ${classes.fontwhite} ${classes.normalcolorback}`}>
                                        Send
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
        const { classes } = this.props;
        return (
            <div>

                <Hidden smDown>
                    {/* <Form children={this.Requestform} inputvalues={this.state.values} /> */}

                    {this.Requestform(errors, this.handleError, errorMessage)}
                </Hidden>


                <Hidden mdUp>
                    <Container>
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handle('panel3')}
                            style={{ boxShadow: "none", backgroundColor: "none" }}>
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>}
                            >
                                <div style={{ width: "100%" }} >
                                    <Typography className={`product-details-smrt ${classes.normalfonts}`}>Ask Our Expert</Typography>
                                    <hr class="bottom-line border-line-"></hr>
                                </div>
                            </ExpansionPanelSummary>
                            <Grid container spacing={12}>
                                <Grid item xs={12} className="product-subhead">
                                    <span style={{ fontSize: "12px" }}>
                                        <Form children={this.Requestform} />
                                    </span>
                                </Grid>
                            </Grid>
                        </ExpansionPanel>
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