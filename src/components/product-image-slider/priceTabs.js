import {
    AppBar,
    Grid,
    Hidden,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Tabs,
    Tab,
    Typography,
    Container
} from '@material-ui/core';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './product-images.css'
import PropTypes from 'prop-types';
import Slideshow from '../Carousel/carosul';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import { ProductDetailContext } from 'context/ProductDetailContext';
function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

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
        expanded: null,
        ringSize: '',
        metal: "",
        diamond: ""
    };

    handleClick(event) {
        this.setState({
            ringSize: event.target.name,
        });
    }
    handleClickMetal = (event) => {
        this.setState({
            metal: event.target.id,
        });
    }
    handleClickDiamond = (event) => {
        this.setState({
            diamond: event.target.id,
        })
    }
    TabsComponent = () => {
        const { classes } = this.props;
        const data = this.props.data;
        return (
            <div>
                {data[0].productTabs.map(val =>
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
                                    <Tab className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-circle-thin tabs-hesd-icon"></i>}
                                        label={val.tab1.header} />
                                    <Tab className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-cube tabs-hesd-icon"></i>}
                                        label={val.tab2.header} />
                                    <Tab className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-diamond tabs-hesd-icon"></i>
                                    } label={val.tab3.header} />
                                </Tabs>
                            </AppBar>
                        </div>

                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer>
                                <div className={classes.pagination} style={{ overflow: "hidden" }}>
                                    <Slideshow dataCarousel={settings}>
                                        {val.tab1.Children.map((val, i) =>
                                            <>
                                                <button
                                                    className={this.state.ringSize == i ? `dark ${classes.tabsRingBckg}` : 'page'}
                                                    value={val} id={val} name={i}
                                                    onClick={event => this.handleClick(event)}
                                                >
                                                    {val}
                                                </button>
                                            </>
                                        )}
                                    </Slideshow>
                                    <div style={{ marginTop: "10px", textAlign: "center" }}>
                                        <span className={`my-ringsize ${classes.normalfonts}`}>My Ring Size ?</span>
                                    </div>
                                </div>
                            </TabContainer>

                            <TabContainer >
                                <Grid container spacing={12}>
                                    {val.tab2.Children.map((val, i) =>
                                        <Grid xs={4}>
                                            <button className="tabs-valus"
                                                id={val.name}
                                                onClick={event => this.handleClickMetal(event)}
                                            >
                                                <img src={val.icon} style={{ width: '35px', margin: "auto" }} alt="" />
                                                <span className={`tabs-contants ${classes.normalfonts}`}>{val.name}</span>
                                            </button>
                                        </Grid>
                                    )}
                                </Grid>
                            </TabContainer>

                            <TabContainer >
                                <Grid container spacing={12}>
                                    {val.tab3.Children.map(val =>
                                        <Grid xs={4}>
                                            <button className="tabs-valus"
                                                id={val.name}
                                                onClick={event => this.handleClickDiamond(event)}
                                            >
                                                <img src={val.icon} style={{ width: '35px', margin: "auto" }} alt="" />
                                                <span className={`tabs-contants ${classes.normalfonts}`}> {val.name}</span>
                                            </button>
                                        </Grid>
                                    )}
                                </Grid>
                            </TabContainer>

                        </SwipeableViews>
                    </>
                )}
            </div>
        );
    }
    MobileTabs = () => {
        const { expanded } = this.state;
        const { classes, data } = this.props;
        return (
            <>
                {data[0].productTabs.map(val =>
                    <Container>
                        <>
                            <ExpansionPanel expanded={expanded === val.header} onChange={this.handle(val.header)}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab1.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: "8px 24px 0px" }}>
                                    <div className={classes.pagination} >
                                        <Slideshow dataCarousel={settings} >
                                            {val.tab1.Children.map((val, i) =>
                                                <>
                                                    <button
                                                        className={this.state.ringSize == i ? `dark ${classes.tabsRingBckg}` : 'page'}
                                                        value={val} id={val} name={i}
                                                        onClick={event => this.handleClick(event)}
                                                    >
                                                        {val}
                                                    </button>
                                                </>
                                            )}
                                        </Slideshow>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel expanded={expanded === val.tab2.header} onChange={this.handle(val.tab2.header)}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab2.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                    {val.tab2.Children.map(val =>
                                        <Grid container spacing={12}>
                                            <Grid xs={12}>
                                                <button className="tabs-valus"
                                                    id={val.name}
                                                    onClick={event => this.handleClickMetal(event)}
                                                >
                                                    <img src={val.icon} style={{ width: '35px', margin: "auto" }} alt="" />
                                                    <span className={`tabs-contants ${classes.normalfonts}`}> {val.name}</span>
                                                </button>
                                            </Grid>
                                        </Grid>
                                    )}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel expanded={expanded === val.tab3.header} onChange={this.handle(val.tab3.header)}
                                style={{ boxShadow: "none", backgroundColor: "none" }}>
                                <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                    <div style={{ width: "100%" }} >
                                        <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab3.header}</Typography>
                                        <hr class="bottom-line border-line-"></hr>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                    {val.tab3.Children.map(val =>
                                        <Grid container spacing={12}>
                                            <Grid xs={12}>
                                                <button className="tabs-valus"
                                                    id={val.name}
                                                    onClick={event => this.handleClickDiamond(event)}
                                                >
                                                    <img src={val.icon} style={{ width: '35px', margin: "auto" }} alt="" />
                                                    <span className={`tabs-contants ${classes.normalfonts}`}> {val.name}</span>
                                                </button>
                                            </Grid>
                                        </Grid>
                                    )}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </>
                    </Container>)}
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
                    {this.TabsComponent()}
                </Hidden>
                <Hidden mdUp>
                    {this.MobileTabs()}
                </Hidden>
            </div>
        );
    }
}

PriceTabs.propTypes = {
    TabContainer: PropTypes.func,
    TabsComponent: PropTypes.func,
    handleChange: PropTypes.func,
    MobileTabs: PropTypes.func,
    handleChangeIndex: PropTypes.func,
    handle: PropTypes.func
};
export default withStyles(styles)(PriceTabs);
