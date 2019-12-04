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
import { ProductDetailContext } from 'context/ProductDetailContext';
const RatingForm = (props) => {
    return <RatingComponent  {...props} />
}
const RatingComponent = (props) => {
    const { classes } = props;
    const { values, handlers, setValues } = useRating(props.ratingcounts);
    const clear = () => {
        debugger
        setValues({
            user_id: "",
            rate: "",
            product_id: "",
            product_sku: "",
            title: "",
            message: "",
            errortext: {
                rateerr: "",
            },
            error: {
                rateerr: false,
            },
        })
    }

    return (
        <form id="Resetform" action="javascript:void(0)" onSubmit={(e) => handlers.handelSubmit(e, props)}>
            <Grid container spacing={12} style={{ marginTop: '20px' }}>
                <Grid item lg={1} />
                <Grid item xs={12} lg={8}>
                    <h5 className={`rating-form-head ${classes.normalfonts}`}>Rate This</h5>
                    <div className="rating-form">
                        <Ratings /><br />
                        <label className='errtext'> {values.errortext.rateerr ? values.errortext.rateerr : ""}</label>
                    </div>
                    <h3 className={`rating-form-head ${classes.normalfonts}`}>Write Your Review</h3>
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
                        maxLength={250}
                        value={values.message}
                        onChange={e => handlers.handleChange('message', e.target.value)}
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
                        <Button onClick={() => clear()} className={`form-cancel-mob ${classes.normalfonts} ${classes.backgwhite}`} >Cancel</Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    )
}
const Components = props => {
    const { ProductDetailCtx: { ratingcounts } } = React.useContext(ProductDetailContext);
    return <RatingForm {...props} ratingcounts={ratingcounts} />
}


export default withRouter(withStyles(styles)(Components));