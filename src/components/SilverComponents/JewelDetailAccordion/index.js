import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useTheme } from "@material-ui/core";

const Accordion = withStyles((theme) => ({
  root: {
    border: "0px",
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
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
      fontSize: 16,
      fill: `${theme.palette.secondary.light} !important`
    },
  },
  content: {
    color: theme.palette.text.secondary,
    "&$expanded": {
      margin: "12px 0",
    },
    "& .MuiTypography-root": {
      fontFamily: `'Playfair Display', serif !important`,
      fontWeight: 600,
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 2.5, 0),
  },
}))(MuiAccordionDetails);

export default function JewelDetailAccordion({ title, children, ...props }) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Accordion
      square
      expanded={expanded}
      onChange={() => setExpanded((prevExpandState) => !prevExpandState)}
    >
      <AccordionSummary
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{display:"block"}}>{children? children : ""}</AccordionDetails>
    </Accordion>
  );
}
