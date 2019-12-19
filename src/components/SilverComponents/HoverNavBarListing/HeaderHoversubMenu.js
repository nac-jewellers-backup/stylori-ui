import React, { useState, useEffect } from 'react';
import { Grid, Popper, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from '../styles'
import PropTypes from 'prop-types';

import './../header.css'


function HeaderHoverMenuItem(props) {

  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.subMenuTarget);
  const { onMouseLeave, onMouseOver } = props;
  const classes = useStyles();
  useEffect(() => {
    setOpens(props.opened);
    setTarget(props.targetopened)
  });
  return (
    <Grid container className={classes.rootsub}>
      <Grid container item xs={12} className={classes.paperdivsub} >
        <Popper open={true} anchorEl={target} transition className={classes.mouseOverPopoversub}>
          <List component="nav" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <Grid container style={{ width: "350px", background: "#fff", paddingBottom: "10px", zIndex: "10000" }}>
              {props.data && props.data.map((val, index) =>
                <Grid item xs={4}>
                  <Grid container justify="center" alignContent="center" alignItems="center" style={{ cursor: "pointer" }}>
                    <Grid item style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>
                      {val.img && <img style={{ width: "70%", margin: "auto" }} src={val.img} />}
                    </Grid>
                    <Grid item style={{ margin: "auto" }}>
                      <Typography style={{ margin: "auto" }} className={classes.listedItemsvalue} >
                        {val.content.toUpperCase()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )}
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
