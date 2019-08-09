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
import Slideshow from '../Carousel/carosul'
function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}


class PriceTabs extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        value: 0,
        currentPage: 1,
        todosPerPage: 3,
        expanded: null
    };
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    TabsS = () => {
        const settings = {
            className: 'center',
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 8,
            slidesToScroll: 5,
        };
        const { todos, currentPage, todosPerPage } = this.state;
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
                                    <Tab className='subtabs' icon={<i class="fa fa-cube tabs-hesd-icon"></i>} label={val.tab2.header} />
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
                                <div className="pagination-wd" >
                                    <Slideshow dataCarousel={settings} >
                                        {val.tab1.Children.map(val =>
                                            <div id="pagination"
                                            onClick={this.handleClick}
                                            >
                                                <a className=
                                                    "page dark ">{val}</a>
                                            </div>
                                        )}

                                    </Slideshow>
                                </div>


                            </TabContainer>
                            <TabContainer >
                                {val.tab2.Children.map(val =>
                                    <Grid container spacing={12}>
                                        <Grid xs={3}>
                                            <img src={val.icon} style={{ width: '35px' }} alt="" />
                                            <span className="tabs-contants">  {val.name}</span>
                                        </Grid>
                                    </Grid>
                                )}
                            </TabContainer>
                            <TabContainer >
                                {val.tab3.Children.map(val =>
                                    <Grid container spacing={12}>
                                        <Grid xs={3}>
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
                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                    {val.tab1.Children.map(val =>
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
export default PriceTabs;
