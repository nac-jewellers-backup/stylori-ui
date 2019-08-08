import React from 'react';
import {Paper, Grid} from '@material-ui/core';
import MenuListItem from './MenuList';
import ImageGridList from './HoverImagesGrid'
import PropTypes from 'prop-types';
import HoverTableGrid from './HoverTableGrid';
import HoverImagesFullGrid from './HoverImagesFullGrid';
import './../header.css'

function HeaderHoverMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const { onMouseLeave, onMouseOver } = props;
  console.log(props.listHoverItem);
  debugger
  return (
    <Paper style={{ position: "relative", left: '160px', width: '76vw' }} className="animations" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
      <Grid container>
        <Grid container item xs={3}>
          <MenuListItem listHoverItem={props.listHoverItem} handleMouseOver={val => setActivetab(val)} activetab={activetab} />
        </Grid>
        {
          (activetab !== 'Price' && activetab !== 'Collection' && activetab !== 'Material' && activetab !== 'Collection') &&
          <Grid item >
            <ImageGridList activetab={activetab} tabdata={props.tabdata} />
          </Grid>
        }
        {(activetab === 'Price' || activetab === 'Material') &&
          <Grid item xs={6}>
            <HoverTableGrid activetab={activetab} tabdata={props.tabdata} />
          </Grid>
        }
        {(activetab === 'Collection') &&
          <Grid item xs={8}>
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
