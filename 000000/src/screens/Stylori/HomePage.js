import React, { Component } from 'react';
import HomePageStylori from 'containers/HomePageStylori';
import { withRouter } from 'react-router-dom';

class Stylori extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HomePageStylori />
            </div>
        )
    }
}
export default withRouter(Stylori)
