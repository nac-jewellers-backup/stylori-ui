import React, { Component } from 'react';
import ListingPage from 'containers/Silver/ListingPage'
import { withRouter } from 'react-router-dom';

class SilverStylori extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ListingPage />
            </div>
        )
    }
}
export default withRouter(SilverStylori)
