import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuListItem from './MenuList';
import ImageGridList from './HoverImagesGrid'
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import HoverTableGrid from './HoverTableGrid';
import HoverImagesFullGrid from './HoverImagesFullGrid';
import tabdata from './tileData';

function JewelleryMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const { onMouseLeave } = props;

  return (
    <div>
      {console.log(tabdata)}
        <Paper style={{ position: "absolute", zIndex: "3", top: '148px', left: '190px', width: '76vw' }} className="animations"  onMouseLeave={onMouseLeave} >
          <Grid container>
            <Grid container item xs={3}>
              <MenuListItem handleMouseOver={val => setActivetab(val)} activetab={activetab} listHoverItem={props.listHoverItem} />
            </Grid>
            {
              (activetab !== 'Price' && activetab !== 'Collection' && activetab !== 'Material' && activetab !== 'Collection') &&

              <Grid item >
                <ImageGridList activetab={activetab} tabdata={tabdata} listHoverItem={props.listHoverItem}/>
              </Grid>
            }
            {(activetab === 'Price' || activetab === 'Material') &&
              <Grid item xs={6}>
                <HoverTableGrid activetab={activetab} tabdata={tabdata} listHoverItem={props.listHoverItem}/>
              </Grid>
            }

            {(activetab === 'Collection') &&
              <Grid item xs={8}>
                <HoverImagesFullGrid activetab={activetab} tabdata={tabdata} />
              </Grid>
            }


          </Grid>
        </Paper>
    </div>
  );
}
export default JewelleryMenuItem;