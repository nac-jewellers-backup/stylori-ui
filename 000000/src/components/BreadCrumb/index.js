import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Breadcrumbs, Link, Container, Grid, Typography } from '@material-ui/core/';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export default function CustomSeparator(props) {
 let path = window.location.pathname.split('/').pop();
 let seperators = path === 'cart' || path === "checkout" ?
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAAmJLR0QA/4ePzL8AAABTSURBVFjD7dfBDYAgFARRqkBCi1ouEa1mbMJPIMw08JK9bUpm9lOclGjiAnowQ6YBL1VGRkZGZjKm0IGbvDbCQQOewLkkJCQkNicGXYchJ8hs8z7oGPzdOrNn/QAAAABJRU5ErkJggg==" className={props.arrowicon} />
   : <NavigateNextIcon />;
 return (
   <div className={props.className}>
     <Paper elevation={0} className={props.classsubhed} >
     {/* style={{height:'44px'}} */}
       <Grid container>
         <Grid item lg={7}>
           <Breadcrumbs separator={seperators}>
             {
               props.data.map(data => (
                 <Link color="inherit" onClick={data} style={{ fontSize: "14px" }} className={props.list}>
                   {data}
                 </Link>
               ))
             }
           </Breadcrumbs>
         </Grid>
         <Grid item lg={5}>
           {props.subdata ?
             <div>
               <Grid container style={{ height: "32px", lineHeight: "32px"}}>
                 {
                   props.subdata.map(subdata => (
                     <>
                       {/* <Grid item xs={1} style={{ marginTop: "5px" }}> */}
                       <div style={{marginTop:"0.5%",marginRight:"5px"}}>
                       <img src={subdata.icon} style={{ width: "25px", height: "25px" }} />
                       </div>
                       {/* </Grid> */}
                       <Grid item xs={2} style={{ float: "left", lineHeight: "14px" }}>
                         <span style={{ fontSize: "13px" }}> {subdata.name}</span>
                       </Grid>
                     </>
                   ))
                 }
               </Grid>
             </div>
             : ""}
         </Grid>
       </Grid>
     </Paper>
   </div>
 );
}