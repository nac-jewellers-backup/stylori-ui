import React from "react";
import './product-images.css';
import {
    Grid,
    Button,
    Container,
    Hidden
} from '@material-ui/core';
import Ratings from "../rating/rating";
import { Input } from '../InputComponents/TextField/Input'
import { Form } from '../Form/Form'

class RatingForm extends React.Component {
    initialValues = {
        title: null,
        reviews: null,
    };

    state = {
        expanded: null,
        values: this.initialValues,
        errors: this.initialValues,
    };

    ratingForm = (err, errors) => {
        return (
            <Grid container spacing={12} style={{ marginTop: '20px' }}>
                <Grid item lg={1} />
                <Grid item xs={12} lg={8}>
                    <h5 className='rating-form-head'>Rate This</h5>
                    <div className="rating-form">
                        <Ratings/>
                    </div>
                    <h3 className='rating-form-head'>Write Your Review</h3>
                    <Input
                        type="text"
                        name="title"
                        error={err.title}
                        helperText={err.title ? errors.title.required : ""}
                        placeholder="Title"
                        className="rating-form-text"
                        required
                    />
                    <span className='tool-tips' >Max 60 Characters</span>
                    <Input
                        type="text"
                        name="reviews"
                        error={err.reviews}
                        helperText={err.reviews ? errors.reviews.required : ""}
                        placeholder='Your Reviews'
                        className="rating-form-text"
                    />
                    <span className='tool-tips' >Max 250 Characters</span>
                    {/* <button type="submit" >rr</button> */}
                </Grid>
            </Grid>
        )

    }
    render() {
        return (
            <div>
                <Container>
                    <Form children={this.ratingForm} />
                    <Grid container spacing={12} style={{ marginTop: '20px' }}>
                        <Grid item xs={12} lg={9}>
                            <div style={{ float: "right" }}>
                                <Button className='form-reviews-mob' type="submit">Write a Reviews</Button>
                                <Button className='form-cancel-mob' >Cancel</Button>
                            </div>
                        </Grid>
                    </Grid>

                </Container>
            </div>
        );
    }
}

export default RatingForm;