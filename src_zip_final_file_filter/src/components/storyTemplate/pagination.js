import React from 'react';
import ReactPaginate from  'react-paginate'; 
import { Grid } from '@material-ui/core';

export default function Pagination () {
  const style = 
    {
      "container":{
        display:"flex",
        listStyle:"none"

      }
    }
  
  return(
    <>
      <Grid container>
          <Grid item>
             <ReactPaginate 
          containerClassName={style.container}
          />
          </Grid>
        </Grid>
    </>
  )
}