import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './style'
import HeaderHoverMenuItem from './../HoverNavBarListing/HeaderHoverMenuItem';
import { ListingPageContext } from 'context'
const Filters = (props) => {
    const { setSort, setloadingfilters, setPriceMax,setPriceMin, ListingPageCtx } = React.useContext(ListingPageContext);
    const [state, setState] = React.useState({
        Menuopen: false, targetopen: 0,listHoverItem:'',filters:{offers:{}, price:{}, ProductType:{}, Theme:{}, Collection:{}, Material:{Silver:true}}
    })
    const selectType = (came) =>{
      console.log('state.filters_______', state)
      debugger
      var hoverFilter = state.listHoverItem.replace(/\s/g, '')
      var filterState ={ [hoverFilter]:{[came]:true}}
      state['filters'] =filterState
      setState(state.filters)
      ListingPageCtx.setSilverFilters(state.filters)

    }

    const classes = styles();
    return (

        <Grid xs={12} container className={classes.MainGrid}>
            <Grid xs={9} item container className={classes.FilterGrid} >
            

        {
           <>

  {          props.data[0].filter.map(val=>{

                return(
                    <Grid item xs={2} container className={classes.Filters} onMouseOver={(event) => { setState({...state, Menuopen: true,targetopen: event.currentTarget, listHoverItem:val }) }}>
                    <Grid item xs={10} className={`${classes.filterName}`}>{val}
                    </Grid>
                    <Grid item xs={2} container>
            {state.Menuopen ?
                        <i className={`${classes.filterArrow} fa`}>&#xf0d8;</i>
                        :
                        <i className={`${classes.filterArrow} fa`}>&#xf0d7;</i>
                        }
                    </Grid>
                </Grid>
         
                )
            })}
           
            
       {     state.Menuopen && 
                <HeaderHoverMenuItem tabdata={props.data[0]} filters={true} listHoverItem={props.data[0].subFilter[state.listHoverItem]}
                    // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                    // onMouseLeave={() => { setState({ Menuopen: false, targetopen: null }) }}
                    opened={state.Menuopen} targetopened={state.targetopen}
                    onchoosetype={(came)=>{selectType(came)}}


                />}
           </>
        }


          
            </Grid>
            <Grid xs={3} item container>

            </Grid>
        </Grid>
    )
}
export default Filters