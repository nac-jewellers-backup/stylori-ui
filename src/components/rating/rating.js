import React from "react";
import "./rating.css";
const Star = ({ selected = false, onClick = f => f }) =>
    <div className={(selected) ? "star selected" : "star"}
        onClick={onClick}>
    </div>

// Star.propTypes = {
//   selected: React.PropTypes.bool,
//   onClick: React.PropTypes.func
// }

class Ratings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: ''
        }
        this.change = this.change.bind(this)
    }

    change(starsSelected) {
        this.setState({ starsSelected })
        localStorage.setItem("count", starsSelected)
    }

    render() {
        const { totalStars } = this.props;
        const { starsSelected } = this.state;

        return (
            <div className="star-rating" class={this.props.ratings}>
                {[1, 2, 3, 4, 5].map((n, i) =>
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(i + 1)}
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