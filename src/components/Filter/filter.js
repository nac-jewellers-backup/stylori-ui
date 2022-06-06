import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Slide,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  Grid,
  TextField,
  ListItemText,
  Button,
  Checkbox,
  Paper,
  Hidden,
  Container,
  Chip,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import "./filter.css";
import ProductLayout from "../ProductCard/ProductLayout";
import FilterHeader from "./FilterHeader";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CardRadioButton from "../InputComponents/RadioButton/index";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "./styles";
import { FilterOptionsContext, GlobalContext } from "context";
import { NetworkContext } from "context/NetworkContext";
import { seoUrlResult } from "queries/productListing";
import { withRouter } from "react-router-dom";
import { TopFilters } from "./topFilters";
import ProductLayoutSilver from "../ProductCard/ProductLayoutSilver";
import { filtersLabelMapperStylori } from "utils";
import CurrencyConversion from "utils/CurrencyConversion";

const PersistentDrawerLeft = (props) => {
  const {
    setSort,
    setloadingfilters,
    setOffset,
    setPriceMax,
    setPriceMin,
    FilterOptionsCtx,
    setdelete_fil,
  } = React.useContext(FilterOptionsContext);

  const { NetworkCtx } = React.useContext(NetworkContext);
  const { Globalctx } = React.useContext(GlobalContext);

  return (
    <Component
      setSort={setSort}
      setOffset={setOffset}
      offset={FilterOptionsCtx.offset}
      setFilters={FilterOptionsCtx.setFilters}
      setloadingfilters={setloadingfilters}
      setPriceMax={setPriceMax}
      setPriceMin={setPriceMin}
      loadingfilters={FilterOptionsCtx.loadingfilters}
      sort={FilterOptionsCtx.sort}
      uri={NetworkCtx.graphqlUrl}
      globalcontext={Globalctx}
      setdelete_fil={setdelete_fil}
      {...props}
    />
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      open: this.props.open,
      openMobile: true,
      CardRadio: false,
      checked: {
        Offers: {},
        Availability: {},
        ProductType: {},
        Style: {},
        Material: {},
        Theme: {},
        Collection: {},
        MetalColor: {},
        MetalPurity: {},
        Occasion: {},
        NoOfStones: {},
        Gender: {},
        StoneColor: {},
        StoneShape: {},
        category: {},
      },
      checkedArrayObj: {
        Offers: {},
        Availability: {},
        ProductType: {},
        Style: {},
        Material: {},
        Theme: {},
        Collection: {},
        MetalColor: {},
        MetalPurity: {},
        Occasion: {},
        NoOfStones: {},
        Gender: {},
        StoneColor: {},
        StoneShape: {},
        category: {},
      },
      selected: [],
      filtercheck: "",
      productDisplay: true,
      check: true,
      numOne: 0,
      numTwo: 0,
      showMore: 4,
      Price_button_click: false,
      chipData: [],
      errorPriceMessage: false,
    };
  }
  componentDidMount() {
    var { checked, chipData, selected,numOne,numTwo } = this.state;
    if (
      this.props.data &&
      this.props.data.length > 0 &&
      this.props.data[0] &&
      this.props.data[0].subFilter["Price Range"]
    ) {
      var price_min = Number(this.props.data[0].subFilter["Price Range"].min);
      var price_max = Number(this.props.data[0].subFilter["Price Range"].max);
      var _price_min = CurrencyConversion(price_min);
      var _price_max = CurrencyConversion (price_max);

      this.setState(checked);
      this.setState({ numOne: _price_min, numTwo: _price_max });
    }

    //  ****STARTS****  setting state search parameters ....

    if (window.location.search) {
      let price_one;
      let price_two;
      let splitSearchParamers = window.location.search.split("&");
      if (splitSearchParamers.length > 0) {
        splitSearchParamers.map((val) => {
          let equalSplit = val.split("=");
          if (splitSearchParamers.length > 2) {
            if (equalSplit[0] === "startprice") {
              price_one = Number(equalSplit[1]);
              numOne = Number(equalSplit[1]);
            }
            if (equalSplit[0] === "endprice") {
              price_two = Number(equalSplit[1]);
              numTwo = Number(equalSplit[1]);
            }
          } else {
            if (equalSplit[0] === "?startprice") {
              price_one = Number(equalSplit[1]);
              numOne = Number(equalSplit[1]);
            }
            if (equalSplit[0] === "endprice") {
              price_two = Number(equalSplit[1]);
              numTwo = Number(equalSplit[1]);
            }
          }
          return 0;
        });

        const price_min = Number(price_one);
        const price_max = Number(price_two);
        const _price_min = CurrencyConversion(price_min);
        const _price_max = CurrencyConversion(price_max);
        this.setState({ numOne: _price_min, numTwo: _price_max });
      }
    }

    var paramsfilter;

    const filters_checked = () => { 
      const { checked } = this.state;
      if (window.location.pathname.split("/")[1] !== "jewellery") {
        function status(response) {
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
          } else {
            return Promise.reject(new Error(response.statusText));
          }
        }

        function json(response) {
          return response.json();
        }
        var a = {};
        let pathnameSplit = window.location.pathname.split("/");
        const splitHiphen = () => {
          if (pathnameSplit[1].indexOf("-")) {
            return pathnameSplit[1].split("-");
          }
        };

        var conditionfiltersSeo = {
          seofilter: { seoUrl: { in: splitHiphen() } },
        };
        fetch(this.props.uri, {
          method: "post",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: seoUrlResult,
            variables: { ...conditionfiltersSeo },
          }),
        })
          .then(status)
          .then(json)
          .then(async function (data) {
            paramsfilter =
              data &&
              data.data &&
              data.data.allSeoUrlPriorities &&
              data.data.allSeoUrlPriorities.nodes &&
              data.data.allSeoUrlPriorities.nodes.map((val) => {
                var attrName = val.attributeName.replace(/\s/g, "");
                var attrVal = val.attributeValue;
                if (attrName === "Category") {
                  if (attrVal === "goldcoins") {
                    a["ProductType"] = { "Gold Coins": true };
                    a["Material"] = { Gold: true };
                    a["MetalColor"] = { Yellow: true };
                  }
                }
                a[attrName] = { [attrVal]: true };

                return a;
              });

            Object.entries(paramsfilter[0]).map((val) => {
              var keys = val[0];
              var values = val[1];
              checked[keys] = values;
              if (keys !== "Category") {
                var a = values && Object.keys(values);
                if (keys === "ProductType") {
                  selected.push("Product Type", keys);
                }
                if (keys === "MetalPurity") {
                  selected.push("Metal Purity", keys);
                }
                if (keys === "MetalColor") {
                  selected.push("Metal Color", keys);
                }
                if (keys === "NoOfStones") {
                  selected.push("No Of Stones", keys);
                }
                if (keys === "StoneColor") {
                  selected.push("Stone Color", keys);
                }
                if (keys === "StoneShape") {
                  selected.push("Stone Shape", keys);
                }
                if (
                  keys !== "ProductType" &&
                  keys !== "MetalPurity" &&
                  keys !== "MetalColor" &&
                  keys !== "NoOfStones" &&
                  keys !== "StoneColor" &&
                  keys !== "StoneShape"
                ) {
                  selected.push(keys);
                }
                chipData.push({ label: a[0], title: keys });
              }
            });
           
            this.setState(chipData, selected, checked);
          })
          .catch(function (error) {});
      }
    };
    filters_checked();
    if (paramsfilter && paramsfilter.length > 0) {
      this.handleChange(
        () => {},
        true,
        () => {},
        {},
        paramsfilter
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.checked !== prevState.checked) {
      window.scrollTo(0, this.myRef.scrollTop);
    }
    if (
      this.props.data[0].subFilter["Price Range"] !==
      prevProps.data[0].subFilter["Price Range"]
    ) {
      var numberOne = this.props.data[0].subFilter["Price Range"][0]
        ? this.props.data[0].subFilter["Price Range"][0].min
        : 0;
      var numberTwo = this.props.data[0].subFilter["Price Range"][0]
        ? this.props.data[0].subFilter["Price Range"][0].max
        : 0;
      var numOne = CurrencyConversion(numberOne);
      var numTwo = CurrencyConversion(numberTwo);
      this.state.Price_button_click === false &&
        this.setState({ numOne: numOne, numTwo: numTwo });
    }
  }

  delete_val_chips = (value) =>
    Object.entries(this.state.checked).map((val) => {
      const { checked } = this.state;
      // Coded by Legendary Jaya Soorya - Samir🛐🛐🛐
      var mm;
      var bz;
      var valx;
      var valx2;
      if (val !== undefined && val !== null) {
        const ss = val ? val[1] : "";
        valx = ss;
        Object.values(valx).map((val1) => {
          var n = valx && Object.keys(valx)[0].length > 0;
          const s1s = val1 ? val1[0] : "";
          if (val1 !== undefined && val1 !== null && n) {
            valx2 = s1s;
            mm = valx ? Object.keys(valx)[0] : "";
            if (value === mm) {
              bz = mm;
              checked[val[0]] = { [mm]: false };
              this.setState(checked);
            }
            return false;
          }
          return 0;
        });
      }
      return bz;
    });
  clearSortIfFiltersIsEmpty = () => {
    var showSortFilter = false;

    if (window.location.search) {
      Object.keys(this.state.checked).map((fk) => {
        const filter = this?.state?.checked[fk];
        const fv = Object.keys(filter);
        if (fk !== "Category" && fk !== "category" && fk !== "filters") {
          if (fv.length > 0) {
            if (filter[fv[0]]) {
              showSortFilter = true;
              return showSortFilter;
            }
          }
        }
        return 0;
      });
      let loc = window.location.pathname.split("?")[0];
      if (!showSortFilter) {
        this.props.setSort("");
        this.props.history.push(loc);
      }
    }
  };
  handleChange = (
    value,
    BoolName,
    e,
    title,
    TargetName,
    selectedfiltertop
  ) => {
    
    let mystate = this.state;
    let { chipData } = this.state;
    // let { filterData } = this.state;
    let checked = { ...this.state.checked };

    if (TargetName === undefined) {
      this.clearSortIfFiltersIsEmpty();
      if (
        Object.keys(mystate.checked.category).length === 0 &&
        mystate.checked.category.constructor === Object
      ) {
        var _replaceCategory = JSON.parse(sessionStorage.getItem("category"));
        checked["category"] = _replaceCategory;
        this.setState(checked);
        this.forceUpdate();
      }
      this.props.setloadingfilters(true);
      let checkedvalue = {};
      checkedvalue[value] = BoolName;

      checked[e && e.target.name ? e.target.name : title] =
        checkedvalue;

        // this.setState({
        //   filterData : value,
        // })

      this.setState(
        {
          checked,
        },
        () => this.props.setFilters(checked)
      );
    } else {
      let paramsMapUrlSetState = () =>
        TargetName.map((val) => {
          var nameFilter = val[0];
          var keyNameFilter = val[1];
          let checkedvalue = {};
          checkedvalue[keyNameFilter] = true;
          checked[nameFilter] = checkedvalue;

          this.setState(
            {
              checked,
            },
            () => this.props.setFilters(checked)
          );
          return 0;
        });
      paramsMapUrlSetState();
    }
    let arr = [];
    let checkTitle = true;
    chipData.map((val) => {
      if (val.title === title) {
        checkTitle = false;
      }
      return 0;
    });
    chipData.map((val) => {
      if (val.label === value) {
        checkTitle = false;
      }
      return 0;
    });
    if (BoolName === true) {
      if (checkTitle) {
        chipData.push({ label: value, title: title });
      } else {
        arr = chipData?.filter((val) => val.title !== title);
        arr.push({ label: value, title: title });
        chipData = arr;
      }
    } else {
      arr = chipData?.filter((val) => val.label !== value);
      chipData = arr;
    }
    this.setState({
      chipData,
    });
  };

  handleDelete = (value) => {
    this.handlebye();
    let { chipData, checked } = this.state;
    Object.entries(checked).map((val) => {
      if (val && val[0] === "Category") {
        if (val && val[1] && val[1].goldcoins === true) {
          if (value === "Gold Coins") {
            return false;
          }
          if (value === "Gold") {
            return false;
          }
          if (value === "Yellow") {
            return false;
          }
          let arr = [],
            arr1 = [];
          arr = chipData?.filter((val) => val.label !== value);
          if (checked) {
            arr1 = this.delete_val_chips(value)?.filter((val) => {
              var dlt;
              if (val !== undefined && val !== null) {
                dlt = Object.values(val) === -1;
              }
              return dlt;
            });
            chipData = arr1;
          }
          chipData = arr;
          this.setState({
            chipData,
            checked,
          });
          this.forceUpdate();
          this.props.setFilters(checked);
          return false;
        } else {
          let arr = [],
            arr1 = [];
          arr = chipData?.filter((val) => val.label !== value);
          if (checked) {
            arr1 = this.delete_val_chips(value)?.filter((val) => {
              var dlt;
              if (val !== undefined && val !== null) {
                dlt = Object.values(val) === -1;
              }
              return dlt;
            });
            chipData = arr1;
          }
          chipData = arr;
          this.setState({
            chipData,
            checked,
          });
          this.forceUpdate();
          this.props.setFilters(checked);
        }
      }
      return 0;
    });
  };
  handlebye = () => {};
  check_goldCoins = (values_) => {
    const Category = this.state.checked;
    var valus;
    Object.entries(Category).map((val) => {
      if (val && val[0] === "Category") {
        if (val && val[1] && val[1].goldcoins === true) {
          if (values_ === "Gold Coins") {
            return (valus = true);
          }
          if (values_ === "Gold") {
            return (valus = true);
          }
          if (values_ === "Yellow") {
            return (valus = true);
          }
        }
      }
      return 0;
    });
    return valus;
  };
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
    return (window.location.href = "/jewellery");
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  selectItem = (name) => {
    var arr1;
    let { selected } = this.state;
    var map = selected.map((val) => {
      if (val !== undefined && val !== null) {
        return val;
      }
      return 0;
    });
    if (map.indexOf(name) > -1) {
      arr1 = selected?.filter((val) => {
        if (val !== undefined && val !== null) {
          if (val !== name) {
            return val;
          }
        }
        return 0;
      });
      selected = arr1;
      this.setState({ selected });
    } else {
      selected.push(name);
      this.setState({ selected });
    }
  };
  filterValue = (filtercheck) => {
    this.setState({ filtercheck });
  };

  handleChangeDrawer = () => {
    this.setState({ check: !this.state.check });
    this.setState({ open: !this.state.open });
  };

  onCurrencyChange_click = (e, silverPrice) => {
    const { checked } = this.state;

    var _price_min;
    var _price_max;
    if (silverPrice) {
      this.setState(checked);
      this.setState(
        { numOne: silverPrice.min, numTwo: silverPrice.max },
        () => {
          this.props.setPriceMax(silverPrice.max);
          this.props.setPriceMin(silverPrice.min);
        }
      );
    } else {
      this.setState({ Price_button_click: true });
      if (isNaN(Number(document.getElementById("num1").value.charAt(0)))) {
        _price_min = Number(
          document.getElementById("num1").value.substr(1).replace(/,/g, "")
        );
      } else {
        _price_min = Number(
          document.getElementById("num1").value.replace(/,/g, "")
        );
      }
      if (isNaN(Number(document.getElementById("num2").value.charAt(0)))) {
        _price_max = Number(
          document.getElementById("num2").value.substr(1).replace(/,/g, "")
        );
      } else {
        _price_max = Number(
          document.getElementById("num2").value.replace(/,/g, "")
        );
      }
      var price_min = CurrencyConversion( _price_min);
      var price_max = CurrencyConversion(_price_max);

      var pricemin =
        price_min.indexOf(",") > -1
          ? price_min.indexOf(" ") > -1
            ? Number(price_min.substr(2).replace(/\,/g, "")) //eslint-disable-line
            : Number(price_min.substr(1).replace(/\,/g, "")) //eslint-disable-line
          : price_min.indexOf(" ") > -1
          ? Number(price_min.substr(2))
          : Number(price_min.substr(1));
      var pricemax =
        price_max.indexOf(",") > -1
          ? price_max.indexOf(" ") > -1
            ? Number(price_max.substr(2).replace(/\,/g, "")) //eslint-disable-line
            : Number(price_max.substr(1).replace(/\,/g, "")) //eslint-disable-line
          : price_max.indexOf(" ") > -1
          ? Number(price_max.substr(2))
          : Number(price_max.substr(1));

      if (pricemin > pricemax) {
        this.setState({ errorPriceMessage: true });
      } else if (pricemin === 0 && pricemax === 0) {
        return false;
      } else {
        this.setState(checked);
        this.setState({ numOne: price_min, numTwo: price_max }, () => {
          this.props.setPriceMax(pricemax);
          this.props.setPriceMin(pricemin);
        });
      }
    }
  };
  txtFieldChange(e) {
    if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
  }
  handleChangesort = (event) => {
    if (this.props.offset > 0) this.props.setOffset(0);
    this.props.setSort({ values: event.target.value });

    this.setState({ CardRadio: false });

    this.setState({ productDisplay: true });
  };

  render() {
    const found = window.location.pathname
      .split(/-/g)
      .find((element) => element === "/goldcoins" || element === "goldcoins");
    const { classes } = this.props;
    const { filter, subFilter, sortOptions } = this.props.data[0];

    let { selected, check } = this.state;
    const { open, openMobile } = this.state;
    const isTopFilter = this.props.globalcontext.pathName ? true : false;

    return (
      <>
        {isTopFilter && (
          <Hidden smDown>
            <TopFilters
              filter={filter}
              state={this.state}
              subFilter={subFilter}
              onchangefunc={this.handleChange}
              onpricechange={this.onCurrencyChange_click}
              filtercheck={this.state.filtercheck}
              checked={this.state.checked}
              chips={this.state.chipData}
              check={this.state.check}
              click={this.handleDelete}
              {...this.props}
            />
          </Hidden>
        )}

        {!isTopFilter && (
          <Hidden smDown>
            <FilterHeader
              click={this.handleDelete}
              handleChangeDrawer={this.handleChangeDrawer}
              chips={this.state.chipData}
              check={this.state.check}
              checked={this.state.checked}
            />
          </Hidden>
        )}
        <div className={classes.root}>
          {!isTopFilter && (
            <Hidden smDown>
              <div>
                <Slide
                  direction="right"
                  in={check}
                  mountOnEnter
                  unmountOnExit
                  style={{
                    position: "sticky",
                    top: "119px",
                    maxHeight: "80vh",
                    overflowY: "scroll",
                  }}
                  className="SliderFilter scrollBarFilter"
                  id="SliderFilter"
                >
                  <div>
                    <Paper
                      className={`${classes.drawer} ${classes.drawerPaper}`}
                      variant="persistent"
                      anchor="left"
                      open={open}
                    >
                      <Divider />
                      <List className="fil-main-list">
                        <div style={{ margin: "5px" }}>
                          <Typography
                            style={{
                              fontSize: "1.0rem !important",
                              paddingTop: "10px !important",
                              fontWeight: 600,
                            }}
                            className="fil-list-items"
                          >
                            Price
                          </Typography>
                          <Grid
                            container
                            spacing={12}
                            style={{ paddingLeft: "14px" }}
                          >
                            <Grid item xs={4}>
                              <TextField
                                error={this.state.errorPriceMessage}
                                onChange={(e) => {
                                  this.setState({
                                    numOne: e.target.value,
                                    errorPriceMessage: false,
                                  });
                                }}
                                onKeyPress={(e) => {
                                  this.txtFieldChange(e);
                                }}
                                name="numOne"
                                className="price-txt"
                                id="num1"
                                value={this.state.numOne}
                                margin="normal"
                                variant="outlined"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item xs={4}>
                              <TextField
                                error={this.state.errorPriceMessage}
                                onChange={(e) => {
                                  this.setState({
                                    numTwo: e.target.value,
                                    errorPriceMessage: false,
                                  });
                                }}
                                onKeyPress={(e) => {
                                  this.txtFieldChange(e);
                                }}
                                name="numTwo"
                                className="price-txt"
                                id="num2"
                                value={this.state.numTwo}
                                margin="normal"
                                variant="outlined"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item xs={3}>
                              <Button
                                variant="contained"
                                className={`price-btn ${classes.colorMainBackground}`}
                                onClick={() => this.onCurrencyChange_click()}
                              >
                                Go
                              </Button>
                            </Grid>
                          </Grid>
                          {this.state.errorPriceMessage ? (
                            <label className={`${classes.priceError}`}>
                              Max price should be greater
                            </label>
                          ) : null}
                        </div>

                        <div>
                          {
                            <>
                              {filter && filter?.length > 0 ? (
                                filter?.map((row, i) => {
                                  return (
                                    <>
                                      {subFilter &&
                                      subFilter[row] &&
                                      subFilter[row].length > 0 &&
                                      row !== "price" ? (
                                        <>
                                          {window.location.pathname ===
                                            "/goldcoins" ||
                                          found === "goldcoins" ||
                                          found === "/goldcoins" ? (
                                            row === "Offers" ? (
                                              ""
                                            ) : (
                                              <ListItem
                                                key={row}
                                                onClick={() =>
                                                  this.selectItem(row)
                                                }
                                                className={`${classes.li_item_filter}`}
                                              >
                                                <ListItemText>
                                                  <Typography
                                                    className="fil-list-items"
                                                    variant="h4"
                                                    component="h4"
                                                  >
                                                    {row}
                                                  </Typography>
                                                </ListItemText>
                                                {selected.indexOf(row) !==
                                                -1 ? (
                                                  <ExpandLess className="fil-drawer-arrow" />
                                                ) : (
                                                  <ExpandMore className="fil-drawer-arrow" />
                                                )}
                                              </ListItem>
                                            )
                                          ) : (
                                            <ListItem
                                              key={row}
                                              onClick={() =>
                                                this.selectItem(row)
                                              }
                                              className={`${classes.li_item_filter}`}
                                            >
                                              <ListItemText>
                                                <Typography
                                                  className="fil-list-items"
                                                  variant="h4"
                                                  component="h4"
                                                >
                                                  {filtersLabelMapperStylori(
                                                    row
                                                  )}
                                                </Typography>
                                              </ListItemText>
                                              {selected.indexOf(row) !== -1 ? (
                                                <ExpandLess className="fil-drawer-arrow" />
                                              ) : (
                                                <ExpandMore className="fil-drawer-arrow" />
                                              )}
                                            </ListItem>
                                          )}
                                        </>
                                      ) : (
                                        <span></span>
                                      )}

                                      <>
                                        {selected.indexOf(row) !== -1 && (
                                          <>
                                            {subFilter[row]
                                              ?.filter(
                                                (row12, i) =>
                                                  i <
                                                  (this.state[`li_${row}`]
                                                    ? this.state[`li_${row}`]
                                                    : 4)
                                              )
                                              .map((row12) => {
                                                return (
                                                  <div
                                                    style={{
                                                      padding: "0 20px",
                                                    }}
                                                  >
                                                    <ListItem key={row12}>
                                                      {" "}
                                                      {/* button */}
                                                      <FormGroup row>
                                                        {row12.constructor ===
                                                        Object ? (
                                                          <FormControlLabel
                                                            control={
                                                              <Checkbox
                                                                disabled={
                                                                  this.check_goldCoins(
                                                                    row12
                                                                  ) === true
                                                                    ? true
                                                                    : false
                                                                }
                                                                checked={
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ] &&
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ][
                                                                    row12.value
                                                                  ] !==
                                                                    undefined
                                                                    ? this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][
                                                                        row12
                                                                          .value
                                                                      ]
                                                                    : false
                                                                }
                                                                onChange={(e) =>
                                                                  this.handleChange(
                                                                    row12.value,
                                                                    this.state
                                                                      .checked[
                                                                      row.replace(
                                                                        /\s/g,
                                                                        ""
                                                                      )
                                                                    ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][
                                                                        row12
                                                                          .value
                                                                      ] !==
                                                                        undefined
                                                                      ? !this
                                                                          .state
                                                                          .checked[
                                                                          row.replace(
                                                                            /\s/g,
                                                                            ""
                                                                          )
                                                                        ][
                                                                          row12
                                                                            .value
                                                                        ]
                                                                      : true,
                                                                    e,
                                                                    row
                                                                  )
                                                                }
                                                                className="fil-submenu-icons"
                                                                value="checked"
                                                                color={
                                                                  "secondary"
                                                                }
                                                                name={row.replace(
                                                                  /\s/g,
                                                                  ""
                                                                )}
                                                              />
                                                            }
                                                            label={
                                                              <Typography
                                                                variant=""
                                                                className={`fil-submenu-list ${classes.colorMain}`}
                                                              >
                                                                {row12.title}
                                                              </Typography>
                                                            }
                                                          />
                                                        ) : (
                                                          <FormControlLabel
                                                            control={
                                                              <Checkbox
                                                                disabled={
                                                                  this.check_goldCoins(
                                                                    row12
                                                                  ) === true
                                                                    ? true
                                                                    : false
                                                                }
                                                                checked={
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ] &&
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ][row12] !==
                                                                    undefined
                                                                    ? this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][row12]
                                                                    : false
                                                                }
                                                                onChange={(e) =>
                                                                  this.handleChange(
                                                                    row12,
                                                                    this.state
                                                                      .checked[
                                                                      row.replace(
                                                                        /\s/g,
                                                                        ""
                                                                      )
                                                                    ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][
                                                                        row12
                                                                      ] !==
                                                                        undefined
                                                                      ? !this
                                                                          .state
                                                                          .checked[
                                                                          row.replace(
                                                                            /\s/g,
                                                                            ""
                                                                          )
                                                                        ][row12]
                                                                      : true,
                                                                    e,
                                                                    row
                                                                  )
                                                                }
                                                                className="fil-submenu-icons"
                                                                value="checked"
                                                                color={
                                                                  "secondary"
                                                                }
                                                                name={row.replace(
                                                                  /\s/g,
                                                                  ""
                                                                )}
                                                              />
                                                            }
                                                            label={
                                                              <Typography
                                                                variant=""
                                                                className={`fil-submenu-list ${classes.colorMain}`}
                                                              >
                                                                {row12}
                                                              </Typography>
                                                            }
                                                          />
                                                        )}
                                                      </FormGroup>
                                                    </ListItem>
                                                  </div>
                                                );
                                              })}

                                            {subFilter[row].length - 4 !== 0 &&
                                              subFilter[row].length - 4 > 0 && (
                                                <>
                                                  {this.state[`li_${row}`] ===
                                                    undefined ||
                                                  this.state[`li_${row}`] ===
                                                    4 ? (
                                                    <div
                                                      onClick={() =>
                                                        this.setState({
                                                          [`li_${row}`]:
                                                            subFilter[row]
                                                              .length,
                                                        })
                                                      }
                                                      className="fil-submenu-icons"
                                                    >
                                                      <p
                                                        style={{
                                                          fontSize: "14px",
                                                          paddingLeft: "16px",
                                                          paddingRight: "16px",
                                                          color:
                                                            "rgba(241, 72, 128, 1)",
                                                          cursor: "pointer",
                                                        }}
                                                      >
                                                        +&nbsp;
                                                        {subFilter[row].length -
                                                          4}{" "}
                                                        More
                                                      </p>
                                                    </div>
                                                  ) : (
                                                    <div
                                                      className="fil-submenu-icons"
                                                      onClick={() =>
                                                        this.setState({
                                                          [`li_${row}`]: 4,
                                                        })
                                                      }
                                                    >
                                                      <p
                                                        style={{
                                                          fontSize: "14px",
                                                          paddingLeft: "16px",
                                                          paddingRight: "16px",
                                                          color:
                                                            "rgba(241, 72, 128, 1)",
                                                          cursor: "pointer",
                                                        }}
                                                      >
                                                        Show Less
                                                      </p>
                                                    </div>
                                                  )}
                                                </>
                                              )}
                                          </>
                                        )}
                                      </>
                                    </>
                                  );
                                })
                              ) : (
                                <div class={classes.filtersLoading}>
                                  <div id="inTurnFadingTextG">
                                    <div
                                      id="inTurnFadingTextG_1"
                                      class="inTurnFadingTextG"
                                    >
                                      L
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_2"
                                      class="inTurnFadingTextG"
                                    >
                                      o
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_3"
                                      class="inTurnFadingTextG"
                                    >
                                      a
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_4"
                                      class="inTurnFadingTextG"
                                    >
                                      d
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_5"
                                      class="inTurnFadingTextG"
                                    >
                                      i
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_6"
                                      class="inTurnFadingTextG"
                                    >
                                      n
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_7"
                                      class="inTurnFadingTextG"
                                    >
                                      g
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_8"
                                      class="inTurnFadingTextG"
                                    >
                                      {" "}
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_9"
                                      class="inTurnFadingTextG"
                                    >
                                      .
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_10"
                                      class="inTurnFadingTextG"
                                    >
                                      .
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_11"
                                      class="inTurnFadingTextG"
                                    >
                                      .
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          }
                        </div>
                      </List>
                    </Paper>
                  </div>
                </Slide>
              </div>
            </Hidden>
          )}
          {this.state.productDisplay && (
            <div
              className={`${
                check
                  ? `filter_page_layout ${classes.productCardscheck}`
                  : `filter_page_layout ${classes.productCardsuncheck}`
              } ${isTopFilter ? classes.widthFilter : ""}`}
            >
              {isTopFilter ? (
                <ProductLayoutSilver
                  wishlist={this.props.wishlist}
                  data={this.props.datas}
                  loading={this.props.loading}
                  style={{ backgroundColor: "whitesmoke" }}
                  ref={this.myRef}
                />
              ) : (
                <ProductLayout
                  wishlist={this.props.wishlist}
                  data={this.props.datas}
                  loading={this.props.loading}
                  style={{ backgroundColor: "whitesmoke" }}
                  ref={this.myRef}
                />
              )}
            </div>
          )}
        </div>

        <Hidden mdUp>
          <div
            style={{
              top: "60px",
              position: "absolute",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "9px",
                borderBottom: "1px solid #e3e3e3",
                display: openMobile ? "none" : "block",
                position: "sticky",
                top: "0px",
                marginTop: "15px"
              }}
              className={`${classes.colorMain}`}
            >
              <button
                onClick={this.handleDrawerCloseMobile}
                style={{
                  background: "none",
                  border: "none",
                  fontWeight: "600",
                  color: "#747578",
                  padding: "6px 8px",
                }}
              >
                <i className={`fa fa-times ${classes.cross}`}></i>&nbsp;
                Filter
              </button>
              <Button
                onClick={this.handleClearAllData}
                style={{
                  float: "right",
                  border: "none",
                  lineHeight: "15px",
                  fontSize: "0.775rem",
                }}
                className={`${classes.clearall}`}
              >
                Clear All
              </Button>
              {this.state.chipData.length > 0 ? (
                    
                    <div>
                      {this.state.chipData.map((data) =>{
                        return data.label === "Silver" ? null :(
                      <Chip
                      size="small"
                      variant="outlined"
                      label={data.label}
                      style={{
                        padding: "14px",
                        marginRight: 14,
                        borderRadius: "0px",
                        color: "#6D6E71",
                        borderColor: "#777878",
                        fontSize: "14px",
                      }} 
                      onDelete={()=> this.handleDelete(data.label)}
                      deleteIcon={
                        data.label ? (
                          <i
                            className="search-choice-close"
                            class="fa fa-times"
                          ></i>
                        ) : (
                          ""
                        )
                      } />
                    )})}
                    </div>) : (<div>No Filter Applied</div>) }
            </div>
            <Grid
              container
              xs={12}
              className="p"
              style={{
                overflow: "scroll",
                height: "100%",
                display: openMobile ? "none" : "block",
              }}
            >
              <Grid container item xs={12}>
                <Grid item xs={6} className={classes.filterMain}>
                  <List className="mbl-filter-list">
                    {filter &&
                      filter?.map((row) => {
                        return subFilter &&
                          subFilter[row] &&
                          subFilter[row].length > 0 ? (
                          <>
                            {window.location.pathname === "/goldcoins" ||
                            found === "/goldcoins" ||
                            found === "goldcoins" ? (
                              row === "Offers" ? (
                                ""
                              ) : (
                                <ListItem
                                  key={row}
                                  className={`mbl-filter-list ${
                                    isTopFilter
                                      ? classes.colorBackgroundListSilver
                                      : classes.colorBackgroundList
                                  } ${classes.borderBottomList}`}
                                  onClick={() => this.filterValue(row)}
                                >
                                  <ListItemText className="filter-mbl-font filter-mbl-fonts">
                                    {row && row}
                                  </ListItemText>
                                </ListItem>
                              )
                            ) : (
                              <ListItem
                                key={row}
                                className={`mbl-filter-list ${
                                  isTopFilter
                                    ? classes.colorBackgroundListSilver
                                    : classes.colorBackgroundList
                                } ${classes.borderBottomList}`}
                                onClick={() => this.filterValue(row)}
                              >
                                <ListItemText className="filter-mbl-font filter-mbl-fonts">
                                  {row && row}
                                </ListItemText>
                              </ListItem>
                            )}
                          </>
                        ) : (
                          ""
                        );
                      })}
                  </List>
                </Grid>
                {this.state.filtercheck !== "" && (
                  <Grid
                    item
                    xs={6}
                    style={{ overflow: "scroll", height: "73vh",backgroundColor:"#E5E6E7" }}
                  >
                    <>
                    {subFilter[
                        this.state.filtercheck && this.state.filtercheck
                      ] !== undefined
                        ? subFilter[
                            this.state.filtercheck && this.state.filtercheck
                          ].map((row) => {
                            return (
                              <ListItem
                                key={row}
                                style={{
                                  paddingLeft: "0px",
                                  paddingRight: "0px",
                                  width: "100%",
                                }}
                              >
                                {this.state.filtercheck !== "price" ? (
                                  this.state.filtercheck &&
                                  this.state.filtercheck === "Availability" &&
                                  row.constructor === Object ? (
                                    <>
                                      <Checkbox
                                        value="checked"
                                        color="primary"
                                        className={`${classes.sublistMobile}`}
                                        onChange={(e) =>
                                          this.handleChange(
                                            row.value,
                                            this.state.checked[
                                              this.state.filtercheck &&
                                                this.state.filtercheck.replace(
                                                  /\s/g,
                                                  ""
                                                )
                                            ][row.value] !== undefined
                                              ? !this.state.checked[
                                                  this.state.filtercheck &&
                                                    this.state.filtercheck.replace(
                                                      /\s/g,
                                                      ""
                                                    )
                                                ][row.value]
                                              : true,
                                            e
                                          )
                                        }
                                        icon={
                                          <CheckBoxOutlineBlankIcon fontSize="small" />
                                        }
                                        checkedIcon={
                                          <CheckBoxIcon fontSize="small" />
                                        }
                                        name={
                                          this.state.filtercheck &&
                                          this.state.filtercheck.replace(
                                            /\s/g,
                                            ""
                                          ) !== "price"
                                            ? this.state.filtercheck &&
                                              this.state.filtercheck.replace(
                                                /\s/g,
                                                ""
                                              )
                                            : this.state.filtercheck &&
                                              this.state.filtercheck.label.replace(
                                                /\s/g,
                                                ""
                                              )
                                        }
                                        onClick={this.handleDrawerCloseMobile}
                                      />
                                      <ListItemText>
                                        <Typography
                                          variant=""
                                          className={`filter-mbl-font fnts ${classes.colorMainSecondary}`}
                                        >
                                          <div
                                            onClick={(e) =>
                                              this.handleChange(
                                                row.value,
                                                this.state.checked[
                                                  this.state.filtercheck &&
                                                    this.state.filtercheck.replace(
                                                      /\s/g,
                                                      ""
                                                    )
                                                ][row.value] !== undefined
                                                  ? !this.state.checked[
                                                      this.state.filtercheck &&
                                                        this.state.filtercheck.replace(
                                                          /\s/g,
                                                          ""
                                                        )
                                                    ][row.value]
                                                  : true,
                                                e
                                              )
                                            }
                                          >
                                            {row.title}
                                          </div>
                                        </Typography>
                                      </ListItemText>
                                    </>
                                  ) : (
                                    <>
                                      <Checkbox
                                        value="checked"
                                        color="primary"
                                        className={`${classes.sublistMobile}`}
                                        onChange={(e) =>
                                          this.handleChange(
                                            row,
                                            this.state.checked[
                                              this.state.filtercheck &&
                                                this.state.filtercheck.replace(
                                                  /\s/g,
                                                  ""
                                                )
                                            ][row] !== undefined
                                              ? !this.state.checked[
                                                  this.state.filtercheck &&
                                                    this.state.filtercheck.replace(
                                                      /\s/g,
                                                      ""
                                                    )
                                                ][row]
                                              : true,
                                            e
                                          )
                                        }
                                        icon={
                                          <CheckBoxOutlineBlankIcon fontSize="small" />
                                        }
                                        checkedIcon={
                                          <CheckBoxIcon fontSize="small" />
                                        }
                                        name={
                                          this.state.filtercheck &&
                                          this.state.filtercheck.replace(
                                            /\s/g,
                                            ""
                                          ) !== "price"
                                            ? this.state.filtercheck &&
                                              this.state.filtercheck.replace(
                                                /\s/g,
                                                ""
                                              )
                                            : this.state.filtercheck &&
                                              this.state.filtercheck.label.replace(
                                                /\s/g,
                                                ""
                                              )
                                        }
                                        onClick={this.handleDrawerCloseMobile}
                                      />
                                      <ListItemText>
                                        <Typography
                                          variant=""
                                          className={`filter-mbl-font fnts ${classes.colorMainSecondary2}`}
                                        >
                                          <div
                                            onClick={(e) =>
                                              this.handleChange(
                                                row,
                                                this.state.checked[
                                                  this.state.filtercheck &&
                                                    this.state.filtercheck.replace(
                                                      /\s/g,
                                                      ""
                                                    )
                                                ][row] !== undefined
                                                  ? !this.state.checked[
                                                      this.state.filtercheck &&
                                                        this.state.filtercheck.replace(
                                                          /\s/g,
                                                          ""
                                                        )
                                                    ][row]
                                                  : true,
                                                e
                                              )
                                            }
                                          >
                                            {" "}
                                            {row}
                                          </div>
                                        </Typography>
                                      </ListItemText>
                                    </>
                                  )
                                ) : (
                                  ""
                                )}
                              </ListItem>
                            );
                          })
                        : ""}
                    </>
                  </Grid>
                )}
              </Grid>
            </Grid>

            <AppBar
              color="primary"
              className="filter-fixed header"
              style={{ display: !openMobile ? "none" : "block" }}
            >
              <Container>
                <Container>
                  <Toolbar>
                    <div onClick={this.handleDrawerOpenMobile}>
                      <Typography
                        variant=""
                        className={`filter-mbl-font ${classes.colorMain}`}
                      >
                        <i className="filter-icon" class="fa fa-filter"></i>{" "}
                        &nbsp; Filter
                      </Typography>
                    </div>

                    <div style={{ flexGrow: "2" }} />

                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() =>
                        this.setState({
                          CardRadio: !this.state.CardRadio,
                          productDisplay: !this.state.productDisplay,
                        })
                      }
                    >
                      <Typography
                        variant=""
                        className={`filter-mbl-font ${classes.colorMain}`}
                        style={{ fontSize: "1rem" }}
                      >
                        <i className="filter-icon" class="fa fa-sort"></i>&nbsp;
                        Sort
                      </Typography>
                    </IconButton>
                  </Toolbar>
                </Container>
              </Container>
            </AppBar>
          </div>
          {this.state.CardRadio ? (
            <div style={{ position: "fixed", bottom: "42px" }}>
              <CardRadioButton
                cardWidth="cardSortSmallScreen"
                data={sortOptions}
                onChange={this.handleChangesort}
                values={this.props.sort}
              />
            </div>
          ) : (
            ""
          )}
        </Hidden>
      </>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  filterdatas: PropTypes.object.isRequired,
};

export default withRouter(
  withStyles(styles, { withTheme: true })(PersistentDrawerLeft)
);
