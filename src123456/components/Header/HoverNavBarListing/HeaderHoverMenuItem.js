import React from 'react';
import {Paper, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuListItem from './MenuList';
import ImageGridList from './HoverImagesGrid'
import PropTypes from 'prop-types';
import HoverTableGrid from './HoverTableGrid';
import HoverImagesFullGrid from './HoverImagesFullGrid';
import './../header.css'
const useStyles = makeStyles(theme => ({
  paperdiv:{
    position: "relative",
     left: '12%',
      width: '76vw',
    [theme.breakpoints.down('md')]: {
      width:'92vw',
      left:'3%'
    },
  },

}));

function HeaderHoverMenuItem(props) {
  const [activetab, setActivetab] = React.useState(props.listHoverItem.menuOne[0].value);
 
  const { onMouseLeave, onMouseOver } = props;
  const classes = useStyles();
  return (
    <Paper  className={classes.paperdiv} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
      <Grid container>
        <Grid container item xs={3} className={classes.menulistWidth} >
          <MenuListItem listHoverItem={props.listHoverItem} handleMouseOver={val => setActivetab(val)} activetab={activetab} />
        </Grid>
        {
          (activetab !== 'Price' && activetab !== 'Collection' && activetab !== 'Material' && activetab !== 'Collection') &&
          <Grid item xs={9} style={{margin:'auto'}}>
            <ImageGridList activetab={activetab} tabdata={props.tabdata} />
          </Grid>
        }
        {(activetab === 'Price' || activetab === 'Material') &&
          <Grid item xs={6} >
            <HoverTableGrid activetab={activetab} tabdata={props.tabdata} />
          </Grid>
        }
        {(activetab === 'Collection') &&
          <Grid item xs={9} style={{margin:'auto'}}>
            <HoverImagesFullGrid activetab={activetab} tabdata={props.tabdata} />
          </Grid>
        }
      </Grid>
    </Paper>
  );
}

export default HeaderHoverMenuItem;

HeaderHoverMenuItem.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  listHoverItem: PropTypes.object.isRequired,
  tabdata:PropTypes.object.isRequired,


}
