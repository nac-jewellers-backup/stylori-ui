import {
  ListItem,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Button,
  ListItemText,
  Checkbox
} from '@material-ui/core';
import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './filter.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { filter, filter1, Filterdata } from './Filterdata';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Hidden } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
class Filter extends React.Component {
  state = {
    open: false,
    isChecked: false,
    filtercheck: ''
  };
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    }, function () {
    }.bind(this));
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
  filterValue = (filtercheck) => {
    if (filtercheck === this.state.filtercheck) {
      this.setState({ filtercheck: '' })
    } else {
      this.setState({ filtercheck })
    }

  }
  render() {
    let { selected } = this.state;
    const { open } = this.state;

    return (
      <div >
        <Hidden smDown>
          <AppBar
            className="main-filter"
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                onClick={this.handleDrawerOpen}
              >
                <ChevronLeftIcon className="arrow" />
                <Typography variant="h6" color="inherit" noWrap
                  className="fil-drawer-head"
                >
                  Filter By
            </Typography>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
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
              {filter.map(row => (
                <>
                  <ListItem button key={row} className=""
                    onClick={() => this.selectItem(row)}>
                    <ListItemText
                    >
                      <Typography className="fil-list-items"
                        variant=""
                      >{row}
                      </Typography>
                    </ListItemText>
                    {this.filter ? <ExpandMore className="fil-drawer-arrow" /> :
                      <ExpandLess className="fil-drawer-arrow" />}
                  </ListItem>
                  <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                    {selected === row &&
                      filter1[row] !== undefined && filter1[row].map(row => (
                        <ListItem button key={row}  >
                        <>
                  <Checkbox
                             checked={this.state.isChecked}
                             onChange={this.toggleChange}
                            className="fil-submenu-icons"
                            value="checked"
                            color="primary"
                          />
                          </>
                          <ListItemText>
                            <Typography className="" variant=""
                              className="fil-submenu-list">{row}
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
        </Hidden>
        <Hidden mdUp>
          <div >
            <div style={{ height: "23px", padding: "9px", borderBottom: "1px solid #e3e3e3" }}>
              <a >
                <i style={{ color: "#394578" }} class="fa fa-times"></i>&nbsp;
                 Filter</a>
              <Button style={{ float: "right", border: '1px solid #ececec', lineHeight: "15px" }}> <b >Clear All</b></Button>

            </div>
            <Grid container spacing={2} xs={12} className="p">
              <Grid item xs={6} style={{ backgroundColor: "#F2F2F2" }}>
                <List className="mbl-filter-list">
                  {filter.map(row => (
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
                <Grid item xs={6} style={{ height: "575px", overflow: 'scroll' }}>
                  {filter1[this.state.filtercheck].map(row => (
                    <ListItem key={row} style={{ paddingLeft: "0px", paddingRight: "0px", width: "100%" }}>
                      <Checkbox
                        value="checked"
                        color="primary"
                        checked={this.state.isChecked}
                        onChange={this.toggleChange}
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



            <AppBar color="primary" className="filter-fixed header">
              <Toolbar >
                <IconButton >
                  <Typography variant=""
                    className="filter-mbl-font"><i className='filter-icon' class="fa fa-filter"></i> &nbsp;
                    Filter
                    </Typography>
                </IconButton>

                <div style={{ flexGrow: "2"}} />

                <IconButton edge="end" color="inherit">
                  <Typography variant=""
                    className="filter-mbl-font"><i className='filter-icon' class="fa fa-sort"></i>&nbsp;
                    Sort
                    </Typography>
                </IconButton>
              </Toolbar>
            </AppBar>


          </div>
        </Hidden>


      </div>
    );
  }
}
export default Filter;