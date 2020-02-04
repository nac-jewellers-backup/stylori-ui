import React, { useState, useEffect } from 'react';
import { Grid, List, Popper, ListItem, ListItemText, Typography } from '@material-ui/core';
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
        <Popper
          style={{ border: "1px solid #ccc" }}
          placement={'left-start'}
          open={opens} anchorEl={target} transition className={classes.mouseOverPopoversub}>
          <List component="nav" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {props.data && props.data.imageContainer && <Grid container style={{ width: "350px", background: "#fff", padding: "10px", zIndex: "10000" }}>
              {props.data.imageContainer.map((val, index) =>
                <Grid item xs={4}>
                  <Grid container className={classes.imgcont} onClick={() => { window.location.href = val.url }} justify="center" alignContent="center" alignItems="center" style={{ cursor: "pointer" }}>
                    <Grid item style={{ justifyContent: "center", alignContent: "center", display: "flex", }}>
                      {val.img && <img style={{ width: "65%", margin: "auto" }} src={val.img} />}
                    </Grid>
                    <Grid item style={{ margin: "auto" }}>
                      <Typography style={{ margin: "auto", textAlign: "center" }} className={classes.listedItemsvalue} >
                        {val.content.toUpperCase()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )} </Grid>
            }
            {props.data && props.data.onlyText && props.data.onlyText.map((val, index) => <>

              <ListItem className={classes.listedItemsub} component="li"
                onClick={() => { window.location.href = val.url }}
              >
                <ListItemText variant >
                  <Typography className={classes.listedItemsvalue2} >
                    {val.content.toUpperCase()}
                  </Typography>
                </ListItemText>
              </ListItem>
            </>)}

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
