import React from "react";

import { Grid, Container, Popper, ClickAwayListener, Grow } from "@material-ui/core";
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
  const classes = styles();
  // props.checked['material'] = 'silver'
  const handleMoreFilters = () => {
    setState({ ...state, morefiltersOpen: !state.morefiltersOpen });
  };
 const handleExpandClick = () => {
     debugger
    setState({...state, expanded: !state.expanded });
}
  const handleChange = (event) => {
    if (FilterOptionsCtx.offset > 0) FilterOptionsCtx.setOffset(0)
    // console.log(this.props.offset)
    setSort({ values: event.target.value })
    setState({...state, expanded: false })
    window.scrollTo(0, 0);

}
  return Object.keys(mapped).length === 0 ? (
    <div>loading...</div>
  ) : (
    <Container>
      <Grid container item xs={12}>
        <Grid
          container
          item
          xs={9}
          id={"containerTitle"}
          justify="flex-end"
          alignItems="center"
          className={`header-navbar-list1 ${classes.headerNavbarList}`}
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
              {props.filter.map((listName, i) => {
                // let urlsmall = listName.title.toLowerCase()
                if (i < 4)
                  return (
                    <Grid
                      item
                      xs={2}
                      className={classes.menuListCursor}
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
                        <Grid container item xs={12}>
              <Grid item xs = {6}>
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
                className={classes.menuListCursorMoreFilters}
                style={{minWidth:'50px'}}
                onClick={() => {
                  handleMoreFilters();
                }}
              >
              <Grid container item xs={12}>
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
                state={props.state}
                onMouseLeave={() => {
                  setState({ ...state, targetopen: null });
                }}
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        {/* <Grid container item xs={3}>
        <Grid container item xs={12}   spacing={2}
              justify="flex-end"
              style={{ paddingBottom: 20 }}>
        <Grid container item xs={6} className={classes.menuListCursorSort} onClick={()=>{handleExpandClick()}}>
             
        <Grid container item xs={12}>
        <Grid item xs={6}>
                Sort by 
                </Grid>
                <Grid item xs = {6} style={{display:"flex", justifyContent:"flex-end"}}>
               {state.expanded ? <ArrowDropUpIcon color="primary"/> : <ArrowDropDownIcon color="primary"/>}
               </Grid>
          </Grid>
              
              </Grid>
             
        </Grid>
        <div className={"testMenu"} style={{
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
                        </div>
        </Grid> */}
      </Grid>

      <MorefiltersOpen
        open={state.morefiltersOpen}
        filter={props.filter}
        onchoosetype={props.onchangefunc}
        checked={props.checked}
        subFilter={props.subFilter}
        handleClose={handleMoreFilters}
      />
    </Container>
  );
};
