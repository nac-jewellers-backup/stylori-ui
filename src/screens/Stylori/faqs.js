import React, { Component } from 'react';
import FaqsBlock from 'containers/faqsBlock';
import { withRouter } from 'react-router-dom';
class faqs extends Component {
  
    render() {
        return (
            <div>
                <FaqsBlock titleUrl={this.props.match.path} />
            </div>
        )
    }
}
export default withRouter(faqs)
