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
import { Grid, Hidden } from '@material-ui/core';
import H from './producthoverData'

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
                                    <Tab className='subtabs' label={val.tab3.header} />
                                </Tabs>
                            </AppBar>
                        </div>
                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer >
                            </TabContainer>
                            <TabContainer >
                            </TabContainer>
                            <TabContainer >
                                <Grid container spacing={12}>
                                    <Grid xs={4}>
                                        <i style={{ color: "#ed1165" }} class="fa fa-heart"></i>&nbsp;{val.tab3.Children}
                                    </Grid>
                                </Grid>
                            </TabContainer>
                        </SwipeableViews>
                        <hr class="bottom-line product-inform-ation"></hr>
                    </>
                )}
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
                    {H.productstabs.map(val =>
                        <>
                            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handle('panel2')}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className='subtabs'>{val.tab1.header}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                    <Grid container spacing={12}>
                                        <Grid xs={4}>
                                            <i style={{ color: "#ed1165" }} class="fa fa-heart"></i>&nbsp;{val.tab1.Children}
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </>
                    )}
                </Hidden>
            </div>
        );
    }
}

export default PriceTabs;
