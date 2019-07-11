import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const menuList =['Earrings','Pendants','Rings','Nose pins',' Bangles & Bracelets'];
const menuListFilters=['By Price','By Collection','By Material']





class MenuListItem extends Component {

    render() {
        return (
            <div>
                <List component="nav" >

                    {
                    menuList.map(menuLists=>(
                    <ListItem component="li" className="ListColor">

                        <ListItemText  variant >
                        <div style={{borderLeft:'5px solid pink'}}></div>
                          {menuLists}
                        </ListItemText>

                    </ListItem>
                     ))  }
                </List>
            <hr className="hrColor"/>
                <List  >
                {
                    menuListFilters.map(menuLists=>(
                    <ListItem component="li" className="ListColor">

                        <ListItemText   >
                            <div></div>
                          {menuLists}
                        </ListItemText>

                    </ListItem>
                     ))  }
                </List>
            </div>
        );
    }
}
export default MenuListItem;