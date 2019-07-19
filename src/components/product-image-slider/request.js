import React from 'react';
import './product-images.css'
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';

class Request extends React.Component {

    render() {
        return (
            <div>
                <h4 className="product-details">Ask Our Expert</h4>
                <hr class="bottom-line"></hr>
                <form>
                    <Grid container spacing={12} >
                        <Grid xs={6} >
                            <TextField
                                className="request-text"
                                placeholder="Name"
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={6} >
                            <TextField
                                className="request-text"
                                placeholder="Email"
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={6} >
                            <TextField
                                className="request-text"
                                placeholder='Phone Number'
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={6} >
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

}
export default Request;