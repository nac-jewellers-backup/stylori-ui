import React, { Component } from 'react';
import HomePageStylori from 'containers/HomePageStylori';
import { withRouter } from 'react-router-dom';
import CMSPages from 'screens/CMSPages';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* <HomePageStylori /> */}
                <CMSPages />
            </div>
        )
    }
}
export default withRouter(HomePage)
