import React, { Component } from 'react';
import ListingPage from 'containers/Silver/ListingPage'
import { withRouter } from 'react-router-dom';
import {ListingPageProvider} from 'context'
class SilverStylori extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ListingPageProvider>
                <ListingPage />
            </ListingPageProvider>
        )
    }
}
export default withRouter(SilverStylori)
