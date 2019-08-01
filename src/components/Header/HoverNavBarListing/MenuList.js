import React , {Component}from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import menuList from './tileData'




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
                       menuList.menuLists[this.props.listHoverItem]['menuOne'].map(menuList => (
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
                      menuList.menuLists[this.props.listHoverItem]['menuTwo'].map(menuListFilter => (
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
