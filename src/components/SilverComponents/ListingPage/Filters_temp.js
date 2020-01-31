import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './style'
import HeaderHoverMenuItem from './../HoverNavBarListing/HeaderHoverMenuItem';
const Filters = (props) => {
    const [state, setState] = React.useState({
        Menuopen: false, targetopen: 0,listHoverItem:''
    })

    let obj = {
        'THEME': {
            'menuOne':
                [{ value: 'kammal', title: 'kammal', url: '#kammal' },
                { value: 'pendants', title: 'Pendants', url: '#' },
                { value: 'rings', title: 'Rings', url: '#' },
                { value: 'nosepins', title: 'Nose pins', url: '#' },
                { value: 'banglesbracelets', title: 'Bangles & Bracelets', url: '#' },
                ],
            'menuTwo': [{ value: 'Price', title: 'By Price', url: '#Price' },
            { value: 'Collection', title: 'By Collection', url: '#' },
            { value: 'Material', title: 'By Material', url: '#' },
            ]
        }
    }
    const classes = styles();
    return (

        <Grid xs={12} lg={12} container className={classes.MainGrid}>
            <Grid xs={9} lg={9} item container className={classes.FilterGrid} >
            

        {
           <>

  {          props.data[0].filter.map(val=>{

                return(
                    <Grid item xs={2} container className={classes.Filters} onMouseOver={(event) => { setState({Menuopen: true,targetopen: event.currentTarget, listHoverItem:val }) }}>
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
                <HeaderHoverMenuItem tabdata={obj} filters={true} listHoverItem={props.data[0].subFilter[state.listHoverItem]}
                    // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                    onMouseLeave={() => { setState({ Menuopen: false, targetopen: null }) }}
                    opened={state.Menuopen} targetopened={state.targetopen}

                />}
           </>
        }


          
            </Grid>
            <Grid xs={3} lg={3} item container>

            </Grid>
        </Grid>
    )
}
export default Filters