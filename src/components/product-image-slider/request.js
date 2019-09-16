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
            value: '',
            errors:false 
        };
    }
    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        })
    }

    
    handleSubmit= (e)=> {
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

    Requestform = (err, errorhandle, errors) => {
        return (
            <div>
                <div className='overall-boxz'>
                    <form onSubmit={this.handleSubmit()}>
                        <div className='overall-bo'>
                            <Hidden smDown>
                                <span className="product-details">Ask Our Expert</span>
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
                                        // error={this.state.nemes ? this.state.nemes : "**"}
                                        placeholder="Name"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'names')}
                                        required
                                    />
                                </Grid>
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="email"
                                        name="mailId"
                                        value={this.state.mailId}
                                        // error={this.state.mailId ? this.state.mailId : "**"}
                                        placeholder="Enter your mail"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'mailId')}
                                    />
                                </Grid>
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        isNumber
                                        // pattern={/[0-9]{10}/}
                                        maxLength={10}
                                        minLength={10}
                                        name="mobileNo"
                                        value={this.state.mobileNo}
                                        // error={this.state.mobileNo ? this.state.mobileNo : "**"}
                                        placeholder="909419****"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'mobileNo')}
                                        onKeyPress={event => { this.handleKeyPress(event, 'isNumber') }}
                                        required
                                    />
                                </Grid>
                                <Grid xs={12} lg={6} >
                                    <Input
                                        margin="normal"
                                        variant="outlined"
                                        type="text"
                                        name="request"
                                        value={this.state.request}
                                        // error={this.state.request ? this.state.request : "**"}
                                        placeholder="Enter Request"
                                        className="request-text"
                                        onChange={event => this.handleChange(event, 'request')}
                                        required
                                    />
                                </Grid>

                            </Grid>
                            <Grid container>
                                <Grid xs={12} >
                                    <Button type="submit" className="requset-button">
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
        const { expanded } = this.state;
        return (
            <div>

                <Hidden smDown>
                    {/* <Form children={this.Requestform} inputvalues={this.state.values} /> */}

                    {this.Requestform()}
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