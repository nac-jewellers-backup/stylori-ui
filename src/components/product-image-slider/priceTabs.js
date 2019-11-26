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
        expanded: null,
        skuSize: '',
        purity: '',
        diamondType: "",
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    // componentDidUpdate(prevProps) {
    //     var filters = { ...this.props.filters }
    //     if (filters.defaultVariants.purity !== prevProps.filters.defaultVariants.purity) {
    //         this.setState({
    //             skuSize: filters.defaultVariants.purity
    //         })
    //     }
    // }
    handleClick = (event, key) => {
        console.log('lklkkoik9', this.state.skuSize)
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
            this.props.setFilters(filters);
        }
        else {
            filters['defaultVariants'][key] = event.target.id
            // this.setState({skuSize:filters})
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
                <img id={val} src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '30px', margin: "auto" }} alt="" />
            );
        } if (val == '22K Yellow') {
            return (
                <img id={val} src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '30px', margin: "auto" }} alt="" />
            );
        }
        if (val == '14K Yellow') {
            return (
                <img id={val} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABhklEQVRoge2VsU7DQBBEZ88WlEiARAkFBST+nAQbUdHky+j4kfQIKiSEW4TTR46XwhYkUogv3j2dEDud5ZvdW9/4HmAymUwm0x8WaRVavBUXSDAHcNbTcEnLdHx0+fCq0ddpFGkr0T16Ng8ADBw0h/WdWlutQkQ8/f0t88ZaoNDqqzJAVeYZA9dbXnUbp42oMuPq83060uitMgCx2/b1G+z4xxySG43eOhEiTNaeGp/a5JBrtBYPUJV5BvAIAIiw8q2pFSPxAMRuRoS621SyX3N5jOQRIr5lRjrIqhAjb5BJQRUKdP4nIAVVINB5DyAFVSjQeQ0gBVVI0HkNIAVVSND5RUgKqoCg672FqjLPCPQEtKDa565veDUmck7iPzl/fNm1pvcEpKAKDbr+CAlABcJE7O9d0ik2qIb6f04gNqgG+r8HiA2qoX4HxAeVxO+A+KCS+NsIxQaVwE+xQSX1p8RuRo5rZqSDQMN0HNNPi7L4AHC6j3FNz2ivvph+k8lkMplMpn+rL4l9D4el2eifAAAAAElFTkSuQmCC' style={{ width: '30px', margin: "auto" }} alt="" />
            );
        } if (val == '24K Yellow') {
            return (
                <img id={val} src='https://img.icons8.com/color/48/000000/gold-bars.png' style={{ width: '30px', margin: "auto" }} alt="" />
            );
        }
        if (val == "14K White") {
            return (
                <img id={val} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABcUlEQVRoge2VzU6EQBCEq8fBBzAmeyJ41N19nPUvnrz4rN6NnjYhDEffwCjtQdlsNhsY6J5MjF0nCNQ0xRR8gMlkMplMf1iktVBd1xdFUTwz82Lk1g8Aq7IstxpzncYiAOC9f4x4eAA4BfCgNVctADNfD10+OL/TmqsSIISwJqKrI5f6Bz+s6mXTNEuN2SoBiOjY2+8w8I055240ZmtVaLN33EWufasxWBwghLAGsAQAIvqasKZKjcQBiOiJiD4BgJlPJg1XqJFGhe6Z2c/0imsUDTIpqFKBLnoHpKBKBbroAFJQpQJdVAApqFKCLiqAFFQpQRdbISmokoFu9C/0u/0vwA+opvzru65bEZGT+Kuqehu6Z3QHpKBKDbqYCklAtVHwD2pXodygmuvf7UBuUM317wLkBtVcvwPyg0rid0B+UEn8fYVyg2q2n3KDSur3PWiY2c8EzVlOP7Vt+w7gfIpxT68AFpn9JpPJZDKZTP9W35wuE6GNZKzYAAAAAElFTkSuQmCC' style={{ width: '30px', margin: "auto" }} alt="" />
            );
        }
        if (val == '18K White') {
            return (
                <img id={val} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABmUlEQVQ4jcVSsW4TURCc3buzX+yLhRQao4BksHWFJQukNG6IoKdLlyogB6VKyyfQUqfOF9DTAR2uLlKwI0uJBB1I9uXu3bvntxRgxRc5ChVsOTszmtEu8L+HblqMx+N31SBoA0BeFON2u3341wbD4fBOfW3txA+CJgAURfE9N6bb6/V+XufyKgNVqbyy1jZ1lkFnGebWNgPP21vFXWkA4OkKbPvWCqPR6P16GPZFRFlj3HQ6PQKARqMx8CsVJiI9S5LPnU7nxULjL4mrRZ5HP/J848qevjGzzJJk/Q9SBxBNJhPVarV0qYLJsh0ieljqR7QtIs/KmelRmqY7pQqncfxm7twuMd8HoAFoAUIR4d8acgQkABQAJc5deMzHUbf7luI4fhyG4cfA92sAkKbpJwGee8xflVIPACDX+hzM0bwoPtTq9T4AGGP0ZZr2fXFucDmb1ZZCRgAOLLCps2wRe9Mnem2d6xhjFjzFRC/ZY35y7TIbQjSQ5ROLsHVuH8DdZaI4t+U7kYlHdFZaiNwjoi+3YfOb/+gfzi/hpqiprs8PWAAAAABJRU5ErkJggg==' style={{ width: '30px', margin: "auto" }} alt="" />
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
            infinite: true,
            // slidesToShow: data[0].productTabs[0].tab1.Children.length > 8 ? limit :data[0].productTabs[0].tab1.Children.length,
            slidesToScroll: 5,
            slidesToShow: 8,
            arrow: true,
        };
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
                                        value={value}
                                        onChange={this.handleChange}
                                    >
                                        {arr.length > 0 ?
                                            <Tab value={0} className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-circle-thin tabs-hesd-icon"></i>}
                                                label={val.tab1.header} />
                                            : ""}
                                        {arr2.length > 0 ?
                                            <Tab value={1} className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-cube tabs-hesd-icon"></i>}
                                                label={val.tab2.header} /> : ""}
                                        {val.tab3.Children.length > 0 ?
                                            <Tab value={2} className={`subtabs ${classes.tabsheadcolor}`} icon={<i class="fa fa-diamond tabs-hesd-icon"></i>
                                            } label={val.tab3.header} /> : ""}
                                    </Tabs>
                                </AppBar>
                            </div>


                            {arr.length > 0 ?
                                <>
                                    {value === 0 && <TabContainer >
                                        <div className={classes.pagination} style={{ overflow: "hidden" }}>
                                            <Slideshow dataCarousel={settings}>
                                                {arr.map((val, i) => {

                                                    return (<>
                                                        <button
                                                            className={this.state.skuSize == i ? `dark ${classes.tabsRingBckg}` : 'page'}
                                                            id={val}
                                                            onClick={event => this.handleClick(event, 'skuSize')}
                                                        >
                                                            {val}
                                                        </button>
                                                    </>)
                                                }
                                                )}
                                            </Slideshow>
                                            <Modal
                                                aria-labelledby="simple-modal-title"
                                                aria-describedby="simple-modal-description"
                                                open={this.state.open}
                                                onClose={this.handleClose}
                                                style={{ overflowY: 'scroll' }}
                                            >
                                                <div className={`${classes.modals} "modalin-ring"`}>
                                                    <img height='100%' width='100%' src='https://assets-cdn.stylori.com/images/static/Ring-size.jpg' />
                                                </div>
                                            </Modal>
                                            <div style={{ marginTop: "10px", textAlign: "center" }}>
                                                <span style={{ cursor: "pointer" }} className={`my-ringsize ${classes.normalfonts} `} onClick={this.handleOpen}>My Ring Size ?</span>
                                            </div>
                                        </div>
                                    </TabContainer>}
                                </>
                                : ""}

                            {arr2.length > 0 ?
                                <>
                                    {value === 1 && <TabContainer >
                                        <Grid container spacing={12}>
                                            {arr2.map((val, i) => {
                                                return (
                                                    <Grid xs={4}>
                                                        <button className="tabs-valus"
                                                            // className={this.state.purity == i ? `dark ${classes.tabsRingBckg}` : 'page'}
                                                            id={val}
                                                            onClick={event => this.handleClick(event, 'purity')}
                                                        >
                                                            {this.imageRender(val)}
                                                            <span id={val} className={`tabs-contants ${classes.normalfonts}`}>{val}</span>
                                                        </button>
                                                    </Grid>
                                                )
                                            }
                                            )}
                                        </Grid>
                                    </TabContainer>}
                                </>
                                : ""}

                            {val.tab3.Children.length > 0 ?
                                <>
                                    {value === 2 && <TabContainer >
                                        <Grid container spacing={12}>
                                            {val.tab3.Children.map(val => {
                                                return (
                                                    <Grid xs={4}>
                                                        <button className="tabs-valus"
                                                            // id={val.name}
                                                            id={val.name}
                                                            onClick={event => this.handleClick(event, 'diamondType')}
                                                        // onClick={event => this.handleClickDiamond(event)}
                                                        >
                                                            <img id={val.name} src="data:image/png;base64,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" style={{ width: '25px', margin: "auto" }} alt="" />
                                                            <span id={val.name} className={`tabs-contants ${classes.normalfonts}`}> {val.name}</span>
                                                        </button>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </TabContainer>}
                                </> : ""}

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
            slidesToScroll: 2,
            slidesToShow: 5,
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
                                {arr.length > 0 ?
                                    <ExpansionPanel style={{ boxShadow: "none" }} expanded={expanded === val.header} onChange={this.handle(val.header)}>
                                        <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                            <div style={{ width: "100%" }} >
                                                <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab1.header}</Typography>
                                                {/* <hr class="bottom-line border-line-"></hr> */}
                                            </div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails style={{ padding: "8px 24px 0px" }}>
                                            <div className={classes.pagination} >
                                                <Slideshow dataCarousel={settings} >
                                                    {arr.map((val, i) =>
                                                        <>
                                                            <button
                                                                className={this.state.ringSize == i ? `dark ${classes.tabsRingBckg}` : 'page'}
                                                                id={val}
                                                                onClick={event => this.handleClick(event, 'skuSize')}
                                                            >
                                                                {val}
                                                            </button>
                                                            <div style={{ marginTop: "10px", textAlign: "center" }}>

                                                            </div>
                                                        </>
                                                    )}
                                                </Slideshow>
                                                <span style={{ cursor: "pointer" }} className={`my-ringsize ${classes.normalfonts}`} onClick={this.handleOpen}>My Ring Size ?</span> </div>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    : ""}
                                {/* className="panel-head" */}
                                {arr2 || arr2.length > 0 ?
                                    <ExpansionPanel style={{ boxShadow: "none" }} expanded={expanded === val.tab2.header} onChange={this.handle(val.tab2.header)}>
                                        <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                            <div style={{ width: "100%" }} >
                                                <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab2.header}</Typography>
                                                {/* <hr class="bottom-line border-line-"></hr> */}
                                            </div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails style={{ padding: '0 5px', width: "100%", overflow: "auto" }}>
                                            {arr2.map(val =>
                                                <Grid container spacing={12} >
                                                    <Grid xs={12}>
                                                        <button className="tabs-valus"
                                                            id={val}
                                                            onClick={event => this.handleClick(event, 'purity')}
                                                        >
                                                            {this.imageRender(val)}
                                                            <span id={val} className={`tabs-contants ${classes.normalfonts}`}> {val}</span>
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel> : ""}
                                {val.tab3.Children.length > 0 ?
                                    <ExpansionPanel style={{ boxShadow: "none" }} expanded={expanded === val.tab3.header} onChange={this.handle(val.tab3.header)}>
                                        <ExpansionPanelSummary expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up" ></i></span>}>
                                            <div style={{ width: "100%" }} >
                                                <Typography className={`subtabs ${classes.tabsheadcolor}`}>{val.tab3.header}</Typography>
                                                {/* <hr class="bottom-line border-line-"></hr> */}
                                            </div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails style={{ padding: '0 5px', width: "100%", overflow: "auto" }}>
                                            {val.tab3.Children.map(val =>
                                                <Grid container spacing={12}>
                                                    <Grid xs={12}>
                                                        <button className="tabs-valus"
                                                            id={val.name}
                                                            onClick={event => this.handleClick(event, 'diamondType')}
                                                        >
                                                            <img src={val.icon} id={val.name} style={{ width: '35px', margin: "auto" }} alt="" />
                                                            <span id={val.name} className={`tabs-contants ${classes.normalfonts}`}> {val.name}</span>
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel> : ""}
                            </>
                        </Container>
                    )
                }
                )}
            </>
        )
    }
    // handleChange = (event, value) => {
    //     this.setState({ value });
    // };

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
