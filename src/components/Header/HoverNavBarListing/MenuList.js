import React , {Component}from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';





const styles = theme => ({
  colorDark: {
      backgroundColor: theme.palette.secondary.dark,
  
    },
    colorMain: {
      color: theme.palette.primary.main,
  
    },
    colorLight:{
      color: theme.palette.primary.main
    },
    colorMainBorder:{
border:`1px solid ${theme.palette.secondary.main}`
    }
});
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
    constructor(props){
        super(props)
    }
   render() {
    const { classes} = this.props;
       return (
           <div>
               <List component="nav" className="ListColor"  className={`${classes.colorMain}`}>

                   {
                       menuLists.map(menuList => (
                           <ListItem component="li"   className={`ListColor ${classes.colorMain}`}  onMouseOver={() => this.props.handleMouseOver(menuList.value)}
                               onClick={() => { window.location.href = '/' + menuList.url }} 
                           >

                               <ListItemText variant >

                                   {menuList.title}
                               </ListItemText>

                           </ListItem>
                       ))}
               </List>
               <hr className={`${classes.colorMainBorder}`} />
               <List component="nav" className={`ListColor ${classes.colorMain}`} >
                   {
                       menuListFilters.map(menuListFilter => (
                           <ListItem component="li" className={`ListColor ${classes.colorMain}`}
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
export default withStyles(styles)(MenuListItem);
