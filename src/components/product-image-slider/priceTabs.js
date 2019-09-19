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
import { useDummyRequest } from '../../hooks';
import { productpricingPages } from '../../mappers';
import styles from './style'
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
        isActive: '2',
    };
    handleClick(event) {
        console.log(event.target.value)
        this.setState({
            isActive: event.target.name,
        });
    }

    TabsS = () => {
        const { classes } = this.props;
        const { productstabs } = this.props.data;
        return (
            <div>
                {productstabs.map(val =>
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
                                <div className={classes.pagination}>
                                    <Slideshow dataCarousel={settings}>
                                        {val.tab1.Children.map((val, i) =>
                                            <>
                                                <button
                                                    className={this.state.isActive == i ? `dark ${classes.tabsRingBckg}` : 'page'}
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
                                    {val.tab2.Children.map(val =>
                                        <Grid xs={4}>
                                            <div style={{ width: "100%" }}><img src={val.icon} style={{ width: '35px' }} alt="" /></div>
                                            <div style={{ marginTop: "-10px" }}>
                                                <span className={`tabs-contants ${classes.normalfonts}`}>  {val.name}</span>
                                            </div>
                                        </Grid>
                                    )}
                                </Grid>
                            </TabContainer>
                            <TabContainer >
                                <Grid container spacing={12}>
                                    {val.tab3.Children.map(val =>
                                        <Grid xs={4}>
                                            <div style={{ width: "100%" }}>
                                                <img src={val.icon} style={{ width: '35px' }} alt="" /></div>
                                            <div style={{ marginTop: "-10px" }}>
                                                <span className={`tabs-contants ${classes.normalfonts}`}>  {val.name}</span>
                                            </div>
                                        </Grid>
                                    )}
                                </Grid>
                            </TabContainer>
                        </SwipeableViews>
                    </>
                )}
                {/* <hr class="bottom-line"></hr> */}
            </div>
        );
    }
    mobiletabs = () => {
        const { expanded } = this.state;
        const { classes } = this.props;
        const { productstabs } = this.props.data;
        return (
            <>
                {productstabs.map(val =>
                    <Container>
                        <>
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
                                                            className={this.state.isActive == i ? `dark ${classes.tabsRingBckg}` : 'page'}
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
                            </>

                            <>
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
                                                    <div>
                                                        <img src={val.icon} style={{ width: '35px' }} alt="" />&nbsp;
                                        <span className={`tabs-contants ${classes.normalfonts}`}>  {val.name}</span>
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
                                            <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab3.header}</Typography>
                                            <hr class="bottom-line border-line-"></hr>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{ padding: 0 }}>
                                        {val.tab3.Children.map(val =>
                                            <Grid container spacing={12}>
                                                <Grid xs={12}>
                                                    <div>
                                                        <img src={val.icon} style={{ width: '35px' }} alt="" />&nbsp;
                                        <span className={`tabs-contants ${classes.normalfonts}`}>  {val.name}</span>
                                                    </div>

                                                </Grid>
                                            </Grid>
                                        )}
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </>
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
export default withStyles(styles, { withTheme: true })
    (props => {
        const { mapped } = useDummyRequest(productpricingPages);
        if (Object.keys(mapped).length === 0) return ''

        return <PriceTabs {...props} data={mapped} />
    });
