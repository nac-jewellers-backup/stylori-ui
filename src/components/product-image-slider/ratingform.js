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
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import useRating from "./userating"
import { withRouter } from "react-router";

const RatingForm = (props) => {
    return <RatingComponent  {...props} />
}

const RatingComponent = (props) => {
    const { classes } = props;
    const { values, handlers, data } = useRating();
    return (
        <form action="javascript:void(0)" onSubmit={(e) => handlers.handelSubmit(e,props)}>
            <Grid container spacing={12} style={{ marginTop: '20px' }}>
                <Grid item lg={1} />
                <Grid item xs={12} lg={8}>
                    <h5 className={`rating-form-head ${classes.normalfonts}`}>Rate This</h5>
                    <div className="rating-form">
                        <Ratings />
                        <label className='errtext'> {values.errortext.rate ? values.errortext.rate : ""}</label>
                    </div>
                    <h3 className={`rating-form-head ${classes.normalfonts}`}>Write Your Review</h3>
                    <Input
                        margin="normal"
                        variant="outlined"
                        type="text"
                        name="title"
                        value={values.title}
                        placeholder="Title"
                        className="rating-form-text"
                        onChange={e => handlers.handleChange('title', e.target.value)}
                        maxLength={60}
                        minLength={60} 
                        helperText="please Enter review title"
                        required
                        />
                    <span className={`tool-tips ${classes.normalfonts}`} >Max 60 Characters</span>
                    <Input
                        margin="normal"
                        variant="outlined"
                        type="text"
                        name="message"
                        placeholder='Your Reviews'
                        className="rating-form-text"
                        value={values.message}
                        onChange={e => handlers.handleChange('message', e.target.value)}
                        maxLength={250}
                        minLength={250} 
                        helperText="please Enter review text"
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
        </form>
    )
}
export default withRouter(withStyles(styles)(RatingForm));