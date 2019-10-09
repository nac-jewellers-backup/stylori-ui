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
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
// document.getElementById(function () {
//     var checkbox = document.getElementById("#trigger");
//     var hidden = document.getElementById("#hidden_fields");
//     var populate = document.getElementById("#populate");
//     hidden.hide();
//     checkbox.change(function () {
//         if (checkbox.is(':checked')) {
//             hidden.show();
//             populate.val("Dude, this input got populated!");
//         } else {
//             hidden.hide();
//         }
//     });
// });
class RatingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            title: "",
            reviews: "",
            errors: {
                title: "",
                reviews: "",
            },
            errorMessage: {
                title: "Please filled out your title",
                reviews: "Please filled out reviews",
            },

        };
    };
    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        event.preventDefault();
        let errors = this.state.errors;
        let errorMessage = this.state.errorMessage;
        switch (name) {
            case 'title':
                errors.title =
                    value.title === "" ? errorMessage : "";
                break;
            case 'reviews':
                errors.reviews =
                    value.reviews === "" ? errorMessage : "";
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
        // e.preventDefault();
    }
    ratingForm = (errors, handleError, errorMessage) => {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit()}>
                <Grid container spacing={12} style={{ marginTop: '20px' }}>
                    <Grid item lg={1} />
                    <Grid item xs={12} lg={8}>
                        <h5 className={`rating-form-head ${classes.normalfonts}`}>Rate This</h5>
                        <div className="rating-form">
                            <Ratings />
                        </div>
                        <h3 className={`rating-form-head ${classes.normalfonts}`}>Write Your Review</h3>
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onInvalid={e => this.handleError(e)}
                            error={errors.title ? true : false}
                            helperText={errors.title ? errorMessage.title : ''}
                            placeholder="Title"
                            className="rating-form-text"
                            onChange={event => this.handleChange(event, 'title')}
                            required
                        />
                        {/* <span className={`tool-tips ${classes.normalfonts}`} >Max 60 Characters</span> */}
                        <Input
                            margin="normal"
                            variant="outlined"
                            type="text"
                            name="reviews"
                            onInvalid={e => this.handleError(e)}
                            error={errors.reviews ? true : false}
                            helperText={errors.reviews ? errorMessage.reviews : ''}
                            placeholder='Your Reviews'
                            className="rating-form-text"
                            onChange={event => this.handleChange(event, 'reviews')}
                            value={this.state.reviews}
                            required />
                        <span className={`tool-tips ${classes.normalfonts}`} >Max 250 Characters</span>
                        {/* <button type="submit" >rr</button> */}
                    </Grid>

                </Grid>
                <Grid container spacing={12} style={{ marginTop: '20px' }}>
                    <Grid item xs={12} lg={9}>
                        <div style={{ float: "right" }}>
                            <Button className={`form-reviews-mob ${classes.fontwhite} ${classes.normalcolorback}`} type="submit">Write a Reviews</Button>
                            <Button className={`form-cancel-mob ${classes.normalfonts} ${classes.backgwhite}`} >Cancel</Button>
                        </div>
                    </Grid>
                </Grid>
            </form>)

    }
    render() {
        const { expanded, errors, errorMessage } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Container>
                    {/* <Form children={this.ratingForm} /> */}
                    {this.ratingForm(errors, errorMessage, this.handleError)}

                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(RatingForm);