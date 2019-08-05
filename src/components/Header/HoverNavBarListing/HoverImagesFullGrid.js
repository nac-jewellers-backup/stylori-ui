
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
  },
  gridList: {
      width: 500,
      height: 450,
  },
}));


function ImageGridList(props) {

  const classes = useStyles();

  return (
      <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={4}>



              {props.tabdata[props.activetab].map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1} >
                      <img src={tile.img} cols={tile.cols || 1} style={{ width: '120px', height: '120px' }} alt="img" />
                  </GridListTile>

              ))}

          </GridList>

      </div>
  );
}

export default ImageGridList;
