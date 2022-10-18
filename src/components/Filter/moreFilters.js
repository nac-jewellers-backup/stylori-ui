import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid, FormControlLabel, FormGroup } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 3),
    width: "calc(100% - 200px)",
    height: "calc(100vh - 200px)",
    overflowY: "auto",
    "& b": {
      color: `${theme.palette.secondary.main} !important`,
      fontSize: "18px",
    },
  },
  checkboxlabel: {
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
  },
  checkboxgrid: {
    visibility: "hidden",
    "&.MuiIconButton-colorSecondary": {
      padding: "4px !important",
    },
    "& span": {
      "& svg": {
        fill: `${theme.palette.secondary.main} !important`,
      },
    },
  },
  tickIcon: {
    fill: `#06AA9E !important`,
    "& svg": {
      fill: `#06AA9E !important`,
    },
  },
  ticks: {
    fill: `#06AA9E !important`,
    "& svg": {
      fill: `#06AA9E !important`,
    },
  },
  closeIcon: {
    position: "fixed",
    fontSize: "32px",
    color: "#606161",
    top:110,
    right: 115,
    cursor: "pointer",
  },
}));

export default function MoreFilters(props) {
  const classes = useStyles();
  const result = props?.filter.filter((val)=>{
    return val !== "price" &&
    val !== "Product Type" &&
    val !== "Style" &&
    val !== "Availability" &&
    val !== "No of Stones" &&
    val !== "Metal Purity" &&
    val !== "Finish" &&
    val !== "Material"
  });


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={() => {
          props.handleClose();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Grid container className={classes.paper}> 
            <Grid container item xs={6}>
              <div
                className={classes.closeIcon}
                onClick={() => {
                  props.handleClose();
                }}
              >
                &#10005;
              </div>
              {result.slice(0,2)?.map((val, i) => {
                if (
                  i >= 0
                ) {
                  return (
                    <Grid item xs={6} style={{ marginBottom: "3%" }}>
                      <div
                        style={{ marginBottom: "10px", paddingLeft: "20px" }}
                      >
                        <span style={{ color: "#6D6E71", fontWeight: "bold" }}>
                          {val}
                        </span>
                      </div>
                      <FormGroup row>
                        {props.subFilter[val].map((valsub) => {
                          if (val && val !== "price") {
                            return (
                              <Grid
                                item
                                xs={12}
                                className={classes.checkboxlabel}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      className={classes.checkboxgrid}
                                      checked={
                                        props.checked[val.replace(/\s/g, "")] &&
                                        props.checked[val.replace(/\s/g, "")][
                                          valsub
                                        ] !== undefined
                                          ? props.checked[
                                              val.replace(/\s/g, "")
                                            ] &&
                                            props.checked[
                                              val.replace(/\s/g, "")
                                            ][valsub]
                                          : false
                                      }
                                      onChange={(e) => {
                                        props.handleClose();
                                        props.onchoosetype(
                                          valsub,
                                          props.checked[
                                            val && val.replace(/\s/g, "")
                                          ][valsub] !== undefined
                                            ? !props.checked[
                                                val && val.replace(/\s/g, "")
                                              ][valsub]
                                            : true,
                                          e,
                                          null,
                                          undefined,
                                          props.state,
                                          val ? val.replace(/\s/g, "") : ""
                                        );
                                      }}
                                      name={val.replace(/\s/g, "")}
                                      color={"secondary"}
                                    />
                                  }
                                  style={{ color: "#6D6E71" }}
                                  label={valsub}
                                />
                                <span
                                  className={classes.tickIcon}
                                  style={{
                                    color: "#2F348B",
                                    fontSize: "12px",
                                    fill: "#06AA9E !important",
                                  }}
                                >
                                  {props.checked[val.replace(/\s/g, "")] &&
                                  props.checked[val.replace(/\s/g, "")][
                                    valsub
                                  ] !== undefined ? (
                                    props.checked[val.replace(/\s/g, "")] &&
                                    props.checked[val.replace(/\s/g, "")][
                                      valsub
                                    ] ? (
                                      <CheckIcon
                                        className={classes.ticks}
                                        style={{ fill: "#06AA9E !important" }}
                                      />
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    false
                                  )}
                                </span>
                              </Grid>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </FormGroup>
                    </Grid>
                  );
                }
                return 0;
              })}
              
            </Grid>
            <Grid container item xs={6}>
            {result.slice(2)?.map((val, i) => {
                if (
                  i >= 0
                ) {
                  return (
                    <Grid item xs={4} style={{ marginBottom: "3%" }}>
                      <div
                        style={{ marginBottom: "10px", paddingLeft: "20px" }}
                      >
                        <span style={{ color: "#6D6E71", fontWeight: "bold" }}>
                          {val}
                        </span>
                      </div>
                      <FormGroup row>
                        {props.subFilter[val].map((valsub) => {
                          if (val && val !== "price") {
                            return (
                              <Grid
                                item
                                xs={12}
                                className={classes.checkboxlabel}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      className={classes.checkboxgrid}
                                      checked={
                                        props.checked[val.replace(/\s/g, "")] &&
                                        props.checked[val.replace(/\s/g, "")][
                                          valsub
                                        ] !== undefined
                                          ? props.checked[
                                              val.replace(/\s/g, "")
                                            ] &&
                                            props.checked[
                                              val.replace(/\s/g, "")
                                            ][valsub]
                                          : false
                                      }
                                      onChange={(e) => {
                                        props.handleClose();
                                        props.onchoosetype(
                                          valsub,
                                          props.checked[
                                            val && val.replace(/\s/g, "")
                                          ][valsub] !== undefined
                                            ? !props.checked[
                                                val && val.replace(/\s/g, "")
                                              ][valsub]
                                            : true,
                                          e,
                                          null,
                                          undefined,
                                          props.state,
                                          val ? val.replace(/\s/g, "") : ""
                                        );
                                      }}
                                      name={val.replace(/\s/g, "")}
                                      color={"secondary"}
                                    />
                                  }
                                  style={{ color: "#6D6E71" }}
                                  label={valsub}
                                />
                                <span
                                  className={classes.tickIcon}
                                  style={{
                                    color: "#2F348B",
                                    fontSize: "12px",
                                    fill: "#06AA9E !important",
                                  }}
                                >
                                  {props.checked[val.replace(/\s/g, "")] &&
                                  props.checked[val.replace(/\s/g, "")][
                                    valsub
                                  ] !== undefined ? (
                                    props.checked[val.replace(/\s/g, "")] &&
                                    props.checked[val.replace(/\s/g, "")][
                                      valsub
                                    ] ? (
                                      <CheckIcon
                                        className={classes.ticks}
                                        style={{ fill: "#06AA9E !important" }}
                                      />
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    false
                                  )}
                                </span>
                              </Grid>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </FormGroup>
                    </Grid>
                  );
                }
                return 0;
              })}
            </Grid>        
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
