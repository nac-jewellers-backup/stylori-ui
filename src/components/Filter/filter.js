import {
  Checkbox,
  withStyles,
  Drawer,
  CssBaseline
  , AppBar
  , Toolbar
  , List
  , Typography
  , IconButton,
  ListItem,
  ListItemText
} from '@material-ui/core';
import React from 'react';
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { filter, filter1 } from './Filterdata'
import './filter.css'
const drawerWidth = 270;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#fff',
    boxShadow: "none",
    border: '1px solid #e3e3e3',
    color: '#394578',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: 'none'
  },
  drawerHeader: {
    alignItems: 'center',
    padding: '0 8px',
    color: '#394578',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class Filter extends React.Component {
  state = {
    open: false,
    selected: ''
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  selectItem = (name) => {
    let { selected } = this.state;
    let value = selected === name ? "" : name;
    this.setState({ selected: value })
  }

  renderItem = (row) => (
    <ListItem button key={row} className="" >
      <Checkbox
        className="fil-submenu-icons"
        value="checkedB"
        color="primary"
      />
      <ListItemText>
        <Typography className="" variant=""
          className="fil-submenu-list">{row}
        </Typography>
      </ListItemText>
    </ListItem>
  )
  render() {


    let { selected } = this.state;
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ height: "58px" }}
          className=
          {classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <ChevronRightIcon />
              <Typography variant="h6" color="inherit" noWrap
                onClick={this.handleDrawerOpen}
              >
                Filter By
            </Typography>
            </IconButton>


          </Toolbar>

        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}
              style={{ float: 'right' }}>
              <i className="arrow" class="fa fa-times"></i>
            </IconButton >
            <IconButton onClick={this.handleDrawerClose}>

              {theme.direction === 'ltr' ? <ChevronLeftIcon className="arrow" /> : <ChevronRightIcon />}
              <Typography variant="h6" color="inherit"
                onClick={this.handleDrawerClose} noWrap
                className="fil-drawer-head"
              >
                Filter By
            </Typography>
            </IconButton>
          </div>
          <List className="fil-main-list">
            {filter.map(row => (
              <>
                <ListItem button key={row} className="">
                  <ListItemText
                    onClick={() => this.selectItem(row)}
                  >
                    <Typography className="fil-list-items"
                      variant=""
                    >{row}
                    </Typography>
                  </ListItemText>
                  {this.filter ? <ExpandMore className="fil-drawer-arrow" /> : <ExpandLess className="fil-drawer-arrow" />}
                </ListItem>
                {selected === row && filter1[row] !== undefined && filter1[row].map(row => this.renderItem(row))
                }
              </>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          dhjs
        </main>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(Filter);
