import React, { Component } from 'react';
import CollectionBlock from 'containers/CollectionBlock';
import { withRouter } from 'react-router-dom';

class Collection extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CollectionBlock />
            </div>
        )
    }
}
export default withRouter(Collection)