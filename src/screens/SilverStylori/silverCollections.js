import React, { Component } from 'react';
import SilverCollections from 'containers/Silver/Collections';
import { withRouter } from 'react-router-dom';

class SilverCollection extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <SilverCollections />
            </div>
        )
    }
}
export default withRouter(SilverCollection)
