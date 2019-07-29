import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardRadioButton from "../RadioButton/index"
import './filter.css';
import filterdatas from './Filterdata';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    colorMain: {
        color: theme.palette.primary.main,

    },

});





class FilterHeader extends Component {
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
    }
    screenWidths = () => {
        // const heights = 0;//this.props.headerHeight
        const width = window.innerWidth;
        if (width > 960) {
            const filterHeight = document.getElementById('filterBy').clientHeight;

            const heights = 88;
            let add = heights + filterHeight;
            this.setState({ topHeight: add });
        }
        // else if(width<960){
        //     const heights = 0;
        //     let add=heights+filterHeight;
        //     this.setState({ topHeight:add});
        // }
        // else if(width<600){
        //     const heights = -20;
        //     let add=heights+filterHeight;
        //    this.setState({ topHeight:add});
        // }
    }
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    }
    render() {

        const { classes } = this.props;
        return (
            <Paper style={{ position: 'sticky', top: this.state.topHeight, width: '100%', zIndex: '3', boxShadow: 'none', borderBottom: '1px solid #e3e3e3', borderTop: '1px solid #e3e3e3', display: 'flex' }} id="filterBy">
                {/* <div style={{position:'sticky',top:'165px'}}> */}
                <Grid item container>
                    <Grid item lg={6}>
                        <Toolbar disableGutters={!this.props.open}>

                            <div style={{ width: "240px" }}>
                                {this.props.check ?
                                    <IconButton onClick={this.props.handleChangeDrawer}
                                        style={{ float: 'right' }}>
                                        <i style={{ color: "#394578", margin: "45%" }} class="fa fa-times"></i>
                                    </IconButton >
                                    :
                                    ''
                                }

                                <IconButton onClick={this.props.handleChangeDrawer}>
                                    {
                                        this.props.check ? <ChevronRightIcon className={`${classes.colorMain}`} />
                                            :
                                            <ChevronLeftIcon className={`${classes.colorMain}`} />

                                    }
                                    <Typography color="inherit"
                                        onClick={this.handleDrawerClose} noWrap
                                        className={` fil-drawer-head ${classes.colorMain}`}
                                    >
                                        Filter By
            </Typography>
                                </IconButton>
                            </div>
                        </Toolbar>
                    </Grid>
                    <Grid item lg={6}>
                        <div className="fil-drawer-head-sort">
                            <Typography variant="h6" noWrap
                                className={`fil-drawer-sort_font ${classes.colorMain}`}
                                onClick={this.handleExpandClick}
                            >
                                Sort By
                                        {/* <span className="fil-drawer-head-sort-expand">
                                    <ExpandMoreIcon />
                                </span> */}
                            </Typography>
                        </div>
                        <div className={"testMenu"} style={{ position: "absolute", right: "15px", top: "45px" }}>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit >
                                <CardRadioButton data={filterdatas.radioValues} />
                            </Collapse>
                        </div>
                    </Grid>
                </Grid>
                {/* </div> */}
            </Paper>
        );
    }
}
export default withStyles(styles)(FilterHeader);