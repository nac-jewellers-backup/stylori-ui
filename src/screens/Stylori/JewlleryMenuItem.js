import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuListItem from '../../components/Header/HoverNavBarListing/MenuList';
import ImageGridList from '../../components/Header/HoverNavBarListing/HoverImagesGrid'
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import HoverTableGrid from '../../components/Header/HoverNavBarListing/HoverTableGrid';
import HoverImagesFullGrid from '../../components/Header/HoverNavBarListing/HoverImagesFullGrid';
import tabdata from '../../components/Header/HoverNavBarListing/tileData';

function JewelleryMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const { Checked, onMouseLeave } = props;

  return (
    <div>
      {console.log(tabdata)}
      <Collapse in={Checked}>
        <Paper style={{ position: "absolute", zIndex: "2", top: '148px', left: '190px', width: '76vw' }} onMouseLeave={onMouseLeave} >
          <Grid container>
            <Grid container item xs={3}>
              <MenuListItem handleMouseOver={val => setActivetab(val)} activetab={activetab} />
            </Grid>
            {
              (activetab !== 'Price' && activetab !== 'Collection' && activetab !== 'Material' && activetab !== 'Collection') &&

              <Grid item >
                <ImageGridList activetab={activetab} tabdata={tabdata} />
              </Grid>
            }
            {(activetab === 'Price' || activetab === 'Material') &&
              <Grid item xs={6}>
                <HoverTableGrid activetab={activetab} tabdata={tabdata} />
              </Grid>
            }

            {(activetab === 'Collection') &&
              <Grid item xs={8}>
                <HoverImagesFullGrid activetab={activetab} tabdata={tabdata} />
              </Grid>
            }


          </Grid>
        </Paper>
      </Collapse>
    </div>
  );
}
export default JewelleryMenuItem;