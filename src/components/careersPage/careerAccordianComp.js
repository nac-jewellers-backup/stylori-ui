import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import React from "react";
import parse from "html-react-parser";
import CareersPageStyles from "./style";

const CareersAccordianComp = (props) => {
  console.log("123", props);
  const classes = CareersPageStyles();
  return (
    <Grid container className={classes.root}>
      <Typography variant="h2" className={classes.contact_us}>
        {props?.data?.length > 0 ? "Open Positions" : "No Openings"}
      </Typography>
      {props?.data?.map((val) => {
        return (
          <>
            <Accordion
              style={{
                backgroundColor: "rgb(250, 250, 250)",
                boxShadow: "none",
                marginBottom:"10px"
              }}
              className={classes.accor}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body1">{val?.role}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography className={classes.jobText} variant="body1">
                    {parse(val?.JobDescription)}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </Grid>
  );
};

export default CareersAccordianComp;
