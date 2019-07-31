import React from "react";
import './product-images.css';
import {
    Grid,
    TextField,
    Button,
    Container,
    Hidden
} from '@material-ui/core';
import data from './producthoverData'
import Ratings from "../rating/rating";

class RatingForm extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Grid container spacing={12} style={{ marginTop: '20px' }}>
                        <Grid item lg={1} />
                        <Grid item xs={12} lg={8}>
                            <h5 className='rating-form-head'>Rate This</h5>
                            <div className="rating-form">
                                <Ratings />
                            </div>
                            <h3 className='rating-form-head'>Write Your Review</h3>
                            <TextField
                                className="rating-form-text"
                                placeholder='Title'
                                margin="normal"
                                variant="outlined"
                            />
                            <span className='tool-tips' >Max 60 Characters</span>
                            <TextField
                                className="rating-form-text"
                                placeholder='Your Reviews'
                                margin="normal"
                                variant="outlined"
                            />
                            <span className='tool-tips' >Max 250 Characters</span>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid container spacing={12}>
                            <Grid item xs={12} lg={8}>
                                <div style={{ float: "right" }}>
                                    <Button className='form-reviews'>Write a Reviews</Button>
                                    <Button className='form-cancel'>Cancel</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Hidden>

                    <Hidden mdUp>
                        <Grid container spacing={12} style={{ marginTop: '20px' }}>
                            <Grid item xs={12} lg={8}>
                                <div style={{ float: "right" }}>
                                    <Button className='form-reviews-mob'>Write a Reviews</Button>
                                    <Button className='form-cancel-mob'>Cancel</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Hidden>

                </Container>
            </div>
        );
    }
}

export default RatingForm;