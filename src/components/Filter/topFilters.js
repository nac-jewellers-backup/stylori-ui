import React from "react";

import { Grid, Container, Popper, ClickAwayListener, Grow, Paper } from "@material-ui/core";
import HeaderHoverMenuItem from "../SilverComponents/HoverNavBarListing/HeaderHoverMenuItem";
import HeaderHoversubMenu from "../SilverComponents/HoverNavBarListing/HeaderHoverMenuItem";
import { filterParams } from "../../mappers";
import { useDummyRequest } from "../../hooks";
import { styles } from "./topFilterStyles";
import MorefiltersOpen from "./moreFilters";
import CardRadioButton from "../InputComponents/RadioButton/index"
import { FilterOptionsContext } from 'context'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
export const TopFilters = (props) => {
  const [state, setState] = React.useState({
    open: false,
    panel: false,
    panel1: false,
    Menuopen: false,
    submenuOpen: false,
    selected: "",
    selected1: "",
    Checked: false,
    load: false,
    listHoverItem: "Jewellery",
    headerHeightprops: 0,
    anchorOne: null,
    targetopen: null,
    targetopenSubmenu: null,
    subTitleData: null,
    subMenuTarget: null,
    anchorEl: false,
    opened: false,
    morefiltersOpen: false,
    expanded: false,
    sortOpen:null
  });
  const { mapped } = useDummyRequest(filterParams);
  const { setSort, setOffset, FilterOptionsCtx } = React.useContext(FilterOptionsContext);
  const submenuDetails = (data, target) => {
    setState({
      ...state,
      subMenuTarget: target,
      subTitleData: data,
      submenuOpen: true,
    });
  };
  const { sortOptions } = mapped;
  console.log(sortOptions,"sortOptionssortOptionssortOptionssortOptionssortOptionssortOptionssortOptionssortOptions")
  const classes = styles();
  // props.checked['material'] = 'silver'
  const handleMoreFilters = () => {
    setState({ ...state, morefiltersOpen: !state.morefiltersOpen });
  };
 const handleExpandClick = () => {
     
    setState({...state, expanded: !state.expanded });
}
  const handleChange = (event) => {
    if (FilterOptionsCtx.offset > 0) FilterOptionsCtx.setOffset(0)
    // console.log(this.props.offset)
    setSort({ values: event.target.value })
    setState({...state, expanded: false })
    window.scrollTo(0, 0);

}

// window.addEventListener('scroll', function() {
//   scrollDiv()
// });

// const scrollDiv = () =>{
//   var topFilter = document.getElementById('topfilter');
//   
//     if(topFilter.scrollTop === 68){
//   //     if(!topFilter.hasClass(classes.topfiltersSticky)){
//   //         topFilter.addClass(classes.topfiltersSticky);
//   //     }
//   // }else{
//   //     topFilter.removeClass(classes.topfiltersSticky);
//   // }
//     }
// }
  return Object.keys(mapped).length === 0 ? (
    <div>loading...</div>
  ) : (
    <div className={classes.filtersHeaderTop} id="topfilter">
    <Container style={{marginTop:"25px"}}  >
   
      <Grid container item xs={12} >
        <Grid
          container
          item
          xs={9}
          id={"containerTitle"}
          justify="flex-end"
          alignItems="center"
          className={`${classes.headerNavbarList1} ${classes.headerNavbarList}`}
          onMouseLeave={() => {
            setState({
              ...state,
              Menuopen: false,
              Checked: false,
              targetopen: null,
              listHoverItem: null,
            });
          }}
        >
          <Grid container item xs={12} className="titleTop" id={"titleTop"}>
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              style={{ paddingBottom: 20 }}
            >
              {/* <nav
            // style={{height:"35px", display:"flex"}}
            > */} 
             <Grid
            item
            xs={2}
            className={`${classes.menuListCursor} ${classes.menuListCursorfiltersLabel}`}
            onMouseOver={(event) => {
              setState({
                ...state,
                Menuopen: true,
                submenuOpen: false,
                subTitleData: null,
                targetopen: event.currentTarget,
                listHoverItem: "price",
              });
            }}
          >
              <Grid container item xs={12} className={classes.spacingfilterdiv}>
    <Grid item xs = {6} className={classes.filtersLabel}>
    <a >{'Price'} (<i  class="fa">&#xf156;</i>)</a>
     </Grid>
     <Grid item xs = {6} style={{display:"flex", justifyContent:"flex-end"}}>
     {state.listHoverItem ===  'price' ? <ArrowDropUpIcon color="primary"/> : <ArrowDropDownIcon color="primary"/>}
     </Grid>
    </Grid>
           
          </Grid>
              {props.filter.map((listName, i) => {
                // let urlsmall = listName.title.toLowerCase()
                
                if (i < 3 && listName !== 'Material')
                  return (
                    <Grid
                      item
                      xs={2}
                      className={`${classes.menuListCursor} ${classes.menuListCursorfiltersLabel}`}
                      onMouseOver={(event) => {
                        setState({
                          ...state,
                          Menuopen: true,
                          submenuOpen: false,
                          subTitleData: null,
                          targetopen: event.currentTarget,
                          listHoverItem: listName,
                        });
                      }}
                    >
                        <Grid container item xs={12} className={classes.spacingfilterdiv}>
              <Grid item xs = {6} className={classes.filtersLabel}>
              <a href={listName.url}>{listName}</a>
               </Grid>
               <Grid item xs = {6} style={{display:"flex", justifyContent:"flex-end"}}>
               {state.listHoverItem ===  listName ? <ArrowDropUpIcon color="primary"/> : <ArrowDropDownIcon color="primary"/>}
               </Grid>
              </Grid>
                     
                    </Grid>
                  );
                else { 
                  return null;
                }
              })}

              <Grid
                item
                xs={2}
                className={`${classes.menuListCursorMoreFilters} ${classes.menuListCursorfiltersLabel}`}
                style={{minWidth:'50px'}}
                onClick={() => {
                  handleMoreFilters();
                }}
              >
              <Grid container item xs={12} className={classes.spacingfilterdiv}>
              <Grid item xs = {6}>
               More
               </Grid>
               <Grid item xs = {6} style={{display:"flex", justifyContent:"flex-end"}}>
               <AddBoxIcon color="primary"/>
               </Grid>
              </Grid>
              </Grid>
              {/* </nav> */}
            </Grid>
            {state.Menuopen && props.subFilter[state.listHoverItem] ? (
              <HeaderHoverMenuItem
                tabdata={props.subFilter}
                listHoverItem={props.subFilter[state.listHoverItem]}
                // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                filters={true}
                opened={state.Menuopen}
                targetopened={state.targetopen}
                // submenuDetails={()=>submenuDetails()}
                filtercheck={state.listHoverItem}
                checked={props.checked}
                onchoosetype={props.onchangefunc}
                state = {props.state}
                onchoosetypeprice={props.onpricechange} 
                onMouseLeave={() => {
                  setState({ ...state, targetopen: null });
                }}
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Grid container item xs={3}   onMouseLeave={() => {
            setState({ ...state,expanded:false, targetopen: null });
          }}>
        <Grid container item xs={12} 
              justify="flex-end"
              style={{ paddingBottom: 20 }}>
        <Grid container item xs={6} className={`${classes.headerNavbarList1} ${classes.menuListCursorSort}`} onMouseOver={(e)=>{setState({...state,  targetopen: e.currentTarget, expanded:true})}}
       
        >
             
        <Grid container item xs={12} className={classes.spacingfilterdiv}>
          <Grid container item xs={12} justify="space-between">
          <Grid item xs={6} style={{margin:'auto'}}>
                Sort by 
                </Grid>
                <Grid item xs = {6} style={{display:"flex", justifyContent:"flex-end"}}>
               {state.expanded ? <ArrowDropUpIcon color="primary"/> : <ArrowDropDownIcon color="primary"/>}
               </Grid>
          </Grid>
        
          </Grid>
              
              </Grid>
             
        </Grid>
        {/* <div className={"testMenu"} style={{
                          position: "absolute", width: "215px",
                          right: "15px", top: "65px", boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 7px'
                        }}>
                            <Popper open={state.expanded} transition disablePortal style={{ position: 'absolute', right: '141px', zIndex:15}}>
                                {({ TransitionProps }) => (
                                    <Grow {...TransitionProps} >
                                        <ClickAwayListener onClickAway={(e) => handleExpandClick(e)}>
                                            <Grid>
                                                <CardRadioButton data={sortOptions} onChange={handleChange} values={FilterOptionsCtx.sort} />
                                            </Grid>
                                        </ClickAwayListener>
                                    </Grow>
                                )}
                            </Popper>
                        </div> */}
                        {state.expanded ? (
              <HeaderHoverMenuItem
                tabdata={sortOptions}
                listHoverItem={sortOptions}
                // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                sort={true}
                opened={state.expanded}
                targetopened={state.targetopen}
                // submenuDetails={()=>submenuDetails()}
                // filtercheck={state.listHoverItem}
                 values={FilterOptionsCtx.sort}
                onchoosetype={handleChange}
               
                onMouseLeave={() => {
                  setState({ ...state,expanded:false, targetopen: null });
                }}
              />
            ) : (
              ""
            )}
        </Grid>
      </Grid>

      <MorefiltersOpen
        open={state.morefiltersOpen}
        state = {props.state}
        onpricechange = {props.onpricechange}
        filter={props.filter}
        onchoosetype={props.onchangefunc}
        checked={props.checked}
        subFilter={props.subFilter}
        handleClose={handleMoreFilters}
      />
    </Container>
    </div>
  );
};
