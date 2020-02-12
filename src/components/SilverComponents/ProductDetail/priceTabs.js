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
    Container, Modal, Button
} from '@material-ui/core';
import React from 'react';
import './product-images.css'
import PropTypes from 'prop-types';
import Slideshow from '../../Carousel/carosul';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import { ProductDetailContext } from 'context/ProductDetailContext';

// imgleft: {
//     backgroundImage: "url(https://alpha-assets.stylori.com/images/static/slider_icon.png) !important",
//     backgroundPosition: "-27px -229px !important",
//     width: "35px !important",
//     height: "44px !important",
//     backgroundRepeat: "no-repeat !important",
//     float: "left",
//     backgroundColor: "#fff",
//     borderLeft: " 0px"
// },
// imgRight: {
//     backgroundImage: "url(https://alpha-assets.stylori.com/images/static/slider_icon.png) !important",
//     backgroundPosition: "-160px -229px !important",
//     width: "35px !important",
//     height: " 44px !important",
//     backgroundRepeat: 'no-repeat !important',
//     float: 'right',
//     backgroundColor: '#fff',
//     borderRight: '0px'
// },
function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const PriceTabs = (props) => {
    const { ProductDetailCtx: { filters }, setFilters } = React.useContext(ProductDetailContext);
    return <Component setFilters={setFilters} filters={filters} {...props} />
}

class Component extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        value: 1,
        values: "",
        expanded: "1",
        skuSize: this.props && this.props.filters && this.props.filters.defaultVariants && this.props.filters.defaultVariants.skuSize,
        purity: this.props.data[0].productsDetails[0].namedetail[1].details,
        diamondType: this.props && this.props.filters && this.props.filters.defaultVariants && this.props.filters.defaultVariants.diamondType,
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    handleClick = (event, key) => {

        var filters = { ...this.props.filters }
        if (key === 'purity') {
            var kv = event.target.id
            var objVal = kv.split(" ")
            var arrPurity = objVal[0]
            var arrColor = objVal[1]
            var diamondTypes = filters['defaultVariants']['diamondType']
            filters['defaultVariants']['purity'] = arrPurity
            filters['defaultVariants']['metalColor'] = arrColor
            // filters['defaultVariants']['skuSize']=diamondTypes
            filters['defaultVariants']['diamondType'] = diamondTypes
            this.setState({
                purity: kv,
            })
            this.props.setFilters(filters);
        }
        else {
            filters['defaultVariants'][key] = event.target.id
            // this.setState({skuSize:filters})
            this.setState({
                skuSize: event.target.id,
                diamondType: filters.defaultVariants.diamondType
            })
            this.props.setFilters(filters);
        }
        // const ringSize = event.target.name;
    }
    // handleClickMetal = (event) => {
    //     console.log(event.target.id)
    //     const metalColor = event.target.id;
    //     this.setState({
    //         metalColor,
    //     }, () => this.props.setFilters('metalColor=' + metalColor));
    // }
    // handleClickDiamond = (event) => {
    //     console.log(event.target.id)
    //     const diamondType = event.target.id
    //      this.props.setFilters('diamondType=' + diamondType))
    // }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    imageRender = (val) => {

        if (val == '18K Yellow') {
            return (
                "#EAC97D"
            );
        } if (val == '22K Yellow') {
            return (
                '#EAC97D'
            );
        }
        if (val == '14K Yellow') {
            return (
                " #EAC97D"
            );
        } if (val == '24K Yellow') {
            return (
                '#EAC97D'
            );
        }
        if (val == "14K White") {
            return (
                "#CDD0DD"
            );
        }
        if (val == '18K White') {
            return (
                "#CDD0DD"
            );
        }
        if (val == '14K Rose_White') {
            return (
                "#E2A497"
            );
        }
        if (val == '18K Rose_White') {
            return (
                "#E2A497"
            );
        }
        if (val == "14K Rose") {
            return (
                "#E2A497"
            );
        }

        if (val == '18K Rose') {
            return (
                "#E2A497"
            );
        }

    }

    TabsComponent = () => {
        const { classes } = this.props;
        const data = this.props.data;
        const { value } = this.state;
        const limit = 8;
        const settings = {
            className: 'center',
            infinite: false,
            // slidesToShow: data[0].productTabs[0].tab1.Children.length > 8 ? limit :data[0].productTabs[0].tab1.Children.length,
            slidesToScroll: 5,
            slidesToShow: 7,
            arrows: false,
        };
        const slider = React.createRef();
        const next = () => {
            slider.current.slickNext();
        }
        const previous = () => {
            slider.current.slickPrev();
        }
        // data[0].productTabs[0].tab2.Children
        return (
            <div>
                {data[0].productTabs.map(val => {

                    const arr = val.tab1.Children !== null && val.tab1.Children
                    const arr2 = val.tab2.Children !== null && (val.tab2.Children).split(',')
                    return (
                        <>
                            {arr.length > 0 ? <Grid container spacing={12} lg={12} style={{ marginBottom: "10px", paddingBottom: "10px", }}>
                                <Grid item lg={3} xs={12}><h1 className="rings_tabs">{val.tab1.header}&nbsp;<a
                                    onClick={this.handleOpen}
                                    className="my-ringsize">Size Guide </a></h1></Grid>
                                <Grid item lg={9} xs={12} style={{ padding: "0px 5px 0px 5px" }}>
                                    {arr.length > 0 ?
                                        <>
                                            <Grid container style={{ width: "100%" }} className={classes.pagination} style={{ overflow: "hidden" }}>
                                                <Grid item style={{ width: "8%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                                    <img onClick={() => previous()} className={"icon-leftcaro"} />

                                                </Grid>
                                                <Grid item style={{ width: "84%" }}>
                                                    <Slideshow dataCarousel={settings}
                                                        sliderRef={slider}>
                                                        {arr.map((val, i) => {
                                                            return (<>
                                                                <button
                                                                    className={val === this.state.skuSize ? 'dark' : 'page'}
                                                                    id={val}
                                                                    onClick={event => this.handleClick(event, 'skuSize')}
                                                                >
                                                                    {val}
                                                                </button>
                                                            </>)
                                                        }
                                                        )}
                                                    </Slideshow>
                                                </Grid>
                                                <Grid item style={{ width: "8%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                                    <img onClick={() => next()} className={"icon-rightcaro"} />

                                                </Grid>
                                                <Modal
                                                    aria-labelledby="simple-modal-title"
                                                    aria-describedby="simple-modal-description"
                                                    open={this.state.open}
                                                    onClose={this.handleClose}
                                                    style={{ overflowY: 'scroll' }}
                                                >
                                                    <div className={`${classes.modals} "modalin-ring"`}>
                                                        <img height='auto' width='100%' src='https://assets.stylori.com/images/static/Ring-size.jpg' />
                                                    </div>
                                                </Modal>
                                                {/* <div style={{ marginTop: "10px", textAlign: "center" }}>
                                                    <span style={{ cursor: "pointer" }} className={`my-ringsize ${classes.normalfonts} `} >My Ring Size ?</span>
                                                 </div> */}
                                            </Grid>
                                        </>
                                        : null}
                                </Grid>
                            </Grid> : null}
                            {arr2.length > 0 ?
                                <Grid container spacing={12} lg={12} style={{ marginBottom: "10px", padding: "0px 10px" }}>
                                    <Grid item lg={3} xs={12}><h1 className="rings_tabs">{val.tab2.header}</h1></Grid>
                                    <Grid item lg={9} xs={12}>
                                        <Grid container spacing={12} lg={12}>
                                            {arr2.map((val, i) => {
                                                var kv = val
                                                var objVal = kv.split(" ")
                                                var arrPurity = objVal[0]
                                                var arrColor = objVal[1]
                                                return (
                                                    <Grid item lg={2} xs={2} style={{ marginLeft: "5px", textAlign: "center" }}>
                                                        <button
                                                            style={{ border: "2px solid" + this.imageRender(val) }}
                                                            className={this.state.purity === val ? 'darktabs tabs-valus' : 'pagetabs tabs-valus'}
                                                            id={val} color={arrColor}
                                                            onClick={event => this.handleClick(event, 'purity')}
                                                        >
                                                            {/* {this.imageRender(val)} */}
                                                            <span id={val} className={`tabs-contants ${classes.normalfonts}`}>{arrPurity}</span>
                                                            <div id={val} className={this.state.purity === val ? `rings_tabsvls_active ${classes.tabs_values_font}` : `rings_tabsvls ${classes.tabs_values_font}`}>{arrColor.slice(0, 6)}</div>
                                                        </button>
                                                    </Grid>
                                                )
                                            }
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid> : ""}

                            {val.tab3.Children.length > 0 ? <Grid container spacing={12} lg={12} style={{ marginBottom: "10px", padding: "0px 10px" }}>
                                <Grid item lg={3} xs={12}><h1 className="rings_tabs">{val.tab3.header}</h1></Grid>
                                <Grid item lg={9} xs={12}>
                                    <Grid container spacing={12} lg={12}>
                                        {val.tab3.Children.map((val, i) => {
                                            return (
                                                <Grid item lg={2} xs={2} style={{ marginLeft: "5px", textAlign: "center" }}>
                                                    <button
                                                        style={{ background: this.imageRender(val) }}
                                                        className={this.state.diamondType === val.name ? 'darktabslst tabs-valus' : 'pagetabslst tabs-valus'}
                                                        id={val.name}
                                                        onClick={event => this.handleClick(event, 'diamondType')}
                                                    >
                                                        {/* {this.imageRender(val)} */}
                                                        <span id={val.name} className={`tabs-cont ${classes.normalfonts}`}>{val.name}</span>
                                                    </button>
                                                    {/* <div className={this.state.diamondType == i ? "rings_tabsvls_active":"rings_tabsvls"}>{arrColor}</div> */}
                                                </Grid>
                                            )
                                        }
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid> : ""}
                        </>
                    );
                }
                )}
            </div>
        );
    }
    // handleChange = (event, value) => {
    //     this.setState({ value });
    // };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    // handle = panel => (event, expanded) => {
    //     this.setState({
    //         expanded: expanded ? panel : false,
    //     });
    // };

    render() {
        const { expanded } = this.state;
        return (
            <div>
                <Hidden smDown>
                    {this.TabsComponent()}
                </Hidden>
                <Hidden mdUp>
                    <Container>
                        <div style={{ boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)" }}>
                            <ExpansionPanel expanded={expanded === "1"} >
                                {this.TabsComponent()}
                            </ExpansionPanel></div>
                    </Container>
                </Hidden>
            </div >
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
