import React from "react";
import "./rating.css";
import { ProductDetailContext } from 'context/ProductDetailContext';
const Star = ({ selected = false, onClick = f => f }) =>
    <div onClick={onClick}>
        {selected ? <div class="star-rating" >
            <input type="radio" />
            <label for="1-stars" class="star">&#9733;</label>
        </div> : <div class="star-rating">
                <input type="radio" />
                <div for="1-stars" >&#9733;</div>
            </div>}
    </div>

// Star.propTypes = {
//   selected: React.PropTypes.bool,
//   onClick: React.PropTypes.func
// }
const Ratings = (props) => {
    const { ProductDetailCtx: { ratingcounts, setratingcountsclear }, setratingcounts } = React.useContext(ProductDetailContext);
    return <Component setratingcounts={setratingcounts}  {...props} ratingcounts={ratingcounts} setratingcountsclear={setratingcountsclear} />
}

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: ''
        }
        this.change = this.change.bind(this)
    }
    change(starsSelected) {
        this.props && this.props.clear_rating_onchange && this.props.clear_rating_onchange(false)
        this.setState({ starsSelected })
        this.props.setratingcounts({ ratingcounts: starsSelected })
        if (this.props && this.props.setratingcountsclear && this.props.setratingcountsclear.length > 0) {
            // alert(JSON.stringify(this.props.setratingcFountsclear))
            this.setState({ starsSelected: "" })
        }
        // localStorage.setItem("count", starsSelected)
    }


    componentWillReceiveProps(nextProps) {
        
        const { starsSelected } = this.props
        // alert(JSON.stringify("======="))
        if (nextProps.clear_rating && nextProps.clear_rating.length > 0) {
            // if (nextProps.starsSelected !== starsSelected) {
            this.setState({ starsSelected: "" })
            // }
        }
    }
    render() {
        // alert(JSON.stringify(this.props.setratingcountsclear))
        const { totalStars } = this.props;
        const { starsSelected } = this.state;

        return (
            <div class={this.props.ratings}>
                {[1, 2, 3, 4, 5].map((n, i) =>
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(this.props.disable === "disable" ? "" : i + 1)}
                    />
                )}
                {/* <p>{starsSelected} of {totalStars} stars</p> */}
            </div>
        )
    }
}

//  Ratings.propTypes = {
//    totalStars: React.PropTypes.number
//  }

// Ratings.defaultProps = {
//   totalStars: 5
// }

export default Ratings;