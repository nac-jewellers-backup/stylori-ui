import React from 'react';
import './product-images.css'
import TextField from '@material-ui/core/TextField';
import { Grid, Button, Hidden } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Requestform = () => {
    return (
        <div>
            <h4 className="product-details">Ask Our Expert</h4>
            <hr class="bottom-line"></hr>
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
                    <Grid xs={2}>
                        <Button className="requset-button">
                            Send
                        </Button>
                    </Grid>
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
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handle('panel3')}
                        style={{ boxShadow: "none", backgroundColor: "none" }}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="product-details-smrt">Ask Our Expert
                                    </Typography>
                        </ExpansionPanelSummary>
                        <hr class="bottom-line"></hr>
                        <Grid container spacing={12}>
                            <Grid item xs={12} className="product-subhead">
                                <span style={{ fontSize: "12px" }}> {Requestform()}</span>
                            </Grid>
                        </Grid>
                    </ExpansionPanel>
                </Hidden>
            </div>
        )
    }

}
export default Request;