import React from "react";
import { Container } from '@material-ui/core';
import './product-images.css'

class CustomerReviews extends React.Component {
    render() {
        return (
            <div style={{marginTop:"10px"}}>
                <Container>
                    <div>
                        <span className="reviews-customer">Customer Reviews</span>
                        <hr style={{ background: "linear-gradient(to bottom,#f6f7f8 0%,#fff 100%)", height: "1px" }} />
                        <div className="reviews">
                            <span className="data-reviews">No Reviews Found</span>
                        </div>
                    </div>
                </Container>

            </div>
        );
    }
}
export default CustomerReviews;