import React, { Component } from 'react';
import ContactUs from 'containers/Carrers';
import { withRouter } from 'react-router-dom';
class faqs extends Component {
 

    render() {
        return (
            <div>
                <ContactUs titleUrl={this.props.match.path} />
            </div>
        )
    }
}
export default withRouter(faqs)