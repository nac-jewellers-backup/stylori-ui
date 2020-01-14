import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Breadcrumbs, Link, Container, Grid, Typography } from '@material-ui/core/';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "./breadcrumb.css"
var a = window.location.pathname
var b = a.split("/")
export default function CustomSeparator(props) {
  let path = window.location.pathname;
  let seperators = path === '/cart' || path === "/checkout" || b[1] === "paymentsuccess"?
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAAmJLR0QA/4ePzL8AAABTSURBVFjD7dfBDYAgFARRqkBCi1ouEa1mbMJPIMw08JK9bUpm9lOclGjiAnowQ6YBL1VGRkZGZjKm0IGbvDbCQQOewLkkJCQkNicGXYchJ8hs8z7oGPzdOrNn/QAAAABJRU5ErkJggg=="
      className={props.arrowicon} />
    : <NavigateNextIcon />;
  const tabs = localStorage.getItem("panel")

  // const activetabsclik = (data) => {
  // if (path === '/checkout' || path === '/cart') {
  //   if (data && data.title === "Login/ Register" || data && data.title === "Shopping Bag") {
  //     return (
  //       localStorage.removeItem("panel")
  //     )
  //   }
  // }
  // if (data && data.title === "Address Detail") {
  //   return (
  //     localStorage.setItem("panel", 2)
  //   )
  // }
  // if (data && data.title === "Payment Options") { 
  //   return (
  //     localStorage.setItem("panel", 3)
  //   )
  // }
  // if (data && data.title === "Order Confirmation") {
  //   return (
  //     localStorage.setItem("panel", 4) 
  //   )
  // }

  // }

  const activetabsclik = (data) => {

    if (data && data.title === "Shopping Bag") {
      return window.location.href = "/cart"
    } if (data && data.title === "Login/ Register") {
      return
    }
    if (data && data.title === "Address Detail") {
      return
    }
    if (data && data.title === "Order Confirmation") {
      return
    }
    if (data && data.title === "Payment Options") {
      return
    }
  }

  const activetabs = (data) => {
    if (path === '/checkout' || path === '/cart') {
      if (path === '/checkout') {
        if (!tabs) {
          return (
            data && data.title === "Login/ Register"
          )
        }
      } else {
        if (!tabs) {
          return (
            data && data.title === "Shopping Bag"
          )
        }
      }
      if (tabs == "1") {
        return (
          data && data.title === "Login/ Register"
        )
      }
      if (tabs == "2") {
        return (
          data && data.title === "Address Detail"
        )
      }
      if (tabs == "3") {
        return (
          data && data.title === "Order Confirmation"
        )
      }
      if (tabs == "4") {
        return (
          data && data.title === "Payment Options"
        )
      }

    }
  }


  return (
    <div className={window.location.pathname === "/cart" || b[1] === "paymentsuccess" || window.location.pathname === "/checkout" ? "bread_stic" : ""}>
      <div className={props.className} >
        <Paper elevation={0} className={props.classsubhed}  >
          <Container>
            <Grid container>
              <Grid item lg={7}>
                {window.location.pathname === "/cart" || b[1] === "paymentsuccess" || window.location.pathname === "/checkout" ? <ol class="breadCrumbs">
                  {props.data.map(data => (
                    //  <Link color="inherit" to={{pathname:data.url}} style={{ fontSize: "14px" }} className={props.list}>
                    <li onClick={() => activetabsclik(data)}>
                      <a className={activetabs(data) ? ` isactives ${props.list}` : props.list}>
                        {data.title}</a>
                    </li>
                    //  </Link>
                  ))
                  }
                </ol> : <Breadcrumbs separator={seperators} >
                    {props.data.map(data => (
                      //  <Link color="inherit" to={{pathname:data.url}} style={{ fontSize: "14px" }} className={props.list}>
                      <div onClick={() => activetabsclik(data)}>
                        <li className={activetabs(data) ? ` isactives ${props.list}` : props.list}>
                          {data.title}</li>
                      </div>
                      //  </Link>
                    ))
                    }
                  </Breadcrumbs>}


              </Grid>
              <Grid item lg={5}>
                {props.subdata ?
                  <div>
                    <Grid container >
                      {
                        props.subdata.map(subdata => (
                          <>
                            {/* <div style={{marginTop:"0.5%",marginRight:"5px"}}>
                       <img src={subdata.icon} style={{ width: "25px", height: "25px" }} />
                       </div>
                       <Grid item xs={2} style={{ float: "left", lineHeight: "14px" }}>
                         <span style={{ fontSize: "13px" }}> {subdata.name}</span>
                       </Grid> */}
                            <Grid item xs={1} >
                              <img src={subdata.icon} style={{
                                width: "25px", height: "25px", marginLeft: "20px",
                                marginTop: "7px"
                              }} />
                            </Grid>

                            <Grid item xs={2} >
                              <div style={{ marginTop: "7px", fontSize: "12px", lineHeight: "15px", textAlign: "center" }}>{subdata.name}</div>
                              {/* <div src={subdata.icon} style={{ fontSize: "13px", lineHeight: "15px", textAlign: "center" }}> */}
                              {/* <img src={subdata.icon} style={{ width: "25px", height: "25px" }} /> */}
                              {/* {subdata.name}</div> */}
                            </Grid>
                          </>
                        ))
                      }
                    </Grid>
                  </div>
                  : ""}
              </Grid>
            </Grid>
          </Container>  </Paper>
      </div>
    </div>);
}