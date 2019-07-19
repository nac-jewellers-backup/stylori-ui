import React from "react";
import './product-images.css';
import { Grid, TextField, Button } from '@material-ui/core';
import data from './producthoverData'

class RatingForm extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={12}>
                    <Grid item xs={1} />
                    <Grid item xs={8}>
                        <h5 className='rating-form-head'>Rate This</h5>
                        <div className="rating-form">
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
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
                <Grid container spacing={12}>
                    <Grid item xs={8}>
                        <div style={{ float: "right" }}>
                            <Button className='form-reviews'>Write a Reviews</Button>
                            <Button className='form-cancel'>Cancel</Button>
                        </div>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
export default RatingForm;