import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './product-images.css'
import { Grid } from '@material-ui/core';

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
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        return (
            <div>
                <div className="header-APP">
                    <AppBar position="static" color="default" className="price-panel"
                    >
                        <Tabs
                            className="price-tabs"
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                        >
                            <Tab className='subtabs' label="Ring Size" />
                            <Tab className='subtabs' label="Metal Purity" />
                            <Tab className='subtabs' label="Diamond Clarity" />
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
                                <i style={{ color: "#ed1165" }} class="fa fa-heart"></i>&nbsp;SI JU
                                </Grid>
                            <Grid xs={4}>
                                <i style={{ color: "#ed1165" }} class="fa fa-heart"></i>&nbsp;HKMDH
                            </Grid>
                            <Grid xs={4}>
                                <i style={{ color: "#ed1165" }} class="fa fa-heart"></i>&nbsp;HJJDF
                          </Grid>

                        </Grid>
                    </TabContainer>
                </SwipeableViews>
                <hr class="bottom-line product-inform-ation"></hr>

            </div>
        );
    }
}

export default PriceTabs;
