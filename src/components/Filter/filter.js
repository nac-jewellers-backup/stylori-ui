import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { filter, filter1 } from './Filterdata';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Checkbox, Paper } from '@material-ui/core';
import './filter.css';
import ProductCard from '../ProductCard/index';
import FilterHeader from './FilterHeader';
const drawerWidth = 280;

const styles = theme => ({
  root: {
    display: 'flex',

  },
  appBar: {
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
    display: 'sticky',
    top: '155px'

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

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


class PersistentDrawerLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open,
    };

  }
  state = {
    open: true,
  };
  handleChange(value, name) {

    let { checked, chipData } = this.state;
    let arr = [];
    if (name === true) {
      chipData.push({ key: chipData[chipData.length - 1].key, label: value });
    } else {
      arr = chipData.filter(val => val.label !== value);
      chipData = arr;
    }
    checked[value] = name;
    this.setState({
      checked,
      chipData
    })
  }

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
  render() {
    const { classes, theme } = this.props;
    let { selected } = this.state;
    const { open } = this.state;
    console.log('sdfsfs', open)
    return (
      <>
        <FilterHeader handleDrawerOpen={this.handleDrawerOpen.bind(this)} open={this.state.open} />

        <div className={classes.root} >
          {/* <CssBaseline /> */}

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >

            <div style={{ width: "240px", position: 'relative' }}>
              <IconButton onClick={this.handleDrawerClose}
                style={{ float: 'right' }}>
                <i style={{ color: "#394578", margin: "45%" }} class="fa fa-times"></i>
              </IconButton >
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronRightIcon className="arrow" />
                <Typography color="inherit"
                  onClick={this.handleDrawerClose} noWrap
                  className="fil-drawer-head"
                >
                  Filter By
            </Typography>
              </IconButton>
            </div>
            <Divider />
            <List className="fil-main-list">
              <div style={{ margin: "5px" }}>
                <Typography className="fil-list-items">Price</Typography>
                <Grid container spacing={12} style={{ paddingLeft: "5px" }}>
                  <Grid item xs={4} >
                    <TextField
                      className="price-txt"
                      id="outlined-bare"
                      defaultValue="$ 8774379"
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>&nbsp;
             <Grid item xs={4}>
                    <TextField
                      className="price-txt"
                      id="outlined-bare"
                      defaultValue="$ 76734868"
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>&nbsp;
            <Grid item xs={3}>
                    <Button variant="contained" className="price-btn">Go</Button>
                  </Grid>
                </Grid>
              </div>
              {filter.map(row => (
                <>
                  {/* button */}  <ListItem key={row} className=""
                    onClick={() => this.selectItem(row)}>
                    <ListItemText
                    >
                      <Typography className="fil-list-items"
                        variant=""
                      >{row}
                      </Typography>
                    </ListItemText>
                    {row === selected ? <ExpandMore className="fil-drawer-arrow" /> :
                      <ExpandLess className="fil-drawer-arrow" />}
                  </ListItem>
                  <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                    {selected === row &&
                      filter1[row] !== undefined && filter1[row].map(row12 => (
                        <ListItem key={row12}  >   {/* button */}
                          <Checkbox
                            className="fil-submenu-icons"
                            value="checkedB"
                            color="primary"
                          />
                          <ListItemText>
                            <Typography className="" variant=""
                              className="fil-submenu-list">{row12}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      ))
                    }
                  </div>
                </>
              ))}
            </List>
          </Drawer>

          <div
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}

          >
            <ProductCard />
          </div>

        </div>
      </>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);