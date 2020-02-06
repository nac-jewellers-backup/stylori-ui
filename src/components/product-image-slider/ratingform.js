import React from "react";
import './product-images.css';
import {
    Grid,
    Button,
    Container,
    Hidden,
    TextField
} from '@material-ui/core';
import Ratings from "../rating/rating";
import { Input } from '../InputComponents/TextField/Input'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import useRating from "./userating"
import { withRouter } from "react-router";
import { ProductDetailContext } from 'context/ProductDetailContext';
const RatingForm = (props) => {
    return <RatingComponent  {...props} />
}
const RatingComponent = (props) => {
    const { classes } = props;
    // const clear1 = () => {
    //     props && props.clear_rating_onchange && props.clear_rating_onchange(true)
    // }
    const { values, handlers, setValues } = useRating(props);
    const newLocal = 250;

    return (
        <Grid container style={{ marginTop: "10px" }}>
            <Container style={{ paddingLeft: "17px", paddingRight: "17px" }} >
                <div className="bg-clr2 priceecontainer" style={{ padding: "20px" }}>
                    <form id="Resetform" action="javascript:void(0)" onSubmit={(e) => handlers.handelSubmit(e, props)}>
                        <Grid container spacing={12} >
                            {/* <Grid item lg={1} /> */}
                            <Grid item xs={12} lg={12}>
                                <div className="rating-form ">
                                    <h5 className={`rating-form-head ${classes.normalfonts}`}>Rating</h5>

                                    <Ratings ratings="starts-review" clear_rating={props.clear_rating} clear_rating_onchange={props.clear_rating_onchange} />
                                    <label className='errtext'> {values.errortext.rateerr ? values.errortext.rateerr : ""}</label>
                                </div>
                                <h6 className={`rating-form-head ${classes.normalfonts}`} style={{ marginBottom: "-3px" }}>Write your review</h6>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    maxLength={60}
                                    placeholder="Title"
                                    className="rating-form-text"
                                    onChange={e => handlers.handleChange('title', e.target.value)}
                                    // helperText="please Enter review title"
                                    error={values.error && values.error.ratetitle ? true : false}
                                // required
                                />

                                <div style={{ width: "100%" }} className={`tool-tips ${classes.normalfonts}`} >Max 60 characters</div>
                                <label className='errtext'> {values.errortext.ratetitle ? values.errortext.ratetitle : ""}</label>


                                <div style={{ padding: "10px 0px" }} class={"bigText"}>
                                    <TextField
                                        variant="outlined"
                                        type="text"
                                        name="message"
                                        fullWidth
                                        placeholder='Write your review here'
                                        className="rating-form-text"
                                        maxLength={250}
                                        value={values.message}
                                        multiline={true}
                                        rowsMax={4}
                                        onChange={e => handlers.handleChange('message', e.target.value)}
                                        error={values.error && values.error.ratemsg ? true : false}
                                    />
                                </div>


                                {/* <Input
                                margin="normal"
                                variant="outlined"
                                type="text"
                                name="message"
                                placeholder='Your Reviews'
                                className="rating-form-text"
                                maxLength={250}
                                value={values.message}
                                multiline={true}
                                rows={6}
                                rowsMax={4}
                                onChange={e => handlers.handleChange('message', e.target.value)}
                                error={values.error && values.error.ratemsg ? true : false}
                            /> */}
                                <div className={`tool-tips ${classes.normalfonts}`} >Max 250 characters</div>
                                <label className='errtext'> {values.errortext.ratemsg ? values.errortext.ratemsg : ""}</label>

                                {/* <button type="submit" >rr</button> */}
                            </Grid>

                            <Grid container spacing={12} style={{ marginTop: '20px' }}>
                                <Grid item xs={12} lg={12}>
                                    <div style={{ float: "right" }}>
                                        <Button className={`form-reviews-mob ${classes.fontwhite} ${classes.normalcolorback}`} type="submit">Submit</Button>
                                        <Button onClick={() => {
                                            handlers.clear()
                                            props.clear_rating_onchange(true)
                                        }} className={`form-cancel-mob ${classes.normalfonts} ${classes.backgwhite}`} >Cancel</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}
const Components = props => {
    const { ProductDetailCtx: { ratingcounts } } = React.useContext(ProductDetailContext);
    return <RatingForm {...props} ratingcounts={ratingcounts} />
}


export default withRouter(withStyles(styles)(Components));