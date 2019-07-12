import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// const menuList =['Earrings','Pendants','Rings','Nose pins',' Bangles & Bracelets'];
const menuListFilters = ['By Price', 'By Collection', 'By Material']
const menuLists =
   [{ value: 'earings', title: 'Earrings', url: '#Earrings' },
   { value: 'pendants', title: 'Pendants', url: '#' },
   { value: 'rings', title: 'Rings', url: '#' },
   { value: 'nosepins', title: 'Nose pins', url: '#' },
   { value: 'banglesbracelets', title: 'Bangles & Bracelets', url: '#' },
   ]




class MenuListItem extends Component {
   render() {
       return (
           <div>
               <List component="nav" className="ListColor" >

                   {
                       menuLists.map(menuList => (
                           <ListItem component="li" className="ListColor" onMouseOver={() => this.props.handleMouseOver(menuList.value)}
                               onClick={() => { window.location.href = '/' + menuList.url }}
                           >

                               <ListItemText variant >

                                   {menuList.title}
                               </ListItemText>

                           </ListItem>
                       ))}
               </List>
               <hr className="hrColor" />
               <List component="nav" className="ListColor" >
                   {
                       menuListFilters.map(menuLists => (
                           <ListItem component="li" className="ListColor">

                               <ListItemText   >

                                   {menuLists}
                               </ListItemText>

                           </ListItem>
                       ))}
               </List>
           </div>
       );
   }
}
export default MenuListItem;