import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuListItem from '../../components/Header/HoverNavBarListing/MenuList';
import ImageGridList from '../../components/Header/HoverNavBarListing/HoverImagesGrid'
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';


import tabdata from '../../components/Header/HoverNavBarListing/tileData';

function JewelleryMenuItem(props) {
 const [activetab, setActivetab] = React.useState("earings");
 const { Checked, onMouseLeave } = props;

 return (
   <div>

     <Collapse in={Checked}>
       <Paper style={{ position: "absolute", zIndex: "10000", top: '148px', left: '190px', width: '76vw' }} onMouseLeave={onMouseLeave} >
         <Grid container>
           <Grid container item xs={3}>
             <MenuListItem handleMouseOver={val => setActivetab(val)} activetab={activetab} />
           </Grid>
           <Grid item>
             <ImageGridList activetab={activetab} tabdata={tabdata} />
           </Grid>
         </Grid>
       </Paper>
     </Collapse>
   </div>
 );
}
export default JewelleryMenuItem;