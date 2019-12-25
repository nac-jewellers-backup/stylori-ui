import React, { useState, useEffect } from 'react';
import { Grid, Popper, List, ListItem, ListItemText } from '@material-ui/core';
import { useStyles } from '../styles'
import PropTypes from 'prop-types';

import './../header.css'


function HeaderHoverMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.targetopened);
  const { onMouseLeave, onMouseOver } = props;
  const classes = useStyles();
  // console.log(props.listHoverItem);
  // onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
  // listHoverItem
  useEffect(() => {
    setOpens(props.opened);
    setTarget(props.targetopened)
  });
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} className={classes.paperdiv} >
        <Popper open={opens} anchorEl={target} transition className={classes.mouseOverPopover}>
          <List component="nav" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>

            {
              (props.listHoverItem !== undefined) &&

              (props.listHoverItem['menuOne']).map(menuList =>
                (

                  <ListItem component="li"
                    onClick={() => { window.location.href = '/' + menuList.url }}
                  >

                    <ListItemText variant >

                      {menuList.title}
                    </ListItemText>

                  </ListItem>
                ))}
          </List>
        </Popper>
      </Grid>

    </Grid>
  );
}

export default HeaderHoverMenuItem;

HeaderHoverMenuItem.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  listHoverItem: PropTypes.object.isRequired,
  tabdata: PropTypes.object.isRequired,


}
