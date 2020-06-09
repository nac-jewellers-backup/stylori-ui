import React, { useState, useEffect } from 'react';
import { Grid, Popper, List, ListItem, ListItemText, Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useStyles } from '../styles'
import PropTypes from 'prop-types';

import './../header.css'


function HeaderHoverMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.targetopened);
  const { onMouseLeave, onMouseOver, onClick } = props;
  const classes = useStyles();
  const mapper = props.filters ? props.listHoverItem : props.listHoverItem['menuOne']
  const mapperSort = props.sort ? props.tabdata : ''
  // const mapper_menu2 = props.filters ? props.listHoverItem : props.listHoverItem['menuOne']
  const classHover = props.filters ? classes.mouseOverPopoverfilters : classes.mouseOverPopoverHeader
  console.log(props.filtercheck,props.checked,"props.listHoverItem");
  // onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
  // listHoverItem
  useEffect(() => {
    setOpens(props.opened);
    setTarget(props.targetopened)
  });
  
  // top: '18px !important',
  return (
    <Grid container className={classes.root} >
      <Grid container item xs={12} className={classes.paperdiv} >
        <Popper open={opens} id={props.id} anchorEl={target} transition className={`${props.filters || props.sort ? classes.mouseOverPopoverfilters:classes.mouseOverPopover} ${classHover}`}
         modifiers={{
          flip: {
            enabled: false,
          },}}
          placement="bottom"
      
        >
          <List component="nav" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <Grid className={classes.subtopic1} style={{width:`${props._width}`}}>
              {
                !props.filters && !props.sort &&
                (props.listHoverItem) && mapper &&
                (mapper).map(menuList =>
                  (
                    <ListItem onMouseOver={props.submenuDetails ? (event) => { props.submenuDetails(menuList.imgContainer, event.currentTarget) }: ()=>{}} className={classes.listedItems} component="li"
                      onClick={() => { window.location.href = menuList.url }}
                    >
                      <ListItemText variant>
                        <Typography className={classes.listedItemsvalue}>
                          {/* {menuList.title.toUpperCase()} */}
                          {menuList.title ?
                            menuList.title.toUpperCase() :
                            menuList}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))
              }
              {
                !props.sort && props.filters && mapper &&
                (mapper).map(menuList =>

                  {
                    
                  return  menuList.constructor === Object ?
                  
                  <ListItem component="li" name={menuList ? menuList : menuList.title}
                  onClick={(e) => {
                    debugger
                    props.onchoosetypeprice(e,menuList)}}
                    className={`${props.state && props.state.numTwo ===  menuList.max  ? classes.mouseOverPopoverfiltersselected :''} ${classes.mouseOverPopoverfilterslist}`}
                >

                  <ListItemText variant className={`${props.filters ? classes.filtersListtopfilters : classes.filtersList}`} style={{fontSize:"0.9rem"}}>
                  {menuList.label ?
                      menuList.label :
                      menuList} 
                   {/* {props.filtercheck === 'price' && 
                      (<span> &nbsp;
                        (<i style={{fontSize:'14px'}} class="fa">&#xf156;</i>)
                      </span>)} */}
                    
                  </ListItemText>

                </ListItem>

                    
                  :
                  <ListItem component="li" name={menuList ? menuList : menuList.title}
                      onClick={(e) => {
                        debugger
                        props.onchoosetype(menuList, props.checked[props.filtercheck && props.filtercheck.replace(/\s/g, "")][menuList] !== undefined ? !props.checked[props.filtercheck && props.filtercheck.replace(/\s/g, "")][menuList] : true, e,null,undefined, props.state, props.filtercheck ? props.filtercheck.replace(/\s/g, "") : "")}}
                    className={`${props.checked[props.filtercheck && props.filtercheck.replace(/\s/g, "")][menuList] ? classes.mouseOverPopoverfiltersselected :''} ${classes.mouseOverPopoverfilterslist}`}
                    >

                      <ListItemText variant className={`${props.filters ? classes.filtersListtopfilters : classes.filtersList}`} style={{fontSize:"0.9rem"}}>

                        {menuList.title ?
                          menuList.title :
                          menuList}
                      </ListItemText>

                    </ListItem>
                }
                  )}
        {props.sort &&
        <RadioGroup aria-label="gender" name="gender1" value={props.values.values} onChange={(e)=>{props.onchoosetype(e)}} >
      {
        mapperSort.map((menuList) => (
          <ListItem
            component="li"
            name={menuList}
            style={{paddingTop:"0px", paddingBottom:"0px"}}
          >
            <ListItemText variant className={`${props.sort ? classes.filtersListtopfilters : classes.filtersList} ${classes.sortSilver}`} >
            <FormControlLabel value={menuList} control={<Radio className={classes.radioBtnsort}/>} label={menuList}/>
            </ListItemText>
          </ListItem>
        )
        )
      }


</RadioGroup>
    }
            </Grid>
     {
       props.listHoverItem && props.listHoverItem['menuTwo'] && 
              <Grid className={classes.subtopic2}>
              {
                !props.filters &&
                (props.listHoverItem ) &&
                (props.listHoverItem['menuTwo']).map(menuList =>
                  (
                    <ListItem onMouseOver={props.submenuDetails ? (event) => { props.submenuDetails(menuList.imgContainer, event.currentTarget) }:()=>{}} className={classes.listedItemsub} component="li"
                      onClick={() => { window.location.href = menuList.url }}
                    >
                      <ListItemText variant >
                        <Typography className={classes.listedItemsvalue} >
                          {/* {menuList.title.toUpperCase()} */}
                          {menuList.title ?
                            menuList.title.toUpperCase() :
                            menuList}
                        </Typography>
                      </ListItemText>
                    </ListItem>))}
            </Grid>
     }

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
