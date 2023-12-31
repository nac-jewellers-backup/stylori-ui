import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./GridList.css";
import { Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "0px 0px 40px 0px ",
  },
  [theme.breakpoints.down("md")]: {
    imagefull: {
      width: "100%",
    },
    imagefulllong: {
      width: "100%",
    },
    firstcolumn: {
      padding: "0px 8px 0px 0px !important",
    },
    silver_first_column: {
      padding: "0px 8px 0px 0px !important",
    },
  },
  [theme.breakpoints.only("sm")]: {
    daisyday: {
      marginTop: "7.5px !important",
      width: "100%",
    },
    img2container: {
      marginTop: "7.5px !important",
    },
  },
  [theme.breakpoints.down("sm")]: {
    firstcolumn: {
      width: "53.12% !important",
      float: "left",
      marginLeft: "2.66% !important",
      padding: "0px !important",
    },
    silver_first_column: {
      width: "50% !important",
      float: "left",
      // marginRight: "2.66% !important",
      padding: "0px !important",
    },
    marginAuto: {
      padding: "0px 0px 0px 0px !important",
      width: "40.31% !important",
      marginLeft: "1.25% !important",
      marginRight: "2.66% !important",
    },
    silver_margin_auto: {
      padding: "0px 6px 0px 0px !important",
      width: "50% !important",
      // marginRight: "1.25% !important",
      // marginLeft: "2.66% !important",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      margin: "0px 0px 20px 0px ",
    },
  },

  gridList: {
    width: "100%",
    height: "auto",
  },
  marginAuto: {
    padding: "0px 0px 0px 6px",
  },
  silver_margin_auto: {
    padding: "0px 6px 0px 0px",
  },
  firstcolumn: {
    padding: "0px 8px 0px 0px",
  },
  silver_first_column: {
    padding: "0px 0px 0px 8px",
  },
  [theme.breakpoints.up("lg")]: {
    gridList: {
      width: " 1170px",
      height: "auto",
    },
    firstcolumnsilver: {
      padding: "0px 8px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    gridList: {
      width: " 500px",
      height: "auto",
    },
  },
  imgsmall: {
    width: " calc(50% - 5px) !important",
  },
  imagefull: {
    width: "100%",
    verticalAlign: "center",
  },
  daisyday: {
    marginTop: 0,
    width: "100%",
  },
  img2container: {
    marginTop: 0,
  },
  silver_image_2_container: {
    marginTop: 0,
  },
  isHoverGrid: {
    height: "100%",
    // padding: "0px 6px 0px 6px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px 0px 6px",
    },
  },
  navlist: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
  },
  side: {
    marginRight: "-7px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "unset",
    },
  },
  sideml: {
    marginRight: "-7px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "unset",
    },
  },
}));
// function FormRow(props) {
//   const classes = useStyles();
//   return (
//     <React.Fragment>
//       <Grid
//         item
//         xs={6}
//         className={`${classes.isHoverGrid} hovereffectSilvertoppicks`}
//         onClick={() => (window.location.href = props.linkone)}
//       >
//         <div className={classes.navlist}>
//           <img
//             alt="...."
//             loading="lazy"
//             src={props.imageOne}
//             style={{ width: "100%", height: "100%" }}
//           />
//         </div>
//         <div className={`${classes.navlist} overlay1`}>
//           <div className={"collectionDataSilverSEOflex"}>
//             <div style={{ margin: "auto" }}>
//               <h2 className="next-price">{"".toUpperCase()}</h2>
//             </div>
//           </div>
//         </div>
//       </Grid>
//       <Grid
//         item
//         xs={6}
//         className={`${classes.isHoverGrid} hovereffectSilvertoppicks`}
//         onClick={() => (window.location.href = props.linktwo)}
//       >
//         <div className={classes.navlist}>
//           <img
//             loading="lazy" alt="...."
//             src={props.imageTwo}
//             style={{ width: "100%", height: "100%" }}
//           />
//         </div>
//         <div className={`${classes.navlist} overlay1`}>
//           <div className={"collectionDataSilverSEOflex"}>
//             <div style={{ margin: "auto" }}>
//               <h2 className="next-price">{"".toUpperCase()}</h2>
//             </div>
//           </div>
//         </div>
//       </Grid>
//     </React.Fragment>
//   );
// }

export default function ImageGridList(props) {
  const tileData = props.GridImage;
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Hidden mdUp>
        {props.isHover ? (
          // <Grid container style={{ paddingTop: 30 }}>
          //   <Grid
          //     container
          //     item
          //     xs={6}
          //     className="hovereffectSilvertoppicks"
          //     style={{ height: "100%" }}
          //   >
          //     <img
          //       alt=""
          //       src="https://assets.stylori.com/product/SNSC4270/1000X1000/SNSC4270-2G.webp?_=1605092387781"
          //       style={{ width: "100%", height: "100%", objectFit: "revert" }}
          //       onClick={() =>
          //         (window.location.href =
          //           "https://www.stylori.com/jewellery/short%20necklace/Charming-Kasu%20Silver%20Necklace?sku_id=1000965")
          //       }
          //     />
          //     <div className="overlay1">
          //       <div className={"collectionDataSilverSEOflex"}>
          //         <div style={{ margin: "auto" }}>
          //           <h2 className="next-price">{"Bracelets".toUpperCase()}</h2>
          //         </div>
          //       </div>
          //     </div>
          //   </Grid>
          //   <Grid container item xs={6} style={{ height: "100%" }}>
          //     <Grid
          //       container
          //       item
          //       xs={12}
          //       style={{ height: "50%", paddingBottom: 4 }}
          //     >
          //       <FormRow
          //         imageOne="https://assets.stylori.com/product/SE3391/1000X1000/SE3391-2S.webp?_=1605887194324"
          //         imageTwo="https://assets.stylori.com/product/SNLC4195/1000X1000/SNLC4195-2D.webp?_=1605093270200"
          //         linkone="https://www.stylori.com/jewellery/earrings/Scintillating-Swan%20Silver%20Ear%20Stud?sku_id=1000118"
          //         linktwo="https://www.stylori.com/jewellery/long%20necklace/Clinking-Dual%20Tone%20Long%20Silver%20Necklace?sku_id=1000890"
          //       />
          //     </Grid>
          //     <Grid
          //       container
          //       item
          //       xs={12}
          //       style={{ height: "50%", paddingTop: 4 }}
          //     >
          //       <FormRow
          //         imageOne="https://assets.stylori.com/product/SBA4093/1000X1000/SBA4093-2G.webp?_=1605093140435"
          //         imageTwo="https://assets.stylori.com/product/SR3976/1000X1000/SR3976-2LS.webp?_=1605093196279"
          //         linkone="https://www.stylori.com/jewellery/bangles/Refined-Red%20and%20Green%20Silver%20Bangle?sku_id=1000838"
          //         linktwo="https://www.stylori.com/jewellery/rings/Outward-Twin%20Finger%20Siver%20Ring?sku_id=1000701"
          //       />
          //     </Grid>
          //   </Grid>
          // </Grid>
          <Grid
            container
            sm={10}
            md={10}
            lg={12}
            xl={12}
            style={{ paddingTop: 30 }}
          >
            <Grid
              container
              item
              className={classes.silver_margin_auto}
              md={6}
              lg={0}
              xl={0}
            >
              <a
                className={classes.imagefull}
                href="https://www.stylori.com/jewellery/short%20necklace/Charming-Kasu%20Silver%20Necklace?sku_id=1000965"
              >
                <img
                loading="lazy" alt="...."
                  className={classes.imagefulllong}
                  src="https://assets.stylori.com/banners/web/SNSC4270-2G.webp"
                />
              </a>
            </Grid>
            <Grid
              item
              className={classes.silver_first_column}
              md={6}
              lg={0}
              xl={0}
            >
              <Grid container>
                <Grid
                  item
                  container
                  style={{ paddingTop: "2px" }}
                  className={classes.silver_image_2_container}
                >
                  <Grid item md={6} sm={6} xs={6} className={classes.imgsmall}>
                    <div style={{ paddingRight: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href="https://www.stylori.com/jewellery/earrings/Scintillating-Swan%20Silver%20Ear%20Stud?sku_id=1000118"
                      >
                        <img
                        loading="lazy" alt="...."
                          className={classes.imagefull}
                          src="https://assets.stylori.com/banners/web/SE3391-2S.webp"
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    <div style={{ paddingLeft: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href="https://www.stylori.com/jewellery/long%20necklace/Clinking-Dual%20Tone%20Long%20Silver%20Necklace?sku_id=1000890"
                      >
                        <img
                        loading="lazy" alt="...."
                          className={classes.imagefull}
                          src="https://assets.stylori.com/banners/web/SNLC4195-2D.webp"
                        />
                      </a>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  style={{ paddingTop: "2px" }}
                  className={classes.silver_image_2_container}
                >
                  <Grid item md={6} sm={6} xs={6} className={classes.imgsmall}>
                    <div style={{ paddingRight: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href="https://www.stylori.com/jewellery/bangles/Refined-Red%20and%20Green%20Silver%20Bangle?sku_id=1000838"
                      >
                        <img
                        loading="lazy" alt="...."
                          className={classes.imagefull}
                          src="https://assets.stylori.com/banners/web/SBA4093-2G.webp"
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    <div style={{ paddingLeft: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href="https://www.stylori.com/jewellery/rings/Outward-Twin%20Finger%20Siver%20Ring?sku_id=1000701"
                      >
                        <img
                        loading="lazy" alt="...."
                          className={classes.imagefull}
                          src="https://assets.stylori.com/banners/web/SR3976-2LS.webp"
                        />
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item className={classes.firstcolumn} md={9} lg={0} xl={0}>
              <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                  <div>
                    <a
                      className={classes.imagefull}
                      href={tileData[0].navigateUrl}
                    >
                      <img
                      loading="lazy" alt="...."
                        className={classes.imagefull}
                        src={tileData[0].img}
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <div>
                    <a
                      className={classes.imagefull}
                      href={tileData[3].navigateUrl}
                    >
                      <img
                      loading="lazy" alt="...."
                        className={classes.daisyday}
                        src={tileData[3].img}
                        style={{ paddingTop: "2px" }}
                      />
                    </a>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  style={{ paddingTop: "2px" }}
                  className={classes.img2container}
                >
                  <Grid item md={6} sm={6} xs={6} className={classes.imgsmall}>
                    <div style={{ paddingRight: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[2].navigateUrl}
                      >
                        <img
                        loading="lazy" alt="...."
                          className={classes.imagefull}
                          src={tileData[2].img}
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    <div style={{ paddingLeft: "3px" }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[1].navigateUrl}
                      >
                        <img
                        loading="lazy" alt="...."
                          className={classes.imagefull}
                          src={tileData[1].img}
                        />
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              className={classes.marginAuto}
              md={3}
              lg={0}
              xl={0}
            >
              <a className={classes.imagefull} href={tileData[4].navigateUrl}>
                <img className={classes.imagefulllong} src={tileData[4].img} loading="lazy" alt="...."/>
              </a>
            </Grid>
          </Grid>
        )}
      </Hidden>
      <Hidden smDown>
        {props.isHover ? (
          // <Grid container justify="center" style={{ paddingTop: 30 }} md={11}>
          //   <Grid
          //     item
          //     xs={6}
          //     lg={6}
          //     style={{ height: "100%" }}
          //     className={classes.side}
          //   >
          //     {/* <Grid container spacing={1} style={{height:500, paddingTop:30}}> */}
          //     <Grid item xs={12} className="hovereffectSilvertoppicks">
          //       <div
          //         style={{
          //           overflow: "hidden",
          //           width: "400px",
          //           height: "400px",
          //         }}
          //       >
          //         <img
          //           alt=""
          //           src="https://assets.stylori.com/product/SNSC4270/1000X1000/SNSC4270-2G.webp?_=1605092387781"
          //           style={{
          //             cursor: "pointer",
          //             // objectFit: "cover",
          //           }}
          //           onClick={() =>
          //             (window.location.href =
          //               "https://www.stylori.com/jewellery/short%20necklace/Charming-Kasu%20Silver%20Necklace?sku_id=1000965")
          //           }
          //         />
          //       </div>
          //       {/* <h2 className="next-price">

          //       </h2> */}
          //       {/* <div className="overlay1">
          //         <div className={"collectionDataSilverSEOflex"}>
          //           <div style={{ margin: "auto" }}>

          //             <div style={{ color: "white" }}>Charming Kasu Silver Necklace</div>
          //             <h6 style={{ color: "white" }}>Rs 13,199</h6>
          //             <div><Button variant="contained" color="secondary" style={{ padding: 10 }} >Add to cart</Button></div>
          //             <div style={{ marginTop: 20 }}><Button variant="contained" color="secondary" style={{ padding: 10 }}>Save</Button></div>
          //           </div>
          //         </div>
          //       </div> */}
          //     </Grid>

          //     {/* </Grid> */}
          //   </Grid>
          //   <Grid item xs={6} lg={6} style={{ height: "100%", padding: "2%" }}>
          //     <Grid container item xs={12}>
          //       <Grid
          //         container
          //         item
          //         xs={12}
          //         style={{ height: "50%", paddingBottom: 25 }}
          //       >
          //         <FormRow
          //           imageOne="https://assets.stylori.com/product/SE3391/1000X1000/SE3391-2S.webp?_=1605092766692"
          //           imageTwo="https://assets.stylori.com/product/SNLC4195/1000X1000/SNLC4195-2D.webp?_=1605093270200"
          //           linkone="https://www.stylori.com/jewellery/earrings/Scintillating-Swan%20Silver%20Ear%20Stud?sku_id=1000118"
          //           linktwo="https://www.stylori.com/jewellery/long%20necklace/Clinking-Dual%20Tone%20Long%20Silver%20Necklace?sku_id=1000890"
          //         />
          //       </Grid>
          //       <Grid
          //         container
          //         item
          //         xs={12}
          //         style={{ height: "50%", paddingTop: 25 }}
          //       >
          //         <FormRow
          //           imageOne="https://assets.stylori.com/product/SBA4093/1000X1000/SBA4093-2G.webp?_=1605093140435"
          //           imageTwo="https://assets.stylori.com/product/SR3976/1000X1000/SR3976-2LS.webp?_=1605093196279"
          //           linkone="https://www.stylori.com/jewellery/bangles/Refined-Red%20and%20Green%20Silver%20Bangle?sku_id=1000838"
          //           linktwo="https://www.stylori.com/jewellery/rings/Outward-Twin%20Finger%20Siver%20Ring?sku_id=1000701"
          //         />
          //       </Grid>
          //     </Grid>
          //   </Grid>
          // </Grid>

          <Grid
            container
            xs={10}
            sm={10}
            style={{ padding: "30px 15px 0px 15px" }}
          >
            <Grid
              container
              item
              className={classes.silver_margin_auto}
              md={6}
              lg={6}
              xl={6}
            >
              <a
                className={classes.imagefull}
                href="https://www.stylori.com/jewellery/short%20necklace/Charming-Kasu%20Silver%20Necklace?sku_id=1000965"
              >
                <img
                  className={classes.imagefull}
                  loading="lazy" alt="...."
                  src="https://assets.stylori.com/product/SNSC4270/1000X1000/SNSC4270-2G.jpg"
                />
              </a>
            </Grid>
            <Grid
              item
              className={classes.silver_first_column}
              md={6}
              lg={6}
              xl={6}
            >
              <Grid container>
                <Grid item md={6} lg={6} xl={6}>
                  <div style={{ padding: "0px 8px 0px 0px " }}>
                    <a
                      className={classes.imagefull}
                      href="https://www.stylori.com/jewellery/earrings/Scintillating-Swan%20Silver%20Ear%20Stud?sku_id=1000118"
                    >
                      <img
                        className={classes.imagefull}
                        loading="lazy" alt="...."
                        src="https://assets.stylori.com/product/SE3391/1000X1000/SE3391-2S.jpg"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <div style={{ padding: "0px 0px 0px 8px " }}>
                    <a
                      className={classes.imagefull}
                      href="https://www.stylori.com/jewellery/long%20necklace/Clinking-Dual%20Tone%20Long%20Silver%20Necklace?sku_id=1000890"
                    >
                      <img
                        className={classes.imagefull}
                        loading="lazy" alt="...."
                        src="https://assets.stylori.com/product/SNLC4195/1000X1000/SNLC4195-2D.jpg"
                        style={{ paddingTop: "2px" }}
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item container style={{ paddingTop: "10px" }}>
                  <Grid item md={6} lg={6} xl={6} className={classes.imgsmall}>
                    <div style={{ padding: "0px 8px 0px 0px " }}>
                      <a
                        className={classes.imagefull}
                        href="https://www.stylori.com/jewellery/bangles/Refined-Red%20and%20Green%20Silver%20Bangle?sku_id=1000838"
                      >
                        <img
                          className={classes.imagefull}
                          loading="lazy" alt="...."
                          src="https://assets.stylori.com/product/SBA4093/1000X1000/SBA4093-2G.jpg"
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item md={6} lg={6} xl={6}>
                    <div style={{ padding: "0px 0px 0px 8px " }}>
                      <a
                        className={classes.imagefull}
                        href="https://www.stylori.com/jewellery/rings/Outward-Twin%20Finger%20Siver%20Ring?sku_id=1000701"
                      >
                        <img
                          className={classes.imagefull}
                          loading="lazy" alt="...."
                          src="https://assets.stylori.com/product/SR3976/1000X1000/SR3976-2LS.jpg"
                        />
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid container style={{ padding: "0px 15px" }}>
            <Grid item className={classes.firstcolumn} md={9} lg={9} xl={9}>
              <Grid container>
                <Grid item md={8} lg={8} xl={8}>
                  <div style={{ padding: "0px 8px 0px 0px " }}>
                    <a
                      className={classes.imagefull}
                      href={tileData[0].navigateUrl}
                    >
                      <img
                        className={classes.imagefull}
                        loading="lazy" alt="...."
                        src={tileData[0].img}
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                  <div style={{ padding: "0px 0px 0px 8px " }}>
                    <a
                      className={classes.imagefull}
                      href={tileData[1].navigateUrl}
                    >
                      <img
                        className={classes.imagefull}
                        src={tileData[1].img}
                        style={{ paddingTop: "2px" }}
                        loading="lazy" alt="...."
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item container style={{ paddingTop: "10px" }}>
                  <Grid item md={4} lg={4} xl={4} className={classes.imgsmall}>
                    <div style={{ padding: "0px 8px 0px 0px " }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[2].navigateUrl}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[2].img}
                          loading="lazy" alt="...."
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item md={8} lg={8} xl={8}>
                    <div style={{ padding: "0px 0px 0px 8px " }}>
                      <a
                        className={classes.imagefull}
                        href={tileData[3].navigateUrl}
                      >
                        <img
                          className={classes.imagefull}
                          src={tileData[3].img}
                          loading="lazy" alt="...."
                        />
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              className={classes.marginAuto}
              md={3}
              lg={3}
              xl={3}
            >
              <a className={classes.imagefull} href={tileData[4].navigateUrl}>
                <img className={classes.imagefull} src={tileData[4].img} loading="lazy" alt="...."/>
              </a>
            </Grid>
          </Grid>
        )}
      </Hidden>
    </Grid>
  );
}
