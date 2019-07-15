import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

// const menuList =['Earrings','Pendants','Rings','Nose pins',' Bangles & Bracelets'];
const menuLists =
   [{ value: 'earings', title: 'Earrings', url: '#Earrings' },
   { value: 'pendants', title: 'Pendants', url: '#' },
   { value: 'rings', title: 'Rings', url: '#' },
   { value: 'nosepins', title: 'Nose pins', url: '#' },
   { value: 'banglesbracelets', title: 'Bangles & Bracelets', url: '#' },
   ]
   const menuListFilters =
   [{ value: 'Price', title: 'By Price', url: '#Price' },
   { value: 'Collection', title: 'By Collection', url: '#' },
   { value: 'Material', title: 'By Material', url: '#' },
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
                       menuListFilters.map(menuListFilter => (
                           <ListItem component="li" className="ListColor"
                           onClick={() => { window.location.href = '/' + menuListFilter.url }}
                           onMouseOver={() => this.props.handleMouseOver(menuListFilter.value)}>

                               <ListItemText   > 

                                   {menuListFilter.title}
                               </ListItemText>

                           </ListItem>
                       ))}
               </List>
           </div>
       );
   }
}
export default MenuListItem;
