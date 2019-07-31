import React from 'react';
import './product-images.css'
import TextField from '@material-ui/core/TextField';
import { Grid, Button, Hidden, Container } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Requestform = () => {
    return (
        <div>
            <Hidden smDown>
                <h4 className="product-details">Ask Our Expert</h4>
                <hr class="bottom-line"></hr>
            </Hidden>
            <form>
                <Grid container spacing={12} >
                    <Grid xs={12} lg={6} >
                        <TextField
                            className="request-text"
                            placeholder="Name"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid xs={12} lg={6} >
                        <TextField
                            className="request-text"
                            placeholder="Email"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid xs={12} lg={6} >
                        <TextField
                            className="request-text"
                            placeholder='Phone Number'
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid xs={12} lg={6} >
                        <TextField
                            className="request-text"
                            placeholder='Enter Request'
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid xs={9} />
                    <Hidden smDown>
                        <Grid xs={2}>
                            <Button className="requset-button">
                                Send
                        </Button>
                        </Grid>
                    </Hidden>

                    <Hidden mdUp>
                        <Grid xs={2}>
                            <Button className="requset-button-mob">
                                Send
                        </Button>
                        </Grid>
                    </Hidden>
                </Grid>
            </form>
        </div>
    )
}

class Request extends React.Component {
    state = {
        expanded: null
    };
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        return (
            <div>
                <Hidden smDown>
                    {Requestform()}
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
                                    <span style={{ fontSize: "12px" }}> {Requestform()}</span>
                                </Grid>
                            </Grid>
                        </ExpansionPanel>
                    </Container> </Hidden>
            </div>
        )
    }

}
export default Request;