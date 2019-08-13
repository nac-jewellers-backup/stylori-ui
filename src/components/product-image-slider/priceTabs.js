import {
    AppBar,
    Grid,
    Hidden,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Tabs,
    Tab,
    Typography
} from '@material-ui/core';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './product-images.css'
import H from './producthoverData'
import PropTypes from 'prop-types';
import Slideshow from '../Carousel/carosul';
import { withStyles } from '@material-ui/core/styles';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}
const styles = theme => ({
    pagination: {
        [theme.breakpoints.down('xs')]: {
            width: "98%"
        },
        [theme.breakpoints.up('lg')]: {
            width: "75%",
            textAlign: "center"
        },
    },
});
const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 5,
};

class PriceTabs extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        value: 0,
        values: "",
        expanded: null
    };
    handleClick(event) {
        console.log(event.target.value)
        this.setState({
            values: event.target.value,

        });
    }

    TabsS = () => {
        const { classes } = this.props;
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
                                    <Tab className='subtabs' icon={<i class="fa fa-circle-thin tabs-hesd-icon"></i>} label={val.tab1.header} />
                                    <Tab className='subtabs' icon={<i class="fa fa-cube tabs-hesd-icon"></i>}
                                        label={val.tab2.header} />
                                    <Tab className='subtabs' icon={<i class="fa fa-diamond tabs-hesd-icon"></i>
                                    } label={`Active ${val.tab3.header}`} />
                                </Tabs>
                            </AppBar>
                        </div>
                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer>
                                <div className={classes.pagination}>
                                    <Slideshow dataCarousel={settings}>
                                        {val.tab1.Children.map(val =>
                                            <div
                                            >
                                                <button
                                                    className="page dark"
                                                    value={val} id={val}
                                                    onClick={event => this.handleClick(event)}
                                                >
                                                    {val}
                                                </button>
                                            </div>
                                        )}

                                    </Slideshow>
                                    <div style={{ marginTop: "10px" }}>
                                        <span className="my-ringsize">My Ring Size ?</span>
                                    </div>
                                </div>


                            </TabContainer>
                            <TabContainer >
                                {val.tab2.Children.map(val =>
                                    <Grid container spacing={12}>
                                        <Grid xs={4}>
                                            <img src={val.icon} style={{ width: '35px' }} alt="" />
                                            <span className="tabs-contants">  {val.name}</span>
                                        </Grid>
                                    </Grid>
                                )}
                            </TabContainer>
                            <TabContainer >
                                {val.tab3.Children.map(val =>
                                    <Grid container spacing={12}>
                                        <Grid xs={4}>
                                            <img src={val.icon} style={{ width: '35px' }} alt="" />
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
    mobiletabs = () => {
        const { expanded } = this.state;
        const { classes } = this.props;
        return (
            <>
                {H.productstabs.map(val =>
                    <>
                        <>
                            <ExpansionPanel expanded={expanded === val.header} onChange={this.handle(val.header)}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className='subtabs'>{val.tab1.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: "8px 24px 0px" }}>
                                    <div className={classes.pagination} >
                                        <Slideshow dataCarousel={settings} >
                                            {val.tab1.Children.map(val =>
                                                <div class={classes.pagination}
                                                >
                                                    <button
                                                        className="page dark"
                                                        value={val} id={val}
                                                        onClick={event => this.handleClick(event)}
                                                    >
                                                        {val}
                                                    </button>
                                                </div>
                                            )}
                                        </Slideshow>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </>

                        <>
                            <ExpansionPanel expanded={expanded === val.tab2.header} onChange={this.handle(val.tab2.header)}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className='subtabs'>{val.tab2.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                    {val.tab2.Children.map(val =>
                                        <Grid container spacing={12}>
                                            <Grid xs={12}>
                                                <div>
                                                    <img src={val.icon} style={{ width: '35px' }} alt="" />&nbsp;
                                        <span className="tabs-contants">  {val.name}</span>
                                                </div>

                                            </Grid>
                                        </Grid>
                                    )}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </>
                        <>
                            <ExpansionPanel expanded={expanded === val.tab3.header} onChange={this.handle(val.tab3.header)}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className='subtabs'>{val.tab3.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                    {val.tab3.Children.map(val =>
                                        <Grid container spacing={12}>
                                            <Grid xs={12}>
                                                <div>
                                                    <img src={val.icon} style={{ width: '35px' }} alt="" />&nbsp;
                                        <span className="tabs-contants">  {val.name}</span>
                                                </div>

                                            </Grid>
                                        </Grid>
                                    )}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </>
                    </>
                )}
            </>
        )
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
        return (
            <div>
                <Hidden smDown>
                    {this.TabsS()}
                </Hidden>
                <Hidden mdUp>
                    {this.mobiletabs()}
                </Hidden>
            </div>
        );
    }
}

PriceTabs.propTypes = {
    TabContainer: PropTypes.func,
    TabsS: PropTypes.func,
    handleChange: PropTypes.func,
    handleChangeIndex: PropTypes.func,
    handle: PropTypes.func
};
export default withStyles(styles, { withTheme: true })(PriceTabs);
