import React from "react";
import { Grid, Container, Chip } from "@material-ui/core";
import HeaderHoverMenuItem from "../SilverComponents/HoverNavBarListing/HeaderHoverMenuItem";
import { filterParams } from "../../mappers";
import { useDummyRequest } from "../../hooks";
import { styles } from "./topFilterStyles";
import MorefiltersOpen from "./moreFilters";
import { FilterOptionsContext } from "context";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

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
    sortOpen: null,
  });
  const { mapped } = useDummyRequest(filterParams);
  const { setSort, FilterOptionsCtx } =
    React.useContext(FilterOptionsContext);

  // const submenuDetails = (data, target) => {
  //   setState({
  //     ...state,
  //     subMenuTarget: target,
  //     subTitleData: data,
  //     submenuOpen: true,
  //   });
  // };
  const { sortOptions } = mapped;

  const classes = styles();
  const handleMoreFilters = () => {
    setState({ ...state, morefiltersOpen: !state.morefiltersOpen });
  };
  // const handleExpandClick = () => {
  //   setState({ ...state, expanded: !state.expanded });
  // };
  const handleChange = (event) => {
    if (FilterOptionsCtx.offset > 0) FilterOptionsCtx.setOffset(0);
    setSort({ values: event.target.value });
    setState({ ...state, expanded: false });
    window.scrollTo(0, 0);
  };
  return Object.keys(mapped).length === 0 ? (
    <div>loading...</div>
  ) : (
    <div className={classes.filtersHeaderTop} id="topfilter">
      <Container style={{ marginTop: "45px" }}>
        <Grid container item xs={12}>
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
                  <Grid
                    container
                    item
                    xs={12}
                    className={classes.spacingfilterdiv}
                  >
                    <Grid item xs={6} className={classes.filtersLabel}>
                      <p>
                        {"Price"} (<i class="fa">&#xf156;</i>)
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex" }}
                    >
                      {state.listHoverItem === "price" ? (
                        <ArrowDropUpIcon color="primary" />
                      ) : (
                        <ArrowDropDownIcon color="primary" />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                {props?.filter?.map((listName, i) => {
                  if (
                    i < 9 &&
                    listName !== "Material" &&
                    listName !== "Theme" &&
                    listName !== "Occasion" && 
                    listName !== "Style" &&
                    listName !== "Gender" && 
                    listName !== "Metal Purity"
                  )
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
                      
                        <Grid
                          container
                          item
                          xs={12}
                          className={classes.spacingfilterdiv}
                        >
                          {console.log(listName.url,"listName.url")}
                          <Grid item xs={6} className={classes.filtersLabel}>
                            <a href={listName.url}>
                              {listName === "Collection"
                                ? <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STYLE</p>
                                : listName}
                            </a>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            style={{
                              display: "flex",
                              justifyContent: "flex-end"
                            }}
                          >
                            {state.listHoverItem === listName ? (
                              <ArrowDropUpIcon color="primary" />
                            ) : (
                              <ArrowDropDownIcon color="primary" />
                            )}
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
                  style={{ minWidth: "50px" }}
                  onClick={() => {
                    handleMoreFilters();
                  }}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    className={classes.spacingfilterdiv}
                  >
                    <Grid item xs={6}>
                      More Filters
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      }}
                          >
                            {state.Menuopen ? (
                              <ArrowDropUpIcon color="primary" />
                            ) : (
                              <ArrowDropDownIcon color="primary" />
                            )}
                          </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {state.Menuopen && props.subFilter[state.listHoverItem] ? (
                <HeaderHoverMenuItem
                  tabdata={props.subFilter}
                  listHoverItem={props.subFilter[state.listHoverItem]}
                  filters={true}
                  opened={state.Menuopen}
                  targetopened={state.targetopen}
                  filtercheck={state.listHoverItem}
                  checked={props.checked}
                  chips= {props.chips}
                  onchoosetype={props.onchangefunc}
                  state={props.state}
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
          <Grid
            container
            item
            xs={3}
            onMouseLeave={() => {
              setState({ ...state, expanded: false, targetopen: null });
            }}
          >
            <Grid
              container
              item
              xs={12}
              justify="flex-end"
              style={{ paddingBottom: 20 }}
            >
              <Grid
                container
                item
                xs={6}
                className={`${classes.headerNavbarList1} ${classes.menuListCursorSort}`}
                onMouseOver={(e) => {
                  setState({
                    ...state,
                    targetopen: e.currentTarget,
                    expanded: true,
                  });
                }}
              >
                <Grid
                  container
                  item
                  xs={12}
                  className={classes.spacingfilterdiv}
                >
                  <Grid container item xs={12} justify="space-between">
                    <Grid item xs={6} style={{ margin: "auto" }}>
                      Sort by
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {state.expanded ? (
                        <ArrowDropUpIcon color="primary" />
                      ) : (
                        <ArrowDropDownIcon color="primary" />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {state.expanded ? (
              <HeaderHoverMenuItem
                tabdata={sortOptions}
                listHoverItem={sortOptions}
                sort={true}
                opened={state.expanded}
                targetopened={state.targetopen}
                values={FilterOptionsCtx.sort}
                onchoosetype={handleChange}
                onMouseLeave={() => {
                  setState({ ...state, expanded: false, targetopen: null });
                }}
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>

        <MorefiltersOpen
          open={state.morefiltersOpen}
          state={props.state}
          onpricechange={props.onpricechange}
          filter={props?.filter}
          onchoosetype={props.onchangefunc}
          checked={props.checked}
          subFilter={props.subFilter}
          handleClose={handleMoreFilters}
        />
        <Grid container item xs={12} style={{ margin: "0px 17px" }}>
          <>
            {props?.chips.length > 1 ? (
              <Chip
                size="small"
                label={"Clear All Filters"}
                style={{
                  padding: "14px 14px",
                  marginRight: 14,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #777878",
                  color: "#06AA9E",
                  borderRadius: "0px",
                  textTransform: "uppercase",

                  fontFamily: "notoSerif-regular",
                  cursor: "pointer",
                }}
                deleteIcon={false}
                onClick={() => {
                  props.history.push("/silver-jewellery");
                  window.location.reload();
                }}
              />
            ) : (
              ""
            )}
          </>
          
          {props?.chips.length > 0 ? (
            props?.chips.map((data) => {
              return data.label === "Silver" ? null : (
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
                  onDelete={() => props.click(data.label)}
                  deleteIcon={
                    data.label ? (
                      <i
                        className="search-choice-close"
                        class="fa fa-times"
                      ></i>
                    ) : (
                      ""
                    )
                  }
                  color="secondary"
                />
              );
            })
          ) : (
            <div>No filters applied</div>
          )}
        </Grid>
      </Container>
    </div>
  );
};
