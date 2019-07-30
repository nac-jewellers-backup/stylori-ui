import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './product-images.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Hidden, Container } from '@material-ui/core';
import H from './producthoverData'
import PropTypes from 'prop-types';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}


class PriceTabs extends React.Component {
    state = {
        value: 0,
        expanded: null
    };
    TabsS = () => {
        return (
            <div>
                {H.productstabs.map(val =>
                    <>
                        <div className="header-APP">
                            <AppBar position="static" color="default" className="price-panel"
                            >
                                <Tabs
                                    className="price-tabs"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                >
                                    <Tab className='subtabs' label={val.tab1.header} />
                                    <Tab className='subtabs' label={val.tab2.header} />
                                    <Tab className='subtabs' label={val.tab3.header} label="Active" />
                                </Tabs>
                            </AppBar>
                        </div>
                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer >
                                {val.tab1.Children.map(val =>
                                    <Grid container spacing={12} >
                                        <Grid xs={1}>
                                            <img src={val.icon} style={{ width: '35px' }} />
                                        </Grid>
                                        <Grid xs={3}>
                                            <span className="tabs-contants">  {val.name}</span>
                                        </Grid>
                                    </Grid>
                                )}
                            </TabContainer>
                            <TabContainer >
                                {val.tab2.Children.map(val =>
                                    <Grid container spacing={12}>
                                        <Grid xs={1}>
                                            <img src={val.icon} style={{ width: '35px' }} />
                                        </Grid>
                                        <Grid xs={3}>
                                            <span className="tabs-contants">  {val.name}</span>
                                        </Grid>
                                    </Grid>
                                )}
                            </TabContainer>
                            <TabContainer >
                                {val.tab3.Children.map(val =>
                                    <Grid container spacing={12}>
                                        <Grid xs={1}>
                                            <img src={val.icon} style={{ width: '35px' }} />
                                        </Grid>
                                        <Grid xs={3}>
                                            <span className="tabs-contants">  {val.name}</span>
                                        </Grid>
                                    </Grid>
                                )}
                            </TabContainer>
                        </SwipeableViews>
                    </>
                )}
                <hr class="bottom-line"></hr>
            </div>
        );
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        return (
            <div>
                <Hidden smDown>
                    {this.TabsS()}
                </Hidden>
                <Hidden mdUp>
                    <Container>
                        {H.productstabs.map(val =>
                            <>
                                <>
                                    <ExpansionPanel expanded={expanded === val.header} onChange={this.handle(val.header)}
                                        style={{ boxShadow: "none", backgroundColor: "none" }}>
                                        <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                            <Typography className='subtabs'>{val.tab1.header}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails style={{ padding: 0 }}>
                                            {val.tab1.Children.map(val =>
                                                <Grid container spacing={12}>
                                                    <Grid xs={2}>
                                                        <img src={val.icon} style={{ width: '35px' }} />
                                                    </Grid>
                                                    <Grid xs={9}>
                                                        <span className="tabs-contants">  {val.name}</span>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </>

                                <>
                                    <ExpansionPanel expanded={expanded === 'panel'} onChange={this.handle('panel')}
                                        style={{ boxShadow: "none", backgroundColor: "none" }}>
                                        <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                            <Typography className='subtabs'>{val.tab2.header}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails style={{ padding: 0 }}>
                                            {val.tab2.Children.map(val =>
                                                <Grid container spacing={12}>
                                                    <Grid xs={2}>
                                                        <img src={val.icon} style={{ width: '35px' }} />
                                                    </Grid>
                                                    <Grid xs={9}>
                                                        <span className="tabs-contants">  {val.name}</span>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </>
                            </>
                        )}
                    </Container> </Hidden>
            </div>
        );
    }
}

PriceTabs.propTypes = {
    TabContainer: PropTypes.func.isRequired,
    TabsS: PropTypes.func.isRequired,
    handleChange: PropTypes.isRequired,
    handleChangeIndex: PropTypes.isRequired,
    handle: PropTypes.isRequired
};
export default PriceTabs;
