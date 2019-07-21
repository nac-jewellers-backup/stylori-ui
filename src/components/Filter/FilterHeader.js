import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './filter.css';


class FilterHeader extends Component {
    constructor(props) {
        super(props)
        this.state={
            topHeight:0
    }
}
    componentDidMount() {
        this.screenWidths()
        window.addEventListener("resize", this.screenWidths);
       
       
      }
      screenWidths=()=>{
           // const heights = 0;//this.props.headerHeight
        const width=window.innerWidth;
        if(width>960){
        const filterHeight = document.getElementById('filterBy').clientHeight;

            const heights = 88;
            let add=heights+filterHeight;
            this.setState({ topHeight:add});
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
    render() {


        return (
                <Paper style={{ position: 'sticky', top: this.state.topHeight, width: '100%', zIndex:'3',boxShadow:'none',borderBottom:'1px solid #e3e3e3' }} id="filterBy">
                    {/* <div style={{position:'sticky',top:'165px'}}> */}
                    <Toolbar disableGutters={!this.props.open}>
                        <IconButton
                            color="inherit"
                            onClick={this.props.handleDrawerOpen}
                        >
                            <ChevronLeftIcon className="arrow" />
                            <Typography variant="h6" color="inherit" noWrap
                                className="fil-drawer-head"
                            >
                                Filter By
            </Typography>
                        </IconButton>
                    </Toolbar>
                    {/* </div> */}
                </Paper>
        );
    }
}
export default FilterHeader;