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
    }
    render() {


        return (
            <div style={{ position: 'sticky', top: '155px', width: '100%' }}>
                <Paper style={{ position: 'sticky', top: '155px', width: '100%' }}>
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
            </div>
        );
    }
}
export default FilterHeader;