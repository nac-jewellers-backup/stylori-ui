import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles((theme) => ({
  root: {
    background: "transparent",
    border: "0px",
    borderBottom: `1px solid rgba(255, 255, 255, 0.7)`,
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    marginBottom: -1,
    minHeight: 56,
    padding: 0,
    borderBottom: "0px",
    "&$expanded": {
      minHeight: 56,
      borderBottom: "0px",
    },
    "& .MuiSvgIcon-root": {
        fill: `rgba(255, 255, 255, 0.9) !important`
    }
  },
  content: {
    color: theme.palette.text.secondary,
    "&$expanded": {
      margin: "12px 0",
    },
    "& .MuiTypography-root": {
      fontFamily: `'Playfair Display', serif !important`,
      fontSize: 18,
      color: "white",
      opacity: 0.9,
    },
    justifyContent: "center",
  },
  expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 2.5, 0),
  },
}))(MuiAccordionDetails);

export default function FooterAccordion({ title, children, ...props }) {
  return (
    <Accordion square>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
