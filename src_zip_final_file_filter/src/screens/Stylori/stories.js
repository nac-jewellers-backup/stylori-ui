import React, { Component } from 'react';
import StoryBlock from 'containers/storyblock';
import { withRouter } from 'react-router-dom';

class stories extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <StoryBlock />
            </div>
        )
    }
}
export default withRouter(stories)
