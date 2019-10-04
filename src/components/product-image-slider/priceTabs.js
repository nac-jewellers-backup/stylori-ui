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

const PriceTabs = (props) => {
    const { setFilters } = React.useContext(ProductDetailContext);
    return <Component setFilters={setFilters} {...props} />
}

class Component extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: 0,
        values: "",
        expanded: null,
        isActive: '',
        metal: "",
        diamond: ""
    };

    handleClick = (event) => {
        const isActive = event.target.name;
        this.setState({
            isActive,
        }, () => this.props.setFilters(isActive));
    }
    handleClickMetal = (event) => {
        console.log(event.target.id)
        this.setState({
            metal: event.target.id,
        });
    }
    handleClickDiamond = (event) => {
        console.log(event.target.id)
        this.setState({
            diamond: event.target.id,
        })
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    imageRender = (val) => {
        if (val == '18K Yellow') {
            return (
                <img src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '35px', margin: "auto" }} alt="" />
            );
        } if (val == '22K Yellow') {

            return (
                <img src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '35px', margin: "auto" }} alt="" />
            );
        }
        if (val == '14K Yellow') {
            return (
                <img src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '35px', margin: "auto" }} alt="" />
            );
        } if (val == '24K Yellow') {

            return (
                <img src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '35px', margin: "auto" }} alt="" />
            );
        }

    }
    TabsComponent = () => {
        const { classes } = this.props;
        const data = this.props.data;

        const limit = 8
        const settings = {
            className: 'center',
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 5,
            arrow: true,
            slidesToShow: 8
        };
        const { value } = this.state;
        return (
            <div>
                {data[0].productTabs.map(val => {
                    const arr = val.tab1.Children !== null && (val.tab1.Children).split(',')
                    const arr2 = val.tab2.Children !== null && (val.tab2.Children).split(',')


                    return (

                        <>
                            <div className="header-APP">
                                <AppBar position="static" color="default" className="price-panel"
                                >
                                    <Tabs
                                        className="price-tabs"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        {arr || arr.length > 0 ?
                                            <Tab className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-circle-thin tabs-hesd-icon"></i>}
                                                label={val.tab1.header} />
                                            : ""}
                                        {val.tab2.Children[0] || val.tab2.Children.length > 0 ?
                                            <Tab className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-cube tabs-hesd-icon"></i>}
                                                label={val.tab2.header} /> : ""}
                                        {val.tab3.Children[0] || val.tab3.Children.length > 0 ?
                                            <Tab className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-diamond tabs-hesd-icon"></i>
                                            } label={val.tab3.header} /> : ""}
                                    </Tabs>
                                </AppBar>
                            </div>


                            <SwipeableViews
                                index={this.state.value}
                                onChangeIndex={this.handleChangeIndex}
                            >

                                {arr || arr.length > 0 ?
                                    <>
                                        {value === 0 && <TabContainer>
                                            <div className={classes.pagination} style={{ overflow: "hidden" }}>
                                                <Slideshow dataCarousel={settings}>
                                                    {arr.map((val, i) =>
                                                        <>
                                                            <button
                                                                className={this.state.isActive == i ? `dark ${classes.tabsRingBckg}` : 'page'}
                                                                name={i}
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
                                        </TabContainer>}
                                    </>
                                    : ""}

                                {arr2 || arr2.length > 0 ?
                                    <>
                                        {value === 1 && <TabContainer >
                                            <Grid container spacing={12}>
                                                {arr2.map((val, i) =>
                                                    <Grid xs={4}>
                                                        <button className="tabs-valus"
                                                            id={val.name}
                                                            onClick={event => this.handleClickMetal(event)}
                                                        >
                                                            {this.imageRender(val)}
                                                            <span className={`tabs-contants ${classes.normalfonts}`}>{val}</span>
                                                        </button>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        </TabContainer>}
                                    </>
                                    : ""}

                                {val.tab3.Children[0] || val.tab3.Children.length > 0 ?
                                    <>
                                        {value === 2 && <TabContainer >
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
                                        </TabContainer>}
                                    </> : ""}

                            </SwipeableViews>
                        </>
                    );
                }
                )}
            </div>
        );
    }


    MobileTabs = () => {
        const { expanded } = this.state;
        const { classes, data } = this.props;
        const limit = 8
        const settings = {
            className: 'center',
            infinite: true,
            // slidesToShow: data[0].productTabs[0].tab1.Children[0].rings.length
            //     > 8 ? limit : data[0].productTabs[0].tab1.Children[0].rings.length,
            slidesToScroll: 5,
            slidesToShow: 4,
            arrow: true
        };
        return (
            <>
                {data[0].productTabs.map(val => {
                    const arr = val.tab1.Children !== null && (val.tab1.Children).split(',')
                    const arr2 = val.tab2.Children !== null && (val.tab2.Children).split(',')
                    return (
                        <Container>
                            <>
                                {arr || arr.length > 0 ?
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
                                                    {arr.map((val, i) =>
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
                                    : ""}

                                {arr2 || arr2.length > 0 ?
                                    <ExpansionPanel expanded={expanded === val.tab2.header} onChange={this.handle(val.tab2.header)}
                                        style={{ boxShadow: "none", backgroundColor: "none" }}>
                                        <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                            <div style={{ width: "100%" }} >
                                                <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab2.header}</Typography>
                                                <hr class="bottom-line border-line-"></hr>
                                            </div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails style={{ padding: 0 }}>
                                            {arr2.map(val =>
                                                <Grid container spacing={12}>
                                                    <Grid xs={12}>
                                                        <button className="tabs-valus"
                                                            id={val.name}
                                                            onClick={event => this.handleClickMetal(event)}
                                                        >
                                                            {this.imageRender(val)}
                                                            <span className={`tabs-contants ${classes.normalfonts}`}> {val}</span>
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel> : ""}

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
                        </Container>
                    )
                }
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
