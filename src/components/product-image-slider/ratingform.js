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

document.getElementById(function () {
    var checkbox = document.getElementById("#trigger");
    var hidden = document.getElementById("#hidden_fields");
    var populate = document.getElementById("#populate");
    hidden.hide();
    checkbox.change(function () {
        if (checkbox.is(':checked')) {
            hidden.show();
            populate.val("Dude, this input got populated!");
        } else {
            hidden.hide();
        }
    });
});
class RatingForm extends React.Component {
    state = {
        expanded: null,
        title: "",
        reviews: "",
    };
    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
    }
    ratingForm = (err, errors) => {
        return (
            <Grid container spacing={12} style={{ marginTop: '20px' }}>
                <Grid item lg={1} />
                <Grid item xs={12} lg={8}>
                    <h5 className='rating-form-head'>Rate This</h5>
                    <div className="rating-form">
                        <Ratings />
                    </div>
                    <h3 className='rating-form-head'>Write Your Review</h3>
                    <Input
                        margin="normal"
                        variant="outlined"
                        type="text"
                        name="title"
                        value={this.state.title}
                        // error={this.state.title ? this.state.title : "**"}
                        placeholder="Title"
                        className="rating-form-text"
                        onChange={event => this.handleChange(event, 'title')}
                        required
                    />
                    <span className='tool-tips' >Max 60 Characters</span>
                    <Input
                        margin="normal"
                        variant="outlined"
                        type="text"
                        name="reviews"
                        // error={this.state.reviews ? this.state.reviews : "**"}
                        placeholder='Your Reviews'
                        className="rating-form-text"
                        onChange={event => this.handleChange(event, 'reviews')}
                        value={this.state.reviews}
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
                    {/* <Form children={this.ratingForm} /> */}
                    <form onSubmit={this.handleSubmit()}>
                        {this.ratingForm()}
                        <Grid container spacing={12} style={{ marginTop: '20px' }}>
                            <Grid item xs={12} lg={9}>
                                <div style={{ float: "right" }}>
                                    <Button className='form-reviews-mob' type="submit">Write a Reviews</Button>
                                    <Button className='form-cancel-mob' >Cancel</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        );
    }
}

export default RatingForm;