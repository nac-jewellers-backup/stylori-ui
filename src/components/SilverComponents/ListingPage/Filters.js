import React from 'react'
import { Grid, Hidden, Button, List, ListItem, ListItemText, Checkbox, Typography, AppBar, Container, Toolbar, IconButton } from '@material-ui/core'
import styles from './style'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CardRadioButton from 'components/InputComponents/RadioButton/index';
import HeaderHoverMenuItem from './../HoverNavBarListing/HeaderHoverMenuItem';
import { ListingPageContext } from 'context'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
const Filters = (props) => {
  const { 
    // setSort, setloadingfilters, setPriceMax, setPriceMin,
     ListingPageCtx } = React.useContext(ListingPageContext);
  const [state, setState] = React.useState({
    Menuopen: false, targetopen: 0, listHoverItem: '', filtercheck: '',_width:null,
    filters: { offers: {}, price: {}, ProductType: {}, Theme: {}, Collection: {}, Material: { Silver: true } }
  })
  const [openFilters, setOpenFilters] = React.useState(true)
  const [productDisplay, setProductDisplay] = React.useState(true)
  const [CardRadio, setCardRadio] = React.useState(false)
  const selectType = (came, a, b, d) => {
    // alert(came, a, b, d)
    if (Object.entries(came).length !== 0 && came.constructor !== Object) {
      var hoverFilter = state.listHoverItem.replace(/\s/g, '')
      var filters_uncheck = () => {
        if (Object.values(state.filters[hoverFilter]).length === 0) return true
        else return !(Object.values(state.filters[hoverFilter])[0])
      }
      var filterState = { ...state.filters, [hoverFilter]: { [came]: filters_uncheck() } }
      state['filters'] = filterState
      setState({ ...state, filters: filterState })
      ListingPageCtx.setSilverFilters(state.filters)
    }
    else {
      // alert(a,b,d)
      // console.log('error')
    }


  }
  const handleChangesort = (event) => {

    props.setSort({ values: event.target.value })

    setState({ ...state, CardRadio: false })

    setState({ ...state, productDisplay: true });
  }

  const handleDrawerOpenMobile = () => {
    // var _openFilters = {openFilters:!openFilters}

    setOpenFilters(!openFilters)
    setProductDisplay(!productDisplay)
    setCardRadio(!CardRadio)
    // setState({...state, productDisplay: false });
    // setState({...state,CardRadio: false });

  };
  // React.useEffect(()=>{
  //   alert(JSON.stringify(openFilters))
  // },[openFilters])
  const handleDrawerCloseMobile = () => {
    setOpenFilters(!openFilters)
    setProductDisplay(!productDisplay)
    setCardRadio(!CardRadio)
  };
  const filterValue = (filtercheck) => {
    if (filtercheck === state.filtercheck) {
      setState({ ...state, filtercheck: '' })
    } else {
      setState({ ...state, filtercheck })
    }

  }
  const classes = styles();
  const { filters, filtercheck } = state
  // const {openFilters} = openFilters 
  const { sortOptions } = props
  const id = state.targetopen ? 'simple-popper' : undefined;
  return (
    <>
      <Hidden smDown>
        <Grid xs={12} lg={12} container className={classes.MainGrid}>
          <Grid xs={9} lg={9} item container className={classes.FilterGrid} onMouseLeave={() => { setState({ ...state,  Menuopen: false, Checked: false, targetopen: null, listHoverItem: '' }) }}>


            {
              <>

                {props.data[0].filter.map(val => {

                  return (
                    <Grid item xs={2} container className={classes.Filters} onMouseOver={(event) => { setState({ ...state, _width:event.currentTarget.offsetHeight, Menuopen: true, targetopen: event.currentTarget, listHoverItem: val }) }}

                    >
                      <Grid item xs={10} className={`${classes.filterName}`} aria-describedby={id}>{val}
                      </Grid>
                      <Grid item xs={2} container>
                        {state.listHoverItem === val ?
                          <i className={`${classes.filterArrow} fa`}>&#xf0d8;</i>
                          :
                          <i className={`${classes.filterArrow} fa`}>&#xf0d7;</i>
                        }
                      </Grid>
                    </Grid>

                  )
                })}


                {state.Menuopen &&
                  <HeaderHoverMenuItem tabdata={props.data[0]} filters={true} listHoverItem={props.data[0].subFilter[state.listHoverItem]}
                    // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                    // onMouseLeave={() => { setState({ Menuopen: false, targetopen: null }) }}
                    opened={state.Menuopen} targetopened={state.targetopen} _width={state._width} id={id}
                    onchoosetype={(came) => { selectType(came, () => { }, () => { }, () => { }) }}
                    onMouseLeave={() => { setState({ ...state, targetopen: 0, listHoverItem: '' }) }}


                  />}
              </>
            }



          </Grid>
          <Grid xs={3} lg={3} item container>
            sortBy
            </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <div style={{ top: '60px', position: 'absolute', backgroundColor: 'white', width: '100%' }}>
          <div style={{ height: "23px", padding: "9px", borderBottom: "1px solid #e3e3e3", display: openFilters ? 'none' : 'block', position: 'sticky', top: '0px' }}
            className={`${classes.colorMain}`}
          >
            <button onClick={handleDrawerCloseMobile} style={{ background: 'none', border: 'none', fontWeight: '600', color: 'rgba(58, 69, 120, 1)', padding: '6px 8px' }}>
              <i className={`fa fa-times ${classes.colorMain}`} ></i>&nbsp;
                 Filter</button>
            <Button style={{ float: "right", border: '1px solid #ececec', lineHeight: "15px" }} className={`${classes.colorMain}`}> <b >Clear All</b></Button>

          </div>

          <Grid container xs={12} className="p" style={{ overflow: 'scroll', height: '100%', display: openFilters ? 'none' : 'block' }}>
            <Grid container item xs={12} >
              <Grid item xs={6} style={{ backgroundColor: "#F2F2F2", overflow: 'scroll', height: '73vh' }}>
                {/* {chck_res ?
                    <ListItemText
                      className='filter-mbl-font filter-mbl-fonts'
                    >
                      llllccc
                        </ListItemText>
                    : ""} */}
                <List className="mbl-filter-list">
                  {props.data[0].filter.map(row => (
                    <ListItem key={row} className="mbl-filter-list"
                      onClick={() => filterValue(row)}
                    >
                      <ListItemText
                        className='filter-mbl-font filter-mbl-fonts'
                      >
                        {row}

                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
                {/* {console.info('data-filter', subFilter, state.filtercheck)} */}
              </Grid>
              {
                filtercheck !== '' &&
                <Grid item xs={6} style={{ overflow: 'scroll', height: '73vh' }}>

                  <>
                    {props.data[0].subFilter[state.listHoverItem].map(row => {
                      return (
                        <ListItem key={row} style={{ paddingLeft: "0px", paddingRight: "0px", width: "100%" }}>
                          <Checkbox
                            value="checked"
                            color="primary"
                            checked={filters[filtercheck.replace(/\s/g, "")][row] !== undefined ? filters[filtercheck.replace(/\s/g, "")][row] : false}

                            onChange={(e) => selectType({}, row, filters[filtercheck.replace(/\s/g, "")][row] !== undefined ? !filters[filtercheck.replace(/\s/g, "")][row] : true, e)}
                            // onChange={(e) => handleChange(row12, state.checked[row.replace(/\s/g, "")][row12] !== undefined ? !state.checked[row.replace(/\s/g, "")][row12] : true, e)}
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name={filtercheck.replace(/\s/g, "")}
                            onClick={handleDrawerCloseMobile}
                          />
                          <ListItemText>
                            <Typography variant=""
                              className={`filter-mbl-font fnts ${classes.colorMain}`}>
                              <div
                                onClick={handleDrawerCloseMobile}
                              > {row}</div>
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      )
                    })}
                  </>
                </Grid>
              }
            </Grid>
          </Grid>



          <AppBar color="primary" className="filter-fixed header" style={{ display: !openFilters ? 'none' : 'block' }}>
            <Container>
              <Container>
                <Toolbar  >
                  <div onClick={handleDrawerOpenMobile}>
                    <Typography variant=""
                      className={`filter-mbl-font ${classes.colorMain}`}><i className='filter-icon' class="fa fa-filter"

                      ></i> &nbsp;
                      Filter
                    </Typography>
                  </div>

                  <div style={{ flexGrow: "2" }} />

                  <IconButton edge="end" color="inherit" onClick={() => setState({ ...state, CardRadio: !CardRadio, productDisplay: !productDisplay })} >
                    <Typography variant=""
                      className={`filter-mbl-font ${classes.colorMain}`} style={{ fontSize: '1rem' }}><i className='filter-icon' class="fa fa-sort"></i>&nbsp;
                      Sort
                    </Typography>
                  </IconButton>



                </Toolbar>
              </Container>
            </Container>
          </AppBar>


        </div>
        {CardRadio ?
          <div style={{ position: 'fixed', bottom: '42px', }}>
            <CardRadioButton cardWidth="cardSortSmallScreen" data={sortOptions} onChange={handleChangesort} values={props.sort} />
          </div>
          :
          ''
        }
      </Hidden>
    </>
  )
}
export default Filters