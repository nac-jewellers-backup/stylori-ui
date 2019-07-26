import React from "react";
import { Container } from '@material-ui/core';
import './product-images.css'

class CustomerReviews extends React.Component {
    render() {
        return (
            <div style={{marginTop:"10px"}}>
                <Container>
                    <div>
                        <div className="reviews-header">
                        <span className="reviews-customer">Customer Reviews</span>
                        </div>
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