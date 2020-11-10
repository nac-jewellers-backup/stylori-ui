import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Slide, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem,
  Grid, TextField, ListItemText, Button, Checkbox, Paper, Hidden, Container, Chip
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
import { FilterOptionsContext,GlobalContext } from 'context'
import { NetworkContext } from 'context/NetworkContext';
import { PRODUCTLIST, conditions, seoUrlResult } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
import {TopFilters} from './topFilters'
import ProductLayoutSilver from '../ProductCard/ProductLayoutSilver'
import { TempTest } from './TempTest';
const PersistentDrawerLeft = (props) => {
  const { setSort, setloadingfilters, setOffset, setPriceMax, setPriceMin, FilterOptionsCtx, setdelete_fil } = React.useContext(FilterOptionsContext);
  
  const loc = window.location.search
  const { NetworkCtx } = React.useContext(NetworkContext);
  const {Globalctx} = React.useContext(GlobalContext)
  
  return <Component setSort={setSort} setOffset={setOffset} offset={FilterOptionsCtx.offset} setFilters={FilterOptionsCtx.setFilters} setloadingfilters={setloadingfilters} setPriceMax={setPriceMax} setPriceMin={setPriceMin} loadingfilters={FilterOptionsCtx.loadingfilters} sort={FilterOptionsCtx.sort}
    uri={NetworkCtx.graphqlUrl} globalcontext={Globalctx} setdelete_fil={setdelete_fil}
    {...props} />
}

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.state = {
      open: this.props.open,
      openMobile: true,
      CardRadio: false,
      checked: {
        Offers: {}, Availability: {}, ProductType: {}, Style: {}, Material: {}, Theme: {}, Collection: {}, MetalColor: {}, MetalPurity: {}, Occasion: {},
        NoOfStones: {}, Gender: {}, StoneColor: {}, StoneShape: {}, category: {}
      },
      checkedArrayObj: {
        Offers: {}, Availability: {}, ProductType: {}, Style: {}, Material: {}, Theme: {}, Collection: {}, MetalColor: {}, MetalPurity: {}, Occasion: {},
        NoOfStones: {}, Gender: {}, StoneColor: {}, StoneShape: {}, category: {}
      },
      selected: [],
      filtercheck: '',
      productDisplay: true,
      check: true,
      numOne: 0,
      numTwo: 0,
      showMore: 4,
      Price_button_click: false,
      chipData: [],
      errorPriceMessage:false
    };

  }
  componentDidMount() {
    var { checked, chipData, numOne, numTwo, selected } = this.state
if(this.props.data && this.props.data.length > 0 && this.props.data[0] && this.props.data[0].subFilter['Price Range'])
   {
    var price_min = Number(this.props.data[0].subFilter['Price Range'].min);
    var price_max = Number(this.props.data[0].subFilter['Price Range'].max);
    var _price_min = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(price_min));
    var _price_max = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(price_max));

    // checked['pricemax'] = _price_max
    // checked['pricemin'] = _price_min
    this.setState(checked)
    this.setState({ numOne: _price_min, numTwo: _price_max })
   }


//  ****STARTS****  setting state search parameters ....

if (window.location.search) {
  let price_one;
  let price_two;
  let splitSearchParamers = window.location.search.split("&");
  if (splitSearchParamers.length > 0) {
    // if (splitSearchParamers.length > 2) {
      splitSearchParamers.map((val) => {
        
        let equalSplit = val.split("=");
        if (splitSearchParamers.length > 2) {
          if (equalSplit[0] === "startprice") {
            price_one = Number(equalSplit[1])
            numOne = Number(equalSplit[1])
            
          }
          if (equalSplit[0] === "endprice") {
            price_two = Number(equalSplit[1])
            numTwo=Number(equalSplit[1])
          }
        }
          else{
            if (equalSplit[0] === "?startprice") {
              price_one = Number(equalSplit[1])
              numOne = Number(equalSplit[1])
              
            }
            if (equalSplit[0] === "endprice") {
              price_two = Number(equalSplit[1])
              numTwo=Number(equalSplit[1])
            } 
          }
        
        
      });
      
  // if(numOne !== price_one && numTwo !== price_two){
    const price_min = Number(price_one);
    const price_max = Number(price_two);
    const _price_min = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(price_min));
    const _price_max = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(price_max));
    this.setState({numOne:_price_min, numTwo:_price_max})
  // }
    // }
  
  }
  
}

//    ****ENDS**** setting state search parameters ....

    // This is used for checking the check boxes if we copy and pasted the url to new tab or new window
    // if (window.location.search) {

    //   let urlSearchparams = window.location.search;

    //   let urlSearchparamsDecode = decodeURI(urlSearchparams)

    //   let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')

    //   let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')

    //   let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val => { return val.split('=') })
    //   let mapUrlParamsSplitEqual = urlSplitparamsEqual();
    //   this.handleChange(() => { }, true, () => { }, mapUrlParamsSplitEqual)

    // }
    // This is used for checking the check boxes if we copy and pasted the url to new tab or new window 
    // *****Ends*****
    var paramsfilter;
    var abcd;
    const filters_checked = () => {
      const { checked } = this.state
      if (window.location.pathname.split('/')[1] !== 'jewellery') {
        function status(response) {

          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
          } else {
            return Promise.reject(new Error(response.statusText))
          }
        }

        function json(response) {
          return response.json()
        }
        var a = {}
        let pathnameSplit = window.location.pathname.split('/')
        const splitHiphen = () => {
          if (pathnameSplit[1].indexOf('-')) {
            return pathnameSplit[1].split('-')
          }
        }

        var conditionfiltersSeo = { seofilter: { seoUrl: { in: splitHiphen() } } }
        //  alert(JSON.stringify(this.state.checked))
        fetch(this.props.uri, {

          method: 'post',
          // body: {query:seoUrlResult,variables:splitHiphen()}
          // body: JSON.stringify({query:seoUrlResult}),

          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: seoUrlResult,
            variables: { ...conditionfiltersSeo },
          })
        })
          .then(status)
          .then(json)
          .then(async function (data) {
            // alert(data)
            // var {checked} = this.state
            //    data.data.allSeoUrlPriorities.nodes.map(val => {
            //     alert(JSON.stringify(data))
            //     let attrName = val.attributeName.replace(/\s/g, '')
            //     let attrVal = val.attributeValue
            //     checked[attrName] = {[attrVal]:true}
            //     data.allSeoUrlPriorities.nodes.map(val =>{return val})
            //     this.setState({checked},()=>{alert(JSON.stringify(checked))})
            //     return abcd = a

            //     // this.handleChange(()=>{}, true, ()=>{}, {}, paramsfilter)

            // })

            paramsfilter = data && data.data && data.data.allSeoUrlPriorities && data.data.allSeoUrlPriorities.nodes && data.data.allSeoUrlPriorities.nodes.map(val => {
              var attrName = val.attributeName.replace(/\s/g, '')
              var attrVal = val.attributeValue
              if (attrName === "Category") {
                if (attrVal === "goldcoins") {
                  a['ProductType'] = { 'Gold Coins': true }
                  a['Material'] = { 'Gold': true }
                  a['MetalColor'] = { 'Yellow': true }
                }
              }
              a[attrName] = { [attrVal]: true }
              // checked[attrName] = a
              // alert(JSON.stringify(attrName))
              return a
              // return val
            })
            // this.setState(checked)

            Object.entries(paramsfilter[0]).map(val => {
              var keys = val[0]
              var values = val[1]
              checked[keys] = values
              if (keys !== "Category") {

                var a = values && Object.keys(values)
                if (keys === "ProductType") {
                  selected.push("Product Type", keys)
                } if (keys === "MetalPurity") {
                  selected.push("Metal Purity", keys)
                } if (keys === "MetalColor") {
                  selected.push("Metal Color", keys)
                } if (keys === "NoOfStones") {
                  selected.push("No Of Stones", keys)
                } if (keys === "StoneColor") {
                  selected.push("Stone Color", keys)
                } if (keys === "StoneShape") {
                  selected.push("Stone Shape", keys)
                } if (keys !== "ProductType" && keys !== "MetalPurity" && keys !== "MetalColor" && keys !== "NoOfStones" && keys !== "StoneColor" && keys !== "StoneShape") {
                  selected.push(keys)
                }
                chipData.push({ label: a[0], title: keys });
              }
            })

            //prakash inga paaru
            // data && data.data && data.data.allSeoUrlPriorities && data.data.allSeoUrlPriorities.nodes && data.data.allSeoUrlPriorities.nodes.map(val => {
            //       var attrName = val.attributeName
            //       selected.push(attrName)
            //     })
            // this.setState(selected)
            // this.setState(checked)
            this.setState(chipData, selected, checked)
          }).catch(function (error) {
          });
      }

    }
    filters_checked()
    if (paramsfilter && paramsfilter.length > 0) {

      this.handleChange(() => { }, true, () => { }, {}, paramsfilter)

    }

  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.checked !== prevState.checked) {
      // this.myRef.scrollTop()
      window.scrollTo(0, this.myRef.scrollTop)
    }
    if (this.props.data[0].subFilter['Price Range'] !== prevProps.data[0].subFilter['Price Range']) {
      var numberOne = this.props.data[0].subFilter['Price Range'][0] ? this.props.data[0].subFilter['Price Range'][0].min : 0;
      var numberTwo = this.props.data[0].subFilter['Price Range'][0] ? this.props.data[0].subFilter['Price Range'][0].max : 0;
      var numOne = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(numberOne));
      var numTwo = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(numberTwo));
      this.state.Price_button_click === false && this.setState({ numOne: numOne, numTwo: numTwo })
      // if( this.props.data[0].subFilter['Price Range'].length > 0 && this.props.data[0].subFilter['Price Range'][0] !== undefined){ 
      //   this.props.setFilters({pricemax:numberTwo, pricemin:numberOne})}  
      
    }


  }

  delete_val_chips = (value) => Object.entries(this.state.checked).map(val => {
    const { checked } = this.state;

    var obj = {};
    var mm;
    var bz;
    var valx; var valx2;
    if (val !== undefined && val !== null) {
      const ss = val ? val[1] : ""
      valx = ss
      Object.values(valx).map(val1 => {
        var n = valx && Object.keys(valx)[0].length > 0
        const s1s = val1 ? val1[0] : ""
        if (val1 !== undefined && val1 !== null && n) {
          valx2 = s1s
          mm = valx ? Object.keys(valx)[0] : ""
          if (value === mm) {
            bz = mm
            checked[val[0]] = { [mm]: false }
            this.setState(checked)
          }
          // alert(JSON.stringify(checked))
          return false
        }
      })
    }
    return bz
  })
  clearSortIfFiltersIsEmpty = () => {
    var showSortFilter = false
    
    if (window.location.search) {
      Object.keys(this.state.checked).map((fk) => {
        const filter = this.state.checked[fk];
        const fv = Object.keys(filter);
        if(fk !== "Category" && fk !== "category" && fk !== "filters"){
          if (fv.length > 0) {
            if(filter[fv[0]])
            {
              showSortFilter = true
              return showSortFilter
            }
            }
        }
        
      });
      let loc = window.location.pathname.split('?')[0]
      if (!showSortFilter) {this.props.setSort('');this.props.history.push(loc)} 
    }

  };
  handleChange = (value, BoolName, e, title, TargetName, topfilterstate, selectedfiltertop) => {
    // window.scrollTo(0,2)
    debugger
    let mystate = this.state
    let { chipData } =this.state ;
    let checked = { ...this.state.checked }
    var queries = [{}]
    let pathnameSplit = window.location.pathname.split('/')

    // if (Object.entries(this.state.category).length === 0 && this.state.category.constructor === Object) {
    //   const splitHiphen = () => {
    //     if (pathnameSplit[1].indexOf('-')) {
    //       return pathnameSplit[1].split('-')
    //     }
    //   }
    //   var _category_capital_letter = splitHiphen()[0].charAt(0).toUpperCase() + splitHiphen()[0].slice(1)
    //   
    //   var _category_obj = {}
    //   _category_obj[_category_capital_letter] = true
    //   checked['category'] = _category_obj
    //   this.setState(checked)
    // }
    

    if (TargetName === undefined) {
      this.clearSortIfFiltersIsEmpty()
      if (Object.keys(mystate.checked.category).length === 0 && mystate.checked.category.constructor === Object) {

        var _replaceCategory = JSON.parse(sessionStorage.getItem('category'))
        checked["category"] = _replaceCategory
        this.setState(checked)
        this.forceUpdate()
      }
      this.props.setloadingfilters(true)
      let checkedvalue = {};
      checkedvalue[value] = BoolName
      
      checked[e && e.target.name ? e.target.name : selectedfiltertop] = checkedvalue
      this.setState({
        checked
      }, () => this.props.setFilters(checked))
    }
    else {
      
      let arr1 = [];
      let paramsMapUrlSetState = () => TargetName.map(val => {
        var nameFilter = val[0]
        var keyNameFilter = val[1]
        let checkedvalue = {};
        checkedvalue[keyNameFilter] = true
        checked[nameFilter] = checkedvalue
        // arr.push({  label: nameFilter, title: title });
        // chipData = arr;
        this.setState({
          // chipData,
          checked
        }, () => this.props.setFilters(checked))
      }
      )
      paramsMapUrlSetState()
    }
    let arr = [];
    let checkTitle = true;
    chipData.map(val => {
      if (val.title === title) {
        checkTitle = false
      }
    })
    chipData.map(val => {
      if (val.label === value) {
        checkTitle = false
      }
    })
    if (BoolName === true) {
      // chipData.push({ key: chipData[chipData.length - 1].key, label: value });
      if (checkTitle) {
        chipData.push({ label: value, title: title });
      } else {
        arr = chipData.filter(val => val.title !== title)
        arr.push({ label: value, title: title });
        chipData = arr;
      }
    } else {
      arr = chipData.filter(val => val.label !== value);
      chipData = arr;
    };
    this.setState({
      chipData
    })
    // , () => this.props.setFilters(checked)
    // alert(JSON.stringify(this.state.checked))
  }

  handleDelete = (value) => {
    
    this.handlebye()
    let { chipData, checked } = this.state
    Object.entries(checked).map(val => {
      if (val && val[0] === "Category") {
        if (val && val[1] && val[1].goldcoins === true) {
          if (value === "Gold Coins") {
            return false
          }
          if (value === "Gold") {
            return false
          }
          if (value === "Yellow") {
            return false
          }
          let arr = [], arr1 = [];
          arr = chipData.filter(val => val.label !== value);
          if (checked) {
            arr1 = this.delete_val_chips(value).filter(val => {
              var dlt; 
              if (val !== undefined && val !== null) {
                dlt = Object.values(val) === -1
              } 
              return dlt;
            })
            chipData = arr1;
          }
          chipData = arr;
          this.setState({
            chipData,
            checked
          })
          this.forceUpdate()
          this.props.setFilters(checked)
          return false
        }else{
          let arr = [], arr1 = [];
          arr = chipData.filter(val => val.label !== value);
          if (checked) {
            arr1 = this.delete_val_chips(value).filter(val => {
              var dlt; 
              if (val !== undefined && val !== null) {
                dlt = Object.values(val) === -1
              }
              return dlt;
            })
            chipData = arr1;
          }
          chipData = arr;
          this.setState({
            chipData,
            checked
          })
          this.forceUpdate()
          this.props.setFilters(checked)
        }
      }
    })


 

    // var bb = {}
    // bb["delete_fil"] = "12345"
    // this.props && this.props.setdelete_fil && this.props.setdelete_fil(bb)

    // alert(JSON.stringify(data))
    // this.setState(state => {
    //   const chipData = [...state.chipData];
    //   const chipToDelete = chipData.indexOf(data);
    //   chipData.splice(chipToDelete, 1);
    //   return { chipData };
    // });

  };
  handlebye = () => {
  }
  check_goldCoins = (values_) => {
    
    const Category = this.state.checked
    var valus;
    Object.entries(Category).map(val => {
      if (val && val[0] === "Category") {
        if (val && val[1] && val[1].goldcoins === true) {
          if (values_ === "Gold Coins") {
            return valus = true
          }
          if (values_ === "Gold") {
            return valus = true
          }
          if (values_ === "Yellow") {
            return valus = true
          }

        }
      }
    })
    return valus
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
  handleClearAllData = () => {
    this.setState({ filtercheck: "" });
    return window.location.href = "/jewellery"
  }
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  selectItem = (name) => {
    var arr1;
    let { selected } = this.state;
    var map = selected.map(val => { if (val !== undefined && val !== null) { return val } })
    if (map.indexOf(name) > -1) {
      arr1 = selected.filter(val => {
        if (val !== undefined && val !== null) {
          if (val !== name) {
            return val;
          }
        }
      })
      selected = arr1;
      this.setState({ selected })
    } else {
      // var same =map.indexOf(name)
      selected.push(name)
      this.setState({ selected })
    }
  }
  filterValue = (filtercheck) => {
    // if (filtercheck === this.state.filtercheck) {
    //   this.setState({ filtercheck: '' })
    // } else {
    this.setState({ filtercheck })
    // }

  }

  handleChangeDrawer = () => {

    this.setState({ check: !this.state.check });
    this.setState({ open: !this.state.open });
  };


  onCurrencyChange_click = (e, silverPrice) => {
    
    const { checked } = this.state
    
    var _price_min;
    var _price_max;
    if(silverPrice){
      this.setState(checked)
      this.setState({ numOne: silverPrice.min, numTwo: silverPrice.max }, () => { this.props.setPriceMax(silverPrice.max); this.props.setPriceMin(silverPrice.min) })
    }
    else{
      this.setState({ Price_button_click: true })
      if (isNaN(Number((document.getElementById('num1').value).charAt(0)))) {
        _price_min = Number(((document.getElementById('num1').value).substr(1)).replace(/,/g, ''));
      }
      else {
  
        _price_min = Number((document.getElementById('num1').value).replace(/,/g, ''));
      }
      if (isNaN(Number((document.getElementById('num2').value).charAt(0)))) {
        _price_max = Number(((document.getElementById('num2').value).substr(1)).replace(/,/g, ''));
      }
      else {
  
        _price_max = Number((document.getElementById('num2').value).replace(/,/g, ''));
      }
      var price_min = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(_price_min));
      var price_max = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(_price_max));
      
      var pricemin = price_min.indexOf(',') > -1 ? price_min.indexOf(" ") > -1 ? Number(price_min.substr(2).replace(/\,/g, ''))
      
      :
      Number(price_min.substr(1).replace(/\,/g, ''))
      :
      price_min.indexOf(" ") > -1 ?
      Number(price_min.substr(2))
      :
      Number(price_min.substr(1))
      var pricemax = price_max.indexOf(',') > -1 ? price_max.indexOf(" ") > -1 ? Number(price_max.substr(2).replace(/\,/g, '')) 
      :
      Number(price_max.substr(1).replace(/\,/g, ''))
      :
      price_max.indexOf(" ") > -1 ?
      Number(price_max.substr(2))
      :
      Number(price_max.substr(1))
      // alert("came in ")
      // 
      // alert(pricemin)
      // alert(pricemax)
      if(pricemin > pricemax){
        this.setState({errorPriceMessage:true})
      }
      else if(pricemin === 0 && pricemax === 0){
        return false
      }
      else{
        this.setState(checked)
        this.setState({ numOne: price_min, numTwo: price_max }, () => { this.props.setPriceMax(pricemax); this.props.setPriceMin(pricemin) })
      }
      
    }
  }
  txtFieldChange(e) {
    if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();

    // this.setState({[e.target.name]:e.target.value})
  }
  handleChangesort = (event) => {

    if (this.props.offset > 0) this.props.setOffset(0)
    this.props.setSort({ values: event.target.value })

    this.setState({ CardRadio: false })

    this.setState({ productDisplay: true });
  }
  // chck_res = () => this.state.chipData.map(data => {
  //   
  //   var value;
  //   if (data.label.length > 0 && data.label !== "" && data.label !== undefined) {
  //     value = <>{data.label}</>
  //   }
  //   return value
  // })

  render() {
    const found = window.location.pathname.split(/-/g).find(element => element === "/goldcoins" || element === "goldcoins");
    const { classes, data, loading } = this.props;
    const { filter, subFilter, sortOptions } = this.props.data[0];

    let { selected, check } = this.state;
    const { open, openMobile } = this.state;
    const isTopFilter = this.props.globalcontext.pathName  ? true : false 
    //  const chck_res =  this.state.chipData.map(data => {
    //   return (
    //     data.label
    //   );
    // })
    // alert(JSON.stringify(this.state.selected))
    return (
      <>
   {isTopFilter &&
       <Hidden smDown>
    <TopFilters filter={filter} state={this.state} subFilter={subFilter} onchangefunc={this.handleChange} onpricechange = {this.onCurrencyChange_click} filtercheck={this.state.filtercheck} checked={this.state.checked} chips={this.state.chipData} check={this.state.check} click={this.handleDelete} {...this.props}/>
      </Hidden>
   }    
   {/* <TempTest onchangefunc={this.handleChange}/> */}
  
       {
         !isTopFilter &&
        <Hidden smDown>
          <FilterHeader click={this.handleDelete}
            handleChangeDrawer={this.handleChangeDrawer}
            chips={this.state.chipData} check={this.state.check}
            checked={this.state.checked}
          />{/*  handleDrawerOpen={this.handleDrawerOpen.bind(this)} */}
        </Hidden>
        }
        <div className={classes.root} >
        {
         !isTopFilter &&
          <Hidden smDown >

            {/* <CssBaseline /> */}
            <div >
              <Slide direction="right" in={check} mountOnEnter unmountOnExit style={{ position: 'sticky', top: '119px', maxHeight: '80vh', overflowY: 'scroll' }} className="SliderFilter scrollBarFilter" id="SliderFilter" >
                <div >

                  <Paper
                    className={`${classes.drawer} ${classes.drawerPaper}`}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    // classes={{
                    //   paper: classes.drawerPaper,
                    // }}
                  >
                    <Divider />
                    <List className="fil-main-list">
                      <div style={{ margin: "5px" }}>
                        <Typography style={{ fontSize: "1.0rem !important", paddingTop: "10px !important", fontWeight: 600 }} className="fil-list-items">Price</Typography>
                        <Grid container spacing={12} style={{ paddingLeft: "14px" }}  >
                          <Grid item xs={4} >
                            <TextField
                            error={this.state.errorPriceMessage}
                              onChange={(e) => { this.setState({ numOne: e.target.value, errorPriceMessage:false }) }}
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
                            error={this.state.errorPriceMessage}
                              onChange={(e) => { this.setState({ numTwo: e.target.value, errorPriceMessage:false }) }}
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
                            <Button variant="contained" className={`price-btn ${classes.colorMainBackground}`} onClick={() => this.onCurrencyChange_click()}>Go</Button>
                          </Grid>
                        </Grid>
                        {this.state.errorPriceMessage ? <label className={`${classes.priceError}`}>Max price should be greater</label> : null}
                      </div>
                      {/* filter */}
                      <div>
                        {
                          <>
                            {

filter  && filter.length > 0 ?

filter.map((row, i) => {
  
                                return (
                                  <>
                                    {
                                      subFilter && subFilter[row] && subFilter[row].length > 0 ?
                                        <>{window.location.pathname === "/goldcoins" || found === "goldcoins" || found === "/goldcoins" ? row === "Offers" ? "" : <ListItem key={row}
                                          onClick={() => this.selectItem(row)} className={`${classes.li_item_filter}`}>
                                          <ListItemText
                                          >
                                            <Typography className="fil-list-items" variant='h4' component="h4"
                                            >{row}
                                            </Typography>
                                          </ListItemText>
                                          {(selected.indexOf(row) !== -1) ? <ExpandLess className="fil-drawer-arrow" /> :
                                            <ExpandMore className="fil-drawer-arrow" />}
                                        </ListItem> : <ListItem key={row}
                                          onClick={() => this.selectItem(row)} className={`${classes.li_item_filter}`}>
                                            <ListItemText
                                            >
                                              <Typography className="fil-list-items" variant='h4' component="h4"
                                              >{row}
                                              </Typography>
                                            </ListItemText>
                                            {(selected.indexOf(row) !== -1) ? <ExpandLess className="fil-drawer-arrow" /> :
                                              <ExpandMore className="fil-drawer-arrow" />}
                                          </ListItem>
                                        }
                                        </>
                                        :
                                        <span></span>
                                    }

                                    <>
                                      {/* {JSON.stringify()} */}
                                      {(selected.indexOf(row) !== -1) &&

                                        <>
                                          {

                                            subFilter[row].filter((row12, i) =>
                                              (i < (this.state[`li_${row}`] ? this.state[`li_${row}`] : 4))).map(row12 => {
                                                return (<div style={{ padding: "0 20px" }}>
                                                  <ListItem key={row12}  >   {/* button */}
                                                    <FormGroup row>
                                                      {
                                                        row12.constructor === Object ?

                                                          <FormControlLabel
                                                            control={
                                                              <Checkbox
                                                                disabled={
                                                                  this.check_goldCoins(row12) === true ? true : false}
                                                                checked={this.state.checked[row.replace(/\s/g, "")] && this.state.checked[row.replace(/\s/g, "")][row12.value] !== undefined ?
                                                                  this.state.checked[row.replace(/\s/g, "")] && this.state.checked[row.replace(/\s/g, "")][row12.value] : false}
                                                                onChange={(e) => this.handleChange(row12.value, this.state.checked[row.replace(/\s/g, "")] && this.state.checked[row.replace(/\s/g, "")][row12.value] !== undefined ? !this.state.checked[row.replace(/\s/g, "")][row12.value] : true, e, row)}
                                                                className="fil-submenu-icons"
                                                                value="checked"
                                                                color={"secondary"}

                                                                name={row.replace(/\s/g, "")}
                                                              />
                                                            }
                                                            label={<Typography variant=""
                                                              className={`fil-submenu-list ${classes.colorMain}`}>{row12.title}
                                                            </Typography>}
                                                          />
                                                          :
                                                          <FormControlLabel
                                                            control={
                                                              <Checkbox
                                                                disabled={
                                                                  this.check_goldCoins(row12) === true ? true : false}
                                                                // disabled = {handledisabled}
                                                                checked={this.state.checked[row.replace(/\s/g, "")] && this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ?
                                                                  this.state.checked[row.replace(/\s/g, "")] && this.state.checked[row.replace(/\s/g, "")][row12] : false}
                                                                onChange={(e) => this.handleChange(row12, this.state.checked[row.replace(/\s/g, "")] && this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ? !this.state.checked[row.replace(/\s/g, "")][row12] : true, e, row)}
                                                                className="fil-submenu-icons"
                                                                value="checked"
                                                                color={"secondary"}
                                                                name={row.replace(/\s/g, "")}
                                                              />
                                                            }
                                                            label={<Typography variant=""
                                                              className={`fil-submenu-list ${classes.colorMain}`}>{row12}
                                                            </Typography>}
                                                          />
                                                      }
                                                    </FormGroup>
                                                  </ListItem>
                                                </div>);
                                              }
                                              )

                                          }

{
                                            (subFilter[row].length) - 4 !== 0 && (subFilter[row].length) - 4 > 0 &&

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
                            :
                            <div class ={classes.filtersLoading}>
                              <div id="inTurnFadingTextG"><div id="inTurnFadingTextG_1" class="inTurnFadingTextG">L</div><div id="inTurnFadingTextG_2" class="inTurnFadingTextG">o</div><div id="inTurnFadingTextG_3" class="inTurnFadingTextG">a</div><div id="inTurnFadingTextG_4" class="inTurnFadingTextG">d</div><div id="inTurnFadingTextG_5" class="inTurnFadingTextG">i</div><div id="inTurnFadingTextG_6" class="inTurnFadingTextG">n</div><div id="inTurnFadingTextG_7" class="inTurnFadingTextG">g</div><div id="inTurnFadingTextG_8" class="inTurnFadingTextG"> </div><div id="inTurnFadingTextG_9" class="inTurnFadingTextG">.</div><div id="inTurnFadingTextG_10" class="inTurnFadingTextG">.</div><div id="inTurnFadingTextG_11" class="inTurnFadingTextG">.</div></div>
                              
                            </div>
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
  }
          {
            this.state.productDisplay &&
            <div
              // className="filter_page_layout"
              className={`${check ? `filter_page_layout ${classes.productCardscheck}` : `filter_page_layout ${classes.productCardsuncheck}`} ${isTopFilter ? classes.widthFilter : ''}`}
              
            >
              {isTopFilter ?
              <ProductLayoutSilver wishlist={this.props.wishlist} data={this.props.datas} loading={this.props.loading} style={{ backgroundColor: 'whitesmoke' }} ref={this.myRef} />
              :
              <ProductLayout wishlist={this.props.wishlist} data={this.props.datas} loading={this.props.loading} style={{ backgroundColor: 'whitesmoke' }} ref={this.myRef} />}
            </div>}
        </div>


        <Hidden mdUp>
          <div style={{ top: '60px', position: 'absolute', backgroundColor: 'white', width: '100%' }}>
            <div style={{ padding: "9px", borderBottom: "1px solid #e3e3e3", display: openMobile ? 'none' : 'block', position: 'sticky', top: '0px' }}
              className={`${classes.colorMain}`}
            >
              <button onClick={this.handleDrawerCloseMobile} style={{ background: 'none', border: 'none', fontWeight: '600', color: 'rgba(58, 69, 120, 1)', padding: '6px 8px' }}>
                <i className={`fa fa-times ${classes.colorMain}`} ></i>&nbsp;
                 Filter</button>
              <Button onClick={this.handleClearAllData} style={{ float: "right", border: '1px solid #ececec', lineHeight: "15px", fontSize: '0.775rem' }} className={`${classes.colorMain}`}>Clear All</Button>

            </div>

            <Grid container xs={12} className="p" style={{ overflow: 'scroll', height: '100%', display: openMobile ? 'none' : 'block' }}>
              <Grid container item xs={12} >
                <Grid item xs={6} className={classes.filterMain}>
                  {/* {chck_res ?
                    <ListItemText
                      className='filter-mbl-font filter-mbl-fonts'
                    >
                      llllccc
                        </ListItemText>
                    : ""} */}
                  <List className="mbl-filter-list">
                    {filter && filter.map(row => {
                      return (subFilter && subFilter[row] && subFilter[row].length > 0 ?
                        <>{window.location.pathname === "/goldcoins" || found === "/goldcoins" || found === "goldcoins" ? row === "Offers" ? "" : <ListItem key={row} className={`mbl-filter-list ${isTopFilter ? classes.colorBackgroundListSilver:classes.colorBackgroundList} ${classes.borderBottomList}`}
                          onClick={() => this.filterValue(row)}
                        >
                          <ListItemText
                            className='filter-mbl-font filter-mbl-fonts'
                          >
                            {row && row}

                          </ListItemText>
                        </ListItem>
                          : <ListItem key={row} className={`mbl-filter-list ${isTopFilter ? classes.colorBackgroundListSilver:classes.colorBackgroundList} ${classes.borderBottomList}`}
                            onClick={() => this.filterValue(row)}
                          >
                            <ListItemText
                              className='filter-mbl-font filter-mbl-fonts'
                            >
                              {row && row}

                            </ListItemText>
                          </ListItem>}</>
                        : '')
                    }
                    )}
                  </List>
                </Grid>
                {
                  this.state.filtercheck !== '' &&
                  <Grid item xs={6} style={{ overflow: 'scroll', height: '73vh' }}>
                    {/* <>
                      <div className="header-chips Chip">
                        {this.state.chipData.map(data => {
                          return (
                            <Chip
                              className="header-chips-text"
                              key={data.key}
                              label={data.label}
                              onClick={() => this.handleDelete}
                              avatar={data.label ?
                                <i className="search-choice-close" class="fa fa-times"></i>
                                : ""}
                            />
                          );
                        })}
                      </div>
                    </> */}
                    <>
                      {subFilter[this.state.filtercheck && this.state.filtercheck].map(row => {


                        return (
                          <ListItem key={row} style={{ paddingLeft: "0px", paddingRight: "0px", width: "100%" }}>



                            {this.state.filtercheck && this.state.filtercheck === 'Availability' && row.constructor === Object ?
                              <>
                                <Checkbox
                                  value="checked"
                                  color="primary"
                                  className={`${classes.sublistMobile}`}
                                  checked={this.state.checked && this.state.filtercheck && this.state.filtercheck[this.state.filtercheck] && this.state.filtercheck[this.state.filtercheck.replace(/\s/g, "")][row.value] ? this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row.value] : false}

                                  onChange={(e) => this.handleChange(row.value, this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row.value] !== undefined ? !this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row.value] : true, e)}
                                  // onChange={(e) => this.handleChange(row12, this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ? !this.state.checked[row.replace(/\s/g, "")][row12] : true, e)}
                                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                                  name={this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")}
                                  onClick={this.handleDrawerCloseMobile}
                                />
                                <ListItemText>
                                  <Typography variant=""
                                    className={`filter-mbl-font fnts ${classes.colorMainSecondary}`}>
                                    <div
                                      // onClick={this.handleDrawerCloseMobile}
                                      onClick={(e) => this.handleChange(row.value, this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row.value] !== undefined ? !this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row.value] : true, e)}
                                    > {row.title}</div>
                                  </Typography>
                                </ListItemText>
                              </>
                              :
                              <>
                                <Checkbox
                                  value="checked"
                                  color="primary"
                                  className={`${classes.sublistMobile}`}
                                  checked={this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row] !== undefined ? this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row] : false}

                                  onChange={(e) => this.handleChange(row, this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row] !== undefined ? !this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row] : true, e)}
                                  // onChange={(e) => this.handleChange(row12, this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ? !this.state.checked[row.replace(/\s/g, "")][row12] : true, e)}
                                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                                  name={this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")}
                                  onClick={this.handleDrawerCloseMobile}
                                />
                                <ListItemText>
                                  <Typography variant=""
                                    className={`filter-mbl-font fnts ${classes.colorMainSecondary}`}>
                                    <div
                                      // onClick={this.handleDrawerCloseMobile}
                                      onClick={(e) => this.handleChange(row, this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row] !== undefined ? !this.state.checked[this.state.filtercheck && this.state.filtercheck.replace(/\s/g, "")][row] : true, e)}
                                    > {row}</div>
                                  </Typography>
                                </ListItemText>
                              </>
                            }
                          </ListItem>
                        )

                      })}
                    </>
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
                        className={`filter-mbl-font ${classes.colorMain}`} style={{ fontSize: '1rem' }}><i className='filter-icon' class="fa fa-sort"></i>&nbsp;
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
              <CardRadioButton cardWidth="cardSortSmallScreen" data={sortOptions} onChange={this.handleChangesort} values={this.props.sort} />
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

export default withRouter(withStyles(styles, { withTheme: true })(PersistentDrawerLeft));
// (props => {
//   const { mapped } = useDummyRequest(filterParams);
//   if (Object.keys(mapped).length === 0) return ''
//   return < PersistentDrawerLeft {...props} data={mapped} />
// });