import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';




const styles = theme => ({
    colorDark: {
        backgroundColor: theme.palette.secondary.dark,

    },
    colorMain: {
        color: theme.palette.primary.main,

    },
    colorLight: {
        color: theme.palette.primary.main
    },
    colorMainBorder: {
        border: `1px solid ${theme.palette.secondary.main}`
    },
    listHover: {
        "&:hover": {
            borderLeft: `3px solid ${theme.palette.secondary.dark}`,
            color: theme.palette.secondary.main,
            cursor: 'pointer',
        }
    },
    listHovers: {
        "&:active": {
            borderLeft: `3px solid ${theme.palette.secondary.dark}`,
            color: theme.palette.secondary.main,
            cursor: 'pointer',
        }
    },
});
// const menuList =['Earrings','Pendants','Rings','Nose pins',' Bangles & Bracelets'];





class MenuListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <List component="nav" className={`ListColor ${classes.colorMain}`}>

                    {
                        (this.props.listHoverItem !== undefined) &&

                        (this.props.listHoverItem['menuOne']).map(menuList =>
                            (

                                <ListItem component="li" className={`ListColor ${classes.listHover} ${classes.colorMain}`} onMouseOver={() => this.props.handleMouseOver(menuList.value)}

                                >
                                    <a href={menuList.url} style={{ textDecoration: 'none' }}>
                                        <ListItemText variant >

                                            {menuList.title}
                                        </ListItemText>
                                    </a>
                                </ListItem>
                            ))}
                </List>
                <hr className={`${classes.colorMainBorder}`} />
                <List component="nav" className={`ListColor ${classes.colorMain}`} >
                    {
                        (this.props.listHoverItem !== undefined) &&
                        this.props.listHoverItem['menuTwo'] && this.props.listHoverItem['menuTwo'].map(menuListFilter => (
                            <ListItem component="li" className={`ListColor ${classes.listHover} ${classes.colorMain}`}

                                onMouseOver={() => this.props.handleMouseOver(menuListFilter.value)}>
                                <a href={menuListFilter.url} style={{ textDecoration: 'none' }}>
                                    <ListItemText>

                                        {menuListFilter.title}
                                    </ListItemText>
                                </a>
                            </ListItem>
                        ))}
                </List>
            </div>
        );
    }
}
export default withStyles(styles)(MenuListItem);
MenuListItem.propTypes = {
    listHoverItem: PropTypes.string,
    handleMouseOver: PropTypes.func
}