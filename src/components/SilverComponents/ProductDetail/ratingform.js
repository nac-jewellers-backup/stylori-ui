import React from "react";
import './product-images.css';
import {
    Grid,
    Button,
    Container,
    Hidden
} from '@material-ui/core';
import Ratings from "../../rating/rating";
import { Input } from '../../InputComponents/TextField/Input'
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
    const { values, handlers, setValues } = useRating(props.ratingcounts);

    return (
        <Container className="bg-clr2">
            <div className="bg-clr2 priceecontainer" style={{ padding: "20px" }}>
                <form id="Resetform" action="javascript:void(0)" onSubmit={(e) => handlers.handelSubmit(e, props)}>
                    <Grid container spacing={12} >
                        {/* <Grid item lg={1}  */}
                        <Grid item xs={12} lg={12}>
                            <div className="rating-form ">
                                <h5 className={`rating-form-head ${classes.normalfonts}`}>Rating</h5>
                                <label className='errtext'> {values.errortext.rateerr ? values.errortext.rateerr : ""}</label>
                                <Ratings ratings="starts-review" />
                            </div>
                            <h6 className={`rating-form-head ${classes.normalfonts}`} style={{ marginBottom: "-3px" }}>Write Your Review</h6>
                            <label className='errtext'> {values.errortext.ratetitle ? values.errortext.ratetitle : ""}</label>
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
                            <div style={{ width: "100%" }} className={`tool-tips ${classes.normalfonts}`} >Max 60 Characters</div>
                            <label className='errtext'> {values.errortext.ratemsg ? values.errortext.ratemsg : ""}</label>
                            <Input
                                margin="normal"
                                variant="outlined"
                                type="text"
                                name="message"
                                placeholder='Write your review here'
                                className="rating-form-text"
                                maxLength={250}
                                value={values.message}
                                multiline={true}
                                rows={3}
                                rowsMax={4}
                                onChange={e => handlers.handleChange('message', e.target.value)}
                                error={values.error && values.error.ratemsg ? true : false}
                            // helperText="please Enter review text"
                            // required 
                            />
                            <div className={`tool-tips ${classes.normalfonts}`} >Max 250 Characters</div>
                            {/* <button type="submit" >rr</button> */}
                        </Grid>

                        <Grid container spacing={12} style={{ marginTop: '20px' }}>
                            <Grid item xs={12} lg={9}>
                                <div style={{ float: "right" }}>
                                    <Button className={`form-reviews-mob ${classes.fontwhite} ${classes.normalcolorback}`} type="submit">Submit</Button>
                                    <Button onClick={() => handlers.clear()} className={`form-cancel-mob ${classes.normalfonts} ${classes.backgwhite}`} >Cancel</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
const Components = props => {
    const { ProductDetailCtx: { ratingcounts } } = React.useContext(ProductDetailContext);
    return <RatingForm {...props} ratingcounts={ratingcounts} />
}


export default withRouter(withStyles(styles)(Components));