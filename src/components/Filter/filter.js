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
import filterdatas from './Filterdata';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Checkbox, Paper } from '@material-ui/core';
import './filter.css';
import ProductLayout from '../ProductCard/ProductLayout';
import FilterHeader from './FilterHeader';
import { Hidden } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
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
    top: '153px'

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
      openMobile:true,
      checked: {},
    selected: '',
    filtercheck: '',
    chipData: [
      { key: '', label: '' },
    ],
    };

  }

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
    document.documentElement.scrollTop = 180;
    

  };
  handleDrawerOpenMobile = () => {
    this.setState({ openMobile: false });

    

  };
  handleDrawerCloseMobile = () => {
    this.setState({ openMobile: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  selectItem = (name) => {
    let { selected } = this.state;
    let value = selected === name ? "" : name;
    this.setState({ selected: value })
  }
  filterValue = (filtercheck) => {
    if (filtercheck === this.state.filtercheck) {
      this.setState({ filtercheck: '' })
    } else {
      this.setState({ filtercheck })
    }

  }

  handleDelete = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  render() {
    const { classes, theme } = this.props;
    let { selected } = this.state;
    const { open,openMobile } = this.state;
    const datafilter = filterdatas.filter1;

    return (
      
      <>
      
      <Hidden smDown>
          <FilterHeader handleDrawerOpen={this.handleDrawerOpen.bind(this)} open={this.state.open} />
          </Hidden>
          <div className={classes.root} >
          <Hidden smDown>
         
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

              <div style={{ width: "240px" }}>
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
                {filterdatas.filter.map(row => (
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
                        filterdatas.filter1[row] !== undefined && filterdatas.filter1[row].map(row12 => (
                          <ListItem key={row12}  >   {/* button */}
                            <Checkbox
                              checked={this.state.checked[row12] !== undefined ? this.state.checked[row12] : false}
                              onChange={() => this.handleChange(row12, this.state.checked[row12] !== undefined ? !this.state.checked[row12] : true)}
                              className="fil-submenu-icons"
                              value="checked"
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
          <ProductLayout />

        </div>
            </Hidden>
           
        
        </div>
        <Hidden mdUp>
        <ProductLayout styles={{display:!openMobile?'none':'block' }}/>
          <div style={{top:'0'}}>
            <div style={{ height: "23px", padding: "9px", borderBottom: "1px solid #e3e3e3",display:openMobile?'none':'block' }}>
              <a onClick={this.handleDrawerCloseMobile}>
                <i style={{ color: "#394578" }} class="fa fa-times" ></i>&nbsp;
                 Filter</a>
              <Button style={{ float: "right", border: '1px solid #ececec', lineHeight: "15px" }}> <b >Clear All</b></Button>

            </div>
            
            <Grid container spacing={2} xs={12} className="p" style={{height:"81vh",overflow:'auto'}}>
              <Grid item xs={6} style={{display:openMobile?'none':'block', backgroundColor: "#F2F2F2" }}>
                <List className="mbl-filter-list">
                  {filterdatas.filter.map(row => (
                    <ListItem key={row} className=""
                      onClick={() => this.filterValue(row)}>
                      <ListItemText
                      >
                        <Typography className="filter-mbl-font"
                          variant=""
                        >{row}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              {
                this.state.filtercheck !== '' &&
                <Grid item xs={6} style={{display:openMobile?'none':'block', height: "575px", overflow: 'auto' }}>
                  {filterdatas.filter1[this.state.filtercheck].map(row => (
                    <ListItem key={row} style={{ paddingLeft: "0px", paddingRight: "0px", width: "100%" }}>
                      <Checkbox
                        value="checked"
                        color="primary"
                        checked={this.state.checked[row] !== undefined ? this.state.checked[row] : false}
                        onChange={() => this.handleChange(row, this.state.checked[row] !== undefined ? !this.state.checked[row] : true)}
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                      />
                      <ListItemText>
                        <Typography variant=""
                          className="filter-mbl-font">{row}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </Grid>
              }
            </Grid>



            <AppBar color="primary" className="filter-fixed header" style={{display:!openMobile?'none':'block' }}>
              <Toolbar >
                <IconButton onClick={this.handleDrawerOpenMobile}>
                  <Typography variant=""
                    className="filter-mbl-font"><i className='filter-icon' class="fa fa-filter" 
                    
                    ></i> &nbsp;
                    Filter
                    </Typography>
                </IconButton>

                <div style={{ flexGrow: "2" }} />

                <IconButton edge="end" color="inherit" >
                  <Typography variant=""
                    className="filter-mbl-font"><i className='filter-icon' class="fa fa-sort"></i>&nbsp;
                    Sort
                    </Typography>
                </IconButton>
              </Toolbar>
            </AppBar>


          </div>

        </Hidden>

      </>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);




