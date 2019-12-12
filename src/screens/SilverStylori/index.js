import React, { Component } from 'react';
import SilverPageStylori from 'containers/Silver/SilverPageStylori';
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
                <SilverPageStylori />
            </div>
        )
    }
}
export default withRouter(SilverStylori)
