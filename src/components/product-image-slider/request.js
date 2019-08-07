import {
    Grid,
    Button,
    Hidden,
    Container,
    ExpansionPanelSummary,
    ExpansionPanel,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import './product-images.css'
import { Input } from '../InputComponents/TextField/Input'
import { Form } from '../Form/Form'

class Request extends React.Component {
    initialValues = {
        mailId: null,
        name: null,
        mobileNo: null,
        request: null,
    };

    state = {
        expanded: null,
        values: this.initialValues,
        errors: this.initialValues,
    };




    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };


    Requestform = (err, errorhandle, errors, onchnagevalue) => {
        return (
            <div>
                <Hidden smDown>
                    <h4 className="product-details">Ask Our Expert</h4>
                    <hr class="bottom-line"></hr>
                </Hidden>
                <Grid container spacing={12} >
                    <Grid xs={12} lg={6} >
                        <Input
                            type="taxt"
                            name="name"
                            error={err.name}
                            helperText={err.name ? errors.name.required : ''}
                            // onChange={e => onchnagevalue(e)}
                            // onInvalid={e => errorhandle(e)}
                            placeholder="Name"
                            className="request-text"
                            required
                        />
                    </Grid>
                    <Grid xs={12} lg={6} >
                        <Input
                            type="email"
                            name="mailId"
                            error={err.mailId}
                            helperText={err.mailId ? errors.mailId.required : ""}
                            placeholder="your-id@email.com"
                            className="request-text"
                            required
                        />
                    </Grid>
                    <Grid xs={12} lg={6} >
                        <Input
                            className="request-text"
                            isNumber
                            pattern={/[0-9]{10}/}
                            maxLength={10}
                            minLength={10}
                            name="mobileNo"
                            type="text"
                            error={err.mobileNo}
                            helperText={err.mobileNo ? errors.mobileNo.required : ""}
                            placeholder="909419****"
                            required
                        />
                    </Grid>
                    <Grid xs={12} lg={6} >
                        <Input
                            className="request-text"
                            type="text"
                            name="request"
                            error={err.request}
                            helperText={err.request ? errors.request.required : ""}
                            placeholder="Enter Request"
                            required
                        />
                    </Grid>
                    <Grid xs={9} />
                    <Hidden smDown>
                        <Grid xs={2}>
                            <Button type="submit" className="requset-button">
                                Send
                            </Button>
                        </Grid>
                    </Hidden>

                    <Hidden mdUp>
                        <Grid xs={2}>
                            <Button type="submit" className="requset-button-mob">
                                Send
                            </Button>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        )
    }


    render() {
        const { expanded } = this.state;
        return (
            <div>

                <Hidden smDown>
                    <Form children={this.Requestform} />
                </Hidden>


                <Hidden mdUp>
                    <Container>
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handle('panel3')}
                            style={{ boxShadow: "none", backgroundColor: "none" }}>
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                <i class="fa fa-sort-up" ></i></span>}
                            >
                                <div style={{ width: "100%" }} >
                                    <Typography className="product-details-smrt">Ask Our Expert</Typography>
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
export default Request;