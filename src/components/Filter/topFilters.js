import React from 'react';

import {
    Grid, Container,
} from '@material-ui/core';
import HeaderHoverMenuItem from '../SilverComponents/HoverNavBarListing/HeaderHoverMenuItem';
import HeaderHoversubMenu from '../SilverComponents/HoverNavBarListing/HeaderHoverMenuItem';
import { headerDataSilver } from '../../mappers';
import { useDummyRequest } from '../../hooks';
import  {styles}  from './topFilterStyles';
import MorefiltersOpen from './moreFilters'

export const TopFilters = (props) =>{
    const [state, setState] = React.useState({
        open: false,
        panel: false,
        panel1: false,
        Menuopen: false,
        submenuOpen: false,
        selected: '',
        selected1: '',
        Checked: false,
        load: false,
        listHoverItem: 'Jewellery',
        headerHeightprops: 0,
        anchorOne: null,
        targetopen: null,
        targetopenSubmenu: null,
        subTitleData: null,
        subMenuTarget: null,
        anchorEl: false,
        opened: false,
        morefiltersOpen:false

    })
    const { mapped } = useDummyRequest(headerDataSilver);
    const  submenuDetails = (data, target) => {
        setState({...state, subMenuTarget: target, subTitleData: data, submenuOpen: true })
    }
    const {menuListHeader , menuLists} = mapped
    const classes = styles();
    // props.checked['material'] = 'silver'
    const handleMoreFilters = () =>{
        setState({...state,morefiltersOpen:!state.morefiltersOpen})
    }
    const handleFiltersSelect = () =>{
        props.onchangefunc();
        // handleMoreFilters()
    }
    return(
        Object.keys(mapped).length === 0 ?
        
        <div>loading...</div>
        :
<Container >
        <Grid container item xs={9} id={"containerTitle"} justify="flex-end" alignItems="center" className={`header-navbar-list1 ${classes.headerNavbarList}`}
        onMouseLeave={() => { setState({...state,Menuopen: false, Checked: false, targetopen: null }) }}
    >
        <Grid container item xs={12} className="titleTop" id={"titleTop"} >
          <Grid container item xs={12} spacing={2} justify="space-between" style={{paddingBottom:20}}>
          {/* <nav
            // style={{height:"35px", display:"flex"}}
            > */}
                {
                    (props.filter.map((listName,i) => {
                        
                        // let urlsmall = listName.title.toLowerCase()
                        if(i<4)
                        return (
                            <Grid item xs={2} className={ classes.menuListCursor} onMouseOver={(event) => { setState({...state, Menuopen: true, submenuOpen: false, subTitleData: null, targetopen: event.currentTarget, listHoverItem: listName }) }}>
                                <a href={listName.url} >{listName}</a>
                            </Grid>
                        )
                        else{
                            return null
                        }
                    }))

                }
                 
                <Grid item xs={2} className={ classes.menuListCursor} onClick = {()=>{handleMoreFilters()}}>
                            more
                
                            </Grid>
            {/* </nav> */}
          </Grid>
            {

                state.Menuopen && props.subFilter[state.listHoverItem] ?
                    <HeaderHoverMenuItem tabdata={props.subFilter} listHoverItem={props.subFilter[state.listHoverItem]}
                        // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                        filters={true}
                        opened={state.Menuopen}
                        targetopened={state.targetopen}
                        // submenuDetails={()=>submenuDetails()}
                        filtercheck={state.listHoverItem}
                        checked={props.checked}
                        onchoosetype={props.onchangefunc}
                        state={props.state}
                        onMouseLeave={() => { setState({...state, targetopen: null }) }}
                    />
                    :
                    ''
            }
          
        </Grid>
    </Grid>
    <MorefiltersOpen open={state.morefiltersOpen} filter={props.filter} onchoosetype={props.onchangefunc} checked={props.checked} subFilter = {props.subFilter} handleClose={handleMoreFilters}/>
    </Container>
    )
}