import React from 'react';
import { Paper, Toolbar, Typography, IconButton, Collapse, Chip, Avatar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CardRadioButton from "../InputComponents/RadioButton/index"
import './filter.css';
import { useDummyRequest } from '../../hooks';
import { filterParams } from '../../mappers';
import { Grid, Popper, ClickAwayListener, Grow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { sortOptions } from '../../mappers/dummydata/filterdata';
import { FilterOptionsContext } from 'context'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    colorMain: {
        color: theme.palette.primary.main,
        alignContent: "center",
        display: "flex",
        alignItems: "center"
    },
});

const FilterHeader = (props) => {
    const { setSort, setOffset, FilterOptionsCtx } = React.useContext(FilterOptionsContext);
    const loc = window.location.search
    return <Component setSort={setSort} setOffset={setOffset} offset={FilterOptionsCtx.offset} sort={FilterOptionsCtx.sort}  {...props} />
}

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topHeight: 0,
            expanded: false,
        }
    }

    componentDidMount() {
        this.screenWidths()
        window.addEventListener("resize", this.screenWidths);
        // window.addEventListener("scroll", this.screenWidths);
    }

    screenWidths = () => {
        // const heights = 0;//this.props.headerHeight
        const width = window.innerWidth;
        let filterHeight = null
        if (width > 960) {

            if (document.getElementById('filterBy')) filterHeight = document.getElementById('filterBy').clientHeight;
            // const heights = 30;
            let add = filterHeight;
            this.setState({ topHeight: add });

        }

    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    }
    handleExpandClickClose = () => {
        this.setState({ expanded: false });
    }
    handleChange = (event) => {

        if (this.props.offset > 0) this.props.setOffset(0)
        // console.log(this.props.offset)
        this.props.setSort({ values: event.target.value })
        this.setState({ expanded: false })
        window.scrollTo(0, 0);

    }
    render() {

        const { classes, chips, checked } = this.props;
        const { sortOptions } = this.props.data;
        return (
            <Paper style={{ position: 'sticky', top: "69px", width: '100%', zIndex: 11, boxShadow: 'none', borderBottom: '1px solid #e3e3e3', borderTop: '1px solid #e3e3e3', display: 'flex' }} id="filterBy">
                {/* <div style={{position:'sticky',top:'165px'}}> */}
                <Grid container>
                    <Grid item lg={3}>
                        <Toolbar disableGutters={!this.props.open}>

                            <div style={{ width: "240px" }}>
                                {this.props.check ?
                                    <div onClick={this.props.handleChangeDrawer}
                                        style={{ float: 'right' }}>
                                        <i style={{ color: "#394578", margin: "40%", cursor: 'pointer', fontSize: '18px' }} class="fa fa-times"></i>
                                    </div >
                                    :
                                    ''
                                }

                                <Grid item onClick={this.props.handleChangeDrawer} style={{ display: 'flex', alignItems: 'center', position: 'absolute', top: '29%', left: '5%', cursor: 'pointer' }}>
                                    {
                                        this.props.check ? <i style={{ fontSize: '22px', paddingRight: '15px' }} className={`fa ${classes.colorMain}`}>&#xf0b0;</i>
                                            :
                                            // <ChevronLeftIcon className={`${classes.colorMain}`} />
                                            <i style={{ fontSize: '22px', paddingRight: '15px' }} className={`fa ${classes.colorMain}`}>&#xf0b0;</i>
                                    }
                                    <Typography color="inherit"
                                        onClick={this.handleDrawerClose}
                                        className={` fil-drawer-head ${classes.colorMain}`}
                                    >
                                        Filter by
            </Typography>
                                </Grid>
                            </div>
                        </Toolbar>
                    </Grid>
                    <div className="header-chips Chip">
                        {chips.map(data => {
                            return (
                                <Chip
                                    className="header-chips-text"
                                    label={data.label}
                                    onClick={() => this.props.click(data.label)}
                                    avatar={data.label ?
                                        <i className="search-choice-close" class="fa fa-times"></i>
                                        : ""}
                                />
                            );
                        })}
                    </div>
                    <Grid item lg={2}>
                        <div className="fil-drawer-head-sort">
                            <Typography variant="h6" noWrap
                                className={`fil-drawer-sort_font ${classes.colorMain}`}
                                onClick={this.handleExpandClick}
                            >
                                Sort by {this.state.expanded ? <ExpandLess /> : <ExpandMore />}
                            </Typography>

                        </div>
                        <div className={"testMenu"} style={{
                            position: "absolute", width: "215px",
                            right: "15px", top: "65px", boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 7px'
                        }}>
                            <Popper open={this.state.expanded} transition disablePortal style={{ position: 'absolute', right: '21px', height: "1px" }}>
                                {({ TransitionProps }) => (
                                    <Grow {...TransitionProps} >
                                        <ClickAwayListener onClickAway={(e) => this.handleExpandClickClose(e)}>
                                            <Grid>
                                                <CardRadioButton data={sortOptions} onChange={this.handleChange} values={this.props.sort} />
                                            </Grid>
                                        </ClickAwayListener>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
export default withStyles(styles)(props => {
    const { mapped } = useDummyRequest(filterParams);
    if (Object.keys(mapped).length === 0) return ''
    return < FilterHeader {...props} data={mapped} />
});
