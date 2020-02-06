import React, { Component } from 'react';
import ContactUs from 'containers/Carrers';
import { withRouter } from 'react-router-dom';
class faqs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ContactUs titleUrl={this.props.match.path} />
            </div>
        )
    }
}
export default withRouter(faqs)