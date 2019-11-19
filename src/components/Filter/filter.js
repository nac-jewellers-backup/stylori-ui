import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Slide, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem,
  Grid, TextField, ListItemText, Button, Checkbox, Paper, Hidden, Container
}
  from '@material-ui/core';
import { ExpandLess, ExpandMore, } from '@material-ui/icons';
import './filter.css';  
import ProductLayout from '../ProductCard/ProductLayout';
import FilterHeader from './FilterHeader';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CardRadioButton from '../InputComponents/RadioButton/index';
import { useDummyRequest } from 'hooks/index';
import { filterParams } from 'mappers/index';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import styles from './styles';
import { FilterOptionsContext } from 'context'


const PersistentDrawerLeft = (props) => {
  const { setSort,setFilters,setloadingfilters, FilterOptionsCtx } = React.useContext(FilterOptionsContext);
  const loc = window.location.search
  
  return <Component setSort={setSort} setFilters={setFilters} setloadingfilters={setloadingfilters} loadingfilters={FilterOptionsCtx.loadingfilters} sort={FilterOptionsCtx.sort} {...props} />
}


class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open,
      openMobile: true,
      CardRadio: false,
      checked: {
        Offers: {}, Availability: {}, ProductType: {}, Style: {}, Material: {}, Theme: {}, Collection: {}, MetalColor: {}, MetalPurity: {}, Occasion: {},
        NoOfStone: {}, Gender: {}, StoneColor: {}, StoneShape: {}
      },
      checkedArrayObj: {
        Offers: {}, Availability: {}, ProductType: {}, Style: {}, Material: {}, Theme: {}, Collection: {}, MetalColor: {}, MetalPurity: {}, Occasion: {},
        NoOfStone: {}, Gender: {}, StoneColor: {}, StoneShape: {}
      },
      selected: '',
      filtercheck: '',
      productDisplay: true,
      check: true,
      numOne: '',
      numTwo: '',
      showMore: 4,
      chipData: [
        { key: '', label: '' },
      ],
    };

  }
  componentDidMount() {
    console.log('price_props', typeof this.props.data[0].subFilter['Price Range'])
    var numberOne = Number(this.props.data[0].subFilter['Price Range'].min);
    var numberTwo = Number(this.props.data[0].subFilter['Price Range'].max);
    var numOne = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(numberOne);
    var numTwo = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(numberTwo);
    this.setState({ numOne: numOne, numTwo: numTwo })
   

    // This is used for checking the check boxes if we copy and pasted the url to new tab or new window
    if(window.location.search)
    {
      
      let urlSearchparams = window.location.search;

      let urlSearchparamsDecode = decodeURI(urlSearchparams)
  
      let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')
  
      let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')
      
      let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val =>{ return val.split('=')})
      let mapUrlParamsSplitEqual = urlSplitparamsEqual();
      this.handleChange(()=>{} ,true, ()=>{}, mapUrlParamsSplitEqual)
      
    }
    // This is used for checking the check boxes if we copy and pasted the url to new tab or new window 
    // *****Ends*****

   
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log(this.props, 'filters')
    if ( this.props.data[0].subFilter['Price Range'] !== prevProps.data[0].subFilter['Price Range']) {

      console.log('price_props', typeof this.props.data[0].subFilter['Price Range'], this.props.data[0].subFilter['Price Range'].length, this.props.data[0].subFilter['Price Range'][0] !== undefined, Number(this.props.data[0].subFilter['Price Range'].max))
      var numberOne = this.props.data[0].subFilter['Price Range'][0] ? this.props.data[0].subFilter['Price Range'][0].min: 0;
      var numberTwo = this.props.data[0].subFilter['Price Range'][0] ? this.props.data[0].subFilter['Price Range'][0].max : 0;
      var numOne = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(numberOne);
      var numTwo = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(numberTwo);
      this.setState({ numOne: numOne, numTwo: numTwo })
    // if( this.props.data[0].subFilter['Price Range'].length > 0 && this.props.data[0].subFilter['Price Range'][0] !== undefined){ 
    //   this.props.setFilters({pricemax:numberTwo, pricemin:numberOne})}  
    }
    
  }
  handleChange(value, BoolName, e, TargetName) {
    this.props.setloadingfilters(true)
    let { chipData } = this.state;
    let checked = { ...this.state.checked }
    var queries = [{}]
    


console.log('queries',queries)
// queries.map(val =>{
  // chipData.push({ key:'1', label: 'o' });
// })
  // chipData.push({ key: queries.key, label: value });

    // if (BoolName === true) {
    //   chipData.push({ key: queries.key, label: value });
    // } else {
    //   arr = chipData.filter(val => val.label !== value);
    //   chipData = arr;
    // }

    if(TargetName === undefined){
      let checkedvalue = {};
      checkedvalue[value] = BoolName
      checked[e.target.name] = checkedvalue
      this.setState({
        checked
      }, () => this.props.setFilters(checked))
    }
    else{
      let paramsMapUrlSetState = () => TargetName.map(val=>
        
        {
          var nameFilter = val[0]
          var keyNameFilter = val[1]
          console.log('val',TargetName)
          let checkedvalue = {};
          checkedvalue[keyNameFilter] = true
          checked[nameFilter] = checkedvalue
          this.setState({
            checked
          }, () => this.props.setFilters(checked))
        }
        )

      console.log('val',TargetName)
        paramsMapUrlSetState()
    }

    // let arr = [];
    // if (BoolName === true) {
    //   arr=  chipData.push({ key: chipData, label: value });
    // }  
    // let checkedvalue = {};
    // checkedvalue[value] = BoolName
    // TargetName === undefined ?  checked[e.target.name] = checkedvalue : checked[TargetName] = checkedvalue
    // checkedvalue={value : BoolName}
//haii
    this.setState({
       chipData
    }, () => this.props.setFilters(checked))
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
    document.documentElement.scrollTop = 180;


  };
  handleDrawerOpenMobile = () => {
    this.setState({ openMobile: false, productDisplay: false });
    this.setState({ CardRadio: false });



  };
  handleDrawerCloseMobile = () => {
    this.setState({ openMobile: true, productDisplay: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  selectItem = (name) => {
    let { selected } = this.state;
    let value = selected === name ? "" : name;
    this.setState({ selected: value })
  }
  filterValue = (filtercheck) => {
    if (filtercheck === this.state.filtercheck) {
      this.setState({ filtercheck: '' })
    } else {
      this.setState({ filtercheck })
    }

  }

  handleDelete = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };
  handleChangeDrawer = () => {

    this.setState({ check: !this.state.check });
    this.setState({ open: !this.state.open });
  };

 
  onCurrencyChange = (e) => {
    var numberOne;
    var numberTwo;
    if (isNaN(Number((document.getElementById('num1').value).charAt(0)))) {
      numberOne = Number(((document.getElementById('num1').value).substr(1)).replace(/,/g, ''));
    }
    else {

      numberOne = Number((document.getElementById('num1').value).replace(/,/g, ''));
    }
    if (isNaN(Number((document.getElementById('num2').value).charAt(0)))) {
      numberTwo = Number(((document.getElementById('num2').value).substr(1)).replace(/,/g, ''));
    }
    else {

      numberTwo = Number((document.getElementById('num2').value).replace(/,/g, ''));
    }
    var numOnee = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(numberOne);
    var numTwoo = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(numberTwo);
    this.setState({ numOne: numOnee, numTwo: numTwoo })

  }
  txtFieldChange(e) {
    if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();

    // this.setState({[e.target.name]:e.target.value})
  }
  handleChangesort = (event) =>{
       
    this.props.setSort({ values:event.target.value})
    
    this.setState({ CardRadio: false})

    this.setState({ productDisplay: true });
}
  render() {
    console.log('urlSplitparamsEqual',this.state.checked)

    const { classes, data } = this.props;
    const { filter, subFilter, sortOptions } = this.props.data[0];
    
    let { selected, check } = this.state;
    const { open, openMobile } = this.state;


    return (

      <>

        <Hidden smDown>
          <FilterHeader click={this.handleDelete(data)} handleChangeDrawer={this.handleChangeDrawer} chips={this.state.chipData} check={this.state.check} />{/*  handleDrawerOpen={this.handleDrawerOpen.bind(this)} */}
        </Hidden>
        <div className={classes.root} >
          <Hidden smDown >

            {/* <CssBaseline /> */}
            <div >
              <Slide direction="right" in={check} mountOnEnter unmountOnExit style={{ position: 'sticky', top: '210px', maxHeight: '68vh', overflowY: 'scroll' }} className="SliderFilter scrollBarFilter" id="SliderFilter" >
                <div >



                  <Paper
                    className={classes.drawer}

                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                  >


                    <Divider />
                    <List className="fil-main-list">
                      <div style={{ margin: "5px" }}>
                        <Typography className="fil-list-items">Price</Typography>
                        <Grid container spacing={12} style={{ paddingLeft: "5px" }}   >
                          <Grid item xs={4} >
                            <TextField
                              onChange={(e) => { this.setState({ numOne: e.target.value }) }}
                              onKeyPress={(e) => { this.txtFieldChange(e) }}
                              name="numOne"
                              className="price-txt"
                              id="num1"
                              value={this.state.numOne}
                              margin="normal"
                              variant="outlined"
                            />
                          </Grid>&nbsp;
             <Grid item xs={4}>
                            <TextField
                              onChange={(e) => { this.setState({ numTwo: e.target.value }) }}
                              onKeyPress={(e) => { this.txtFieldChange(e) }}
                              name="numTwo"
                              className="price-txt"
                              id="num2"
                              value={this.state.numTwo}
                              margin="normal"
                              variant="outlined"
                            />
                          </Grid>&nbsp;
            <Grid item xs={3}>
                            <Button variant="contained" className={`price-btn ${classes.colorMainBackground}`} onClick={() => this.onCurrencyChange()}>Go</Button>
                          </Grid>
                        </Grid>
                      </div>
                      {/* filter */}

                      {/* {console.log(filter)} */}


                      <div>
                        {

                          <>
                            {

                              filter.map((row, i) => {

                                return (
                                  <>
                                    <ListItem key={row} className=""
                                      onClick={() => this.selectItem(row)}>
                                      <ListItemText
                                      >
                                        <Typography className="fil-list-items" variant='h4' component="h4"
                                        >{row}
                                        </Typography>
                                      </ListItemText>
                                      {row === selected ? <ExpandLess className="fil-drawer-arrow" /> :
                                        
                                        <ExpandMore className="fil-drawer-arrow" />}
                                    </ListItem>
                                    <>
                                      {(selected === row &&
                                        subFilter[row] !== undefined) &&

                                        <>
                                          {
                                            subFilter[row].filter((row12, i) =>
                                              (i < (this.state[`li_${row}`] ? this.state[`li_${row}`] : 4))).map(row12 => {
                                                return (<div>

                                                  <ListItem key={row12}  >   {/* button */}
                                                  <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
            checked={this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ? this.state.checked[row.replace(/\s/g, "")][row12] : false}
            onChange={(e) => this.handleChange(row12, this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ? !this.state.checked[row.replace(/\s/g, "")][row12] : true, e)}
            className="fil-submenu-icons"
            value="checked"
            color="primary"
            name={row.replace(/\s/g, "")}
            />
          }
          label={<Typography variant=""
          className={`fil-submenu-list ${classes.colorMain}`}>{row12}
        </Typography>}
        />
        </FormGroup>



                                                  </ListItem>
                                                </div>);
                                              }

                                              )

                                          }

                                          {
                                            (subFilter[row].length) - 4 !== 0 && (subFilter[row].length) - 4 > 0  &&
                                            
                                            <>
                                              {this.state[`li_${row}`] === undefined || this.state[`li_${row}`] === 4 ?

                                                <div onClick={() => this.setState({ [`li_${row}`]: subFilter[row].length })}
                                                  className="fil-submenu-icons"

                                                >
                                                  <p style={{ fontSize: '14px', paddingLeft: '16px', paddingRight: '16px', color: 'rgba(241, 72, 128, 1)', cursor: 'pointer' }}>
                                                    +&nbsp;{(subFilter[row].length) - 4} More
                                           </p>
                                                </div>
                                                :
                                                <div className="fil-submenu-icons" onClick={() => this.setState({ [`li_${row}`]: 4 })}>
                                                  <p style={{ fontSize: '14px', paddingLeft: '16px', paddingRight: '16px', color: 'rgba(241, 72, 128, 1)', cursor: 'pointer' }}>Show Less</p>
                                                </div>}
                                            </>
                                          }


                                        </>


                                      }

                                    </>
                                  </>

                                )

                              }

                              )
                            }
                          </>
                        }
                      </div>
                      {/* filter Ends */}
                    </List>
                  </Paper>
                </div>
              </Slide>
            </div>

          </Hidden>
          {
            this.state.productDisplay &&
            <div

              className={check ? classes.productCardscheck : classes.productCardsuncheck}

            >
              <ProductLayout data={this.props.datas}  style={{backgroundColor:'whitesmoke'}}/>

            </div>}
        </div>


        <Hidden mdUp>
          <div style={{ top: '60px', position: 'absolute', backgroundColor: 'white', width: '100%' }}>
            <div style={{ height: "23px", padding: "9px", borderBottom: "1px solid #e3e3e3", display: openMobile ? 'none' : 'block', position: 'sticky', top: '0px' }}
              className={`${classes.colorMain}`}
            >
              <button onClick={this.handleDrawerCloseMobile} style={{ background: 'none', border: 'none', fontWeight: '600', color: 'rgba(58, 69, 120, 1)', padding: '6px 8px' }}>
                <i className={`fa fa-times ${classes.colorMain}`} ></i>&nbsp;
                 Filter</button>
              <Button style={{ float: "right", border: '1px solid #ececec', lineHeight: "15px" }} className={`${classes.colorMain}`}> <b >Clear All</b></Button>

            </div>

            <Grid container xs={12} className="p" style={{ overflow: 'scroll', height: '100%', display: openMobile ? 'none' : 'block' }}>
              <Grid container item xs={12} >
                <Grid item xs={6} style={{ backgroundColor: "#F2F2F2", overflow: 'scroll', height: '73vh' }}>
                  <List className="mbl-filter-list">
                    {filter.map(row => (
                      <ListItem key={row} className="mbl-filter-list"
                        onClick={() => this.filterValue(row)}
                      >
                        <ListItemText
                          className='filter-mbl-font filter-mbl-fonts'
                        >
                          {row}

                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                  {/* {console.info('data-filter', subFilter, this.state.filtercheck)} */}
                </Grid>
                {
                  this.state.filtercheck !== '' &&
                  <Grid item xs={6} style={{ overflow: 'scroll', height: '73vh' }}>
                    {subFilter[this.state.filtercheck].map(row => {

                      return (

                        <ListItem key={row} style={{ paddingLeft: "0px", paddingRight: "0px", width: "100%" }}>
                          <Checkbox
                            value="checked"
                            color="primary"
                            checked={this.state.checked[this.state.filtercheck.replace(/\s/g, "")][row] !== undefined ? this.state.checked[this.state.filtercheck.replace(/\s/g, "")][row] : false}
                          
                            onChange={(e) => this.handleChange(row, this.state.checked[this.state.filtercheck.replace(/\s/g, "")][row] !== undefined ? !this.state.checked[this.state.filtercheck.replace(/\s/g, "")][row] : true, e)}
                            // onChange={(e) => this.handleChange(row12, this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ? !this.state.checked[row.replace(/\s/g, "")][row12] : true, e)}
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name={this.state.filtercheck.replace(/\s/g, "")}
                            onClick={this.handleDrawerCloseMobile} />
                          <ListItemText>
                            <Typography variant=""
                              className={`filter-mbl-font fnts ${classes.colorMain}`}>
                              <div onClick={this.handleDrawerCloseMobile}> {row}</div> 
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      )
                    })}
                  </Grid>
                }
              </Grid>

              {/* <Grid container item xs={12} className="filterButtonMobile" justify="flex-end">
                <Paper>
                    <Button variant="contained" style={{backgroundColor:'rgba(58, 69, 120, 1)', color:'white'}}>
                      Apply
                    </Button>
                </Paper>    
              </Grid> */}
              {/* <AppBar color="primary" className="filter-fixed header" >
                <Grid container item xs={12} justify="flex-end" alignItems="center" style={{ padding: '2%' }}>
                  <Grid item xs={6}>

                    <Button variant='contained' className={`filterBtnMobile`}>
                      Apply
                    </Button>
                  </Grid>
                </Grid>

              </AppBar> */}
            </Grid>



            <AppBar color="primary" className="filter-fixed header" style={{ display: !openMobile ? 'none' : 'block' }}>
              <Container>
                <Container>
                  <Toolbar  >
                    <div onClick={this.handleDrawerOpenMobile}>
                      <Typography variant=""
                        className={`filter-mbl-font ${classes.colorMain}`}><i className='filter-icon' class="fa fa-filter"

                        ></i> &nbsp;
                        Filter
                    </Typography>
                    </div>

                    <div style={{ flexGrow: "2" }} />

                    <IconButton edge="end" color="inherit" onClick={() => this.setState({ CardRadio: !this.state.CardRadio, productDisplay: !this.state.productDisplay })} >
                      <Typography variant=""
                        className={`filter-mbl-font ${classes.colorMain}`}><i className='filter-icon' class="fa fa-sort"></i>&nbsp;
                        Sort
                    </Typography>
                    </IconButton> 



                  </Toolbar>
                </Container>
              </Container>
            </AppBar>


          </div>
          {this.state.CardRadio ?
            <div style={{ position: 'fixed', bottom: '42px', }}>
              <CardRadioButton cardWidth="cardSortSmallScreen" data={sortOptions} onChange={this.handleChangesort} values={this.props.sort}/>
            </div>
            :
            ''
          }
        </Hidden>


      </>
    );
  }
}



Component.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  filterdatas: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft)
// (props => {
//   const { mapped } = useDummyRequest(filterParams);
//   if (Object.keys(mapped).length === 0) return ''
//   return < PersistentDrawerLeft {...props} data={mapped} />
// });
