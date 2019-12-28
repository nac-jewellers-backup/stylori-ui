import React, { useState, useEffect } from 'react';
import { Grid, Popper, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from '../styles'
import PropTypes from 'prop-types';

import './../header.css'


function HeaderHoverMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.targetopened);
  const { onMouseLeave, onMouseOver, onClick } = props;
  const classes = useStyles();
  const mapper = props.filters ? props.listHoverItem : props.listHoverItem['menuOne']
  // const mapper_menu2 = props.filters ? props.listHoverItem : props.listHoverItem['menuOne']
  const classHover = props.filters ? classes.mouseOverPopoverfilters : classes.mouseOverPopoverHeader
  // console.log(props.listHoverItem);
  // onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
  // listHoverItem
  useEffect(() => {
    setOpens(props.opened);
    setTarget(props.targetopened)
  });
  // top: '18px !important',
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} className={classes.paperdiv} >
        <Popper open={opens} anchorEl={target} transition className={`${classes.mouseOverPopover} ${classHover}`}>
          <List component="nav" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <Grid className={classes.subtopic1}>
              {
                !props.filters &&
                (props.listHoverItem !== undefined) &&
                (mapper).map(menuList =>
                  (
                    <ListItem onMouseOver={(event) => { props.submenuDetails(menuList.imgContainer, event.currentTarget) }} className={classes.listedItems} component="li"
                      onClick={() => { window.location.href = '/' + menuList.url }}
                    >
                      <ListItemText variant>
                        <Typography className={classes.listedItemsvalue}>
                          {/* {menuList.title.toUpperCase()} */}
                          {menuList.title ?
                            menuList.title.toUpperCase() :
                            menuList}
                        </Typography>
                      </ListItemText>

                    </ListItem>

                  ))

              }
              {
                props.filters &&
                (mapper).map(menuList =>

                  (

                    <ListItem component="li" name={menuList}
                      onClick={(e) => props.onchoosetype(menuList)}
                    >

                      <ListItemText variant >

                        {menuList.title ?
                          menuList.title :
                          menuList}
                      </ListItemText>

                    </ListItem>
                  ))}
            </Grid>
            <Grid className={classes.subtopic2}>
              {
                !props.filters &&
                (props.listHoverItem !== undefined) &&
                (props.listHoverItem['menuTwo']).map(menuList =>
                  (
                    <ListItem onMouseOver={(event) => { props.submenuDetails(menuList.imgContainer, event.currentTarget) }} className={classes.listedItemsub} component="li"
                      onClick={() => { window.location.href = '/' + menuList.url }}
                    >
                      <ListItemText variant >
                        <Typography className={classes.listedItemsvalue} >
                          {/* {menuList.title.toUpperCase()} */}
                          {menuList.title ?
                            menuList.title.toUpperCase() :
                            menuList}
                        </Typography>
                      </ListItemText>



                    </ListItem>))}
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
  listHoverItem: PropTypes.object.isRequired,
  tabdata: PropTypes.object.isRequired,


}
