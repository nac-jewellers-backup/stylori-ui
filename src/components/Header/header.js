import React, { Component } from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
class Header extends Component {


  render() {
    return (

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
              <div className="head-icons" style={{fontFamily:"fontawesome"}}>
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
<<<<<<< HEAD



=======
      </div>
>>>>>>> 9eed70acc8a2c18bef32fb565af4be38bf8393ab
    )
  }
}
export default Header;