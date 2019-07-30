import React from "react";
import { Container, Hidden } from '@material-ui/core';
import './product-images.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

class CustomerReviews extends React.Component {
    state = {
        expanded: 'panel1',
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        const { expanded } = this.state;
        return (
            <div>
                <Hidden smDown>
                    <Container>
                        <div>
                            <div className="reviews-header">
                                <span className="reviews-customer">Customer Reviews</span>
                            </div>
                            <div className="reviews">
                                <span className="data-reviews">No Reviews Found</span>
                            </div>
                        </div>
                    </Container>
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        <ExpansionPanel
                        style={{boxShadow:"none"}}
                            square
                            expanded={expanded === 'panel1'}
                            onChange={this.handleChange('panel1')}
                        >
                            <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'>
                                        <i class="fa fa-sort-up" ></i></span>}>
                                <div style={{ width: "100%" }} >
                                    <Typography className='subtabs-smrt'>You recently viewed</Typography>
                                    <hr class="bottom-line border-line-"></hr>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor malesuada lacus
            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Container> </Hidden>
            </div>
        );
    }
}
export default CustomerReviews;