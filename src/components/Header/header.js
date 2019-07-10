import React, { Component } from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Hidden } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      panel: false,
      panel1: false,

    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }
  handleClick = (e, name, value) => {
    this.setState({ [name]: !value })
  };

  render() {
    function createData(name) {
      return { name };
    }
    const rows = [
      createData('Casual'),
      createData('Classic'),
      createData('Cocktail'),
      createData('Engament'),
      createData('Fashion'),
      createData('Mens Rings'),
      createData('View All'),
    ];
    const rows1 = [
      createData('Classic'),
      createData('Casual'),
      createData('Fashion'),
      createData('Religious'),
      createData('Tanmaniya'),
      createData('View All'),
    ];
    const rows2 = [
      createData('Studs'),
      createData('Ear Cuffs'),
      createData('Huggies'),
      createData('Jhumkas'),
      createData('Ear Jacket'),
      createData('View All'),
    ];
    const rows4 = [
      createData('Classic'),
      createData('Fashion'),
      createData('Studs Nose Pin'),
      createData('View All'),
    ];
    const rows5 = [
      createData('Bangles'),
      createData('Bracelets'),
      createData('Oval Bracelets'),
      createData('View All'),
    ];
    const rows6 = [
      createData('Bangles'),
      createData('Bracelets'),
      createData('Oval Bracelets'),
      createData('View All'),
    ];

    return (
      <div>
        <Hidden smDown>
          <AppBar className="header-appbar">
            <Grid container spacing={3} >
              <Grid item xs={3}>
                <div className="head-icons">
                  <i class="fa fa-truck "></i>
                  <i class="fa fa-phone"></i>
                </div>
              </Grid>
              <Grid item xs={5}>
                <div >
                  <img className="img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="head-icons" style={{ fontFamily: "fontawesome" }}>
                  <InputBase
                    className="search"
                    placeholder='&#xf002; Search here'
                  />
                  <i class="fa fa-user"></i>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-heart"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-shopping-bag"></i>
                  </Badge>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={12} className="header-navbar-list">
                <nav >
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Whats New</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Jewellery</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Solitaires</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Gold Coins</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Gifts</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Collections</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;One Day Sipping</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Stories</a>
                </nav>
              </Grid>
            </Grid>
            <div className="header-bottom"></div>
          </AppBar>

        </Hidden>
        <Hidden mdUp>
          <AppBar
            className="header-appbar-moblie"
          >
            <Toolbar>
              <Grid item xs={2}>
                <IconButton
                  onClick={this.handleDrawerOpen}
                >
                  <MenuIcon style={{ color: '#222', fontSize: '30px' }} />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <div >
                  <img className="mobile-img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mobli-icon">
                  <Badge >
                    <i class="fa fa-comments"></i>
                  </Badge>
                  <Badge >
                    <i class="fa fa-search"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-heart"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-shopping-bag"></i>
                  </Badge>
                </div>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={this.state.open}
          >
            <div className="header-drawer">
              <IconButton onClick={this.handleDrawerClose}>
                Menu
          </IconButton>
            </div>
            <Divider />
            <List
              component="nav"
              className="header-list"
              aria-labelledby="nested-list-subheader"
            >
              <ListItem button className="list-items">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText >
                  <Typography className="mbl-head-list">Whats New</Typography>
                </ListItemText>
              </ListItem>
              <ListItem button name='panel' className='list-items'
                value={this.state.panel} button onClick={e => this.handleClick(e, 'panel', this.state.panel)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText >
                  <Typography className="mbl-head-list">Jewellery</Typography>
                </ListItemText>
                {this.state.panel ? <ExpandLess /> : <ExpandMore />}
              </ListItem>


              <Collapse in={this.state.panel} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItem button className="list-items"
                    onClick={e => this.handleClick(e, 'panel1', this.state.panel1)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText >
                      <Typography className="Jew-mbl-head-list">Earrings</Typography>
                    </ListItemText>
                    {this.state.panel1 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  {rows2.map(row => (
                    <Collapse in={this.state.panel1} timeout="auto" unmountOnExit key={row.name}>
                      <List component="div" disablePadding>
                        <ListItem button className="list-items" >
                          <ListItemText >
                            <Typography className="Jew-mbl-head-list" variant="subtitle1">{row.name}</Typography>
                          </ListItemText>
                          <img height="100px" width="100px" src="https://assets-cdn.stylori.com/images/megamenu/studs.jpg"/>
                        </ListItem>
                      </List>
                    </Collapse>
                  ))}
                  <ListItem button className="list-items"
                    onClick={e => this.handleClick(e, 'panel2', this.state.panel2)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography className="Jew-mbl-head-list">Pendants</Typography>
                    </ListItemText>
                    {this.state.panel2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  {rows1.map(row => (
                    <Collapse in={this.state.panel2} timeout="auto" unmountOnExit key={row.name}>
                      <List component="div" disablePadding>
                        <ListItem button className="list-items" >
                          <ListItemText>
                            <Typography className="Jew-mbl-head-list" variant="subtitle1">{row.name}</Typography>
                          </ListItemText>
                          <img height="100px" width="100px" src="https://assets-cdn.stylori.com/images/megamenu/classic-pendants.jpg"/>
                        </ListItem>
                      </List>
                    </Collapse>
                  ))}
                  <ListItem button className="list-items"
                    onClick={e => this.handleClick(e, 'panel3', this.state.panel3)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText >
                      <Typography className="Jew-mbl-head-list">Rings</Typography>
                    </ListItemText>
                    {this.state.panel3 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  {rows.map(row => (
                    <Collapse in={this.state.panel3} timeout="auto" unmountOnExit key={row.name}>
                      <List component="div" disablePadding>
                        <ListItem button className="list-items" >
                          <ListItemText >
                            <Typography className="Jew-mbl-head-list" variant="subtitle1">{row.name}</Typography>
                          </ListItemText>
       <img height="100px" width="100px" src="https://assets-cdn.stylori.com/images/megamenu/casual-rings.jpg"/>
                        </ListItem>
                      </List>
                    </Collapse>
                  ))}
                  <ListItem button className="list-items"
                    onClick={e => this.handleClick(e, 'panel4', this.state.panel4)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText >
                      <Typography className="Jew-mbl-head-list">Nose Pins</Typography>
                    </ListItemText>
                    {this.state.panel4 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  {rows4.map(row => (
                    <Collapse in={this.state.panel4} timeout="auto" unmountOnExit key={row.name}>
                      <List component="div" disablePadding>
                        <ListItem button className="list-items" >
                          <ListItemText >
                            <Typography className="Jew-mbl-head-list" variant="subtitle1">{row.name}</Typography>
                          </ListItemText>
       <img height="100px" width="100px" src="https://assets-cdn.stylori.com/images/megamenu/classic-nosepins.jpg"/>

                        </ListItem>
                      </List>
                    </Collapse>
                  ))}

                  <ListItem button className="list-items"
                    onClick={e => this.handleClick(e, 'panel5', this.state.panel5)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText >
                      <Typography className="Jew-mbl-head-list">Bangles & Bracelets</Typography>
                    </ListItemText>
                    {this.state.panel5 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  {rows5.map(row => (
                    <Collapse in={this.state.panel5} timeout="auto" unmountOnExit key={row.name}>
                      <List component="div" disablePadding>
                        <ListItem button className="list-items" >
                          <ListItemText >
                            <Typography className="Jew-mbl-head-list" variant="subtitle1">{row.name}</Typography>
                          </ListItemText>
       <img height="100px" width="100px" src="https://assets-cdn.stylori.com/images/megamenu/round-bangles.jpg"/>

                        </ListItem>
                      </List>
                    </Collapse>
                  ))}
                  <ListItem button
                    onClick={e => this.handleClick(e, 'panel6', this.state.panel6)}>
                    <ListItemIcon />
                    <ListItemText >
                      <Typography className="Jew-mbl-head-list">Bangles & Bracelets</Typography>
                    </ListItemText>
                    {this.state.panel6 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  {rows6.map(row => (
                    <Collapse in={this.state.panel6} timeout="auto" unmountOnExit key={row.name}>
                      <List component="div" disablePadding>
                        <ListItem button  >
                          <ListItemText >
                            <Paper>
                              <Typography className="Jew-mbl-head-list" style={{ borderBottom: "1px solid #eee" }}>
                                Paper can be used to
                          </Typography>
                            </Paper>
                            <Typography className="Jew-mbl-head-list" variant="subtitle1">{row.name}</Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Collapse>
                  ))}

                </List>
              </Collapse>
            </List>
          </Drawer>

        </Hidden>
      </div>
    )
  }
}
export default Header;