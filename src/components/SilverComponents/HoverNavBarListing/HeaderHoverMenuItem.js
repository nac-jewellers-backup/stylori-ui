import React, { useState, useEffect } from 'react';
import { Grid, Popper, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from '../styles'
import PropTypes from 'prop-types';

import './../header.css'


function HeaderHoverMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.targetopened);
  const { onMouseLeave, onMouseOver,submenuDetailsDelete,submenuDetails } = props;
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
            <Grid className={classes.subtopic1}>
              {
                (props.listHoverItem !== undefined) &&
                (props.listHoverItem['menuOne']).map(menuList =>
                  (

                    <ListItem onMouseOver={(event) => { submenuDetails(menuList.imgContainer,event.currentTarget) }}  className={classes.listedItems} component="li"
                      onClick={() => { window.location.href = '/' + menuList.url }}
                    >
                      <ListItemText variant >
                        <Typography className={classes.listedItemsvalue} >
                          {menuList.title.toUpperCase()}
                        </Typography>
                      </ListItemText>

                    </ListItem>
                  ))}
            </Grid>
            <Grid className={classes.subtopic2}>
              {
                (props.listHoverItem !== undefined) &&
                (props.listHoverItem['menuTwo']).map(menuList =>
                  (
                    <ListItem onMouseOver={(event) => { props.submenuDetails(menuList.imgContainer,event.currentTarget) }}  className={classes.listedItemsub} component="li"
                      onClick={() => { window.location.href = '/' + menuList.url }}
                    >
                      <ListItemText variant >
                        <Typography className={classes.listedItemsvalue} >
                          {menuList.title.toUpperCase()}
                        </Typography>
                      </ListItemText>

                    </ListItem>
                  ))}
            </Grid>

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
  submenuDetails: PropTypes.func.isRequired,
  listHoverItem: PropTypes.object.isRequired,
  tabdata: PropTypes.object.isRequired,


}
