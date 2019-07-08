import React, { Component } from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
class Header extends Component {


  render() {
    return (
      <div>
        <AppBar className="header-appbar">
          <div className="grid-container">
            <div className="item1">
              <IconButton className="head-icons">
                <i class="fa fa-truck "></i>
              </IconButton >
              <IconButton className="head-icons">
                <i class="fa fa-phone"></i>
              </IconButton >
            </div>
            <div className="item1">
              <img height="100%" width="100%" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" />
            </div>
            <div className="item1">
              <IconButton className="head-icons">
                <i class="fa fa-user "></i>
              </IconButton >
              <IconButton className="head-icons">
                <i class="fa fa-heart"></i>
              </IconButton >
              <IconButton className="head-icons">
                <i class="fa fa-shopping-bag"></i>
              </IconButton >
            </div>
          </div>
          <div className="grid-container1" >
            <div className="list"><i class="fa fa-plus-circle"></i>Whats New</div>
            <div className="list"><i class="fa fa-plus-circle"></i>Jewellery</div>
            <div className="list"><i class="fa fa-plus-circle"></i>Solitaires</div>
            <div className="list"><i class="fa fa-plus-circle"></i>Gold Coins</div>
            <div className="list"><i class="fa fa-plus-circle"></i>Gifts</div>
            <div className="list"><i class="fa fa-plus-circle"></i>Collections</div>
            <div className="list"><i class="fa fa-plus-circle"></i>One Day Sipping</div>
            <div className="list"><i class="fa fa-plus-circle"></i>Stories</div>

          </div>
        </AppBar>



      </div>
    )
  }
}
export default Header;