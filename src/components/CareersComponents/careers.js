import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px 15px 20px 15px",
  },
  contact_us: {
    fontSize: "21px",
    color: "#ED1165",
    fontWeight: 600,
    marginBottom: "10px",
  },
  Subtitle: {
    color: "#394578",
    fontSize: "17px",
    padding: "14px ",
    cursor: "pointer",
    "&:hover": {
      color: "#ED1165",
    },
    // fontWeight: 600
  },
  Subtitle2: {
    color: "#394578",
    fontSize: "13px",
    fontWeight: 600,
    padding: "14px",
  },
  Subtitle3: {
    color: "#394578",
    fontSize: "17px",
    margin: "30px 0px 10px 0px",
    fontWeight: 600,
  },
  widthFull: {
    width: "100%",
  },
  textFeild: {
    margin: "15px 0px 20px 0px !important",
  },
  smallSizeTypo: {
    color: "#666",
    fontSize: "14px",
    lineHeight: "19px",
  },
  maginBottomOnly: {
    marginBottom: "15px",
  },
  Button: {
    backgroundColor: "#ED1165",
    width: "100%",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ED1165",
    },
  },
  dottedvalue: {
    borderTop: "1px dashed #CCC",
    margin: "40px 0px 10px 0px",
    width: "100%",
  },
  smallSizeTypoblue: {
    fontSize: "13px",
    color: "#394578",
    lineHeight: "20px",
  },
  midconatiner: {
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  },
}));
export default function CustomizedInputs() {
  const [open, setOpen] = React.useState(true);
  
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.widthFull}>
        <Typography variant="h2" className={classes.contact_us}>
          Careers
        </Typography>
        <p class={classes.smallSizeTypo}>
          We’re young, energetic and passionate. Headquartered in Chennai,
          working at Stylori is all about working together as a team and as an
          individual. It is about wanting to create something new, exciting and
          something big.
          <br />
          <br />
          To this end, we are looking for individuals who are dynamic, self
          driven, and committed; who want to be a part of something huge and
          insanely awesome. We are progressing towards a new world order, one
          which requires constant innovation and creativity to stay ahead of the
          game and where time is the most precious commodity. We have seized
          this chance and dived right in. So work in Stylori will present you
          with immense opportunities, crazy challenges and an amazing growth
          potential – all in all a stimulating and rewarding career opportunity.
          <br />
          <br />
          Come join us and be a part of a new revolution in jewellery business!
        </p>
        <Grid container style={{ paddingTop: "20px" }} justify="center">
          <Typography variant="h2" className={classes.contact_us}>
            Open Positions
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Accordion
              style={{
                backgroundColor: "rgb(250, 250, 250)",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body1">Showroom Manager</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography variant="body1">
                    <b>Job Description</b>{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    Years or Experience: 10+
                  </Typography>
                  <Typography>
                    <b>Key Role:</b>&nbsp;Responsible for handling the daily
                    operations and management of the store. To oversee the
                    staffing requirements of the store/counter, deal with
                    customer service issues; and handles promotions of the
                    store.
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body1">
                        Assist and manage the daily operations and activities of
                        the jewellery store, as well as supervising employees
                        with their daily work requirements.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Plans and prepares work schedules for store personnel,
                        assigns employeesto specific duty requirements of the
                        store, and provide performancereview.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        To generate sales/profit and minimizing losses.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Monthly target to be achieved.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Should maximize employee productivity, ensuring
                        consistent compliance with the execution of all the
                        company policy and procedures and maintains an
                        environment that is results- driven .{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        He/she is also responsible for taking inventory,
                        recollecting cash with sales receipts, and maintaining
                        operating records such as records of store transactions.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Plan strategy for increasing the sales.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Manage the Stock in the store.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Driving up sales and profitability by proactively and
                        reactively following up on leads.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Organising in-store events and VIP customer experiences{" "}
                      </Typography>
                    </li>
                  </ul>
                  <br />
                  <Typography>
                    <b>Requirements:</b>&nbsp;
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body1">
                        Excellent communication.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Problem Solving and Negotiations skills.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Must possess Management, Administrative and
                        organizational skills.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Thorough knowledge about jewellery industry.{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Jewellery experience of minimum 8+ years.{" "}
                      </Typography>
                    </li>
                  </ul>
                  <br />
                  <Typography variant="body1">
                    <b>Note :</b> Accommodation will be provided
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    Please email your application to{" "}
                    <a href="mailto:career@nacjewellers.com">
                      career@nacjewellers.com{" "}
                    </a>{" "}
                    For more details, please call +91 89394 66977
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        {/* <Grid container onClick={() => handleChanges()} >
                    <Grid item style={{ backgroundColor: "#fafafa", width: "100%" }}>
                        <Typography variant="h4" className={classes.Subtitle}>
                            Contact us
                    </Typography>
                    </Grid>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Typography variant="h4" className={classes.Subtitle2}>
                            hello@stylori.com
                        </Typography>
                    </Collapse>
                </Grid>
            */}
      </Grid>
    </Grid>
  );
}
