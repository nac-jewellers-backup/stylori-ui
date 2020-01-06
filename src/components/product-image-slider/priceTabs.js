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
import Slideshow from '../Carousel/carosul';
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
        debugger
        console.log('lklkkoik9', this.props)
        debugger
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
            filters['productId'] = this.props.data[0].productId
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
            debugger
            this.props.setFilters(filters);
            console.log("filters.defaultVariants.diamondType", filters.defaultVariants.diamondType)
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
                "#e3e36b"
            );
        } if (val == '22K Yellow') {
            return (
                'Orange'
            );
        }
        if (val == '14K Yellow') {
            return (
                "#f1f1a2"
            );
        } if (val == '24K Yellow') {
            return (
                <img id={val} src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '30px', margin: "auto" }} alt="" />
            );
        }
        if (val == "14K White") {
            return (
                "#dbd5d5"
            );
        }
        if (val == '18K White') {
            return (
                "#ccc"
            );
        }
        if (val == '14K Rose_White') {
            return (
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABrUlEQVQ4jcWSO28TQRSFvzte26tN4liyheQoPAxEVoQUBYnGDRH0dOmoABlERctPoKWm5hfQ00E6QkWkOGgRSCAFEoNfu96dnUsBRlnLCCq41ejcO2e+MzPwv0t+1zjaCx97Jf8igE3ig9p688FfG/R2w6or8Ua8QgPA2eyTl5lL1Y2zvdlZM8/AanInS23DRhNsNMEltpGS3Jo3O9fAibk6y+kytv4Y4cveu2d+ZbGNOt9OrJt8Gz0BKC8vdLyyZxATx/3hTn393I3pHm+66Ha7ZTeyrfHnXu0XnpGPmEyTwWgpGQCwINAKw9BvNptxLkJ1yDai52cAt9SZaycVhQvBsd3ORTh83X0I3BTktAqxKLGqLmJ+HuBwIjJUwRfFV/QD8PTU5tojOdzd3ywtBy9MsRgApIPo5XExvV7H3y/4pTMAWZS8/1q0raUxz0uVoA3gJmmcDMZtT5FO0o8CiH4giraqaeF+qvFqOoqnpKsV0XtWZS0+6k81HzG3jcDlXGqVGs51yD+xcSJ3Beq5+1C94imEBvP2ZMMZu2LUe5XT1K4Y8pri5v6jf1vfAZkcsJvDWHBmAAAAAElFTkSuQmCC" style={{ width: '30px', margin: "auto" }} />
            );
        }
        if (val == '18K Rose_White') {
            return (
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVQ4jcWSv08UQRzF33d2w87eCjl+JLIIGkFCQQKYGJMrlGCjhXbXUYE5jRUNhX8CjQU1tY0hoSAh0NCBCQWGkFB4mosSc0pzm5O5nd29m68NoHt3RCv5lm/efL7vZQa46qHLDr5tHSxLz70DAFqFn248nlz4Z0Bp7UPWcXBkOR0+ADR0XE74dPzW0weVZq9oB7BM9LwRJn4cKMSBQkMnvhW7c+28bQGCrIetKk//tUJ582Dd9btzbFjWlTbh92AFANz+bMH2pCBBOixX3vtPJp+1AIobRUeGlUMAoxc7gUXBzEz05o8LxaSqJm7PzehUBakreQDDTQmnWdBMqggwYnd6+VSC49W910w8S6AhQdDMpBl8DaCzBWwIdErE0jAkg4+J6e1Q/v4Sld7tTXkDXTt2xskAgD75uauM+6jTiT92dGduAkAS1L7WvpyMyf6ebed6Vw4A6irSqlzN2RahEP2oZqLfKcdcEb1KQh5MAnWuDdpZ72VS06P10oVT2hbNC7Jwt6l3r2EuIP3EAowXBOpLOYnv2Wy4JCA+p3TwAJj209xWzbBp+4/+7/wC1Qunw1A32fwAAAAASUVORK5CYII=" style={{ width: '30px', margin: "auto" }} />
            );
        }
        if (val == "14K Rose") {
            return (
                <img id={val} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABe0lEQVQ4jcWSMU8UURSFv/tmJkx2HUOCzZpFsqtkChICic02GO3t6KjQrMaKlp9ga23NL6C3UzqoIAGUCZBoCXGX2TfMvLkWumF3WSIV3PJ75957Tu6D+y656UGPjj8RTDwDIM++S3Nm7dYDdCeZJPL28LwaAM79ItU5mZ85G9WasetD95a8qGEzsBnkRY1AV8dJxw/ALF1n5Yv/RtDD002iagstQ4q85Hf6GYCHlTZ+YBBj6Vxsyez0636Pf9V8OEGRx5ydT10Z8X6CU7q9CHoAVSDWJAml0bDDES7NMiLN67bl5Yjrp6S6PBRB95N1XLmCmGkQC2qBB+i/BUIJdEFC0BAtT/HMhsSNj6K7BwtE0VcCvwJAmn6jvHyFXz0gDJ4AYPMTyGKc+UK10vrrOLd0uy0f8dpc9CoDFmPU/0CR1bG2z+p48h7nZjnv9FmI8d8YxCyOZJwC1wYdPLHBle+ARyPa5z6QIPwY5t5jRLeHkJoxTG74R3dZfwD4SINLo+uBVgAAAABJRU5ErkJggg==' style={{ width: '30px', margin: "auto" }} alt="" />
            );
        }

        if (val == '18K Rose') {
            return (
                <img id={val} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABp0lEQVQ4jcVSu24TURScc3ftfTjgR9IYJRQ85CIKSqQUuIDI9HTpqAAZREXLJ9BSU/MFSJS4CiCECFIkCh6KFCSsRFHstXbXd6/XOzRJ8FpGoYJTzpkzZ+beA/zvkj814k87zyzXuwIAYz385q+uPP5rgV5nu+Kctz5Lwa4DAEdp18RYrty41pvmqlkCheLoPo2pZ1GMLIpBY+pF29ydxZ0pIMq6OY0RsnFmhGh752WxWmmSdKmTLDkKngOAUyu3xXWUiGjT678tra3cPpmxTze8+upEOmiY7v78adPCTxBM+8G5Y6hEoMFOx5VWS+ci6IXBphJcytmmbJBo5TPL5cgrbeYihO8+PAFxR0SWBKJBaoJzEwsygYQQcQm6JH9A8GLu+vpTCbferxaq1S04BR8AxoPBG6/r3dJLoy/K9y8CQBbHe+7hfmNYrr22yuUmADAxOg37TVuUaqdB4E+4bAxrySNEspiG8bFNWRx6lYdZMrrKg8MTnitQ95RQ1qZ+Zp6UNvn7fQgqcvxAgIUck7JuZ8JdJfJ9Es8yXlBKPp6JgTPv6N/WLx+/ra26yLQYAAAAAElFTkSuQmCC' style={{ width: '30px', margin: "auto" }} alt="" />
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
                                                        <img height='auto' width='100%' src='https://assets-cdn.stylori.com/images/static/Ring-size.jpg' />
                                                    </div>
                                                </Modal>
                                                {/* <div style={{ marginTop: "10px", textAlign: "center" }}>
                                                    <span style={{ cursor: "pointer" }} className={`my-ringsize ${classes.normalfonts} `} >My Ring Size ?</span>
                                                 </div> */}
                                            </Grid>
                                        </>
                                        : ""}
                                </Grid>
                            </Grid> : ""}
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
                                                            style={{ background: this.imageRender(val) }}
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
                                                        <span id={val.name} className={`tabs-contants ${classes.normalfonts}`}>{val.name}</span>
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
